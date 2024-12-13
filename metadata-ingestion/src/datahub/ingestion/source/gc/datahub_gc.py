import datetime
import logging
import re
import time
from contextlib import contextmanager
from dataclasses import dataclass, field
from functools import partial
from typing import Any, Callable, Dict, Generator, Iterable, List, Optional

from pydantic import Field

from datahub.configuration.common import ConfigModel, OperationalError
from datahub.ingestion.api.common import PipelineContext
from datahub.ingestion.api.decorators import (
    SupportStatus,
    config_class,
    platform_name,
    support_status,
)
from datahub.ingestion.api.source import MetadataWorkUnitProcessor, Source, SourceReport
from datahub.ingestion.api.source_helpers import auto_workunit_reporter
from datahub.ingestion.api.workunit import MetadataWorkUnit
from datahub.ingestion.source.gc.dataprocess_cleanup import (
    DataProcessCleanup,
    DataProcessCleanupConfig,
    DataProcessCleanupReport,
)
from datahub.ingestion.source.gc.execution_request_cleanup import (
    DatahubExecutionRequestCleanup,
    DatahubExecutionRequestCleanupConfig,
    DatahubExecutionRequestCleanupReport,
)
from datahub.ingestion.source.gc.soft_deleted_entity_cleanup import (
    SoftDeletedEntitiesCleanup,
    SoftDeletedEntitiesCleanupConfig,
    SoftDeletedEntitiesReport,
)

logger = logging.getLogger(__name__)


class DataHubGcSourceConfig(ConfigModel):
    dry_run: bool = Field(
        default=False,
        description="Whether to perform a dry run or not. This is only supported for dataprocess cleanup and soft deleted entities cleanup.",
    )

    cleanup_expired_tokens: bool = Field(
        default=True,
        description="Whether to clean up expired tokens or not",
    )
    truncate_indices: bool = Field(
        default=True,
        description="Whether to truncate elasticsearch indices or not which can be safely truncated",
    )
    truncate_index_older_than_days: int = Field(
        default=30,
        description="Indices older than this number of days will be truncated",
    )
    truncation_watch_until: int = Field(
        default=10000,
        description="Wait for truncation of indices until this number of documents are left",
    )
    truncation_sleep_between_seconds: int = Field(
        default=30,
        description="Sleep between truncation monitoring.",
    )

    dataprocess_cleanup: DataProcessCleanupConfig = Field(
        default_factory=DataProcessCleanupConfig,
        description="Configuration for data process cleanup",
    )

    soft_deleted_entities_cleanup: SoftDeletedEntitiesCleanupConfig = Field(
        default_factory=SoftDeletedEntitiesCleanupConfig,
        description="Configuration for soft deleted entities cleanup",
    )

    execution_request_cleanup: DatahubExecutionRequestCleanupConfig = Field(
        default_factory=DatahubExecutionRequestCleanupConfig,
        description="Configuration for execution request cleanup",
    )


@dataclass
class CleanupOperationMetrics:
    success: bool = False
    time_taken_sec: Optional[float] = None
    error_message: Optional[str] = None


@dataclass
class DataHubGcSourceReport(
    DataProcessCleanupReport,
    SoftDeletedEntitiesReport,
    DatahubExecutionRequestCleanupReport,
):
    expired_tokens_revoked: int = 0
    cleanup_metrics: Dict[str, CleanupOperationMetrics] = field(default_factory=dict)

    def record_success(self, operation_name: str, timing: float) -> None:
        self.cleanup_metrics[operation_name] = CleanupOperationMetrics(
            success=True, time_taken_sec=round(timing, 2)
        )

    def record_failure(self, operation_name: str, error: str, timing: float) -> None:
        self.cleanup_metrics[operation_name] = CleanupOperationMetrics(
            success=False, time_taken_sec=round(timing, 2), error_message=error
        )


@dataclass
class CleanupTask:
    condition: bool
    lambda_func: Callable[[], Any]
    name: str
    is_generator: bool = False


