(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[39],{159:function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return S}));var r=n(158),a=n(157),o=n(5),c=function(e,t){var n=e.getItem(t);try{return n?JSON.parse(n):void 0}catch(r){return}};function u(e,t){var n=t||"__STATE_MACHINE__",r=c(e,n);return{set:function(e){r=e},get:function(){return r},getName:function(){return n}}}var i=function(e){return void 0===e};function l(e,t,n,r){"undefined"!==typeof window&&e&&(window.STATE_MACHINE_DEBUG=function(e){return t.setItem("___STATE_MACHINE_DEBUG__",e)},window.STATE_MACHINE_RESET=function(){return t.clear()},window.STATE_MACHINE_GET_STORE=function(){return t.getItem(n())},window.STATE_MACHINE_SAVE_TO=function(e){return window.localStorage.setItem(e,JSON.stringify(r()))},window.STATE_MACHINE_LOAD=function(e){var r=e.storeName,a=e.data;return t.setItem(n()||"___STATE_MACHINE_DEBUG__",a||window.localStorage.getItem(r)||"")})}var s=Object(o.createContext)({store:{},updateStore:function(e){return e}}),f=function(e){var t=e.transform,n=e.externalStoreName,r=e.storageType,a=e.store;return t({externalStoreData:c(r,n),currentStoreData:a})};function d(e,t,n){var o=e,u=t.syncStores;if(!u)return o;try{if(Array.isArray(u))u.forEach((function(e){o=f({transform:e.transform,externalStoreName:e.externalStoreName,storageType:n,store:o})}));else{if(u.externalStoreName&&"function"===typeof u.transform&&"string"===typeof u.externalStoreName)return f({transform:u.transform,externalStoreName:u.externalStoreName,storageType:n,store:o});Object.entries(u).forEach((function(e){var t=Object(a.a)(e,2),u=t[0],i=t[1],l=c(n,u);i.forEach((function(e){o=Object.assign(Object.assign({},o),Object(r.a)({},e,Object.assign(Object.assign({},o[e]),l[e])))}))}))}}catch(i){return o}return o}var m,b,p,g="undefined"!==typeof window,v=g?window.sessionStorage:{getItem:function(e){return e},setItem:function(e){return e},clear:function(){},length:0,key:function(e){return e.toString()},removeItem:function(){}},O=[];function E(e){v=e}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:"__STATE_MACHINE__",middleWares:[],syncStores:void 0},n=t?t.name:"__STATE_MACHINE__",r=u(v,n);p=r.getName,m=r.get,b=r.set,O=t.middleWares,l(!1,v,p,m),b(d(m()||e,t,v))}function y(e){var t=Object(o.useState)(m()),n=Object(a.a)(t,2),r=n[0],c=n[1],u=Object(o.useMemo)((function(){return{store:r,updateStore:c}}),[r]);return Object(o.createElement)(s.Provider,Object.assign({value:u},e))}var j=function(e){var t=e.options,n=e.callback,r=e.updateStore;return function(e){var a;n&&n.name;if(n&&(a=n(m(),e)),b(i(a)?m():a),v.setItem(p(),JSON.stringify(m())),i(t)||t&&!1!==t.shouldReRenderApp){var o=m();Array.isArray(O)&&O.length&&(o=O.reduce((function(e,t){return t(e)||e}),o)),r(o)}}};function S(e,t){var n=Object(o.useContext)(s),c=n.store,u=n.updateStore;return e&&Object.keys(e).length?{actions:Object.entries(e).reduce((function(e,n){var c=Object(a.a)(n,2),i=c[0],l=c[1];return Object.assign(Object.assign({},e),Object(r.a)({},i,Object(o.useCallback)(j({options:t,callback:l,updateStore:u}),[])))}),{}),action:function(e){return e},state:c}:{actions:{},action:Object(o.useCallback)(e?j({options:t,callback:e,updateStore:u}):function(){},[]),state:c}}},162:function(e,t,n){"use strict";var r=n(5),a=n.n(r),o=n(181);t.a=function(){var e=a.a.useContext(o.a),t=e.title,n=e.setTitle,r=e.logoSize,c=e.setLogoSize,u=e.setDoGoBack;return{title:t,setTitle:n,logoSize:r,setLogoSize:c,doGoBack:e.doGoBack,setDoGoBack:u}}},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){window.scrollTo({top:0,behavior:"smooth"})}},164:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(158),a=n(170);function o(e){return function(t,n){return Object(a.a)(Object(a.a)({},t),{},Object(r.a)({},e,Object(a.a)(Object(a.a)({},t[e]),n)))}}function c(){return function(e){return{welcome:{language:e.welcome.language}}}}},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(5),a=n.n(r),o=n(179),c=n(156),u=n(155),i=n(160);function l(){var e=Object(c.a)(["\n  height: 50px;\n  border-radius: 4px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return l=function(){return e},e}var s=u.default.button(l(),(function(e){var t=e.dark,n=e.disabled?i.a.midGray:i.a.darkBlack;return t?"\n    background-color: ".concat(n,";\n    color: ").concat(i.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(i.a.white,";\n    color: ").concat(n,";\n    border: 1px solid ").concat(n,";\n  ")})),f=a.a.memo((function(e){var t=e.children,n=Object(o.a)(e,["children"]);return a.a.createElement(s,Object.assign({type:"button"},n),t)}));function d(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n\n    &:last-of-type {\n      margin-left: 20px;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return d=function(){return e},e}var m=u.default.div(d(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),b=a.a.memo((function(e){var t=e.invert,n=void 0!==t&&t,r=e.leftLabel,o=e.leftDisabled,c=e.leftHandler,u=e.rightLabel,i=e.rightDisabled,l=e.rightHandler;return a.a.createElement(m,null,a.a.createElement(f,{dark:n,disabled:o,onClick:c},r),u&&l&&a.a.createElement(f,{dark:!n,disabled:i,onClick:l},u))})),p=a.a.memo(b)},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(5),a=n.n(r),o=n(166),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var u=function(e){var t=e.as,n=e.errors,r=e.name,u=e.message,i=e.render,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["as","errors","name","message","render"]),s=Object(o.f)(),f=Object(o.c)(n||s.errors,r);if(!f)return null;var d=f.message,m=f.types,b=c(c({},l),{children:d||u});return t?a.a.isValidElement(t)?a.a.cloneElement(t,b):a.a.createElement(t,b):i?i({message:d||u,messages:m}):a.a.createElement(a.a.Fragment,c({},b))}},236:function(e,t,n){e.exports=n.p+"static/media/calendar.ffdaf43c.svg"},237:function(e,t,n){e.exports=n.p+"static/media/chevron.66e5f21f.svg"},239:function(e,t,n){"use strict";n.r(t);var r=n(168),a=n.n(r),o=n(169),c=n(157),u=n(5),i=n.n(u),l=n(175),s=n(167),f=n.n(s),d=n(748),m=n(166),b=n(159),p=n(173),g=n(171),v=n(174),O=n(164),E=n(162),h=n(163),y=n(250),j=n(165),S=n(188),w=v.e({symptomsStartedDate:v.c().required()}).defined();t.default=i.a.memo((function(e){var t=e.previousStep,n=e.nextStep,r=e.storeKey,s=f()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,v=Object(E.a)(),x=v.setDoGoBack,_=v.setTitle,k=Object(l.g)(),T=Object(d.a)(),A=T.t,I=T.i18n,C=Object(b.d)(Object(O.b)(r)),N=C.state,D=C.action,M=i.a.useState(!0),B=Object(c.a)(M,2),G=B[0],H=B[1],P=Object(m.e)({defaultValues:null===N||void 0===N?void 0:N[r],resolver:Object(p.a)(w)}),z=P.control,q=P.handleSubmit,L=P.formState.errors,R=i.a.useCallback((function(){H(!1),t?k.push(t):k.goBack()}),[k,t]);Object(u.useEffect)((function(){Object(h.a)(),_(A("questionary:headerText2")),x((function(){return R}))}),[R,x,_,A]);var J=function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(D(t),n&&(H(!1),k.push(n)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement(S.GrayExtraInfo,null,A("questionary:caption")),i.a.createElement(S.QuestionText,null,A("questionary:symptomsDate"),i.a.createElement(S.QuestionRequiredIndicatorText,null," *")),i.a.createElement(m.a,{control:z,name:"symptomsStartedDate",defaultValue:null,render:function(e){var t=e.onChange,n=e.value;return i.a.createElement(y.a,{label:"Date",value:n?new Date(n):null,locale:I.language,onChange:t})}}),i.a.createElement("p",null,i.a.createElement(g.a,{errors:L,name:"name"})),G&&i.a.createElement(s,null,i.a.createElement(j.a,{leftLabel:A("questionary:nextButton"),leftHandler:q(J),invert:!0})))}))},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var r=n(5),a=n.n(r),o=n(18),c=n.n(o),u=n(112),i=n(236),l=n.n(i),s=n(237),f=n.n(s),d=n(156),m=n(155);function b(){var e=Object(d.a)(["\n  font-family: Source Sans Pro;\n  font-size: 14px;\n  line-height: 142.69%;\n  color: ",";\n"]);return b=function(){return e},e}function p(){var e=Object(d.a)(["\n  font-family: Source Sans Pro;\n  font-size: 12px;\n  line-height: 142.69%;\n  color: ",";\n"]);return p=function(){return e},e}function g(){var e=Object(d.a)(["\n  flex: 1;\n  text-align: left;\n  padding: 7.41px 0 0 14px;\n  height: 100%;\n"]);return g=function(){return e},e}function v(){var e=Object(d.a)(["\n  background-color: ",";\n  border-radius: 4px;\n  border: none;\n  padding: 0 19.69px 0 14px;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return v=function(){return e},e}function O(){var e=Object(d.a)(["\n  .react-datepicker-wrapper {\n    display: block;\n    max-width: 362px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n"]);return O=function(){return e},e}var E=m.default.div(O()),h=m.default.button(v(),(function(e){return e.theme.colors.lightGray})),y=m.default.div(g()),j=m.default.div(p(),(function(e){return e.theme.colors.darkGray})),S=m.default.div(b(),(function(e){return e.theme.colors.darkBlack})),w=a.a.forwardRef((function(e,t){var n=e.label,r=e.value,o=e.onClick;return a.a.createElement(h,{ref:t,onClick:o},a.a.createElement("img",{alt:"calendar",src:l.a}),a.a.createElement(y,null,a.a.createElement(j,null,n),a.a.createElement(S,null,r)),a.a.createElement("img",{alt:"calendar",src:f.a}))}));w.defaultProps={value:void 0,onClick:void 0};var x=a.a.memo((function(e){var t=e.label,n=e.value,r=e.locale,o=e.onChange,i=a.a.useMemo((function(){return Object(u.default)(new Date)}),[]);return a.a.createElement(E,null,a.a.createElement(c.a,{selected:n,customInput:a.a.createElement(w,{label:t}),onChange:o,dateFormat:"EEE, MMM d, Y",locale:r,maxDate:i}))}))}}]);
//# sourceMappingURL=39.74105b30.chunk.js.map