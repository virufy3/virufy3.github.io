(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[15],{159:function(e,t,n){"use strict";n.d(t,"a",(function(){return x})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return S}));var r=n(158),a=n(157),o=n(5),c=function(e,t){var n=e.getItem(t);try{return n?JSON.parse(n):void 0}catch(r){return}};function i(e,t){var n=t||"__STATE_MACHINE__",r=c(e,n);return{set:function(e){r=e},get:function(){return r},getName:function(){return n}}}var l=function(e){return void 0===e};function u(e,t,n,r){"undefined"!==typeof window&&e&&(window.STATE_MACHINE_DEBUG=function(e){return t.setItem("___STATE_MACHINE_DEBUG__",e)},window.STATE_MACHINE_RESET=function(){return t.clear()},window.STATE_MACHINE_GET_STORE=function(){return t.getItem(n())},window.STATE_MACHINE_SAVE_TO=function(e){return window.localStorage.setItem(e,JSON.stringify(r()))},window.STATE_MACHINE_LOAD=function(e){var r=e.storeName,a=e.data;return t.setItem(n()||"___STATE_MACHINE_DEBUG__",a||window.localStorage.getItem(r)||"")})}var s=Object(o.createContext)({store:{},updateStore:function(e){return e}}),d=function(e){var t=e.transform,n=e.externalStoreName,r=e.storageType,a=e.store;return t({externalStoreData:c(r,n),currentStoreData:a})};function f(e,t,n){var o=e,i=t.syncStores;if(!i)return o;try{if(Array.isArray(i))i.forEach((function(e){o=d({transform:e.transform,externalStoreName:e.externalStoreName,storageType:n,store:o})}));else{if(i.externalStoreName&&"function"===typeof i.transform&&"string"===typeof i.externalStoreName)return d({transform:i.transform,externalStoreName:i.externalStoreName,storageType:n,store:o});Object.entries(i).forEach((function(e){var t=Object(a.a)(e,2),i=t[0],l=t[1],u=c(n,i);l.forEach((function(e){o=Object.assign(Object.assign({},o),Object(r.a)({},e,Object.assign(Object.assign({},o[e]),u[e])))}))}))}}catch(l){return o}return o}var m,p,b,v="undefined"!==typeof window,h=v?window.sessionStorage:{getItem:function(e){return e},setItem:function(e){return e},clear:function(){},length:0,key:function(e){return e.toString()},removeItem:function(){}},g=[];function O(e){h=e}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:"__STATE_MACHINE__",middleWares:[],syncStores:void 0},n=t?t.name:"__STATE_MACHINE__",r=i(h,n);b=r.getName,m=r.get,p=r.set,g=t.middleWares,u(!1,h,b,m),p(f(m()||e,t,h))}function x(e){var t=Object(o.useState)(m()),n=Object(a.a)(t,2),r=n[0],c=n[1],i=Object(o.useMemo)((function(){return{store:r,updateStore:c}}),[r]);return Object(o.createElement)(s.Provider,Object.assign({value:i},e))}var E=function(e){var t=e.options,n=e.callback,r=e.updateStore;return function(e){var a;n&&n.name;if(n&&(a=n(m(),e)),p(l(a)?m():a),h.setItem(b(),JSON.stringify(m())),l(t)||t&&!1!==t.shouldReRenderApp){var o=m();Array.isArray(g)&&g.length&&(o=g.reduce((function(e,t){return t(e)||e}),o)),r(o)}}};function S(e,t){var n=Object(o.useContext)(s),c=n.store,i=n.updateStore;return e&&Object.keys(e).length?{actions:Object.entries(e).reduce((function(e,n){var c=Object(a.a)(n,2),l=c[0],u=c[1];return Object.assign(Object.assign({},e),Object(r.a)({},l,Object(o.useCallback)(E({options:t,callback:u,updateStore:i}),[])))}),{}),action:function(e){return e},state:c}:{actions:{},action:Object(o.useCallback)(e?E({options:t,callback:e,updateStore:i}):function(){},[]),state:c}}},162:function(e,t,n){"use strict";var r=n(5),a=n.n(r),o=n(181);t.a=function(){var e=a.a.useContext(o.a),t=e.title,n=e.setTitle,r=e.logoSize,c=e.setLogoSize,i=e.setDoGoBack;return{title:t,setTitle:n,logoSize:r,setLogoSize:c,doGoBack:e.doGoBack,setDoGoBack:i}}},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){window.scrollTo({top:0,behavior:"smooth"})}},164:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(158),a=n(168);function o(e){return function(t,n){return Object(a.a)(Object(a.a)({},t),{},Object(r.a)({},e,Object(a.a)(Object(a.a)({},t[e]),n)))}}function c(){return function(e){return{welcome:{language:e.welcome.language}}}}},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(5),a=n.n(r),o=n(179),c=n(156),i=n(155),l=n(160);function u(){var e=Object(c.a)(["\n  height: 50px;\n  border-radius: 4px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return u=function(){return e},e}var s=i.default.button(u(),(function(e){var t=e.dark,n=e.disabled?l.a.midGray:l.a.darkBlack;return t?"\n    background-color: ".concat(n,";\n    color: ").concat(l.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(l.a.white,";\n    color: ").concat(n,";\n    border: 1px solid ").concat(n,";\n  ")})),d=a.a.memo((function(e){var t=e.children,n=Object(o.a)(e,["children"]);return a.a.createElement(s,Object.assign({type:"button"},n),t)}));function f(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n\n    &:last-of-type {\n      margin-left: 20px;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return f=function(){return e},e}var m=i.default.div(f(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),p=a.a.memo((function(e){var t=e.invert,n=void 0!==t&&t,r=e.leftLabel,o=e.leftDisabled,c=e.leftHandler,i=e.rightLabel,l=e.rightDisabled,u=e.rightHandler;return a.a.createElement(m,null,a.a.createElement(d,{dark:n,disabled:o,onClick:c},r),i&&u&&a.a.createElement(d,{dark:!n,disabled:l,onClick:u},i))})),b=a.a.memo(p)},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(5),a=n.n(r),o=n(166),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var i=function(e){var t=e.as,n=e.errors,r=e.name,i=e.message,l=e.render,u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["as","errors","name","message","render"]),s=Object(o.f)(),d=Object(o.c)(n||s.errors,r);if(!d)return null;var f=d.message,m=d.types,p=c(c({},u),{children:f||i});return t?a.a.isValidElement(t)?a.a.cloneElement(t,p):a.a.createElement(t,p):l?l({message:f||i,messages:m}):a.a.createElement(a.a.Fragment,c({},p))}},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(5),a=n.n(r),o=n(160),c=n(156),i=n(155);function l(){var e=Object(c.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: 'SF Pro Display';\n  font-size: 16px;\n  line-height: 24px;\n"]);return l=function(){return e},e}function u(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  margin: -4px 0px 20px;\n\n  svg {\n    circle {\n      transition: stroke-dashoffset 0.35s;\n      transform: rotate(-90deg);\n      transform-origin: 50% 50%;\n\n      &.track {\n        transform: rotate(90deg);\n      }\n    }\n  }\n\n  @media screen and (",") {\n    margin: 20px 0px 40px;\n\n    svg {\n      width: 80px;\n      height: 80px;\n    }\n  }\n"]);return u=function(){return e},e}var s=i.default.div(u(),(function(e){return e.theme.breakpoints.tablet})),d=(i.default.div(l()),a.a.memo((function(e){var t=e.className,n=void 0===t?"":t,r=e.radius,c=void 0===r?30:r,i=e.stroke,l=void 0===i?6:i,u=e.currentStep,d=void 0===u?2:u,f=e.totalSteps,m=void 0===f?4:f,p=e.color,b=void 0===p?o.a.green:p,v=e.colorTrack,h=void 0===v?o.a.gray3:v,g=d/m*100,O=c-l/2,y=2*O*Math.PI,x=y-g/100*y;return a.a.createElement(s,{className:n},a.a.createElement("svg",{width:2*c,height:2*c,viewBox:"0 0 ".concat(2*c," ").concat(2*c)},a.a.createElement("circle",{className:"track",stroke:h,fill:"transparent",strokeWidth:l,r:O,cx:c,cy:c}),a.a.createElement("circle",{stroke:b,fill:"transparent",strokeWidth:l,strokeDasharray:"".concat(y," ").concat(y),style:{strokeDashoffset:x},r:O,cx:c,cy:c}),a.a.createElement("text",{fontSize:"16",fill:"#000000",x:"50%",y:"50%",dominantBaseline:"middle",textAnchor:"middle"},"".concat(d,"/").concat(m))))})))},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var r=n(177),a=n(157),o=n(5),c=n.n(o),i=n(156),l=n(155);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=c.a.createElement("path",{d:"M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM10.0234 4.71406L6.73281 9.27656C6.68682 9.34076 6.62619 9.39306 6.55595 9.42914C6.48571 9.46523 6.40787 9.48405 6.32891 9.48405C6.24994 9.48405 6.17211 9.46523 6.10186 9.42914C6.03162 9.39306 5.97099 9.34076 5.925 9.27656L3.97656 6.57656C3.91719 6.49375 3.97656 6.37813 4.07812 6.37813H4.81094C4.97031 6.37813 5.12187 6.45469 5.21562 6.58594L6.32812 8.12969L8.78438 4.72344C8.87813 4.59375 9.02812 4.51562 9.18906 4.51562H9.92188C10.0234 4.51562 10.0828 4.63125 10.0234 4.71406Z",fill:"#00A588"}),f=function(e){var t=e.svgRef,n=e.title,r=s(e,["svgRef","title"]);return c.a.createElement("svg",u({width:14,height:14,viewBox:"0 0 14 14",fill:"none",ref:t},r),n?c.a.createElement("title",null,n):null,d)},m=c.a.forwardRef((function(e,t){return c.a.createElement(f,u({svgRef:t},e))}));n.p;function p(){var e=Object(i.a)(["\n  height: 50px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  color: ",";\n  width: 100%;\n  padding: 0 20px;\n  border: none;\n  background-color: ",";\n  border-top: 1px "," solid;\n  border-bottom: 1px "," solid;\n  ::placeholder {\n    color: ",";\n  }\n  @media screen and (","){\n    text-align: center;\n  }\n"]);return p=function(){return e},e}function b(){var e=Object(i.a)(["\n  position: relative;\n  display: inline-block;\n  width: calc(100% + 40px);\n  margin: 0 -20px;\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return b=function(){return e},e}function v(){var e=Object(i.a)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin-top: 18px;\n  margin-right: 29px;\n  @media screen and (","){\n    margin-right: 31px;\n  }\n"]);return v=function(){return e},e}function h(){var e=Object(i.a)(["\n  font-weight: bold;\n"]);return h=function(){return e},e}function g(){var e=Object(i.a)(["\n  position: relative;\n  height: 50px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  color: ",";\n  font-size: 14px;\n  text-align: left;\n  width: calc(100% + 40px);\n  padding: 0 20px;\n  margin: 0 -20px;\n  border: none;\n  background-color: ",";\n  border-top: 1px "," solid;\n  border-bottom: ",";\n  @media screen and (","){\n    max-width: 470px;\n    text-align: center;\n  }\n"]);return g=function(){return e},e}var O=l.default.button(g(),(function(e){return e.theme.colors.darkBlack}),(function(e){return e.isSelected?e.theme.colors.green_25:"transparent"}),(function(e){return e.theme.colors.darkBlack_04}),(function(e){return e.lastItem?"1px ".concat(e.theme.colors.darkBlack_04," solid"):"none"}),(function(e){return e.theme.breakpoints.tablet})),y=Object(l.default)(O)(h()),x=Object(l.default)(m)(v(),(function(e){return e.theme.breakpoints.tablet})),E=l.default.div(b(),(function(e){return e.theme.breakpoints.tablet})),S=l.default.input(p(),(function(e){return e.theme.colors.darkBlack}),(function(e){return e.isSelected?e.theme.colors.green_25:"transparent"}),(function(e){return e.theme.colors.darkBlack_04}),(function(e){return e.theme.colors.darkBlack_04}),(function(e){return e.theme.colors.midDarkGray}),(function(e){return e.theme.breakpoints.tablet})),j={selected:[],other:""},k=function(e){var t=e.value,n=void 0===t?j:t,i=e.items,l=e.excludableValue,u=e.singleSelection,s=e.onChange,d=e.allowAddOther,f=e.addOtherLabel,m=e.enableOther,p=e.otherPlaceholder,b=Object(o.useState)(!1),v=Object(a.a)(b,2),h=v[0],g=v[1];Object(o.useEffect)((function(){g(!!m||!!(null===n||void 0===n?void 0:n.other))}),[n,m]);var k=function(e){var t,r=n.selected;t=u||l&&r.includes(l)?[]:r,s&&s({selected:t,other:e}),e||g(!1)};return c.a.createElement(c.a.Fragment,null,i.map((function(e,t){var a,o=null===n||void 0===n||null===(a=n.selected)||void 0===a?void 0:a.includes(e.value);return c.a.createElement(O,{key:e.value,lastItem:i.length===t+1&&!d&&!m,onClick:function(){return function(e){var t,a,o=n.selected,c=n.other,i=o.indexOf(e.value);i>=0?(t=[].concat(Object(r.a)(o.slice(0,i)),Object(r.a)(o.slice(i+1))),a=c):u||e.value===l||l&&o.includes(l)?(t=[e.value],a=void 0):(t=[].concat(Object(r.a)(o),[e.value]),a=c),s&&s({selected:t,other:a})}(e)},isSelected:o},e.label,o&&c.a.createElement(x,null))})),d&&!h&&c.a.createElement(y,{onClick:function(){g(!0)},lastItem:!0},f),h&&c.a.createElement(E,null,c.a.createElement(S,{placeholder:p,value:(null===n||void 0===n?void 0:n.other)||"",isSelected:!!(null===n||void 0===n?void 0:n.other),onChange:function(e){return k(e.target.value)}}),!!(null===n||void 0===n?void 0:n.other)&&c.a.createElement(x,null)))};k.defaultProps={value:j,excludableValue:void 0,singleSelection:!1,onChange:void 0,allowAddOther:!1,addOtherLabel:"",enableOther:!1,otherPlaceholder:""};var w=c.a.memo(k)},261:function(e,t,n){"use strict";n.r(t);var r=n(169),a=n.n(r),o=n(170),c=n(157),i=n(5),l=n.n(i),u=n(175),s=n(167),d=n.n(s),f=n(748),m=n(166),p=n(159),b=n(173),v=n(171),h=n(174),g=n(164),O=n(182),y=n(162),x=n(163),E=n(183),S=n(165),j=n(188),k=h.e({testTaken:h.a().of(h.f().required()).required().default([]).test("SelecteOne","Select one",(function(e){return!(e&&e.length>1&&e.includes("neither"))}))}).defined();t.default=l.a.memo((function(e){var t=e.previousStep,n=e.nextStep,r=e.storeKey,s=e.otherSteps,h=e.metadata,w=d()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,T=Object(y.a)(),_=T.setDoGoBack,C=T.setTitle,I=Object(u.g)(),A=Object(f.a)().t,N=Object(p.d)(Object(g.b)(r)),B=N.state,P=N.action,D=l.a.useState(!0),H=Object(c.a)(D,2),M=H[0],q=H[1],G=Object(m.e)({mode:"onChange",defaultValues:null===B||void 0===B?void 0:B[r],resolver:Object(b.a)(k)}),L=G.control,z=G.handleSubmit,R=G.formState,V=R.errors,W=R.isValid,J=l.a.useCallback((function(){q(!1),t?I.push(t):I.goBack()}),[I,t]);Object(i.useEffect)((function(){Object(x.a)(),C(A("questionary:headerText")),_((function(){return J}))}),[J,_,C,A]);var F=function(){var e=Object(o.a)(a.a.mark((function e(t){var r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(r=t.testTaken)&&(o=r.includes("neither"),P(t),o&&s&&s.noTestStep?(q(!1),I.push(s.noTestStep)):n&&(q(!1),I.push(n)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,{currentStep:(null===h||void 0===h?void 0:h.progressCurrent)||3,totalSteps:(null===h||void 0===h?void 0:h.progressTotal)||4}),l.a.createElement(j.Title,null,A("questionary:title")),l.a.createElement(j.WomanWithPhone,null),l.a.createElement(j.GrayExtraInfo,null,A("questionary:caption")),l.a.createElement(j.QuestionText,null,A("questionary:testTaken.question"),l.a.createElement(j.QuestionRequiredIndicatorText,null," *")),l.a.createElement(m.a,{control:L,name:"testTaken",defaultValue:[],render:function(e){var t=e.onChange,n=e.value;return l.a.createElement(E.a,{value:{selected:n},onChange:function(e){return t(e.selected)},items:[{value:"pcr",label:A("questionary:testTaken.options.pcr")},{value:"antigen",label:A("questionary:testTaken.options.antigen")},{value:"neither",label:A("questionary:testTaken.options.neither")}],excludableValue:"neither"})}}),l.a.createElement("p",null,l.a.createElement(v.a,{errors:V,name:"name"})),M&&l.a.createElement(w,null,h&&l.a.createElement(j.QuestionStepIndicator,null,h.current," ",A("questionary:stepOf")," ",h.total),l.a.createElement(S.a,{leftLabel:A("questionary:nextButton"),leftHandler:z(F),leftDisabled:!W,invert:!0})))}))}}]);
//# sourceMappingURL=15.ed56f8b2.chunk.js.map