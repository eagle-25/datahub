"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6955],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>y});var n=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),g=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=g(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=g(a),c=l,y=p["".concat(u,".").concat(c)]||p[c]||d[c]||i;return a?n.createElement(y,r(r({ref:t},s),{},{components:a})):n.createElement(y,r({ref:t},s))}));function y(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:l,r[1]=o;for(var g=2;g<i;g++)r[g]=a[g];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},38720:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>y,frontMatter:()=>o,metadata:()=>g,toc:()=>p});a(96540);var n=a(15680);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}const o={title:"Airflow Integration",slug:"/lineage/airflow",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/lineage/airflow.md"},u="Airflow Integration",g={unversionedId:"docs/lineage/airflow",id:"docs/lineage/airflow",title:"Airflow Integration",description:"If you're looking to schedule DataHub ingestion using Airflow, see the guide on scheduling ingestion with Airflow.",source:"@site/genDocs/docs/lineage/airflow.md",sourceDirName:"docs/lineage",slug:"/lineage/airflow",permalink:"/docs/lineage/airflow",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/lineage/airflow.md",tags:[],version:"current",frontMatter:{title:"Airflow Integration",slug:"/lineage/airflow",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/lineage/airflow.md"},sidebar:"overviewSidebar",previous:{title:"Sources",permalink:"/docs/metadata-ingestion/source_overview"},next:{title:"Dagster Integration",permalink:"/docs/lineage/dagster"}},s={},p=[{value:"DataHub Plugin v2",id:"datahub-plugin-v2",level:2},{value:"Installation",id:"installation",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Command Line",id:"command-line",level:4},{value:"Airflow UI",id:"airflow-ui",level:4},{value:"Optional Configurations",id:"optional-configurations",level:4},{value:"DataHub Plugin v1",id:"datahub-plugin-v1",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Configuration",id:"configuration-1",level:3},{value:"Disable lazy plugin loading",id:"disable-lazy-plugin-loading",level:4},{value:"Setup a DataHub connection",id:"setup-a-datahub-connection",level:4},{value:"Configure the plugin",id:"configure-the-plugin",level:4},{value:"Validate that the plugin is working",id:"validate-that-the-plugin-is-working",level:4},{value:"Automatic lineage extraction",id:"automatic-lineage-extraction",level:2},{value:"Manual Lineage Annotation",id:"manual-lineage-annotation",level:2},{value:"Using <code>inlets</code> and <code>outlets</code>",id:"using-inlets-and-outlets",level:3},{value:"Custom Operators",id:"custom-operators",level:3},{value:"Custom Extractors",id:"custom-extractors",level:3},{value:"Emit Lineage Directly",id:"emit-lineage-directly",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Missing lineage",id:"missing-lineage",level:3},{value:"Incorrect URLs",id:"incorrect-urls",level:3},{value:"TypeError ... missing 3 required positional arguments",id:"typeerror--missing-3-required-positional-arguments",level:3},{value:"Compatibility",id:"compatibility",level:2},{value:"Additional references",id:"additional-references",level:2}],d={toc:p},c="wrapper";function y(e){var{components:t}=e,a=r(e,["components"]);return(0,n.yg)(c,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){l(e,t,a[t])}))}return e}({},d,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"airflow-integration"},"Airflow Integration"),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"If you're looking to schedule DataHub ingestion using Airflow, see the guide on ",(0,n.yg)("a",{parentName:"p",href:"/docs/metadata-ingestion/schedule_docs/airflow"},"scheduling ingestion with Airflow"),".")),(0,n.yg)("p",null,"The DataHub Airflow plugin supports:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Automatic column-level lineage extraction from various operators e.g. SQL operators (including ",(0,n.yg)("inlineCode",{parentName:"li"},"MySqlOperator"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"PostgresOperator"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"SnowflakeOperator"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"BigQueryInsertJobOperator"),", and more), ",(0,n.yg)("inlineCode",{parentName:"li"},"S3FileTransformOperator"),", and more."),(0,n.yg)("li",{parentName:"ul"},"Airflow DAG and tasks, including properties, ownership, and tags."),(0,n.yg)("li",{parentName:"ul"},"Task run information, including task successes and failures."),(0,n.yg)("li",{parentName:"ul"},"Manual lineage annotations using ",(0,n.yg)("inlineCode",{parentName:"li"},"inlets")," and ",(0,n.yg)("inlineCode",{parentName:"li"},"outlets")," on Airflow operators.")),(0,n.yg)("p",null,"There's two actively supported implementations of the plugin, with different Airflow version support."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Approach"),(0,n.yg)("th",{parentName:"tr",align:null},"Airflow Version"),(0,n.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Plugin v2"),(0,n.yg)("td",{parentName:"tr",align:null},"2.3+"),(0,n.yg)("td",{parentName:"tr",align:null},"Recommended. Requires Python 3.8+")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Plugin v1"),(0,n.yg)("td",{parentName:"tr",align:null},"2.1+"),(0,n.yg)("td",{parentName:"tr",align:null},"No automatic lineage extraction; may not extract lineage if the task fails.")))),(0,n.yg)("p",null,"If you're using Airflow older than 2.1, it's possible to use the v1 plugin with older versions of ",(0,n.yg)("inlineCode",{parentName:"p"},"acryl-datahub-airflow-plugin"),". See the ",(0,n.yg)("a",{parentName:"p",href:"#compatibility"},"compatibility section")," for more details."),(0,n.yg)("h2",{id:"datahub-plugin-v2"},"DataHub Plugin v2"),(0,n.yg)("h3",{id:"installation"},"Installation"),(0,n.yg)("p",null,"The v2 plugin requires Airflow 2.3+ and Python 3.8+. If you don't meet these requirements, use the v1 plugin instead."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub-airflow-plugin[plugin-v2]'\n")),(0,n.yg)("h3",{id:"configuration"},"Configuration"),(0,n.yg)("p",null,"Set up a DataHub connection in Airflow, either via command line or the Airflow UI."),(0,n.yg)("h4",{id:"command-line"},"Command Line"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"airflow connections add  --conn-type 'datahub-rest' 'datahub_rest_default' --conn-host 'http://datahub-gms:8080' --conn-password '<optional datahub auth token>'\n")),(0,n.yg)("p",null,"If you are using hosted Acryl Datahub then please use ",(0,n.yg)("inlineCode",{parentName:"p"},"https://YOUR_PREFIX.acryl.io/gms")," as the ",(0,n.yg)("inlineCode",{parentName:"p"},"--conn-host")," parameter."),(0,n.yg)("h4",{id:"airflow-ui"},"Airflow UI"),(0,n.yg)("p",null,'On the Airflow UI, go to Admin -> Connections and click the "+" symbol to create a new connection. Select "DataHub REST Server" from the dropdown for "Connection Type" and enter the appropriate values.'),(0,n.yg)("p",{align:"center"},(0,n.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/airflow/plugin_connection_setup.png"})),(0,n.yg)("h4",{id:"optional-configurations"},"Optional Configurations"),(0,n.yg)("p",null,"No additional configuration is required to use the plugin. However, there are some optional configuration parameters that can be set in the ",(0,n.yg)("inlineCode",{parentName:"p"},"airflow.cfg")," file."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ini",metastring:'title="airflow.cfg"',title:'"airflow.cfg"'},"[datahub]\n# Optional - additional config here.\nenabled = True  # default\n")),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Default value"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"enabled"),(0,n.yg)("td",{parentName:"tr",align:null},"true"),(0,n.yg)("td",{parentName:"tr",align:null},"If the plugin should be enabled.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"conn_id"),(0,n.yg)("td",{parentName:"tr",align:null},"datahub_rest_default"),(0,n.yg)("td",{parentName:"tr",align:null},"The name of the datahub rest connection.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"cluster"),(0,n.yg)("td",{parentName:"tr",align:null},"prod"),(0,n.yg)("td",{parentName:"tr",align:null},"name of the airflow cluster, this is equivalent to the ",(0,n.yg)("inlineCode",{parentName:"td"},"env")," of the instance")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"capture_ownership_info"),(0,n.yg)("td",{parentName:"tr",align:null},"true"),(0,n.yg)("td",{parentName:"tr",align:null},"Extract DAG ownership.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"capture_tags_info"),(0,n.yg)("td",{parentName:"tr",align:null},"true"),(0,n.yg)("td",{parentName:"tr",align:null},"Extract DAG tags.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"capture_executions"),(0,n.yg)("td",{parentName:"tr",align:null},"true"),(0,n.yg)("td",{parentName:"tr",align:null},'Extract task runs and success/failure statuses. This will show up in DataHub "Runs" tab.')),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"materialize_iolets"),(0,n.yg)("td",{parentName:"tr",align:null},"true"),(0,n.yg)("td",{parentName:"tr",align:null},"Create or un-soft-delete all entities referenced in lineage.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"enable_extractors"),(0,n.yg)("td",{parentName:"tr",align:null},"true"),(0,n.yg)("td",{parentName:"tr",align:null},"Enable automatic lineage extraction.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"disable_openlineage_plugin"),(0,n.yg)("td",{parentName:"tr",align:null},"true"),(0,n.yg)("td",{parentName:"tr",align:null},"Disable the OpenLineage plugin to avoid duplicative processing.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"log_level"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("em",{parentName:"td"},"no change")),(0,n.yg)("td",{parentName:"tr",align:null},"[debug]"," Set the log level for the plugin.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"debug_emitter"),(0,n.yg)("td",{parentName:"tr",align:null},"false"),(0,n.yg)("td",{parentName:"tr",align:null},"[debug]"," If true, the plugin will log the emitted events.")))),(0,n.yg)("h2",{id:"datahub-plugin-v1"},"DataHub Plugin v1"),(0,n.yg)("h3",{id:"installation-1"},"Installation"),(0,n.yg)("p",null,"The v1 plugin requires Airflow 2.1+ and Python 3.8+. If you're on older versions, it's still possible to use an older version of the plugin. See the ",(0,n.yg)("a",{parentName:"p",href:"#compatibility"},"compatibility section")," for more details."),(0,n.yg)("p",null,"If you're using Airflow 2.3+, we recommend using the v2 plugin instead. If you need to use the v1 plugin with Airflow 2.3+, you must also set the environment variable ",(0,n.yg)("inlineCode",{parentName:"p"},"DATAHUB_AIRFLOW_PLUGIN_USE_V1_PLUGIN=true"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub-airflow-plugin[plugin-v1]'\n\n# The DataHub rest connection type is included by default.\n# To use the DataHub Kafka connection type, install the plugin with the kafka extras.\npip install 'acryl-datahub-airflow-plugin[plugin-v1,datahub-kafka]'\n")),(0,n.yg)("h3",{id:"configuration-1"},"Configuration"),(0,n.yg)("h4",{id:"disable-lazy-plugin-loading"},"Disable lazy plugin loading"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ini",metastring:'title="airflow.cfg"',title:'"airflow.cfg"'},"[core]\nlazy_load_plugins = False\n")),(0,n.yg)("p",null,"On MWAA you should add this config to your ",(0,n.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html#configuring-2.0-airflow-override"},"Apache Airflow configuration options"),"."),(0,n.yg)("h4",{id:"setup-a-datahub-connection"},"Setup a DataHub connection"),(0,n.yg)("p",null,"You must configure an Airflow connection for Datahub. We support both a Datahub REST and a Kafka-based connections, but you only need one."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"# For REST-based:\nairflow connections add  --conn-type 'datahub_rest' 'datahub_rest_default' --conn-host 'http://datahub-gms:8080' --conn-password '<optional datahub auth token>'\n# For Kafka-based (standard Kafka sink config can be passed via extras):\nairflow connections add  --conn-type 'datahub_kafka' 'datahub_kafka_default' --conn-host 'broker:9092' --conn-extra '{}'\n")),(0,n.yg)("h4",{id:"configure-the-plugin"},"Configure the plugin"),(0,n.yg)("p",null,"If your config doesn't align with the default values, you can configure the plugin in your ",(0,n.yg)("inlineCode",{parentName:"p"},"airflow.cfg")," file."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ini",metastring:'title="airflow.cfg"',title:'"airflow.cfg"'},"[datahub]\nenabled = true\nconn_id = datahub_rest_default  # or datahub_kafka_default\n# etc.\n")),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Default value"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"enabled"),(0,n.yg)("td",{parentName:"tr",align:null},"true"),(0,n.yg)("td",{parentName:"tr",align:null},"If the plugin should be enabled.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"conn_id"),(0,n.yg)("td",{parentName:"tr",align:null},"datahub_rest_default"),(0,n.yg)("td",{parentName:"tr",align:null},"The name of the datahub connection you set in step 1.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"cluster"),(0,n.yg)("td",{parentName:"tr",align:null},"prod"),(0,n.yg)("td",{parentName:"tr",align:null},"name of the airflow cluster")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"capture_ownership_info"),(0,n.yg)("td",{parentName:"tr",align:null},"true"),(0,n.yg)("td",{parentName:"tr",align:null},"If true, the owners field of the DAG will be capture as a DataHub corpuser.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"capture_tags_info"),(0,n.yg)("td",{parentName:"tr",align:null},"true"),(0,n.yg)("td",{parentName:"tr",align:null},"If true, the tags field of the DAG will be captured as DataHub tags.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"capture_executions"),(0,n.yg)("td",{parentName:"tr",align:null},"true"),(0,n.yg)("td",{parentName:"tr",align:null},"If true, we'll capture task runs in DataHub in addition to DAG definitions.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"materialize_iolets"),(0,n.yg)("td",{parentName:"tr",align:null},"true"),(0,n.yg)("td",{parentName:"tr",align:null},"Create or un-soft-delete all entities referenced in lineage.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"datajob_url_link"),(0,n.yg)("td",{parentName:"tr",align:null},"taskinstance"),(0,n.yg)("td",{parentName:"tr",align:null},"If taskinstance, the datajob url will be taskinstance link on airflow. It can also be grid.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"graceful_exceptions"),(0,n.yg)("td",{parentName:"tr",align:null},"true"),(0,n.yg)("td",{parentName:"tr",align:null},"If set to true, most runtime errors in the lineage backend will be suppressed and will not cause the overall task to fail. Note that configuration issues will still throw exceptions.")))),(0,n.yg)("h4",{id:"validate-that-the-plugin-is-working"},"Validate that the plugin is working"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Go and check in Airflow at Admin -> Plugins menu if you can see the DataHub plugin"),(0,n.yg)("li",{parentName:"ol"},"Run an Airflow DAG. In the task logs, you should see Datahub related log messages like:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"Emitting DataHub ...\n")),(0,n.yg)("h2",{id:"automatic-lineage-extraction"},"Automatic lineage extraction"),(0,n.yg)("p",null,"Only the v2 plugin supports automatic lineage extraction. If you're using the v1 plugin, you must use manual lineage annotation or emit lineage directly."),(0,n.yg)("p",null,"To automatically extract lineage information, the v2 plugin builds on top of Airflow's built-in ",(0,n.yg)("a",{parentName:"p",href:"https://openlineage.io/docs/integrations/airflow/default-extractors"},"OpenLineage extractors"),".\nAs such, we support a superset of the default operators that Airflow/OpenLineage supports."),(0,n.yg)("p",null,"The SQL-related extractors have been updated to use ",(0,n.yg)("a",{parentName:"p",href:"https://blog.datahubproject.io/extracting-column-level-lineage-from-sql-779b8ce17567"},"DataHub's SQL lineage parser"),", which is more robust than the built-in one and uses DataHub's metadata information to generate column-level lineage."),(0,n.yg)("p",null,"Supported operators:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"SQLExecuteQueryOperator"),", including any subclasses. Note that in newer versions of Airflow (generally Airflow 2.5+), most SQL operators inherit from this class."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"AthenaOperator")," and ",(0,n.yg)("inlineCode",{parentName:"li"},"AWSAthenaOperator")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"BigQueryOperator")," and ",(0,n.yg)("inlineCode",{parentName:"li"},"BigQueryExecuteQueryOperator")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"BigQueryInsertJobOperator")," (incubating)"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"MySqlOperator")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"PostgresOperator")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"RedshiftSQLOperator")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"SnowflakeOperator")," and ",(0,n.yg)("inlineCode",{parentName:"li"},"SnowflakeOperatorAsync")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"SqliteOperator")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"TrinoOperator"))),(0,n.yg)("h2",{id:"manual-lineage-annotation"},"Manual Lineage Annotation"),(0,n.yg)("h3",{id:"using-inlets-and-outlets"},"Using ",(0,n.yg)("inlineCode",{parentName:"h3"},"inlets")," and ",(0,n.yg)("inlineCode",{parentName:"h3"},"outlets")),(0,n.yg)("p",null,"You can manually annotate lineage by setting ",(0,n.yg)("inlineCode",{parentName:"p"},"inlets")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"outlets")," on your Airflow operators. This is useful if you're using an operator that doesn't support automatic lineage extraction, or if you want to override the automatic lineage extraction."),(0,n.yg)("p",null,"We have a few code samples that demonstrate how to use ",(0,n.yg)("inlineCode",{parentName:"p"},"inlets")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"outlets"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion-modules/airflow-plugin/src/datahub_airflow_plugin/example_dags/lineage_backend_demo.py"},(0,n.yg)("inlineCode",{parentName:"a"},"lineage_backend_demo.py"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion-modules/airflow-plugin/src/datahub_airflow_plugin/example_dags/lineage_backend_taskflow_demo.py"},(0,n.yg)("inlineCode",{parentName:"a"},"lineage_backend_taskflow_demo.py"))," - uses the ",(0,n.yg)("a",{parentName:"li",href:"https://airflow.apache.org/docs/apache-airflow/stable/concepts/taskflow.html"},"TaskFlow API"))),(0,n.yg)("p",null,"For more information, take a look at the ",(0,n.yg)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/stable/lineage.html"},"Airflow lineage docs"),"."),(0,n.yg)("h3",{id:"custom-operators"},"Custom Operators"),(0,n.yg)("p",null,"If you have created a ",(0,n.yg)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/stable/howto/custom-operator.html"},"custom Airflow operator")," that inherits from the BaseOperator class,\nwhen overriding the ",(0,n.yg)("inlineCode",{parentName:"p"},"execute")," function, set inlets and outlets via ",(0,n.yg)("inlineCode",{parentName:"p"},"context['ti'].task.inlets")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"context['ti'].task.outlets"),".\nThe DataHub Airflow plugin will then pick up those inlets and outlets after the task runs."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},"class DbtOperator(BaseOperator):\n    ...\n\n    def execute(self, context):\n        # do something\n        inlets, outlets = self._get_lineage()\n        # inlets/outlets are lists of either datahub_airflow_plugin.entities.Dataset or datahub_airflow_plugin.entities.Urn\n        context['ti'].task.inlets = self.inlets\n        context['ti'].task.outlets = self.outlets\n\n    def _get_lineage(self):\n        # Do some processing to get inlets/outlets\n\n        return inlets, outlets\n")),(0,n.yg)("p",null,"If you override the ",(0,n.yg)("inlineCode",{parentName:"p"},"pre_execute")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"post_execute")," function, ensure they include the ",(0,n.yg)("inlineCode",{parentName:"p"},"@prepare_lineage")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"@apply_lineage")," decorators respectively. Reference the ",(0,n.yg)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/stable/administration-and-deployment/lineage.html#lineage"},"Airflow docs")," for more details."),(0,n.yg)("h3",{id:"custom-extractors"},"Custom Extractors"),(0,n.yg)("p",null,"Note: these are only supported in the v2 plugin."),(0,n.yg)("p",null,"You can also create a custom extractor to extract lineage from any operator. This is useful if you're using a built-in Airflow operator for which we don't support automatic lineage extraction."),(0,n.yg)("p",null,"See this ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/pull/10452"},"example PR")," which adds a custom extractor for the ",(0,n.yg)("inlineCode",{parentName:"p"},"BigQueryInsertJobOperator")," operator."),(0,n.yg)("h2",{id:"emit-lineage-directly"},"Emit Lineage Directly"),(0,n.yg)("p",null,"If you can't use the plugin or annotate inlets/outlets, you can also emit lineage using the ",(0,n.yg)("inlineCode",{parentName:"p"},"DatahubEmitterOperator"),"."),(0,n.yg)("p",null,"Reference ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion-modules/airflow-plugin/src/datahub_airflow_plugin/example_dags/lineage_emission_dag.py"},(0,n.yg)("inlineCode",{parentName:"a"},"lineage_emission_dag.py"))," for a full example."),(0,n.yg)("p",null,"In order to use this example, you must first configure the Datahub hook. Like in ingestion, we support a Datahub REST hook and a Kafka-based hook. See the plugin configuration for examples."),(0,n.yg)("h2",{id:"debugging"},"Debugging"),(0,n.yg)("h3",{id:"missing-lineage"},"Missing lineage"),(0,n.yg)("p",null,"If you're not seeing lineage in DataHub, check the following:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Validate that the plugin is loaded in Airflow. Go to Admin -> Plugins and check that the DataHub plugin is listed."),(0,n.yg)("li",{parentName:"ul"},"With the v2 plugin, it should also print a log line like ",(0,n.yg)("inlineCode",{parentName:"li"},"INFO  [datahub_airflow_plugin.datahub_listener] DataHub plugin v2 using DataHubRestEmitter: configured to talk to <datahub_url>")," during Airflow startup, and the ",(0,n.yg)("inlineCode",{parentName:"li"},"airflow plugins")," command should list ",(0,n.yg)("inlineCode",{parentName:"li"},"datahub_plugin")," with a listener enabled."),(0,n.yg)("li",{parentName:"ul"},"If using the v2 plugin's automatic lineage, ensure that the ",(0,n.yg)("inlineCode",{parentName:"li"},"enable_extractors")," config is set to true and that automatic lineage is supported for your operator."),(0,n.yg)("li",{parentName:"ul"},"If using manual lineage annotation, ensure that you're using the ",(0,n.yg)("inlineCode",{parentName:"li"},"datahub_airflow_plugin.entities.Dataset")," or ",(0,n.yg)("inlineCode",{parentName:"li"},"datahub_airflow_plugin.entities.Urn")," classes for your inlets and outlets.")),(0,n.yg)("h3",{id:"incorrect-urls"},"Incorrect URLs"),(0,n.yg)("p",null,"If your URLs aren't being generated correctly (usually they'll start with ",(0,n.yg)("inlineCode",{parentName:"p"},"http://localhost:8080")," instead of the correct hostname), you may need to set the webserver ",(0,n.yg)("inlineCode",{parentName:"p"},"base_url")," config."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ini",metastring:'title="airflow.cfg"',title:'"airflow.cfg"'},"[webserver]\nbase_url = http://airflow.mycorp.example.com\n")),(0,n.yg)("h3",{id:"typeerror--missing-3-required-positional-arguments"},"TypeError ... missing 3 required positional arguments"),(0,n.yg)("p",null,"If you see errors like the following with the v2 plugin:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"ERROR - on_task_instance_success() missing 3 required positional arguments: 'previous_state', 'task_instance', and 'session'\nTraceback (most recent call last):\n  File \"/home/airflow/.local/lib/python3.8/site-packages/datahub_airflow_plugin/datahub_listener.py\", line 124, in wrapper\n    f(*args, **kwargs)\nTypeError: on_task_instance_success() missing 3 required positional arguments: 'previous_state', 'task_instance', and 'session'\n")),(0,n.yg)("p",null,"The solution is to upgrade ",(0,n.yg)("inlineCode",{parentName:"p"},"acryl-datahub-airflow-plugin>=0.12.0.4")," or upgrade ",(0,n.yg)("inlineCode",{parentName:"p"},"pluggy>=1.2.0"),". See this ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/pull/9365"},"PR")," for details."),(0,n.yg)("h2",{id:"compatibility"},"Compatibility"),(0,n.yg)("p",null,"We no longer officially support Airflow <2.1. However, you can use older versions of ",(0,n.yg)("inlineCode",{parentName:"p"},"acryl-datahub-airflow-plugin")," with older versions of Airflow.\nBoth of these options support Python 3.7+."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Airflow 1.10.x, use DataHub plugin v1 with acryl-datahub-airflow-plugin <= 0.9.1.0."),(0,n.yg)("li",{parentName:"ul"},"Airflow 2.0.x, use DataHub plugin v1 with acryl-datahub-airflow-plugin <= 0.11.0.1.")),(0,n.yg)("p",null,"DataHub also previously supported an Airflow ",(0,n.yg)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/2.2.0/lineage.html#lineage-backend"},"lineage backend")," implementation. While the implementation is still in our codebase, it is deprecated and will be removed in a future release.\nNote that the lineage backend did not support automatic lineage extraction, did not capture task failures, and did not work in AWS MWAA.\nThe ",(0,n.yg)("a",{parentName:"p",href:"https://docs-website-1wmaehubl-acryldata.vercel.app/docs/lineage/airflow/#using-datahubs-airflow-lineage-backend-deprecated"},"documentation for the lineage backend")," has already been archived."),(0,n.yg)("h2",{id:"additional-references"},"Additional references"),(0,n.yg)("p",null,"Related Datahub videos:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=3wiaqhb8UR0"},"Airflow Lineage")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=YpUOqDU5ZYg"},"Airflow Run History in DataHub"))))}y.isMDXComponent=!0}}]);