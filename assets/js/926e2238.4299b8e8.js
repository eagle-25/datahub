"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[55008],{57015:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>g,default:()=>f,frontMatter:()=>p,metadata:()=>m,toc:()=>c});t(96540);var n=t(15680),i=t(53720),l=t(5400);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})),e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const p={sidebar_position:53,title:"Sigma",slug:"/generated/ingestion/sources/sigma",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/sigma.md"},g="Sigma",m={unversionedId:"docs/generated/ingestion/sources/sigma",id:"docs/generated/ingestion/sources/sigma",title:"Sigma",description:"Incubating",source:"@site/genDocs/docs/generated/ingestion/sources/sigma.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/sigma",permalink:"/docs/generated/ingestion/sources/sigma",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/sigma.md",tags:[],version:"current",sidebarPosition:53,frontMatter:{sidebar_position:53,title:"Sigma",slug:"/generated/ingestion/sources/sigma",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/sigma.md"},sidebar:"overviewSidebar",previous:{title:"SAP HANA",permalink:"/docs/generated/ingestion/sources/hana"},next:{title:"Slack",permalink:"/docs/generated/ingestion/sources/slack"}},d={},c=[{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"Integration Details",id:"integration-details",level:2},{value:"Configuration Notes",id:"configuration-notes",level:2},{value:"Concept mapping",id:"concept-mapping",level:2},{value:"Advanced Configurations",id:"advanced-configurations",level:2},{value:"Chart source platform mapping",id:"chart-source-platform-mapping",level:3},{value:"Example - For just one specific chart&#39;s external upstream data sources",id:"example---for-just-one-specific-charts-external-upstream-data-sources",level:4},{value:"Example - For all charts within one specific workbook",id:"example---for-all-charts-within-one-specific-workbook",level:4},{value:"Example - For all workbooks charts within one specific workspace",id:"example---for-all-workbooks-charts-within-one-specific-workspace",level:4},{value:"Example - All workbooks use the same connection",id:"example---all-workbooks-use-the-same-connection",level:4},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],y={toc:c},u="wrapper";function f(e){var{components:a}=e,t=o(e,["components"]);return(0,n.yg)(u,r(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(a){s(e,a,t[a])}))}return e}({},y,t),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"sigma"},"Sigma"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-incubating-blue",alt:"Incubating"})),(0,n.yg)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Capability"),(0,n.yg)("th",{parentName:"tr",align:null},"Status"),(0,n.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Descriptions"),(0,n.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:null},"Enabled by default")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/metadata-ingestion/docs/dev_guides/stateful#stale-entity-removal"},"Detect Deleted Entities")),(0,n.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:null},"Optionally enabled via ",(0,n.yg)("inlineCode",{parentName:"td"},"stateful_ingestion.remove_stale_metadata"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Extract Ownership"),(0,n.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:null},"Enabled by default, configured using ",(0,n.yg)("inlineCode",{parentName:"td"},"ingest_owner"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/platform-instances"},"Platform Instance")),(0,n.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:null},"Enabled by default")))),(0,n.yg)("p",null,"This plugin extracts the following:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Sigma Workspaces and Workbooks as Container."),(0,n.yg)("li",{parentName:"ul"},"Sigma Datasets"),(0,n.yg)("li",{parentName:"ul"},"Pages as Dashboard and its Elements as Charts")),(0,n.yg)("h2",{id:"integration-details"},"Integration Details"),(0,n.yg)("p",null,"This source extracts the following:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Workspaces and workbooks within that workspaces as Container."),(0,n.yg)("li",{parentName:"ul"},"Sigma Datasets as Datahub Datasets."),(0,n.yg)("li",{parentName:"ul"},"Pages as Datahub dashboards and elements present inside pages as charts.")),(0,n.yg)("h2",{id:"configuration-notes"},"Configuration Notes"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Refer ",(0,n.yg)("a",{parentName:"li",href:"https://help.sigmacomputing.com/docs/generate-api-client-credentials"},"doc")," to generate an API client credentials."),(0,n.yg)("li",{parentName:"ol"},"Provide the generated Client ID and Secret in Recipe.")),(0,n.yg)("h2",{id:"concept-mapping"},"Concept mapping"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Sigma"),(0,n.yg)("th",{parentName:"tr",align:null},"Datahub"),(0,n.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"Workspace")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/container"},"Container")),(0,n.yg)("td",{parentName:"tr",align:null},"SubType ",(0,n.yg)("inlineCode",{parentName:"td"},'"Sigma Workspace"'))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"Workbook")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/container"},"Container")),(0,n.yg)("td",{parentName:"tr",align:null},"SubType ",(0,n.yg)("inlineCode",{parentName:"td"},'"Sigma Workbook"'))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"Page")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/dashboard"},"Dashboard")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"Element")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/chart"},"Chart")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"Dataset")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/dataset"},"Dataset")),(0,n.yg)("td",{parentName:"tr",align:null},"SubType ",(0,n.yg)("inlineCode",{parentName:"td"},'"Sigma Dataset"'))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"User")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/corpuser"},"User (a.k.a CorpUser)")),(0,n.yg)("td",{parentName:"tr",align:null},"Optionally Extracted")))),(0,n.yg)("h2",{id:"advanced-configurations"},"Advanced Configurations"),(0,n.yg)("h3",{id:"chart-source-platform-mapping"},"Chart source platform mapping"),(0,n.yg)("p",null,"If you want to provide platform details(platform name, platform instance and env) for chart's all external upstream data sources, then you can use ",(0,n.yg)("inlineCode",{parentName:"p"},"chart_sources_platform_mapping")," as below:"),(0,n.yg)("h4",{id:"example---for-just-one-specific-charts-external-upstream-data-sources"},"Example - For just one specific chart's external upstream data sources"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yml"},"    chart_sources_platform_mapping:\n      'workspace_name/workbook_name/chart_name_1': \n        data_source_platform: snowflake\n        platform_instance: new_instance\n        env: PROD\n\n      'workspace_name/folder_name/workbook_name/chart_name_2': \n        data_source_platform: postgres\n        platform_instance: cloud_instance\n        env: DEV\n")),(0,n.yg)("h4",{id:"example---for-all-charts-within-one-specific-workbook"},"Example - For all charts within one specific workbook"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yml"},"    chart_sources_platform_mapping:\n      'workspace_name/workbook_name_1': \n        data_source_platform: snowflake\n        platform_instance: new_instance\n        env: PROD\n      \n      'workspace_name/folder_name/workbook_name_2': \n        data_source_platform: snowflake\n        platform_instance: new_instance\n        env: PROD\n")),(0,n.yg)("h4",{id:"example---for-all-workbooks-charts-within-one-specific-workspace"},"Example - For all workbooks charts within one specific workspace"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yml"},"    chart_sources_platform_mapping:\n      'workspace_name': \n        data_source_platform: snowflake\n        platform_instance: new_instance\n        env: PROD\n")),(0,n.yg)("h4",{id:"example---all-workbooks-use-the-same-connection"},"Example - All workbooks use the same connection"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yml"},"    chart_sources_platform_mapping:\n      '*': \n        data_source_platform: snowflake\n        platform_instance: new_instance\n        env: PROD\n")),(0,n.yg)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,n.yg)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[sigma]'\n")),(0,n.yg)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,n.yg)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,n.yg)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,n.yg)("p",null,"For general pointers on writing and running a recipe, see our ",(0,n.yg)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: sigma\n  config:\n    # Coordinates\n    api_url: "https://aws-api.sigmacomputing.com/v2"\n    # Credentials\n    client_id: "CLIENTID"\n    client_secret: "CLIENT_SECRET"\n    \n    # Optional - filter for certain workspace names instead of ingesting everything.\n    # workspace_pattern:\n    #   allow:\n    #     - workspace_name\n\n    ingest_owner: true\n    \n    # Optional - mapping of sigma workspace/workbook/chart folder path to all chart\'s data sources platform details present inside that folder path.\n    # chart_sources_platform_mapping:\n    #   folder_path:\n    #     data_source_platform: postgres\n    #     platform_instance: cloud_instance\n    #     env: DEV\n\nsink:\n  # sink configs\n\n')),(0,n.yg)("h3",{id:"config-details"},"Config Details"),(0,n.yg)(i.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,n.yg)("p",null,"Note that a ",(0,n.yg)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,n.yg)("div",{className:"config-table"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Field"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"client_id"),"\xa0",(0,n.yg)("abbr",{title:"Required"},"\u2705"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Sigma Client ID")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"client_secret"),"\xa0",(0,n.yg)("abbr",{title:"Required"},"\u2705"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Sigma Client Secret")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"api_url"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Sigma API hosted URL. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},(0,n.yg)("a",{parentName:"td",href:"https://aws-api.sigmacomputing.com/v2"},"https://aws-api.sigmacomputing.com/v2"))))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"extract_lineage"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether to extract lineage of workbook's elements and datasets or not. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"True")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"ingest_owner"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Ingest Owner from source. This will override Owner info entered from UI. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"True")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"ingest_shared_entities"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether to ingest the shared entities or not. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"False")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"platform_instance"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The instance of the platform that all assets produced by this recipe belong to")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"env"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The environment that all assets produced by this connector belong to ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"PROD")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"chart_sources_platform_mapping"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"map(str,PlatformDetail)"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Any source that connects to a platform should inherit this class")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"chart_sources_platform_mapping.",(0,n.yg)("inlineCode",{parentName:"td"},"key"),"."),(0,n.yg)("span",{className:"path-main"},"env"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The environment that all assets produced by this connector belong to ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"PROD")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"chart_sources_platform_mapping.",(0,n.yg)("inlineCode",{parentName:"td"},"key"),"."),(0,n.yg)("span",{className:"path-main"},"data_source_platform"),"\xa0",(0,n.yg)("abbr",{title:"Required if chart_sources_platform_mapping is set"},"\u2753"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"A chart's data sources platform name.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"chart_sources_platform_mapping.",(0,n.yg)("inlineCode",{parentName:"td"},"key"),"."),(0,n.yg)("span",{className:"path-main"},"platform_instance"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The instance of the platform that all assets produced by this recipe belong to")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"workbook_lineage_pattern"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"AllowDenyPattern"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Regex patterns to filter workbook's elements and datasets lineage in ingestion.Requires extract_lineage to be enabled. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"{","'","allow","'",": ","[","'",".","*","'","]",", ","'","deny","'",": ","[","]",", ","'","ignoreCase","'",": True","}")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"workbook_lineage_pattern."),(0,n.yg)("span",{className:"path-main"},"ignoreCase"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether to ignore case sensitivity during pattern matching. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"True")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"workbook_lineage_pattern."),(0,n.yg)("span",{className:"path-main"},"allow"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"array"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"List of regex patterns to include in ingestion ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"[","'",".","*","'","]")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"workbook_lineage_pattern.allow."),(0,n.yg)("span",{className:"path-main"},"string"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"workbook_lineage_pattern."),(0,n.yg)("span",{className:"path-main"},"deny"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"array"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"List of regex patterns to exclude from ingestion. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"[","]")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"workbook_lineage_pattern.deny."),(0,n.yg)("span",{className:"path-main"},"string"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"workspace_pattern"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"AllowDenyPattern"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Regex patterns to filter Sigma workspaces in ingestion.Mention 'My documents' if personal entities also need to ingest. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"{","'","allow","'",": ","[","'",".","*","'","]",", ","'","deny","'",": ","[","]",", ","'","ignoreCase","'",": True","}")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"workspace_pattern."),(0,n.yg)("span",{className:"path-main"},"ignoreCase"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether to ignore case sensitivity during pattern matching. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"True")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"workspace_pattern."),(0,n.yg)("span",{className:"path-main"},"allow"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"array"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"List of regex patterns to include in ingestion ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"[","'",".","*","'","]")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"workspace_pattern.allow."),(0,n.yg)("span",{className:"path-main"},"string"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"workspace_pattern."),(0,n.yg)("span",{className:"path-main"},"deny"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"array"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"List of regex patterns to exclude from ingestion. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"[","]")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"workspace_pattern.deny."),(0,n.yg)("span",{className:"path-main"},"string"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"stateful_ingestion"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"StatefulStaleMetadataRemovalConfig"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Sigma Stateful Ingestion Config.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"stateful_ingestion."),(0,n.yg)("span",{className:"path-main"},"enabled"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether or not to enable stateful ingest. Default: True if a pipeline_name is set and either a datahub-rest sink or ",(0,n.yg)("inlineCode",{parentName:"td"},"datahub_api")," is specified, otherwise False ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"False")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"stateful_ingestion."),(0,n.yg)("span",{className:"path-main"},"remove_stale_metadata"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"True")))))))),(0,n.yg)(l.A,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "SigmaSourceConfig",\n  "description": "Base configuration class for stateful ingestion for source configs to inherit from.",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform_instance": {\n      "title": "Platform Instance",\n      "description": "The instance of the platform that all assets produced by this recipe belong to",\n      "type": "string"\n    },\n    "stateful_ingestion": {\n      "title": "Stateful Ingestion",\n      "description": "Sigma Stateful Ingestion Config.",\n      "allOf": [\n        {\n          "$ref": "#/definitions/StatefulStaleMetadataRemovalConfig"\n        }\n      ]\n    },\n    "api_url": {\n      "title": "Api Url",\n      "description": "Sigma API hosted URL.",\n      "default": "https://aws-api.sigmacomputing.com/v2",\n      "type": "string"\n    },\n    "client_id": {\n      "title": "Client Id",\n      "description": "Sigma Client ID",\n      "type": "string"\n    },\n    "client_secret": {\n      "title": "Client Secret",\n      "description": "Sigma Client Secret",\n      "type": "string"\n    },\n    "workspace_pattern": {\n      "title": "Workspace Pattern",\n      "description": "Regex patterns to filter Sigma workspaces in ingestion.Mention \'My documents\' if personal entities also need to ingest.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    },\n    "ingest_owner": {\n      "title": "Ingest Owner",\n      "description": "Ingest Owner from source. This will override Owner info entered from UI.",\n      "default": true,\n      "type": "boolean"\n    },\n    "ingest_shared_entities": {\n      "title": "Ingest Shared Entities",\n      "description": "Whether to ingest the shared entities or not.",\n      "default": false,\n      "type": "boolean"\n    },\n    "extract_lineage": {\n      "title": "Extract Lineage",\n      "description": "Whether to extract lineage of workbook\'s elements and datasets or not.",\n      "default": true,\n      "type": "boolean"\n    },\n    "workbook_lineage_pattern": {\n      "title": "Workbook Lineage Pattern",\n      "description": "Regex patterns to filter workbook\'s elements and datasets lineage in ingestion.Requires extract_lineage to be enabled.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    },\n    "chart_sources_platform_mapping": {\n      "title": "Chart Sources Platform Mapping",\n      "description": "A mapping of the sigma workspace/workbook/chart folder path to all chart\'s data sources platform details present inside that folder path.",\n      "default": {},\n      "type": "object",\n      "additionalProperties": {\n        "$ref": "#/definitions/PlatformDetail"\n      }\n    }\n  },\n  "required": [\n    "client_id",\n    "client_secret"\n  ],\n  "additionalProperties": false,\n  "definitions": {\n    "DynamicTypedStateProviderConfig": {\n      "title": "DynamicTypedStateProviderConfig",\n      "type": "object",\n      "properties": {\n        "type": {\n          "title": "Type",\n          "description": "The type of the state provider to use. For DataHub use `datahub`",\n          "type": "string"\n        },\n        "config": {\n          "title": "Config",\n          "description": "The configuration required for initializing the state provider. Default: The datahub_api config if set at pipeline level. Otherwise, the default DatahubClientConfig. See the defaults (https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/graph/client.py#L19).",\n          "default": {},\n          "type": "object"\n        }\n      },\n      "required": [\n        "type"\n      ],\n      "additionalProperties": false\n    },\n    "StatefulStaleMetadataRemovalConfig": {\n      "title": "StatefulStaleMetadataRemovalConfig",\n      "description": "Base specialized config for Stateful Ingestion with stale metadata removal capability.",\n      "type": "object",\n      "properties": {\n        "enabled": {\n          "title": "Enabled",\n          "description": "Whether or not to enable stateful ingest. Default: True if a pipeline_name is set and either a datahub-rest sink or `datahub_api` is specified, otherwise False",\n          "default": false,\n          "type": "boolean"\n        },\n        "remove_stale_metadata": {\n          "title": "Remove Stale Metadata",\n          "description": "Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    },\n    "AllowDenyPattern": {\n      "title": "AllowDenyPattern",\n      "description": "A class to store allow deny regexes",\n      "type": "object",\n      "properties": {\n        "allow": {\n          "title": "Allow",\n          "description": "List of regex patterns to include in ingestion",\n          "default": [\n            ".*"\n          ],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "deny": {\n          "title": "Deny",\n          "description": "List of regex patterns to exclude from ingestion.",\n          "default": [],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "ignoreCase": {\n          "title": "Ignorecase",\n          "description": "Whether to ignore case sensitivity during pattern matching.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    },\n    "PlatformDetail": {\n      "title": "PlatformDetail",\n      "description": "Any source that connects to a platform should inherit this class",\n      "type": "object",\n      "properties": {\n        "env": {\n          "title": "Env",\n          "description": "The environment that all assets produced by this connector belong to",\n          "default": "PROD",\n          "type": "string"\n        },\n        "platform_instance": {\n          "title": "Platform Instance",\n          "description": "The instance of the platform that all assets produced by this recipe belong to",\n          "type": "string"\n        },\n        "data_source_platform": {\n          "title": "Data Source Platform",\n          "description": "A chart\'s data sources platform name.",\n          "type": "string"\n        }\n      },\n      "required": [\n        "data_source_platform"\n      ],\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,n.yg)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Class Name: ",(0,n.yg)("inlineCode",{parentName:"li"},"datahub.ingestion.source.sigma.sigma.SigmaSource")),(0,n.yg)("li",{parentName:"ul"},"Browse on ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/sigma/sigma.py"},"GitHub"))),(0,n.yg)("h2",null,"Questions"),(0,n.yg)("p",null,"If you've got any questions on configuring ingestion for Sigma, feel free to ping us on ",(0,n.yg)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}f.isMDXComponent=!0}}]);