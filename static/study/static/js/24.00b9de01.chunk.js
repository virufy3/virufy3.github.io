(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[24,49],{168:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(5),a=n.n(r),o=n(163),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var c=function(e){var t=e.as,n=e.errors,r=e.name,c=e.message,s=e.render,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["as","errors","name","message","render"]),u=Object(o.f)(),p=Object(o.c)(n||u.errors,r);if(!p)return null;var d=p.message,f=p.types,m=i(i({},l),{children:d||c});return t?a.a.isValidElement(t)?a.a.cloneElement(t,m):a.a.createElement(t,m):s?s({message:d||c,messages:f}):a.a.createElement(a.a.Fragment,i({},m))}},174:function(e,t,n){var r=n(51);e.exports=function(e,t){if(null==e)return{};var n,a,o=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},175:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},176:function(e,t,n){e.exports={parse:n(177),stringify:n(180)}},177:function(e,t,n){var r=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,a=n(178),o=Object.create?Object.create(null):{};function i(e,t,n,r,a){var o=t.indexOf("<",r),i=t.slice(r,-1===o?void 0:o);/^\s*$/.test(i)&&(i=" "),(!a&&o>-1&&n+e.length>=0||" "!==i)&&e.push({type:"text",content:i})}e.exports=function(e,t){t||(t={}),t.components||(t.components=o);var n,c=[],s=-1,l=[],u={},p=!1;return e.replace(r,(function(r,o){if(p){if(r!=="</"+n.name+">")return;p=!1}var d,f="/"!==r.charAt(1),m=0===r.indexOf("\x3c!--"),v=o+r.length,h=e.charAt(v);f&&!m&&(s++,"tag"===(n=a(r)).type&&t.components[n.name]&&(n.type="component",p=!0),n.voidElement||p||!h||"<"===h||i(n.children,e,s,v,t.ignoreWhitespace),u[n.tagName]=n,0===s&&c.push(n),(d=l[s-1])&&d.children.push(n),l[s]=n),(m||!f||n.voidElement)&&(m||s--,!p&&"<"!==h&&h&&i(d=-1===s?c:l[s].children,e,s,v,t.ignoreWhitespace))})),!c.length&&e.length&&i(c,e,0,0,t.ignoreWhitespace),c}},178:function(e,t,n){var r=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,a=n(179);e.exports=function(e){var t,n=0,o=!0,i={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(r,(function(r){if("="===r)return o=!0,void n++;o?0===n?((a[r]||"/"===e.charAt(e.length-2))&&(i.voidElement=!0),i.name=r):(i.attrs[t]=r.replace(/^['"]|['"]$/g,""),t=void 0):(t&&(i.attrs[t]=t),t=r),n++,o=!1})),i}},179:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},180:function(e,t){function n(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(n,"")+"</"+t.name+">"}}e.exports=function(e){return e.reduce((function(e,t){return e+n("",t)}),"")}},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r=n(212),a=n.n(r).a.create({baseURL:"https://lwdzsrlhnk.execute-api.us-east-2.amazonaws.com/prod"});function o(){return a}},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(174),a=n.n(r),o=n(175),i=n.n(o),c=n(6),s=n.n(c),l=n(5),u=n.n(l),p=n(176),d=n.n(p),f=n(147),m=n(193);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function b(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function g(e){return Array.isArray(e)?e:[e]}function O(e,t,n,r,a){if(""===t)return[];var o=r.transKeepBasicHtmlNodesFor||[],c=t&&new RegExp(o.join("|")).test(t);if(!e&&!c)return[t];var s={};!function e(t){g(t).forEach((function(t){"string"!==typeof t&&(y(t)?e(b(t)):"object"!==i()(t)||u.a.isValidElement(t)||Object.assign(s,t))}))}(e);var l=n.services.interpolator.interpolate(t,h(h({},s),a),n.language),p=d.a.parse("<0>".concat(l,"</0>"));function f(e,t,n){var r=b(e),a=v(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return u.a.isValidElement(e)}))}(r)&&0===a.length?r:a}function m(e,t,n,r){e.dummy&&(e.children=t),n.push(u.a.cloneElement(e,h(h({},e.props),{},{key:r}),t))}function v(t,n,a){var s=g(t);return g(n).reduce((function(t,n,l){var p=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var d=s[parseInt(n.name,10)];!d&&1===a.length&&a[0][n.name]&&(d=a[0][n.name]),d||(d={});var b=0!==Object.keys(n.attrs).length?function(e,t){var n=h({},t);return n.props=Object.assign(e.props,t.props),n}({props:n.attrs},d):d,g=u.a.isValidElement(b),O=g&&y(n,!0)&&!n.voidElement,j=c&&"object"===i()(b)&&b.dummy&&!g,E="object"===i()(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"===typeof b)t.push(b);else if(y(b)||O){m(b,f(b,n,a),t,l)}else if(j){var S=v(s,n.children,a);t.push(u.a.cloneElement(b,h(h({},b.props),{},{key:l}),S))}else if(Number.isNaN(parseFloat(n.name))){if(E)m(b,f(b,n,a),t,l);else if(r.transSupportBasicHtmlNodes&&o.indexOf(n.name)>-1)if(n.voidElement)t.push(u.a.createElement(n.name,{key:"".concat(n.name,"-").concat(l)}));else{var x=v(s,n.children,a);t.push(u.a.createElement(n.name,{key:"".concat(n.name,"-").concat(l)},x))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var w=v(s,n.children,a);t.push("<".concat(n.name,">").concat(w,"</").concat(n.name,">"))}}else if("object"!==i()(b)||g)1===n.children.length&&p?t.push(u.a.cloneElement(b,h(h({},b.props),{},{key:l}),p)):t.push(u.a.cloneElement(b,h(h({},b.props),{},{key:l})));else{var k=n.children[0]?p:null;k&&t.push(k)}}else"text"===n.type&&t.push(n.content);return t}),[])}return b(v([{dummy:!0,children:e}],p,g(e||[]))[0])}function j(e){var t=e.children,n=e.count,r=e.parent,o=e.i18nKey,c=e.tOptions,s=e.values,p=e.defaults,d=e.components,v=e.ns,y=e.i18n,b=e.t,j=a()(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),E=Object(l.useContext)(f.a)||{},S=E.i18n,x=E.defaultNS,w=y||S||Object(f.d)();if(!w)return Object(m.d)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var k=b||w.t.bind(w)||function(e){return e},T=h(h({},Object(f.c)()),w.options&&w.options.react),C=v||k.ns||x||w.options&&w.options.defaultNS;C="string"===typeof C?[C]:C||["translation"];var P=p||function e(t,n){if(!t)return"";var r="",o=g(t),c=n.transKeepBasicHtmlNodesFor||[];return o.forEach((function(t,o){if("string"===typeof t)r+="".concat(t);else if(u.a.isValidElement(t)){var s=Object.keys(t.props).length,l=c.indexOf(t.type)>-1,p=t.props.children;if(!p&&l&&0===s)r+="<".concat(t.type,"/>");else if(p||l&&0===s)if(t.props.i18nIsDynamicList)r+="<".concat(o,"></").concat(o,">");else if(l&&1===s&&"string"===typeof p)r+="<".concat(t.type,">").concat(p,"</").concat(t.type,">");else{var d=e(p,n);r+="<".concat(o,">").concat(d,"</").concat(o,">")}else r+="<".concat(o,"></").concat(o,">")}else if("object"===i()(t)){var f=t.format,v=a()(t,["format"]),h=Object.keys(v);if(1===h.length){var y=f?"".concat(h[0],", ").concat(f):h[0];r+="{{".concat(y,"}}")}else Object(m.c)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",t)}else Object(m.c)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",t)})),r}(t,T)||T.transEmptyNodeValue||o,A=T.hashTransKey,D=o||(A?A(P):P),q=s?{}:{interpolation:{prefix:"#$?",suffix:"?$#"}},I=h(h(h(h({},c),{},{count:n},s),q),{},{defaultValue:P,ns:C}),V=O(d||t,D?k(D,I):P,w,T,I),R=void 0!==r?r:T.defaultTransParent;return R?u.a.createElement(R,j,V):V}},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(5),a=n.n(r),o=n(221),i=n(754),c=n(156);function s(){var e=Object(c.a)(["\n  margin: 20px 0;\n  \n  div {\n    margin: auto;\n  }\n"]);return s=function(){return e},e}var l=n(155).default.div(s()),u=function(e){var t=e.onChange,n=Object(i.a)().i18n;return a.a.createElement(l,null,a.a.createElement(o.a,{sitekey:"6LcRhdIZAAAAAOI8zafkWF0N5SYOUjMszuEUnrJT",onChange:t,hl:n.language}))}},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(165),a=n.n(r),o=n(166),i=n(188),c=n(183);function s(e){return l.apply(this,arguments)}function l(){return(l=Object(o.a)(a.a.mark((function e(t){var n,r,o,s,l,u,p,d,f,m,v,h,y,b,g,O,j,E,S,x,w,k,T,C,P,A,D,q,I,V,R,N,B,F,M,K,L,z,W,H,Y,$,G,J;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,r=t.state,o=t.captchaValue,s=t.action,l=t.nextStep,u=t.setActiveStep,p=t.history,e.prev=1,n(null),h=r.welcome,y=h.language,b=h.country,g=h.region,O=h.patientId,j=h.agreedConsentTerms,E=h.agreedPolicyTerms,S=h.agreedCovidDetection,x=h.agreedTrainingArtificial,w=h.agreedBiometric,k=r["submit-steps"],T=k.recordYourCough,C=k.recordYourSpeech,P=k.testTaken,A=k.pcrTestDate,D=k.pcrTestResult,q=k.antigenTestDate,I=k.antigenTestResult,V=k.vaccine,R=k.ageGroup,N=k.gender,B=k.biologicalSex,F=k.smokeLastSixMonths,M=k.currentSymptoms,K=k.symptomsStartedDate,L=k.currentRespiratoryCondition,z=k.currentMedicalCondition,(W=new FormData).append("language",y),W.append("country",b),g&&W.append("region",g),O&&W.append("patientId",O),window.sourceCampaign&&W.append("source",window.sourceCampaign),W.append("agreedConsentTerms",j),W.append("agreedPolicyTerms",E),W.append("agreedCovidDetection",S),W.append("agreedTrainingArtificial",x),W.append("agreedBiometric",w),H=T.recordingFile||T.uploadedFile,W.append("cough",H,H.name||"filename.wav"),c.e.includes(b)||(Y=C.recordingFile||C.uploadedFile,W.append("voice",Y,Y.name||"filename_voice.wav")),W.append("testTaken",P.join(",")),P.includes("pcr")&&(W.append("pcrTestDate",A.toISOString()),W.append("pcrTestResult",D)),P.includes("antigen")&&(W.append("antigenTestDate",q.toISOString()),W.append("antigenTestResult",I)),V&&W.append("vaccine",V),"unselected"!==R&&W.append("ageGroup",R),($=N.other||N.selected[0])&&W.append("gender",$),B&&W.append("biologicalSex",B),F&&W.append("smokeLastSixMonths",F),(null===M||void 0===M||null===(d=M.selected)||void 0===d?void 0:d.length)>0&&W.append("currentSymptoms",M.selected.join(",")),K&&W.append("symptomsStartedDate",K),(null===L||void 0===L||null===(f=L.selected)||void 0===f?void 0:f.length)>0&&W.append("currentRespiratoryCondition",L.selected.join(",")),(null===z||void 0===z||null===(m=z.selected)||void 0===m?void 0:m.length)>0&&W.append("currentMedicalCondition",z.selected.join(",")),(null===M||void 0===M?void 0:M.other)&&W.append("otherSymptoms",null===M||void 0===M?void 0:M.other),(null===L||void 0===L?void 0:L.other)&&W.append("otherRespiratoryConditions",null===L||void 0===L?void 0:L.other),(null===z||void 0===z?void 0:z.other)&&W.append("otherMedicalConditions",null===z||void 0===z?void 0:z.other),o&&W.append("captchaValue",o),e.next=38,i.a.post("saveSurvey",W,{headers:{"Content-Type":"multipart/form-data; boundary=SaveSurvey"}});case 38:G=e.sent,s({}),l&&(null===(v=G.data)||void 0===v?void 0:v.submissionId)&&(u(!1),p.push(l,{submissionId:null===(J=G.data)||void 0===J?void 0:J.submissionId})),e.next=47;break;case 43:e.prev=43,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 47:case"end":return e.stop()}}),e,null,[[1,43]])})))).apply(this,arguments)}},243:function(e,t,n){"use strict";n.r(t);var r=n(165),a=n.n(r),o=n(166),i=n(157),c=n(5),s=n.n(c),l=n(186),u=n(160),p=n.n(u),d=n(754),f=n(198),m=n(163),v=n(158),h=n(173),y=n(168),b=n(181),g=n(169),O=n(199),j=n(161),E=n(162),S=n(219),x=n(185),w=n(170),k=n(182),T=b.e({currentRespiratoryCondition:b.e().required()}).defined();t.default=s.a.memo((function(e){var t,n,r=e.previousStep,u=e.nextStep,b=e.storeKey,C=e.metadata,P=p()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,A=Object(j.a)(),D=A.setDoGoBack,q=A.setTitle,I=A.setType,V=Object(l.g)(),R=Object(d.a)().t,N=Object(v.d)(Object(g.b)(b)),B=N.state,F=N.action,M=s.a.useState(!0),K=Object(i.a)(M,2),L=K[0],z=K[1],W=s.a.useState(null),H=Object(i.a)(W,2),Y=H[0],$=H[1],G=s.a.useState(null),J=Object(i.a)(G,2),U=J[0],Q=J[1],Z=Object(m.e)({mode:"onChange",defaultValues:null===B||void 0===B?void 0:B[b],resolver:Object(h.a)(T)}),_=Z.control,X=Z.handleSubmit,ee=Z.formState,te=ee.errors,ne=ee.isValid,re=s.a.useCallback((function(){z(!1),r?V.push(r):V.goBack()}),[V,r]);Object(c.useEffect)((function(){Object(E.a)(),q("".concat(R("questionary:headerText")," ").concat(null===C||void 0===C?void 0:C.current," ").concat(R("questionary:stepOf")," ").concat(null===C||void 0===C?void 0:C.total)),I("primary"),D((function(){return re}))}),[re,D,q,I,C,R]);var ae=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=8;break}if((null!==(n=null===C||void 0===C?void 0:C.current)&&void 0!==n?n:5)!==(null!==(r=null===C||void 0===C?void 0:C.total)&&void 0!==r?r:6)){e.next=6;break}return e.next=4,Object(S.a)({setSubmitError:function(e){return $(e?R(e):null)},state:B,captchaValue:U,action:F,nextStep:u,setActiveStep:z,history:V});case 4:e.next=8;break;case 6:F(t),u&&(z(!1),V.push(u));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.a.createElement(k.MainContainer,null,s.a.createElement(k.QuestionText,{bold:!1},s.a.createElement(f.a,{i18nKey:"questionary:respiration.question"},s.a.createElement("strong",null,"Which of the below respiratory conditions do you currently have?")),s.a.createElement(k.QuestionAllApply,null,R("questionary:allThatApply"))),s.a.createElement(m.a,{control:_,name:"currentRespiratoryCondition",defaultValue:{selected:[],other:""},render:function(e){var t=e.onChange,n=e.value;return s.a.createElement(x.a,{value:n,onChange:function(e){return t(e)},items:[{value:"none",label:R("questionary:respiration.options.none")},{value:"asthma",label:R("questionary:respiration.options.asthma")},{value:"bronchitis",label:R("questionary:respiration.options.bronchitis")},{value:"copdEmphysema",label:R("questionary:respiration.options.emphysema")},{value:"pneumonia",label:R("questionary:respiration.options.pneumonia")},{value:"tuberculosis",label:R("questionary:respiration.options.tuberculosis")},{value:"other",label:R("questionary:medical.options.other")}],excludableValues:["none"]})}}),s.a.createElement("p",null,s.a.createElement(y.a,{errors:te,name:"name"})),L&&s.a.createElement(P,null,(null!==(t=null===C||void 0===C?void 0:C.current)&&void 0!==t?t:5)===(null!==(n=null===C||void 0===C?void 0:C.total)&&void 0!==n?n:6)&&s.a.createElement(O.a,{onChange:Q}),Y&&s.a.createElement(k.TempBeforeSubmitError,null,Y),s.a.createElement(w.a,{invert:!0,leftLabel:R("questionary:nextButton"),leftHandler:X(ae),leftDisabled:!ne})))}))},273:function(e,t,n){"use strict";n.r(t);var r=n(243);n.d(t,"default",(function(){return r.default}))}}]);
//# sourceMappingURL=24.00b9de01.chunk.js.map