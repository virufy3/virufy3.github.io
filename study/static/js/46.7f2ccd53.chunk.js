(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[46],{168:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(5),r=n.n(a),o=n(163),i=function(){return(i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var s=function(e){var t=e.as,n=e.errors,a=e.name,s=e.message,c=e.render,u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["as","errors","name","message","render"]),l=Object(o.f)(),p=Object(o.c)(n||l.errors,a);if(!p)return null;var d=p.message,f=p.types,m=i(i({},u),{children:d||s});return t?r.a.isValidElement(t)?r.a.cloneElement(t,m):r.a.createElement(t,m):c?c({message:d||s,messages:f}):r.a.createElement(r.a.Fragment,i({},m))}},174:function(e,t,n){var a=n(51);e.exports=function(e,t){if(null==e)return{};var n,r,o=a(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},175:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},176:function(e,t,n){e.exports={parse:n(177),stringify:n(180)}},177:function(e,t,n){var a=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,r=n(178),o=Object.create?Object.create(null):{};function i(e,t,n,a,r){var o=t.indexOf("<",a),i=t.slice(a,-1===o?void 0:o);/^\s*$/.test(i)&&(i=" "),(!r&&o>-1&&n+e.length>=0||" "!==i)&&e.push({type:"text",content:i})}e.exports=function(e,t){t||(t={}),t.components||(t.components=o);var n,s=[],c=-1,u=[],l={},p=!1;return e.replace(a,(function(a,o){if(p){if(a!=="</"+n.name+">")return;p=!1}var d,f="/"!==a.charAt(1),m=0===a.indexOf("\x3c!--"),v=o+a.length,h=e.charAt(v);f&&!m&&(c++,"tag"===(n=r(a)).type&&t.components[n.name]&&(n.type="component",p=!0),n.voidElement||p||!h||"<"===h||i(n.children,e,c,v,t.ignoreWhitespace),l[n.tagName]=n,0===c&&s.push(n),(d=u[c-1])&&d.children.push(n),u[c]=n),(m||!f||n.voidElement)&&(m||c--,!p&&"<"!==h&&h&&i(d=-1===c?s:u[c].children,e,c,v,t.ignoreWhitespace))})),!s.length&&e.length&&i(s,e,0,0,t.ignoreWhitespace),s}},178:function(e,t,n){var a=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,r=n(179);e.exports=function(e){var t,n=0,o=!0,i={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(a,(function(a){if("="===a)return o=!0,void n++;o?0===n?((r[a]||"/"===e.charAt(e.length-2))&&(i.voidElement=!0),i.name=a):(i.attrs[t]=a.replace(/^['"]|['"]$/g,""),t=void 0):(t&&(i.attrs[t]=t),t=a),n++,o=!1})),i}},179:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},180:function(e,t){function n(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(n,"")+"</"+t.name+">"}}e.exports=function(e){return e.reduce((function(e,t){return e+n("",t)}),"")}},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var a=n(212),r=n.n(a).a.create({baseURL:"https://lwdzsrlhnk.execute-api.us-east-2.amazonaws.com/prod"});function o(){return r}},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var a=n(174),r=n.n(a),o=n(175),i=n.n(o),s=n(6),c=n.n(s),u=n(5),l=n.n(u),p=n(176),d=n.n(p),f=n(147),m=n(193);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function b(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function y(e){return Array.isArray(e)?e:[e]}function O(e,t,n,a,r){if(""===t)return[];var o=a.transKeepBasicHtmlNodesFor||[],s=t&&new RegExp(o.join("|")).test(t);if(!e&&!s)return[t];var c={};!function e(t){y(t).forEach((function(t){"string"!==typeof t&&(g(t)?e(b(t)):"object"!==i()(t)||l.a.isValidElement(t)||Object.assign(c,t))}))}(e);var u=n.services.interpolator.interpolate(t,h(h({},c),r),n.language),p=d.a.parse("<0>".concat(u,"</0>"));function f(e,t,n){var a=b(e),r=v(a,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return l.a.isValidElement(e)}))}(a)&&0===r.length?a:r}function m(e,t,n,a){e.dummy&&(e.children=t),n.push(l.a.cloneElement(e,h(h({},e.props),{},{key:a}),t))}function v(t,n,r){var c=y(t);return y(n).reduce((function(t,n,u){var p=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var d=c[parseInt(n.name,10)];!d&&1===r.length&&r[0][n.name]&&(d=r[0][n.name]),d||(d={});var b=0!==Object.keys(n.attrs).length?function(e,t){var n=h({},t);return n.props=Object.assign(e.props,t.props),n}({props:n.attrs},d):d,y=l.a.isValidElement(b),O=y&&g(n,!0)&&!n.voidElement,E=s&&"object"===i()(b)&&b.dummy&&!y,j="object"===i()(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"===typeof b)t.push(b);else if(g(b)||O){m(b,f(b,n,r),t,u)}else if(E){var x=v(c,n.children,r);t.push(l.a.cloneElement(b,h(h({},b.props),{},{key:u}),x))}else if(Number.isNaN(parseFloat(n.name))){if(j)m(b,f(b,n,r),t,u);else if(a.transSupportBasicHtmlNodes&&o.indexOf(n.name)>-1)if(n.voidElement)t.push(l.a.createElement(n.name,{key:"".concat(n.name,"-").concat(u)}));else{var w=v(c,n.children,r);t.push(l.a.createElement(n.name,{key:"".concat(n.name,"-").concat(u)},w))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var S=v(c,n.children,r);t.push("<".concat(n.name,">").concat(S,"</").concat(n.name,">"))}}else if("object"!==i()(b)||y)1===n.children.length&&p?t.push(l.a.cloneElement(b,h(h({},b.props),{},{key:u}),p)):t.push(l.a.cloneElement(b,h(h({},b.props),{},{key:u})));else{var T=n.children[0]?p:null;T&&t.push(T)}}else"text"===n.type&&t.push(n.content);return t}),[])}return b(v([{dummy:!0,children:e}],p,y(e||[]))[0])}function E(e){var t=e.children,n=e.count,a=e.parent,o=e.i18nKey,s=e.tOptions,c=e.values,p=e.defaults,d=e.components,v=e.ns,g=e.i18n,b=e.t,E=r()(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),j=Object(u.useContext)(f.a)||{},x=j.i18n,w=j.defaultNS,S=g||x||Object(f.d)();if(!S)return Object(m.d)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var T=b||S.t.bind(S)||function(e){return e},k=h(h({},Object(f.c)()),S.options&&S.options.react),C=v||T.ns||w||S.options&&S.options.defaultNS;C="string"===typeof C?[C]:C||["translation"];var P=p||function e(t,n){if(!t)return"";var a="",o=y(t),s=n.transKeepBasicHtmlNodesFor||[];return o.forEach((function(t,o){if("string"===typeof t)a+="".concat(t);else if(l.a.isValidElement(t)){var c=Object.keys(t.props).length,u=s.indexOf(t.type)>-1,p=t.props.children;if(!p&&u&&0===c)a+="<".concat(t.type,"/>");else if(p||u&&0===c)if(t.props.i18nIsDynamicList)a+="<".concat(o,"></").concat(o,">");else if(u&&1===c&&"string"===typeof p)a+="<".concat(t.type,">").concat(p,"</").concat(t.type,">");else{var d=e(p,n);a+="<".concat(o,">").concat(d,"</").concat(o,">")}else a+="<".concat(o,"></").concat(o,">")}else if("object"===i()(t)){var f=t.format,v=r()(t,["format"]),h=Object.keys(v);if(1===h.length){var g=f?"".concat(h[0],", ").concat(f):h[0];a+="{{".concat(g,"}}")}else Object(m.c)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",t)}else Object(m.c)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",t)})),a}(t,k)||k.transEmptyNodeValue||o,A=k.hashTransKey,q=o||(A?A(P):P),I=c?{}:{interpolation:{prefix:"#$?",suffix:"?$#"}},D=h(h(h(h({},s),{},{count:n},c),I),{},{defaultValue:P,ns:C}),R=O(d||t,q?T(q,D):P,S,k,D),V=void 0!==a?a:k.defaultTransParent;return V?l.a.createElement(V,E,R):R}},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(5),r=n.n(a),o=n(221),i=n(754),s=n(156);function c(){var e=Object(s.a)(["\n  margin: 20px 0;\n  \n  div {\n    margin: auto;\n  }\n"]);return c=function(){return e},e}var u=n(155).default.div(c()),l=function(e){var t=e.onChange,n=Object(i.a)().i18n;return r.a.createElement(u,null,r.a.createElement(o.a,{sitekey:"6LcRhdIZAAAAAOI8zafkWF0N5SYOUjMszuEUnrJT",onChange:t,hl:n.language}))}},208:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d}));var a=n(165),r=n.n(a),o=n(166),i=n(189),s=n(183);function c(e){return u.apply(this,arguments)}function u(){return(u=Object(o.a)(r.a.mark((function e(t){var n,a,o,s,c,u,l,p,d,f,m,v,h,g,b,y,O,E,j,x,w,S,T,k,C,P,A,q,I,D;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,a=t.state,o=t.captchaValue,s=t.nextStep,c=t.setActiveStep,u=t.history,e.prev=1,n(null),m=a.welcome,v=m.language,h=m.country,g=m.region,b=m.patientId,y=m.hospitalId,O=a["submit-steps"],E=O.vaccine,j=O.ageGroup,x=O.gender,w=O.biologicalSex,S=O.smokeLastSixMonths,T=O.currentSymptoms,k=O.symptomsStartedDate,C=O.currentRespiratoryCondition,P=O.currentMedicalCondition,(A=new FormData).append("language",v),A.append("country",h),g&&A.append("region",g),y&&A.append("hospitalId",y),window.sourceCampaign&&A.append("source",window.sourceCampaign),E&&A.append("vaccine",E),"unselected"!==j&&A.append("ageGroup",j),(q=x.other||x.selected[0])&&A.append("gender",q),w&&A.append("biologicalSex",w),S&&A.append("smokeLastSixMonths",S),(null===T||void 0===T||null===(l=T.selected)||void 0===l?void 0:l.length)>0&&A.append("currentSymptoms",T.selected.join(",")),k&&A.append("symptomsStartedDate",k),(null===C||void 0===C||null===(p=C.selected)||void 0===p?void 0:p.length)>0&&A.append("currentRespiratoryCondition",C.selected.join(",")),(null===P||void 0===P||null===(d=P.selected)||void 0===d?void 0:d.length)>0&&A.append("currentMedicalCondition",P.selected.join(",")),(null===T||void 0===T?void 0:T.other)&&A.append("otherSymptoms",null===T||void 0===T?void 0:T.other),(null===C||void 0===C?void 0:C.other)&&A.append("otherRespiratoryConditions",null===C||void 0===C?void 0:C.other),(null===P||void 0===P?void 0:P.other)&&A.append("otherMedicalConditions",null===P||void 0===P?void 0:P.other),o&&A.append("captchaValue",o),e.next=27,i.a.post("/patient/".concat(b,"/questionary"),A,{headers:{"Content-Type":"multipart/form-data; boundary=Questionary"}});case 27:I=e.sent,s&&(null===(f=I.data)||void 0===f?void 0:f.submissionId)&&(c(!1),u.push(s,{submissionId:null===(D=I.data)||void 0===D?void 0:D.submissionId,patientId:b})),e.next=35;break;case 31:e.prev=31,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 35:case"end":return e.stop()}}),e,null,[[1,31]])})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(r.a.mark((function e(t){var n,a,o,c,u,l,p,d,f,m,v,h,g,b,y,O,E,j,x,w,S;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,a=t.state,o=t.captchaValue,c=t.nextStep,u=t.setActiveStep,l=t.history,e.prev=1,n(null),d=a.welcome,f=d.language,m=d.country,v=d.region,h=d.patientId,g=d.hospitalId,b=a["submit-steps"],y=b.recordYourCough,O=b.recordYourSpeech,(E=new FormData).append("language",f),E.append("country",m),v&&E.append("region",v),g&&E.append("hospitalId",g),window.sourceCampaign&&E.append("source",window.sourceCampaign),j=y.recordingFile||y.uploadedFile,E.append("cough",j,j.name||"filename.wav"),s.e.includes(m)||(x=O.recordingFile||O.uploadedFile,E.append("voice",x,x.name||"filename_voice.wav")),o&&E.append("captchaValue",o),e.next=17,i.a.post("/patient/".concat(h,"/audioCollection"),E,{headers:{"Content-Type":"multipart/form-data; boundary=AudioCollection"}});case 17:w=e.sent,c&&(null===(p=w.data)||void 0===p?void 0:p.submissionId)&&(u(!1),l.push(c,{submissionId:null===(S=w.data)||void 0===S?void 0:S.submissionId,patientId:h})),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 25:case"end":return e.stop()}}),e,null,[[1,21]])})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(r.a.mark((function e(t){var n,a,o,s,c,u,l,p,d,f,m,v,h,g,b,y,O,E,j;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,a=t.state,o=t.captchaValue,s=t.nextStep,c=t.setActiveStep,u=t.history,e.prev=1,n(null),p=a.welcome,d=p.language,f=p.country,m=p.region,v=p.patientId,h=p.hospitalId,g=a["submit-steps"],b=g.patientAntigenTestResult,y=g.patientPcrTestResult,(O=new FormData).append("language",d),O.append("country",f),m&&O.append("region",m),h&&O.append("hospitalId",h),window.sourceCampaign&&O.append("source",window.sourceCampaign),b&&O.append("patientAntigenTestResult",b),y&&O.append("patientPcrTestResult",y),o&&O.append("captchaValue",o),e.next=16,i.a.post("/patient/".concat(v,"/testResult"),O,{headers:{"Content-Type":"multipart/form-data; boundary=testResult"}});case 16:E=e.sent,s&&(null===(l=E.data)||void 0===l?void 0:l.submissionId)&&(c(!1),u.push(s,{submissionId:null===(j=E.data)||void 0===j?void 0:j.submissionId,patientId:v})),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 24:case"end":return e.stop()}}),e,null,[[1,20]])})))).apply(this,arguments)}},250:function(e,t,n){"use strict";n.r(t);var a=n(165),r=n.n(a),o=n(187),i=n(166),s=n(157),c=n(5),u=n.n(c),l=n(186),p=n(160),d=n.n(p),f=n(754),m=n(198),v=n(163),h=n(158),g=n(173),b=n(168),y=n(181),O=n(183),E=n(208),j=n(169),x=n(161),w=n(162),S=n(185),T=n(18),k=n.n(T),C=n(112),P=n(331),A=n.n(P),q=n(332),I=n.n(q),D=n(156),R=n(155);function V(){var e=Object(D.a)(["\n  font-family: Source Sans Pro;\n  font-size: 14px;\n  line-height: 142.69%;\n  color: ",";\n"]);return V=function(){return e},e}function F(){var e=Object(D.a)(["\n  font-family: Source Sans Pro;\n  font-size: 12px;\n  line-height: 142.69%;\n  color: ",";\n"]);return F=function(){return e},e}function M(){var e=Object(D.a)(["\n  flex: 1;\n  text-align: left;\n  padding: 7.41px 0 0 14px;\n  height: 100%;\n"]);return M=function(){return e},e}function N(){var e=Object(D.a)(["\n  background-color: ",";\n  border-radius: 4px;\n  border: none;\n  padding: 0 19.69px 0 14px;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return N=function(){return e},e}function B(){var e=Object(D.a)(["\n  .react-datepicker-wrapper {\n    display: block;\n    max-width: 362px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n"]);return B=function(){return e},e}var K=R.default.div(B()),$=R.default.button(N(),(function(e){return e.theme.colors.lightGray})),z=R.default.div(M()),Q=R.default.div(F(),(function(e){return e.theme.colors.darkGray})),L=R.default.div(V(),(function(e){return e.theme.colors.darkBlack})),W=u.a.forwardRef((function(e,t){var n=e.label,a=e.value,r=e.onClick;return u.a.createElement($,{ref:t,onClick:r},u.a.createElement("img",{alt:"calendar",src:A.a}),u.a.createElement(z,null,u.a.createElement(Q,null,n),u.a.createElement(L,null,a)),u.a.createElement("img",{alt:"calendar",src:I.a}))}));W.defaultProps={value:void 0,onClick:void 0};var G=u.a.memo((function(e){var t=e.label,n=e.value,a=e.locale,r=e.onChange,o=u.a.useMemo((function(){return Object(C.default)(new Date)}),[]);return u.a.createElement(K,null,u.a.createElement(k.a,{selected:n,customInput:u.a.createElement(W,{label:t}),onChange:r,dateFormat:"EEE, MMM d, Y",locale:a,maxDate:o}))})),Y=n(170),H=n(199),J=n(182),U=y.e({pcrTestDate:y.c().when("$hasPcr",{is:!0,then:y.c().required(),otherwise:y.c()}),pcrTestResult:y.f().when("$hasPcr",{is:!0,then:y.f().required(),otherwise:y.f()}),antigenTestDate:y.c().when("$hasAntigen",{is:!0,then:y.c().required(),otherwise:y.c()}),antigenTestResult:y.f().when("$hasAntigen",{is:!0,then:y.f().required(),otherwise:y.f()})}).defined(),Z=y.e({patientAntigenTestResult:y.f().oneOf(["positive","negative",""]).when("patientPcrTestResult",(function(e,t){return e?t:t.required()})),patientPcrTestResult:y.f().oneOf(["positive","negative",""])}).defined();t.default=u.a.memo((function(e){var t,n,a,p,y,T,k=e.previousStep,C=e.nextStep,P=e.storeKey,A=d()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,q=Object(x.a)(),I=q.setDoGoBack,D=q.setTitle,R=q.setSubtitle,V=q.setType,F=Object(l.g)(),M=Object(f.a)(),N=M.t,B=M.i18n,K=Object(h.d)(Object(j.b)(P)),$=K.state,z=K.action,Q=Object(O.c)(),L=u.a.useState(!0),W=Object(s.a)(L,2),_=W[0],X=W[1],ee=u.a.useState(!1),te=Object(s.a)(ee,2),ne=te[0],ae=te[1],re=u.a.useState(!1),oe=Object(s.a)(re,2),ie=oe[0],se=oe[1];Object(c.useEffect)((function(){if($){var e,t,n=($["submit-steps"]||{}).testTaken;ae(null!==(e=null===n||void 0===n?void 0:n.includes("pcr"))&&void 0!==e&&e),se(null!==(t=null===n||void 0===n?void 0:n.includes("antigen"))&&void 0!==t&&t)}}),[$]);var ce=Object(v.e)({mode:"onChange",defaultValues:null===$||void 0===$?void 0:$[P],context:{hasPcr:null!==(t=null===(n=$["submit-steps"])||void 0===n||null===(a=n.testTaken)||void 0===a?void 0:a.includes("pcr"))&&void 0!==t&&t,hasAntigen:null!==(p=null===(y=$["submit-steps"])||void 0===y||null===(T=y.testTaken)||void 0===T?void 0:T.includes("antigen"))&&void 0!==p&&p},resolver:Object(g.a)(Q?Z:U)}),ue=ce.control,le=ce.handleSubmit,pe=ce.formState,de=pe.errors,fe=pe.isValid,me=u.a.useState(null),ve=Object(s.a)(me,2),he=ve[0],ge=ve[1],be=u.a.useState(null),ye=Object(s.a)(be,2),Oe=ye[0],Ee=ye[1],je=pe.isSubmitting;Object(c.useEffect)((function(){Oe||ge(null)}),[Oe]);var xe=u.a.useCallback((function(){X(!1),k?F.push(k):F.goBack()}),[F,k]);Object(c.useEffect)((function(){Object(w.a)(),D(Q?"":N("questionary:headerText")),V(Q?"tertiary":"primary"),R(""),I((function(){return xe}))}),[xe,I,D,V,R,Q,N]);var we=function(){var e=Object(i.a)(r.a.mark((function e(t){var n,a,i,s,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=8;break}if(a=(n=t).pcrTestDate,i=n.pcrTestResult,s=n.antigenTestDate,c=n.antigenTestResult,!ne||a&&i){e.next=4;break}return e.abrupt("return");case 4:if(!ie||s&&c){e.next=6;break}return e.abrupt("return");case 6:z(t),Q?Object(E.c)({setSubmitError:function(e){return ge(e?N(e):null)},state:Object(o.a)(Object(o.a)({},$),{},{"submit-steps":Object(o.a)(Object(o.a)({},$["submit-steps"]),t)}),captchaValue:Oe,action:z,nextStep:C,setActiveStep:X,history:F}):C&&(X(!1),F.push(C));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(J.MainContainer,null,!Q&&ne&&u.a.createElement(u.a.Fragment,null,u.a.createElement(J.QuestionText,{extraSpace:!0,first:!0},N("questionary:whenPcrTest")),u.a.createElement(v.a,{control:ue,name:"pcrTestDate",defaultValue:void 0,render:function(e){var t=e.onChange,n=e.value;return u.a.createElement(G,{label:"Date",value:n?new Date(n):null,locale:B.language,onChange:t})}}),u.a.createElement(J.QuestionText,{extraSpace:!0},N("questionary:resultPcrTest.question")),u.a.createElement(v.a,{control:ue,name:"pcrTestResult",defaultValue:void 0,render:function(e){var t=e.onChange,n=e.value;return u.a.createElement(S.a,{singleSelection:!0,value:{selected:n?[n]:[]},onChange:function(e){return t(e.selected[0])},items:[{value:"positive",label:N("questionary:resultPcrTest.options.positive")},{value:"negative",label:N("questionary:resultPcrTest.options.negative")},{value:"pending",label:N("questionary:resultPcrTest.options.pending")},{value:"unsure",label:N("questionary:resultPcrTest.options.unsure")}]})}})),!Q&&ie&&u.a.createElement(u.a.Fragment,null,u.a.createElement(J.QuestionText,{extraSpace:!0,first:!ne},N("questionary:whenAntigenTest")),u.a.createElement(v.a,{control:ue,name:"antigenTestDate",defaultValue:void 0,render:function(e){var t=e.onChange,n=e.value;return u.a.createElement(G,{label:"Date",value:n?new Date(n):null,locale:B.language,onChange:t})}}),u.a.createElement(J.QuestionText,{extraSpace:!0},N("questionary:resultAntigenTest.question")),u.a.createElement(v.a,{control:ue,name:"antigenTestResult",defaultValue:void 0,render:function(e){var t=e.onChange,n=e.value;return u.a.createElement(S.a,{singleSelection:!0,value:{selected:n?[n]:[]},onChange:function(e){return t(e.selected[0])},items:[{value:"positive",label:N("questionary:resultAntigenTest.options.positive")},{value:"negative",label:N("questionary:resultAntigenTest.options.negative")},{value:"pending",label:N("questionary:resultAntigenTest.options.pending")},{value:"unsure",label:N("questionary:resultAntigenTest.options.unsure")}]})}})),Q&&u.a.createElement(u.a.Fragment,null,u.a.createElement(J.QuestionText,{extraSpace:!0},u.a.createElement(m.a,{i18nKey:"questionary:patient:resultPcrTest.question"},"What was the result of Patient ",Q,"'s PCR-based COVID-19 test?")),u.a.createElement(v.a,{control:ue,name:"patientPcrTestResult",defaultValue:"",render:function(e){var t=e.onChange,n=e.value;return u.a.createElement(S.a,{singleSelection:!0,value:{selected:n?[n]:[]},onChange:function(e){return t(e.selected[0]||"")},items:[{value:"positive",label:N("questionary:resultPcrTest.options.positive")},{value:"negative",label:N("questionary:resultPcrTest.options.negative")}]})}}),u.a.createElement(J.QuestionText,{extraSpace:!0},u.a.createElement(m.a,{i18nKey:"questionary:patient:resultAntigenTest.question'"},"What was the result of Patient ",Q,"'s rapid antigen COVID-19 test?")),u.a.createElement(v.a,{control:ue,name:"patientAntigenTestResult",defaultValue:"",render:function(e){var t=e.onChange,n=e.value;return u.a.createElement(S.a,{singleSelection:!0,value:{selected:n?[n]:[]},onChange:function(e){return t(e.selected[0]||"")},items:[{value:"positive",label:N("questionary:resultAntigenTest.options.positive")},{value:"negative",label:N("questionary:resultAntigenTest.options.negative")}]})}})),u.a.createElement("p",null,u.a.createElement(b.a,{errors:de,name:"name"})),_&&u.a.createElement(A,null,Q?he?u.a.createElement(u.a.Fragment,null,u.a.createElement(H.a,{onChange:Ee}),u.a.createElement(J.TempBeforeSubmitError,null,he)):u.a.createElement(H.a,{onChange:Ee}):null,u.a.createElement(Y.a,{leftLabel:N(Q?je?"questionary:submitting":"beforeSubmit:submitButton":"questionary:nextButton"),leftHandler:le(we),leftDisabled:Q?!Oe||je:!fe,invert:!0})))}))},331:function(e,t,n){e.exports=n.p+"static/media/calendar.ffdaf43c.svg"},332:function(e,t,n){e.exports=n.p+"static/media/chevron.66e5f21f.svg"}}]);
//# sourceMappingURL=46.7f2ccd53.chunk.js.map