@platform_name("DataHubGc")
@config_class(DataHubGcSourceConfig)
@support_status(SupportStatus.TESTING)
class DataHubGcSource(Source):
    """
    DataHubGcSource is responsible for performing garbage collection tasks on DataHub.

    This source performs the following tasks:
    1. Cleans up expired tokens.
    2. Truncates Elasticsearch indices based on configuration.
    3. Cleans up data processes and soft-deleted entities if configured.

    """

    def __init__(self, ctx: PipelineContext, config: DataHubGcSourceConfig):
        self.ctx = ctx
        self.config = config
        self.report = DataHubGcSourceReport()
        self.report.event_not_produced_warn = False
        self.graph = ctx.require_graph("The DataHubGc source")
        self.dataprocess_cleanup = DataProcessCleanup(
            ctx, self.config.dataprocess_cleanup, self.report, self.config.dry_run
        )
        self.soft_deleted_entities_cleanup = SoftDeletedEntitiesCleanup(
            ctx,
            self.config.soft_deleted_entities_cleanup,
            self.report,
            self.config.dry_run,
        )
        self.execution_request_cleanup = DatahubExecutionRequestCleanup(
            config=self.config.execution_request_cleanup,
            graph=self.graph,
            report=self.report,
        )

    @classmethod
    def create(cls, config_dict, ctx):
        config = DataHubGcSourceConfig.parse_obj(config_dict)
        return cls(ctx, config)

    # auto_work_unit_report is overriden to disable a couple of automation like auto status aspect, etc. which is not needed her.
    def get_workunit_processors(self) -> List[Optional[MetadataWorkUnitProcessor]]:
        return [partial(auto_workunit_reporter, self.get_report())]

    @contextmanager
    def _timed_execution(self, operation_name: str) -> Generator[None, None, None]:
        """Context manager to handle timing and error reporting of cleanup operations."""
        start_time = time.time()
        try:
            yield
            elapsed = time.time() - start_time
            self.report.record_success(operation_name, elapsed)
        except Exception as e:
            elapsed = time.time() - start_time
            self.report.record_failure(operation_name, str(e), elapsed)

    def _execute_cleanup(self, task: CleanupTask) -> Generator[Any, None, None]:
        """Execute a cleanup operation if the condition is met."""
        if not task.condition:
            return

        with self._timed_execution(task.name):
            result = task.lambda_func()
            if task.is_generator:
                yield from result

    def get_workunits_internal(
        self,
    ) -> Iterable[MetadataWorkUnit]:
        cleanup_tasks: List[CleanupTask] = [
            CleanupTask(
                condition=self.config.cleanup_expired_tokens,
                lambda_func=self.revoke_expired_tokens,
                name="cleanup expired token",
            ),
            CleanupTask(
                condition=self.config.truncate_indices,
                lambda_func=self.truncate_indices,
                name="truncate indices",
            ),
            CleanupTask(
                condition=self.config.soft_deleted_entities_cleanup.enabled,
                lambda_func=self.soft_deleted_entities_cleanup.cleanup_soft_deleted_entities,
                name="cleanup soft deleted entities",
            ),
            CleanupTask(
                condition=self.config.execution_request_cleanup.enabled,
                lambda_func=self.execution_request_cleanup.run,
                name="execution request cleanup",
            ),
            CleanupTask(
                condition=self.config.dataprocess_cleanup.enabled,
                lambda_func=lambda: self.dataprocess_cleanup.get_workunits_internal(),
                name="cleanup data process",
                is_generator=True,
            ),
        ]
        for task in cleanup_tasks:
            yield from self._execute_cleanup(task)
        yield from []

    def truncate_indices(self) -> None:
        self._truncate_timeseries_helper(aspect_name="operation", entity_type="dataset")
        self._truncate_timeseries_helper(
            aspect_name="datasetusagestatistics", entity_type="dataset"
        )
        self._truncate_timeseries_helper(
            aspect_name="chartUsageStatistics", entity_type="chart"
        )
        self._truncate_timeseries_helper(
            aspect_name="dashboardUsageStatistics", entity_type="dashboard"
        )

    def _truncate_timeseries_helper(self, aspect_name: str, entity_type: str) -> None:
        self._truncate_timeseries_with_watch_optional(
            aspect_name=aspect_name, entity_type=entity_type, watch=False
        )
        self._truncate_timeseries_with_watch_optional(
            aspect_name=aspect_name, entity_type=entity_type, watch=True
        )

    def _truncate_timeseries_with_watch_optional(
        self, aspect_name: str, entity_type: str, watch: bool
    ) -> None:
        graph = self.graph
        assert graph is not None
        if watch:
            to_delete = 1
            while to_delete > 0:
                response = self.truncate_timeseries_util(
                    aspect=aspect_name,
                    dry_run=watch,
                    days_ago=self.config.truncate_index_older_than_days,
                    entity_type=entity_type,
                )
                val = response.get("value", "")
                if "This was a dry run" not in val or "out of" not in val:
                    return
                prev_to_delete = to_delete
                to_delete, total = re.findall(r"\d+", val)[:2]
                to_delete = int(to_delete)
                if to_delete <= 0:
                    logger.info("Nothing to delete.")
                    return
                logger.info(f"to_delete {to_delete} / {total}")
                if to_delete == prev_to_delete:
                    logger.info("Seems to be stuck. Ending the loop.")
                    break
                elif to_delete < self.config.truncation_watch_until:
                    logger.info("Too small truncation. Not going to watch.")
                    return
                else:
                    time.sleep(self.config.truncation_sleep_between_seconds)
        else:
            self.truncate_timeseries_util(
                aspect=aspect_name,
                dry_run=watch,
                days_ago=self.config.truncate_index_older_than_days,
                entity_type=entity_type,
            )

    def x_days_ago_millis(self, days: int) -> int:
        x_days_ago_datetime = datetime.datetime.now(
            datetime.timezone.utc
        ) - datetime.timedelta(days=days)
        return int(x_days_ago_datetime.timestamp() * 1000)

    def truncate_timeseries_util(
        self,
        aspect: str,
        days_ago: int,
        dry_run: bool = True,
        entity_type: str = "dataset",
    ) -> Dict:
        graph = self.graph
        assert graph is not None

        gms_url = graph._gms_server
        if not dry_run:
            logger.info(
                f"Going to truncate timeseries for {aspect} for {gms_url} older than {days_ago} days"
            )
        days_ago_millis = self.x_days_ago_millis(days_ago)
        url = f"{gms_url}/operations?action=truncateTimeseriesAspect"
        try:
            response = graph._post_generic(
                url=url,
                payload_dict={
                    "entityType": entity_type,
                    "aspect": aspect,
                    "endTimeMillis": days_ago_millis,
                    "dryRun": dry_run,
                },
            )
            # logger.info(f"Response: {response}")
        except OperationalError:
            response = graph._post_generic(
                url=url,
                payload_dict={
                    "entityType": entity_type,
                    "aspect": aspect,
                    "endTimeMillis": days_ago_millis,
                    "dryRun": dry_run,
                    "forceDeleteByQuery": True,
                },
            )
            # logger.info(f"Response: {response}")
        return response

    def revoke_expired_tokens(self) -> None:
        total = 1
        while total > 0:
            expired_tokens_res = self._get_expired_tokens()
            list_access_tokens = expired_tokens_res.get("listAccessTokens", {})
            tokens = list_access_tokens.get("tokens", [])
            total = list_access_tokens.get("total", 0)
            for token in tokens:
                self.report.expired_tokens_revoked += 1
                token_id = token["id"]
                self._revoke_token(token_id)

    def _revoke_token(self, token_id: str) -> None:
        assert self.graph is not None
        self.graph.execute_graphql(
            query="""mutation revokeAccessToken($tokenId: String!) {
  revokeAccessToken(tokenId: $tokenId)
}
""",
            variables={"tokenId": token_id},
        )

    def _get_expired_tokens(self) -> dict:
        assert self.graph is not None
        return self.graph.execute_graphql(
            query="""query listAccessTokens($input: ListAccessTokenInput!) {
  listAccessTokens(input: $input) {
    start
    count
    total
    tokens {
      urn
      type
      id
      name
      description
      actorUrn
      ownerUrn
      createdAt
      expiresAt
      __typename
    }
    __typename
  }
}
""",
            variables={
                "input": {
                    "start": 0,
                    "count": 10,
                    "filters": [
                        {
                            "field": "expiresAt",
                            "values": [str(int(time.time() * 1000))],
                            "condition": "LESS_THAN",
                        }
                    ],
                }
            },
        )

    def get_report(self) -> SourceReport:
        return self.report
