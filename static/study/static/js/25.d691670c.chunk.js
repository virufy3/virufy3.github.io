(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[25,50],{158:function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return S})),n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return C}));var a=n(164),r=n(157),o=n(5),i=function(e,t){var n=e.getItem(t);try{return n?JSON.parse(n):void 0}catch(a){return}};function u(e,t){var n=t||"__STATE_MACHINE__",a=i(e,n);return{set:function(e){a=e},get:function(){return a},getName:function(){return n}}}var l=function(e){return void 0===e};function c(e,t,n,a){"undefined"!==typeof window&&e&&(window.STATE_MACHINE_DEBUG=function(e){return t.setItem("___STATE_MACHINE_DEBUG__",e)},window.STATE_MACHINE_RESET=function(){return t.clear()},window.STATE_MACHINE_GET_STORE=function(){return t.getItem(n())},window.STATE_MACHINE_SAVE_TO=function(e){return window.localStorage.setItem(e,JSON.stringify(a()))},window.STATE_MACHINE_LOAD=function(e){var a=e.storeName,r=e.data;return t.setItem(n()||"___STATE_MACHINE_DEBUG__",r||window.localStorage.getItem(a)||"")})}var s=Object(o.createContext)({store:{},updateStore:function(e){return e}}),f=function(e){var t=e.transform,n=e.externalStoreName,a=e.storageType,r=e.store;return t({externalStoreData:i(a,n),currentStoreData:r})};function d(e,t,n){var o=e,u=t.syncStores;if(!u)return o;try{if(Array.isArray(u))u.forEach((function(e){o=f({transform:e.transform,externalStoreName:e.externalStoreName,storageType:n,store:o})}));else{if(u.externalStoreName&&"function"===typeof u.transform&&"string"===typeof u.externalStoreName)return f({transform:u.transform,externalStoreName:u.externalStoreName,storageType:n,store:o});Object.entries(u).forEach((function(e){var t=Object(r.a)(e,2),u=t[0],l=t[1],c=i(n,u);l.forEach((function(e){o=Object.assign(Object.assign({},o),Object(a.a)({},e,Object.assign(Object.assign({},o[e]),c[e])))}))}))}}catch(l){return o}return o}var m,p,g,v="undefined"!==typeof window,h=v?window.sessionStorage:{getItem:function(e){return e},setItem:function(e){return e},clear:function(){},length:0,key:function(e){return e.toString()},removeItem:function(){}},b=[];function E(e){h=e}function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:"__STATE_MACHINE__",middleWares:[],syncStores:void 0},n=t?t.name:"__STATE_MACHINE__",a=u(h,n);g=a.getName,m=a.get,p=a.set,b=t.middleWares,c(!1,h,g,m),p(d(m()||e,t,h))}function y(e){var t=Object(o.useState)(m()),n=Object(r.a)(t,2),a=n[0],i=n[1],u=Object(o.useMemo)((function(){return{store:a,updateStore:i}}),[a]);return Object(o.createElement)(s.Provider,Object.assign({value:u},e))}var O=function(e){var t=e.options,n=e.callback,a=e.updateStore;return function(e){var r;n&&n.name;if(n&&(r=n(m(),e)),p(l(r)?m():r),h.setItem(g(),JSON.stringify(m())),l(t)||t&&!1!==t.shouldReRenderApp){var o=m();Array.isArray(b)&&b.length&&(o=b.reduce((function(e,t){return t(e)||e}),o)),a(o)}}};function C(e,t){var n=Object(o.useContext)(s),i=n.store,u=n.updateStore;return e&&Object.keys(e).length?{actions:Object.entries(e).reduce((function(e,n){var i=Object(r.a)(n,2),l=i[0],c=i[1];return Object.assign(Object.assign({},e),Object(a.a)({},l,Object(o.useCallback)(O({options:t,callback:c,updateStore:u}),[])))}),{}),action:function(e){return e},state:i}:{actions:{},action:Object(o.useCallback)(e?O({options:t,callback:e,updateStore:u}):function(){},[]),state:i}}},161:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(189);t.a=function(){var e=r.a.useContext(o.a),t=e.title,n=e.setTitle,a=e.subtitle,i=e.setSubtitle,u=e.type,l=e.setType,c=e.logoSize,s=e.setLogoSize,f=e.setDoGoBack;return{title:t,setTitle:n,subtitle:a,setSubtitle:i,type:u,setType:l,logoSize:c,setLogoSize:s,doGoBack:e.doGoBack,setDoGoBack:f}}},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(){window.scrollTo({top:0,behavior:"smooth"})}},169:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(164),r=n(192);function o(e){return function(t,n){return Object(r.a)(Object(r.a)({},t),{},Object(a.a)({},e,Object(r.a)(Object(r.a)({},t[e]),n)))}}function i(){return function(e){return{welcome:{language:e.welcome.language}}}}},248:function(e,t,n){"use strict";n.r(t);var a=n(226),r=n(165),o=n.n(r),i=n(166),u=n(157),l=n(5),c=n.n(l),s=n(186),f=n(754),d=n(163),m=n(158),p=n(173),g=n(181),v=n(156);function h(){var e=Object(v.a)(["\n  appearance: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='12' height='6' viewBox='0 0 12 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.538574 0.838867L6.1155 5.83887L11.6924 0.838867H0.538574Z' fill='%2321242C'/%3E%3C/svg%3E\");\n  background-color: ",";\n  background-position: 95% 50%;\n  background-repeat: no-repeat;\n  border: 0;\n  border-radius: 15px;\n  color: ",";\n  font-family: 'Source Sans Pro';\n  margin: auto;\n  padding: 12px 15px;\n  font-size: 14px;\n  \n  height: 48px;\n  max-width: ",";\n  width: 100%;\n\n\n  @media screen and (","){\n    max-width: 348px;\n    }\n"]);return h=function(){return e},e}var b=n(155).default.select(h(),(function(e){return e.theme.colors.midGray}),(function(e){return e.theme.colors.mineShaft}),(function(e){return e.isMobileFullWidth?"none":"320px"}),(function(e){return e.theme.breakpoints.tablet})),E=function(e){var t=e.children,n=e.value,a=e.isMobileFullWidth;return c.a.createElement(b,Object.assign({},e,{value:n,isMobileFullWidth:a}),t)},S=n(252),y=n(169),O=n(161),C=[{code:"en",label:"English"},{code:"es",label:"Espa\xf1ol"},{code:"pt",label:"Portugu\xeas"}],x=[{name:"Argentina",val:"Argentina",telephonePrefix:"+54",states:["Ciudad Aut\xf3noma de Buenos Aires","Buenos Aires","Catamarca","Chaco","Chubut","C\xf3rdoba","Corrientes","Entre R\xedos","Formosa","Jujuy","La Pampa","La Rioja","Mendoza","Misiones","Neuqu\xe9n","R\xedo Negro","Salta","San Juan","San Luis","Santa Cruz","Santa Fe","Santiago del Estero","Tierra del Fuego","Tucum\xe1n"]},{name:"Bolivia",val:"Bolivia",telephonePrefix:"+591",states:[]},{name:"Brazil",val:"Brazil",telephonePrefix:"+55",states:["Acre","Alagoas","Amap\xe1","Amazonas","Bahia","Cear\xe1","Distrito Federal","Esp\xedrito Santo","Goi\xe1s","Maranh\xe3o","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Par\xe1","Para\xedba","Paran\xe1","Pernambuco","Piau\xed","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rond\xf4nia","Roraima","Santa Catarina","S\xe3o Paulo","Sergipe","Tocantins"]},{name:"Colombia",val:"Colombia",telephonePrefix:"+57",states:["Amazonas","Antioquia","Arauca","Atl\xe1ntico","Bogot\xe1","Bol\xedvar","Boyac\xe1","Caldas","Capital District","Caquet\xe1","Casanare","Cauca","Cesar","Choc\xf3","C\xf3rdoba","Cundinamarca","Guain\xeda","Guaviare","Huila","La Guajira","Magdalena","Meta","Nari\xf1o","Norte de Santander","Putumayo","Quind\xedo","Risaralda","San Andr\xe9s y Providencia","Santander","Sucre","Tolima","Valle del Cauca","Vaup\xe9s","Vichada"]},{name:"Mexico",val:"Mexico",telephonePrefix:"+52",states:[]},{name:"Peru",val:"Peru",telephonePrefix:"+51",states:["Amazonas","Ancash","Apur\xedmac","Arequipa","Ayacucho","Cajamarca","Callao","Cuzco","Huancavelica","Hu\xe1nuco","Ica","Jun\xedn","La Libertad","Lambayeque","Lima","Loreto","Madre de Dios","Moquegua","Pasco","Piura","Puno","San Martin","Tacna","Tumbes","Ucayali"]},{name:"United States",val:"United States",telephonePrefix:"+51",states:["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]}],j=x.filter((function(e){return e.states.length>0})).map((function(e){return e.val})),A=n(162),w=n(206),T=g.e().shape({country:g.f().required(),language:g.f().required(),region:g.f().when("country",{is:function(e){return j.includes(e)},then:g.f().required(),else:g.f()}),patientId:g.f().notRequired()}).defined();t.default=c.a.memo((function(e){var t=c.a.useState(!0),n=Object(u.a)(t,2),r=n[0],g=n[1],v=Object(O.a)(),h=v.setType,b=v.setDoGoBack,j=v.setLogoSize,N=Object(m.d)(Object(y.b)(e.storeKey)),M=N.state,_=N.action,k=null===M||void 0===M?void 0:M[e.storeKey],I=Object(d.e)({defaultValues:k,resolver:Object(p.a)(T),mode:"onChange"}),B=I.control,P=I.formState,G=I.handleSubmit,L=I.watch,R=I.setValue,D=Object(s.g)(),z=P.isValid,H=function(){var t=Object(i.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n&&(_(n),n.patientId&&(null===(a=e.otherSteps)||void 0===a?void 0:a.nextStepPatient)?(g(!1),D.push(e.otherSteps.nextStepPatient)):e.nextStep&&(g(!1),D.push(e.nextStep)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(l.useEffect)((function(){Object(A.a)(),b(null),h("tertiary"),j("big")}),[]);var V=Object(f.a)(),F=V.t,W=V.i18n,q=L("language"),J=L("country");Object(l.useEffect)((function(){W.changeLanguage(q)}),[W,q]);var U=Object(l.useMemo)((function(){return[{name:F("main:selectCountry"),consentFormUrl:"",val:""}].concat(Object(a.a)(x))}),[F]),Z=Object(l.useMemo)((function(){var e=[{name:F("main:selectRegion"),val:""}];if(J){var t=x.find((function(e){return e.val===J}));t&&t.states.forEach((function(t){e.push({name:t,val:t})}))}return e}),[F,J]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(w.WelcomeStyledForm,null,c.a.createElement(w.LogoSubtitle,null,F("main:logoIntro","An Independent Nonprofit Research Organization")),c.a.createElement(w.WelcomeContent,{mt:4},c.a.createElement(w.CustomPurpleText,{mb:8},F("main:paragraph2","Covid-19 Cough Data Collection Study")),c.a.createElement(w.SupportedBy,null,F("main:supportedBy","Supported by"),c.a.createElement(w.NuevaLogo,null)),c.a.createElement(w.BoldBlackText,null,F("main:selectYourLanguage","Language")),c.a.createElement(d.a,{control:B,name:"language",defaultValue:W.language.split("-")[0]||C[0].code,render:function(e){var t=e.onChange,n=e.value;return c.a.createElement(E,{onChange:function(e){return t(e.currentTarget.value)},value:n},C.map((function(e){var t=e.code,n=e.label;return c.a.createElement("option",{key:t,id:t,value:t},n)})))}}),c.a.createElement(w.BoldBlackText,null,F("main:selectLocation","Location")),c.a.createElement(d.a,{control:B,name:"country",defaultValue:U[0].val,render:function(e){var t=e.onChange,n=e.value;return c.a.createElement(E,{onChange:function(e){t(e.currentTarget.value),R("region","",{shouldValidate:!0})},value:n},U.map((function(e){var t=e.name,n=e.val;return c.a.createElement("option",{key:t,id:t,value:n},t)})))}}),c.a.createElement(d.a,{control:B,name:"region",defaultValue:Z[0].val,render:function(e){var t=e.onChange,n=e.value;return Z.length>1?c.a.createElement(w.RegionContainer,null,c.a.createElement(E,{onChange:function(e){return t(e.currentTarget.value)},value:n},Z.map((function(e){var t=e.name,n=e.val;return c.a.createElement("option",{key:t,id:t,value:n},t)})))):c.a.createElement(c.a.Fragment,null)}}),c.a.createElement(w.BoldBlackText,null,F("main:patientId","Enter patient ID:")),c.a.createElement(d.a,{control:B,name:"patientId",defaultValue:"",render:function(e){var t=e.onChange,n=e.value,a=e.name;return c.a.createElement(w.WelcomeInput,{name:a,value:n,onChange:t,type:"text",placeholder:F("main:enterPatientId","Enter your patient ID"),autoComplete:"Off"})}}),r&&c.a.createElement(c.a.Fragment,null,c.a.createElement(w.ContainerNextButton,null,c.a.createElement(w.NextButton,{onClick:G(H),isDisable:!z},c.a.createElement(w.ArrowRightSVG,null))),c.a.createElement(S.a,{inline:!0})))))}))},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var a=n(5),r=n.n(a),o=n(754),i=n(156),u=n(155);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createElement("defs",null,r.a.createElement("style",null,".cls-1{fill:url(#linear-gradient);}.cls-2{fill:url(#linear-gradient-2);}"),r.a.createElement("linearGradient",{id:"linear-gradient",x1:-3.15,y1:189.74,x2:687.53,y2:189.74,gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{offset:0,stopColor:"#00a6e1"}),r.a.createElement("stop",{offset:1,stopColor:"#4fc1bc"})),r.a.createElement("linearGradient",{id:"linear-gradient-2",x1:-3.15,y1:63.25,x2:687.53,y2:63.25,xlinkHref:"#linear-gradient"})),f=r.a.createElement("g",null,r.a.createElement("path",{className:"cls-1",d:"M236.59,220.19a93.8,93.8,0,0,1-93.69-93.69,125.71,125.71,0,0,1-16.4,62.23,126.44,126.44,0,0,0,220.19,0,125.71,125.71,0,0,1-16.4-62.23A93.8,93.8,0,0,1,236.59,220.19Z"}),r.a.createElement("path",{className:"cls-2",d:"M456.78,32.8a93.8,93.8,0,0,1,93.69,93.69,125.72,125.72,0,0,1,16.4-62.23,126.44,126.44,0,0,0-220.19,0,125.71,125.71,0,0,1,16.4,62.23A93.8,93.8,0,0,1,456.78,32.8Z"}),r.a.createElement("path",{className:"cls-2",d:"M16.4,0a16.4,16.4,0,0,0,0,32.8,93.8,93.8,0,0,1,93.69,93.69,125.72,125.72,0,0,1,16.4-62.23A126.58,126.58,0,0,0,16.4,0Z"}),r.a.createElement("path",{className:"cls-2",d:"M677,0A126.58,126.58,0,0,0,566.87,64.26a125.71,125.71,0,0,1,16.4,62.23A93.8,93.8,0,0,1,677,32.8,16.4,16.4,0,0,0,677,0Z"}),r.a.createElement("path",{className:"cls-1",d:"M16.4,220.19a16.4,16.4,0,1,0,0,32.8,126.58,126.58,0,0,0,110.09-64.26,125.72,125.72,0,0,1-16.4-62.23A93.8,93.8,0,0,1,16.4,220.19Z"}),r.a.createElement("path",{className:"cls-1",d:"M566.87,142.89a16.4,16.4,0,0,1-16.4-16.4,93.69,93.69,0,0,1-187.39,0,125.71,125.71,0,0,1-16.4,62.23,126.47,126.47,0,0,0,236.59-62.23A16.4,16.4,0,0,1,566.87,142.89Z"}),r.a.createElement("path",{className:"cls-2",d:"M236.59,32.8a93.8,93.8,0,0,1,93.69,93.69,125.71,125.71,0,0,1,16.4-62.23,126.44,126.44,0,0,0-220.19,0,125.71,125.71,0,0,1,16.4,62.23A93.8,93.8,0,0,1,236.59,32.8Z"})),d=function(e){var t=e.svgRef,n=e.title,a=c(e,["svgRef","title"]);return r.a.createElement("svg",l({viewBox:"0 0 693.36 252.99",ref:t},a),n?r.a.createElement("title",null,n):null,s,f)},m=r.a.forwardRef((function(e,t){return r.a.createElement(d,l({svgRef:t},e))}));n.p;function p(){var e=Object(i.a)(["\n  width: 60px;\n"]);return p=function(){return e},e}function g(){var e=Object(i.a)(['\n  font-family: "Open Sans";\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: ',";\n"]);return g=function(){return e},e}function v(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: ",";\n  align-items: ",";\n  flex-direction: ",";\n  margin-top: ",";\n  > * {\n    margin: ",";\n  }\n"]);return v=function(){return e},e}var h=u.default.div(v(),(function(e){return e.inline?"center":"flex-end"}),(function(e){return e.inline?"flex-end":"center"}),(function(e){return e.inline?"row":"column"}),(function(e){return e.mt||"22px"}),(function(e){return e.inline?"0px 5px":"5px 0px"})),b=u.default.div(g(),(function(e){return e.color||"#393939"})),E=Object(u.default)(m)(p()),S=function(e){var t=e.inline,n=void 0!==t&&t,a=e.mt,i=e.color,u=Object(o.a)().t;return r.a.createElement(h,{inline:n,mt:a},r.a.createElement(b,{color:i},u("main:createdBy","Created By")),r.a.createElement("a",{href:"https://xoor.io",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(E,null)))}},288:function(e,t,n){"use strict";n.r(t);var a=n(248);n.d(t,"default",(function(){return a.default}))}}]);
//# sourceMappingURL=25.d691670c.chunk.js.map