(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){e.exports={borderWrapper:"Authentication_borderWrapper__wZ2JS",borderWrapperSegment:"Authentication_borderWrapperSegment__-nyFI"}},105:function(e,t,a){e.exports={ipWrapper:"IpComponent_ipWrapper__3H7jw",ipValid:"IpComponent_ipValid__1PYV-",ipNotValid:"IpComponent_ipNotValid__39LuT"}},106:function(e,t,a){e.exports={emptyDiv:"DiscoverySource_emptyDiv__1w8KV",DiscoverySourceWrapper:"DiscoverySource_DiscoverySourceWrapper__pKpX3"}},146:function(e,t,a){e.exports={message:"CSV_message__2OEpx",csv:"CSV_csv__1iKGZ"}},147:function(e,t,a){e.exports={errorMessage:"DiscoverModal_errorMessage__2zW4o",discoverModalWrapper:"DiscoverModal_discoverModalWrapper__3GtFm"}},213:function(e,t,a){e.exports={AppWrapper:"App_AppWrapper__2wXpP"}},22:function(e,t,a){e.exports={accordionWrapper:"WizardSteps_accordionWrapper__26i28",DiscoverySourceWrapper:"WizardSteps_DiscoverySourceWrapper__1BM0W",DiscoveryOption:"WizardSteps_DiscoveryOption__1AJzC",stepsWrapper:"WizardSteps_stepsWrapper__1Rjjg",accordionDiscoverySource:"WizardSteps_accordionDiscoverySource___XriO",buttonsWrapper:"WizardSteps_buttonsWrapper__2gz6O",stepWrapper:"WizardSteps_stepWrapper__2nkHX",stepTitle:"WizardSteps_stepTitle__20xdL",ui:"WizardSteps_ui__1wflD",steps:"WizardSteps_steps__2nl96",step:"WizardSteps_step__2Qv6K"}},227:function(e,t,a){e.exports={borderWrapper:"SelectedOptions_borderWrapper__G8SAs"}},236:function(e,t,a){e.exports={checkboxesWrapper:"DiscoveryOption_checkboxesWrapper__WQcKU",checkBox:"DiscoveryOption_checkBox__1apcD"}},247:function(e,t,a){e.exports=a(425)},252:function(e,t,a){},425:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(59),o=a.n(i),l=(a(252),a(23)),c=a(24),s=a(26),p=a(25),d=a(27),u=a(213),h=a.n(u),m=a(64),v=a.n(m),E=a(46),C=a(99),g=a(441),f=a(438),S=a(439),_=a(212),b=a(440),O=a(22),y=a.n(O),V=a(442),x=a(435),k=a(433),w=a(437),N=a(33),I=function(e){return{type:"SET_SNMP_CONFIG",data:e}},A=function(){return{type:"REMOVE_SNMP_CONFIG"}},M=a(103),W=a.n(M),P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={contextName:"",engineId:"",checkboxAuthenticationValue:"",authenticationPassword:"",securityOptions:"",readCommunity:a.props.readCommunity,version:a.props.version},a.handleChange=function(){var e=Object(C.a)(v.a.mark(function e(t){var n,r,i,o,l,c,s,p,d;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.name,r=t.target.value,e.next=4,a.setState(Object(E.a)({},n,r));case 4:i=a.state,o=i.contextName,l=i.engineId,c=i.checkboxAuthenticationValue,s=i.authenticationPassword,p=i.securityOptions,o&&l&&c&&s&&a.props.readCommunity&&(d={version:3,snmpv1:null,snmpv2:null,snmpv3:{readCommunity:a.props.readCommunity,securityOptions:p,contextName:o,contextEngineID:l,authenticationAlgorithm:{password:s,code:c},encryptionAlgorithm:{code:""}}},a.props.setSnmpConfig(d));case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.handleChangeCheckBox=function(e,t){var n=t.value;return a.setState({checkboxAuthenticationValue:n})},a.handleChangeDropdown=function(e){var t=e.target.textContent;a.setState({securityOptions:t})},a.clearFunc=function(){a.props.clear&&a.setState({contextName:"",engineId:"",checkboxAuthenticationValue:"",authenticationPassword:"",securityOptions:""})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){e.clear!==this.props.clear&&(console.log("prevProps",e),console.log("thisProps",this.props),this.clearFunc())}},{key:"render",value:function(){return r.a.createElement(g.a,{inverted:!0,className:W.a.borderWrapperSegment},r.a.createElement(x.a,{inverted:!0,className:W.a.borderWrapper},r.a.createElement(x.a.Field,null,r.a.createElement(w.a,{onChange:this.handleChangeDropdown,value:this.state.securityOptions,fluid:!0,selection:!0,options:[{text:"Authentication and No Privacy",value:"Authentication and No Privacy"}]}),r.a.createElement(x.a.Input,{required:!0,fluid:!0,label:"Context Name",placeholder:"sample context",name:"contextName",value:this.state.contextName,onChange:this.handleChange}),r.a.createElement(x.a.Input,{required:!0,fluid:!0,label:"Context Engine ID",placeholder:"sample engine",name:"engineId",value:this.state.engineId,onChange:this.handleChange})),r.a.createElement(V.a,{as:"h3",textAlign:"left"},"Authentication algoritm"),r.a.createElement(x.a.Group,{inline:!0,widths:"equal",className:W.a.borderWrapper},r.a.createElement(x.a.Field,null,r.a.createElement(k.a,{radio:!0,label:"MD5",name:"checkboxAuthentication",value:"MD5",checked:"MD5"===this.state.checkboxAuthenticationValue,onChange:this.handleChangeCheckBox})),r.a.createElement(x.a.Field,null,r.a.createElement(k.a,{radio:!0,label:"SHA",name:"checkboxAuthentication",value:"SHA",checked:"SHA"===this.state.checkboxAuthenticationValue,onChange:this.handleChangeCheckBox})),r.a.createElement(x.a.Field,null,r.a.createElement(k.a,{radio:!0,label:"HMAC128",name:"checkboxAuthentication",value:"HMAC128",checked:"HMAC128"===this.state.checkboxAuthenticationValue,onChange:this.handleChangeCheckBox})),r.a.createElement(x.a.Field,null,r.a.createElement(k.a,{radio:!0,label:"HMAC192",name:"checkboxAuthentication",value:"HMAC192",checked:"HMAC192"===this.state.checkboxAuthenticationValue,onChange:this.handleChangeCheckBox})),r.a.createElement(x.a.Field,null,r.a.createElement(k.a,{radio:!0,label:"HMAC256",name:"checkboxAuthentication",value:"HMAC256",checked:"HMAC256"===this.state.checkboxAuthenticationValue,onChange:this.handleChangeCheckBox})),r.a.createElement(x.a.Field,null,r.a.createElement(k.a,{radio:!0,label:"HMAC384",name:"checkboxAuthentication",value:"HMAC384",checked:"HMAC384"===this.state.checkboxAuthenticationValue,onChange:this.handleChangeCheckBox}))),r.a.createElement(x.a.Input,{required:!0,fluid:!0,label:"Authentication Password",placeholder:"random password",name:"authenticationPassword",value:this.state.authenticationPassword,onChange:this.handleChange})))}}]),t}(n.Component);var j=Object(N.b)(null,function(e){return{setSnmpConfig:function(t){e(I(t))}}})(P),T=a(227),D=a.n(T),F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={activeIndex:0},a.handleChange=function(e,t){var n=t.value;return a.setState({value:n})},a.handleChangeInput=function(e){var t=e.target.value,n=e.target.name;a.setState(Object(E.a)({},n,t))},a.handleClick=function(e,t){var n=a.state.activeIndex===t.index?-1:t.index;a.setState({activeIndex:n})},a.clearFunc=function(){a.props.clear&&a.setState({readCommunity:"",value:""})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){e.clear!==this.props.clear&&(console.log("prevProps",e),console.log("thisProps",this.props),this.clearFunc())}},{key:"render",value:function(){var e=this.state.activeIndex;return r.a.createElement(f.a,{fluid:!0,inverted:!0,className:D.a.borderWrapper},r.a.createElement(f.a.Title,{active:0===e,index:0,onClick:this.handleClick},r.a.createElement(_.a,{name:"dropdown"}),"Selected options"),r.a.createElement(f.a.Content,{active:0===e},r.a.createElement(g.a,{inverted:!0},r.a.createElement(V.a,{as:"h3",textAlign:"left"},"SNMP version"),r.a.createElement(x.a,{inverted:!0},r.a.createElement(x.a.Group,{inline:!0,widths:"equal"},r.a.createElement(x.a.Field,null,r.a.createElement(k.a,{radio:!0,label:"v1",name:"checkboxRadioGroup",value:"v1",checked:"v1"===this.state.value,onChange:this.handleChange})),r.a.createElement(x.a.Field,null,r.a.createElement(k.a,{radio:!0,label:"v2",name:"checkboxRadioGroup",value:"v2",checked:"v2"===this.state.value,onChange:this.handleChange})),r.a.createElement(x.a.Field,null,r.a.createElement(k.a,{radio:!0,label:"v3",name:"checkboxRadioGroup",value:"v3",checked:"v3"===this.state.value,onChange:this.handleChange})))),this.state.value?r.a.createElement(g.a,{inverted:!0},r.a.createElement(x.a,{inverted:!0},r.a.createElement(x.a.Field,null,r.a.createElement(x.a.Input,{fluid:!0,label:"Read community",placeholder:"Read community",name:"readCommunity",value:this.state.readCommunity,onChange:this.handleChangeInput}))),"v3"===this.state.value&&r.a.createElement(j,{clear:this.props.clear,optionCompletedFunc:this.props.optionCompletedFunc,readCommunity:this.state.readCommunity,version:this.state.value})):null)))}}]),t}(n.Component),R=a(105),H=a.n(R),G=function(e){var t=e.ipValid,a=e.ipValue,n=e.handlerChangeIp;return r.a.createElement("div",{className:H.a.ipWrapper},r.a.createElement(x.a,null,r.a.createElement(V.a,{as:"h3",color:"grey",textAlign:"left"},"IP"),r.a.createElement(x.a.Input,{name:"ip",validName:"ipValid",value:a,onChange:n,pattern:"\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}",required:!0,fluid:!0,placeholder:"Enter IP in format 1.2.3.4."}),a&&t&&r.a.createElement("p",{className:H.a.ipValid},"IP valid"),a&&!t&&r.a.createElement("p",{className:H.a.ipNotValid},"Please check your IP, it doesn't valid")))},z=a(434),L=a(66),B=a.n(L),U=function(e){var t=e.ipStartValid,a=e.ipEndValid,n=e.ipStart,i=e.ipEnd,o=e.handlerChangeIp;return r.a.createElement("div",{className:B.a.IpRangeCompWrapper},r.a.createElement(V.a,{color:"grey",as:"h3",textAlign:"left"},"Starting IP Address"),r.a.createElement(z.a,{fluid:!0,placeholder:"Enter IP in format 1.2.3.4.",name:"ipStart",value:n,onChange:o}),n&&t&&r.a.createElement("p",{className:B.a.ipValid},"Starting IP is valid"),n&&!t&&r.a.createElement("p",{className:B.a.ipNotValid},"Please check your Starting IP Address, it doesn't valid"),r.a.createElement(V.a,{color:"grey",as:"h3",textAlign:"left"},"Ending IP Address"),r.a.createElement(z.a,{fluid:!0,placeholder:"Enter IP in format 1.2.3.4.",name:"ipEnd",value:i,onChange:o}),i&&a&&r.a.createElement("p",{className:B.a.ipValid},"Ending IP is valid"),i&&!a&&r.a.createElement("p",{className:B.a.ipNotValid},"Please check your Ending IP, it doesn't valid"))},X=a(146),q=a.n(X),J=a(436),K=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={file:null,fileName:"",fileUrl:"",path:""},a.addFile=function(e){if(e.target.files[0]){var t=URL.createObjectURL(e.target.files[0]),n=e.target.value;a.setState({fileName:e.target.files[0].name,path:n,fileUrl:t})}},a.saveFile=function(e){a.state.path?(a.props.recordConnectToStore("CSV",a.state.path),a.props.tooggleModal()):console.log("File not choosen")},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.showModal,a=e.closeModal;return r.a.createElement(J.a,{open:t},r.a.createElement(J.a.Header,null,"Select File"),r.a.createElement(J.a.Content,null,r.a.createElement(z.a,{onChange:this.addFile,fluid:!0,name:"file",type:"file"})),r.a.createElement(J.a.Actions,null,r.a.createElement(b.a,{color:"teal",onClick:this.saveFile},r.a.createElement(_.a,{name:"checkmark"})," Save"),r.a.createElement(b.a,{color:"red",onClick:a},r.a.createElement(_.a,{name:"remove"})," Cancel")))}}]),t}(n.Component);var $=Object(N.b)(function(e){return{content:e.content}})(function(e){var t=e.tooggleModal,a=e.recordConnectToStore,n=e.downLoadFile,i=e.showModal,o=e.closeModal,l=e.content;return r.a.createElement("div",{className:q.a.csv},r.a.createElement(b.a,{color:"teal",onClick:t},"Select a file ..."),r.a.createElement(K,{recordConnectToStore:a,downLoadFile:n,showModal:i,tooggleModal:t,closeModal:o}),l&&r.a.createElement("p",{className:q.a.message},"Selected file:",l.path))}),Q=a(106),Z=a.n(Q),Y=[{text:"IP",value:"IP"},{text:"IP Range",value:"IP Range"},{text:"CSV",value:"CSV"}],ee=function(e){var t=e.handlerChange,a=e.dropdown,n=e.ipValid,i=e.ipValidation,o=e.handlerChangeIp,l=e.ip,c=e.ipStart,s=e.ipEnd,p=e.ipStartValid,d=e.ipEndValid,u=e.path,h=e.tooggleModal,m=e.downLoadFile,v=e.showModal,E=e.closeModal,C=e.recordConnectToStore;return r.a.createElement("div",{className:Z.a.DiscoverySourceWrapper},r.a.createElement(w.a,{placeholder:"Select Source",onChange:t,value:a,fluid:!0,selection:!0,options:Y}),"IP"===a?r.a.createElement(G,{ipValid:n,ipValidation:i,handlerChangeIp:o,ipValue:l}):"IP Range"===a?r.a.createElement(U,{handlerChangeIp:o,ipStart:c,ipEnd:s,ipStartValid:p,ipEndValid:d}):"CSV"===a?r.a.createElement("div",{className:Z.a.Csv},r.a.createElement($,{path:u,tooggleModal:h,recordConnectToStore:C,downLoadFile:m,showModal:v,closeModal:E})):r.a.createElement("div",{className:Z.a.emptyDiv}))},te=a(236),ae=a.n(te),ne=function(e){var t=e.showSelectedOptions;return r.a.createElement("div",{className:ae.a.checkboxesWrapper},r.a.createElement(x.a.Group,{grouped:!0},r.a.createElement(x.a.Field,{label:"SNMP",control:"input",type:"checkbox",onClick:t}),r.a.createElement(x.a.Field,{label:"Link",control:"input",type:"checkbox"}),r.a.createElement(x.a.Field,{label:"VLAN",control:"input",type:"checkbox"}),r.a.createElement(x.a.Field,{label:"PORTS",control:"input",type:"checkbox"})))},re=function(e){return{type:"SET_CONTENT",data:e}},ie=function(){return{type:"REMOVREMOVE_CONTENT"}},oe=a(41),le=a(147),ce=a.n(le),se=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={data:{}},a.discover=function(){if(a.props.content&&a.props.snmpConfig){var e={content:Object(oe.a)({},a.props.content,{snmpConfig:a.props.snmpConfig})};a.setState({data:Object(oe.a)({},e)})}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(J.a,{className:ce.a.discoverModalWrapper,trigger:r.a.createElement(b.a,{floated:"right",color:"teal",onClick:this.discover},"Discover")},r.a.createElement(J.a.Content,null,r.a.createElement(J.a.Header,{as:"h3"},"Data result"),r.a.createElement(J.a.Description,null,this.props.content.inputType&&this.props.snmpConfig.version?r.a.createElement("pre",null,JSON.stringify(this.state.data,null,"\t")):r.a.createElement("p",{className:ce.a.errorMessage},"Please check all fields, some fields are empty..."))))}}]),t}(n.Component);var pe=Object(N.b)(function(e){return{content:e.content,snmpConfig:e.snmpConfig}},null)(se),de=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={activeIndex:0,showSelectedOptions:!1,dropdown:"",showModal:!1,ip:"",ipValid:"",ipStart:"",ipStartValid:"",ipEnd:"",ipEndValid:"",clear:!1},a.handlerChange=function(e){var t=e.target.textContent;a.setState({dropdown:t})},a.handlerChangeIp=function(){var e=Object(C.a)(v.a.mark(function e(t){var n,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,r=t.target.name,e.next=4,a.setState(Object(E.a)({},r,n));case 4:a.ipValidation(r);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.recordConnectToStore=function(e,t){var n={};if("IP"===e)return n.inputType=e,n.ipAddress=t,a.props.setContent(n);if("IP Range"===e){var r=t.ipStartValid,i=t.ipEndValid;return n.inputType=e,n.startIPAddress=r,n.endIPAddress=i,a.props.setContent(n)}return"CSV"===e?(n.inputType=e,n.path=t,a.props.setContent(n)):void 0},a.handleClick=function(e,t){var n=a.state.activeIndex===t.index?-1:t.index;a.setState({activeIndex:n})},a.clearFunc=function(){a.setState(function(e){return{dropdown:"",ip:"",ipValid:"",ipStart:"",ipStartValid:"",ipEnd:"",ipEndValid:"",path:"",clear:!e.clear,showSelectedOptions:!1}}),a.props.removeContent(),a.props.removeSnmpConfig()},a.tooggleModal=function(){a.setState(function(e){return{showModal:!e.showModal}})},a.closeModal=function(){a.setState(function(e){return{showModal:!e.showModal,path:"",sourceCompleted:!1}})},a.ipValidation=function(e){var t=a.state[e],n={};if(a.state[e])if(t.match(/^(((1?[1-9]?|10|2[0-4])\d|25[0-5])($|\.(?!$))){4}$/gm)){if("ip"===e)a.setState({ipValid:t,sourceCompleted:!0,ipStart:"",ipEnd:"",clear:!1}),a.recordConnectToStore("IP",t);else if("ipStart"===e){var r=t.split("."),i=(r.pop(),r.join("."));a.setState({ipStartValid:t,ipEnd:i,ipEndValid:"",ip:"",ipValid:"",path:""}),console.log(n),n.ipStartValid&&n.ipEndValid&&a.recordConnectToStore("IP Range",n)}else if("ipEnd"===e){var o=a.state.ipStartValid.split("."),l=t.split(".");+o[0]===+l[0]&&+o[1]===+l[1]&&+o[2]===+l[2]&&+o[3]<+l[3]?(n.ipEndValid=t,n.ipStartValid=a.state.ipStartValid,console.log(n),n.ipStartValid&&n.ipEndValid&&a.recordConnectToStore("IP Range",n),a.setState({ipEndValid:t,clear:!1})):a.setState({ipEndValid:""})}}else"ip"===e?a.setState({ipValid:""}):"ipStart"===e?a.setState({ipStartValid:"",ipEnd:""}):"ipEnd"===e&&a.setState({ipEndValid:""})},a.showSelectedOptions=function(){a.setState(function(e){return{showSelectedOptions:!e.showSelectedOptions}})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.activeIndex;return r.a.createElement(g.a,{inverted:!0,className:y.a.mainSegmentWrapper},r.a.createElement(f.a,{inverted:!0,fluid:!0,className:y.a.AccordionWrapper},r.a.createElement(S.a.Group,{className:y.a.stepGroupWrapper,widths:2,ordered:!0},r.a.createElement(S.a,{background:"grey",className:y.a.stepWrapper,active:0===e,completed:this.props.content.inputType},r.a.createElement(S.a.Content,null,r.a.createElement(S.a.Title,{className:y.a.stepTitle},"Discovery source"))),r.a.createElement(S.a,{className:y.a.stepWrapper,active:1===e,completed:this.props.snmpConfig.version},r.a.createElement(S.a.Content,null,r.a.createElement(S.a.Title,{className:y.a.stepTitle},"Discovery options")))),r.a.createElement("div",{className:y.a.stepsWrapper},r.a.createElement("div",{className:y.a.accordionDiscoverySource},r.a.createElement(f.a.Title,{active:0===e,index:0,onClick:this.handleClick},r.a.createElement(_.a,{name:"dropdown"}),"Discovery source"),r.a.createElement(f.a.Content,{active:0===e},r.a.createElement(ee,{className:y.a.DiscoverySourceWrapper,handlerChange:this.handlerChange,dropdown:this.state.dropdown,ipValid:this.state.ipValid,ipValidation:this.ipValidation,handlerChangeIp:this.handlerChangeIp,ip:this.state.ip,ipStart:this.state.ipStart,ipEnd:this.state.ipEnd,ipStartValid:this.state.ipStartValid,ipEndValid:this.state.ipEndValid,path:this.state.path,tooggleModal:this.tooggleModal,downLoadFile:this.downLoadFile,showModal:this.state.showModal,closeModal:this.closeModal,recordConnectToStore:this.recordConnectToStore}))),r.a.createElement("div",{className:y.a.accordionDiscoveryOption},r.a.createElement(f.a.Title,{active:1===e,index:1,onClick:this.handleClick},r.a.createElement(_.a,{name:"dropdown"}),"Discovery options"),r.a.createElement(f.a.Content,{active:1===e},r.a.createElement(ne,{className:y.a.DiscoveryOption,showSelectedOptions:this.showSelectedOptions}))))),this.state.showSelectedOptions&&r.a.createElement(F,{clear:this.state.clear}),r.a.createElement("div",{className:y.a.buttonsWrapper},r.a.createElement(b.a,{floated:"left",onClick:this.clearFunc},"Clear"),r.a.createElement(pe,{discover:this.discover})))}}]),t}(n.Component);var ue=Object(N.b)(function(e){return{content:e.content,snmpConfig:e.snmpConfig}},function(e){return{setContent:function(t){e(re(t))},removeContent:function(){e(ie())},removeSnmpConfig:function(){e(A())}}})(de),he=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:h.a.AppWrapper},r.a.createElement(ue,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(422);var me=a(60),ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CONTENT":return Object(oe.a)({},t.data);case"REMOVREMOVE_CONTENT":return{};case"UPDATE_CONTENT":return Object(oe.a)({},t.data);default:return e}},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SNMP_CONFIG":return Object(oe.a)({},t.data);case"REMOVE_SNMP_CONFIG":return{};case"UPDATE_SNMP_CONFIG":return Object(oe.a)({},t.data);default:return e}},Ce=Object(me.b)({content:ve,snmpConfig:Ee}),ge=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),fe=Object(me.c)(Ce,ge);o.a.render(r.a.createElement(N.a,{store:fe},r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},66:function(e,t,a){e.exports={IpRangeCompWrapper:"IpRangeComp_IpRangeCompWrapper__dprRu",ipValid:"IpRangeComp_ipValid__3SXW8",ipNotValid:"IpRangeComp_ipNotValid__3heyi"}}},[[247,2,1]]]);
//# sourceMappingURL=main.c1fc6499.chunk.js.map