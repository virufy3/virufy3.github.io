(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[11,46],{159:function(e,n,t){"use strict";t.d(n,"a",(function(){return E})),t.d(n,"b",(function(){return y})),t.d(n,"c",(function(){return O})),t.d(n,"d",(function(){return x}));var r=t(158),a=t(157),o=t(5),i=function(e,n){var t=e.getItem(n);try{return t?JSON.parse(t):void 0}catch(r){return}};function c(e,n){var t=n||"__STATE_MACHINE__",r=i(e,t);return{set:function(e){r=e},get:function(){return r},getName:function(){return t}}}var u=function(e){return void 0===e};function l(e,n,t,r){"undefined"!==typeof window&&e&&(window.STATE_MACHINE_DEBUG=function(e){return n.setItem("___STATE_MACHINE_DEBUG__",e)},window.STATE_MACHINE_RESET=function(){return n.clear()},window.STATE_MACHINE_GET_STORE=function(){return n.getItem(t())},window.STATE_MACHINE_SAVE_TO=function(e){return window.localStorage.setItem(e,JSON.stringify(r()))},window.STATE_MACHINE_LOAD=function(e){var r=e.storeName,a=e.data;return n.setItem(t()||"___STATE_MACHINE_DEBUG__",a||window.localStorage.getItem(r)||"")})}var s=Object(o.createContext)({store:{},updateStore:function(e){return e}}),f=function(e){var n=e.transform,t=e.externalStoreName,r=e.storageType,a=e.store;return n({externalStoreData:i(r,t),currentStoreData:a})};function d(e,n,t){var o=e,c=n.syncStores;if(!c)return o;try{if(Array.isArray(c))c.forEach((function(e){o=f({transform:e.transform,externalStoreName:e.externalStoreName,storageType:t,store:o})}));else{if(c.externalStoreName&&"function"===typeof c.transform&&"string"===typeof c.externalStoreName)return f({transform:c.transform,externalStoreName:c.externalStoreName,storageType:t,store:o});Object.entries(c).forEach((function(e){var n=Object(a.a)(e,2),c=n[0],u=n[1],l=i(t,c);u.forEach((function(e){o=Object.assign(Object.assign({},o),Object(r.a)({},e,Object.assign(Object.assign({},o[e]),l[e])))}))}))}}catch(u){return o}return o}var m,b,v,p="undefined"!==typeof window,g=p?window.sessionStorage:{getItem:function(e){return e},setItem:function(e){return e},clear:function(){},length:0,key:function(e){return e.toString()},removeItem:function(){}},h=[];function O(e){g=e}function y(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:"__STATE_MACHINE__",middleWares:[],syncStores:void 0},t=n?n.name:"__STATE_MACHINE__",r=c(g,t);v=r.getName,m=r.get,b=r.set,h=n.middleWares,l(!1,g,v,m),b(d(m()||e,n,g))}function E(e){var n=Object(o.useState)(m()),t=Object(a.a)(n,2),r=t[0],i=t[1],c=Object(o.useMemo)((function(){return{store:r,updateStore:i}}),[r]);return Object(o.createElement)(s.Provider,Object.assign({value:c},e))}var j=function(e){var n=e.options,t=e.callback,r=e.updateStore;return function(e){var a;t&&t.name;if(t&&(a=t(m(),e)),b(u(a)?m():a),g.setItem(v(),JSON.stringify(m())),u(n)||n&&!1!==n.shouldReRenderApp){var o=m();Array.isArray(h)&&h.length&&(o=h.reduce((function(e,n){return n(e)||e}),o)),r(o)}}};function x(e,n){var t=Object(o.useContext)(s),i=t.store,c=t.updateStore;return e&&Object.keys(e).length?{actions:Object.entries(e).reduce((function(e,t){var i=Object(a.a)(t,2),u=i[0],l=i[1];return Object.assign(Object.assign({},e),Object(r.a)({},u,Object(o.useCallback)(j({options:n,callback:l,updateStore:c}),[])))}),{}),action:function(e){return e},state:i}:{actions:{},action:Object(o.useCallback)(e?j({options:n,callback:e,updateStore:c}):function(){},[]),state:i}}},162:function(e,n,t){"use strict";var r=t(5),a=t.n(r),o=t(181);n.a=function(){var e=a.a.useContext(o.a),n=e.title,t=e.setTitle,r=e.logoSize,i=e.setLogoSize,c=e.setDoGoBack;return{title:n,setTitle:t,logoSize:r,setLogoSize:i,doGoBack:e.doGoBack,setDoGoBack:c}}},163:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r=function(){window.scrollTo({top:0,behavior:"smooth"})}},164:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return i}));var r=t(158),a=t(170);function o(e){return function(n,t){return Object(a.a)(Object(a.a)({},n),{},Object(r.a)({},e,Object(a.a)(Object(a.a)({},n[e]),t)))}}function i(){return function(e){return{welcome:{language:e.welcome.language}}}}},165:function(e,n,t){"use strict";t.d(n,"a",(function(){return v}));var r=t(5),a=t.n(r),o=t(179),i=t(156),c=t(155),u=t(160);function l(){var e=Object(i.a)(["\n  height: 50px;\n  border-radius: 4px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return l=function(){return e},e}var s=c.default.button(l(),(function(e){var n=e.dark,t=e.disabled?u.a.midGray:u.a.darkBlack;return n?"\n    background-color: ".concat(t,";\n    color: ").concat(u.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(u.a.white,";\n    color: ").concat(t,";\n    border: 1px solid ").concat(t,";\n  ")})),f=a.a.memo((function(e){var n=e.children,t=Object(o.a)(e,["children"]);return a.a.createElement(s,Object.assign({type:"button"},t),n)}));function d(){var e=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n\n    &:last-of-type {\n      margin-left: 20px;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return d=function(){return e},e}var m=c.default.div(d(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),b=a.a.memo((function(e){var n=e.invert,t=void 0!==n&&n,r=e.leftLabel,o=e.leftDisabled,i=e.leftHandler,c=e.rightLabel,u=e.rightDisabled,l=e.rightHandler;return a.a.createElement(m,null,a.a.createElement(f,{dark:t,disabled:o,onClick:i},r),c&&l&&a.a.createElement(f,{dark:!t,disabled:u,onClick:l},c))})),v=a.a.memo(b)},167:function(e,n,t){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)},a=this&&this.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var i=t(5),c=t(24),u=o(t(204));n.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).",n.default=function(e){void 0===e&&(e={});var t=e.closeOnOutsideClick,o=void 0===t||t,l=e.closeOnEsc,s=void 0===l||l,f=e.bindTo,d=e.isOpen,m=void 0!==d&&d,b=e.onOpen,v=e.onClose,p=e.onPortalClick,g=a(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),h=u.default(),O=h.isServer,y=h.isBrowser,E=i.useState(m),j=E[0],x=E[1],w=i.useRef(j),k=i.useCallback((function(e){w.current=e,x(e)}),[]),S=i.useRef(),T=i.useRef(y?document.createElement("div"):null);i.useEffect((function(){y&&!T.current&&(T.current=document.createElement("div"))}),[y,T]);var P=i.useMemo((function(){if(!O)return f&&c.findDOMNode(f)||document.body}),[O,f]),C=function(e){if(!e)return{portal:T,targetEl:S,event:e};var n=e||{};n.persist&&n.persist(),n.portal=T,n.targetEl=S,n.event=e;var t=e.currentTarget;return!S.current&&t&&t!==document&&(S.current=n.currentTarget),n},_=Object.entries(g).reduce((function(e,n){var t=n[0],r=n[1];return e[t]=function(e){O||r(C(e))},e}),{}),B=i.useCallback((function(e){if(!O){var t=C(e);if(null==S.current)throw setTimeout((function(){return k(!0)}),0),Error(n.errorMessage1);b&&b(t),k(!0)}}),[O,T,k,S,b]),M=i.useCallback((function(e){if(!O){var n=C(e);v&&w.current&&v(n),w.current&&k(!1)}}),[O,v,k]),L=i.useCallback((function(e){return w.current?M(e):B(e)}),[M,B]),N=i.useCallback((function(e){return"Escape"===e.key&&s?M(e):void 0}),[s,M]),A=i.useCallback((function(e){var n=function(n){return n.current.contains(e.target)};n(T)||0!==e.button||!w.current||n(S)||o&&M(e)}),[O,M,o,T]),z=i.useCallback((function(e){if(!O&&T.current instanceof HTMLElement){var n=C(e);T.current.contains(n.target)&&p&&p(n),A(e)}}),[A]),I=i.useRef({});i.useEffect((function(){if(!O&&P instanceof HTMLElement&&T.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},n=T.current;return P.appendChild(T.current),Object.entries(e).forEach((function(e){var n=e[0],t=e[1];g[n]&&(I.current[n]=function(e){return g[n](C(e))},document.addEventListener(t,I.current[n]))})),document.addEventListener("keydown",N),document.addEventListener("mousedown",z),function(){Object.entries(e).forEach((function(e){var n=e[0],t=e[1];g[n]&&(document.removeEventListener(t,I.current[n]),delete I.current[n])})),document.removeEventListener("keydown",N),document.removeEventListener("mousedown",z),P.removeChild(n)}}}),[O,A,N,P,T]);var H=i.useCallback((function(e){var n=e.children;return null!=T.current?c.createPortal(n,T.current):null}),[T]);return Object.assign([B,M,w.current,H,L,S,T],r(r({isOpen:w.current,openPortal:B,ref:S,closePortal:M,togglePortal:L,Portal:H,portalRef:T},_),{bind:r({ref:S},_)}))}},178:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return f}));var r=t(156),a=t(155),o=t(160);function i(){var e=Object(r.a)(["\n  font-family: 'Open Sans';\n  font-weight: 700;\n  font-size: 1.5rem;\n  line-height: 34.24px;\n  color: ",";\n"]);return i=function(){return e},e}function c(){var e=Object(r.a)(["\n  ","\n  color: ",";\n  ","\n"]);return c=function(){return e},e}function u(){var e=Object(r.a)(["\n  font-family: 'Source Sans Pro';\n  font-size: 0.875rem;\n  line-height: 20px;\n"]);return u=function(){return e},e}var l=Object(a.css)(u()),s=a.default.div(c(),l,(function(e){return e.dark?o.a.darkBlack:o.a.black}),(function(e){return e.fontSize?"font-size: ".concat(e.fontSize,";"):""})),f=a.default.div(i(),o.a.darkBlack)},179:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(n,"a",(function(){return r}))},204:function(e,n,t){"use strict";var r,a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)};Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(r=n.Device||(n.Device={}));var o=r.Browser,i=r.Server,c=r.Native,u=!("undefined"===typeof window||!window.document||!window.document.createElement),l="undefined"!=typeof navigator&&"ReactNative"==navigator.product?c:u?o:i,s={isBrowser:l===o,isServer:l===i,isNative:l===c,device:l,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:l===o&&!!window.addEventListener,canUseViewport:l===o&&!!window.screen},f=function(){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.reduce((function(e,n){return a(a({},e),n)}),{})}((e=s,Object.keys(e).map((function(n){return e[n]})),s));var e},d=f();n.weAreServer=function(){s.isServer=!0,d=f()},n.useSSR=function(){return d},n.default=n.useSSR},277:function(e,n,t){"use strict";t.r(n);var r=t(158),a=t(157),o=t(5),i=t.n(o),c=t(175),u=t(167),l=t.n(u),s=t(748),f=t(159),d=t(162),m=t(165),b=t(164),v=t(163),p=t(735),g=t.n(p),h=t(736),O=t.n(h),y=t(329),E=t(278);n.default=i.a.memo((function(e){var n,t=e.storeKey,u=e.previousStep,p=e.nextStep,h=e.metadata,j=i.a.useMemo((function(){return!!h&&"recordYourCough"===h.currentLogic}),[h]),x=l()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,w=Object(d.a)(),k=w.setDoGoBack,S=w.setTitle,T=Object(c.g)(),P=Object(c.h)(),C=Object(f.d)(Object(b.b)(t)),_=C.state,B=C.action,M=Object(s.a)().t,L=null===_||void 0===_||null===(n=_[t])||void 0===n?void 0:n[null===h||void 0===h?void 0:h.currentLogic],N=L?L.recordingFile||L.uploadedFile:null,A=i.a.useRef(null),z=i.a.useRef(),I=i.a.useState(!0),H=Object(a.a)(I,2),D=H[0],R=H[1],G=i.a.useState(!1),F=Object(a.a)(G,2),U=F[0],J=F[1],W=i.a.useState(0),Y=Object(a.a)(W,2),K=Y[0],V=Y[1],Z=i.a.useState(0),X=Object(a.a)(Z,2),q=X[0],Q=X[1];i.a.useEffect((function(){var e=function(){!function e(n){Q(n/1e3),z.current=setTimeout((function(){e(n+200)}),200)}(0),setTimeout((function(){J(!0)}),0)},n=function(e){V(e.target.currentTime),Q(e.target.currentTime),J(!1),clearTimeout(z.current)},t=function(e){V(e.target.duration)};return A.current&&(A.current.addEventListener("playing",e),A.current.addEventListener("pause",n),A.current.addEventListener("loadedmetadata",t)),function(){A.current&&(A.current.removeEventListener("playing",e),A.current.removeEventListener("pause",n),A.current.removeEventListener("loadedmetadata",t))}}),[]);var $=i.a.useMemo((function(){var e={fileUrl:"",fileName:"",fileSize:""};if(N&&void 0!==N.size)try{var n=URL.createObjectURL(N);e.fileUrl=n,e.fileName=N.name,e.fileSize=y.a.sizeAsHuman(N.size,!0)}catch(t){console.log("Error",t)}return e}),[N]),ee=$.fileUrl,ne=$.fileName,te=$.fileSize,re=i.a.useCallback((function(){p&&(R(!1),T.push(p))}),[T,p]),ae=i.a.useCallback((function(){if(R(!1),P.state&&P.state.from){var e="/submit-steps/step-record/".concat(j?"cough":"speech");T.push(e)}else u?T.push(u):T.goBack()}),[P.state,u,T,j]),oe=i.a.useCallback((function(){U&&A.current&&A.current.pause(),(null===_||void 0===_?void 0:_[t][null===h||void 0===h?void 0:h.currentLogic])&&(B(Object(r.a)({},null===h||void 0===h?void 0:h.currentLogic,{recordingFile:null,uploadFile:null})),ae())}),[U,_,t,h,B,ae]),ie=i.a.useCallback((function(){U||(Q(0),A.current&&A.current.play())}),[U]);Object(o.useEffect)((function(){Object(v.a)(),S(M("recordingsListen:recordCough.header")),k((function(){return ae}))}),[ae,j,k,S,M]);var ce=i.a.useMemo((function(){var e={currentTime:"0:00",remainingTime:"0:00",trackProgress:0};if(K){var n=Math.floor(Math.floor(q)/60),t=Math.floor(q)-60*n;e.currentTime="".concat(n,":").concat(t<10?"0".concat(t):t);var r=K>q?Math.ceil(K-q):0,a=Math.floor(r/60),o=r-60*a;e.remainingTime="-".concat(a,":").concat(o<10?"0".concat(o):o),e.trackProgress=Math.ceil(q/K*100)}return e}),[K,q]),ue=ce.currentTime,le=ce.remainingTime,se=ce.trackProgress;return i.a.createElement(i.a.Fragment,null,ee&&i.a.createElement("audio",{ref:A},i.a.createElement("source",{src:ee})),i.a.createElement(E.MainContainer,null,i.a.createElement(E.Title,null,M("recordingsListen:title")),i.a.createElement(E.Text,null,M("recordingsListen:subtitle")),i.a.createElement(E.PlayerContainer,null,i.a.createElement(E.PlayerContainerTop,null,i.a.createElement(E.PlayerPlayContainer,{onClick:ie},i.a.createElement(E.PlayerPlay,{src:g.a})),i.a.createElement(E.PlayerTopMiddle,null,i.a.createElement(E.PlayerFileName,null,ne),i.a.createElement(E.PlayerFileSize,null,te)),i.a.createElement(E.PlayerCrossContainer,{onClick:oe},i.a.createElement(E.PlayerCross,{src:O.a}))),i.a.createElement(E.PlayerContainerBottom,null,i.a.createElement(E.PlayerBottomTop,null,i.a.createElement(E.PlayerBottomTrack,null),i.a.createElement(E.PlayerBottomThumb,{playing:U,progress:se})),i.a.createElement(E.PlayerBottomBottom,null,i.a.createElement(E.PlayerTimeIndicator,null,ue),i.a.createElement(E.PlayerTimeIndicator,null,le))))),D&&i.a.createElement(x,null,i.a.createElement(m.a,{invert:!0,leftLabel:M("recordingsListen:next"),leftHandler:re})))}))},278:function(e,n,t){"use strict";t.r(n),t.d(n,"MainContainer",(function(){return k})),t.d(n,"Title",(function(){return S})),t.d(n,"Text",(function(){return T})),t.d(n,"PlayerContainer",(function(){return P})),t.d(n,"PlayerContainerTop",(function(){return C})),t.d(n,"PlayerPlayContainer",(function(){return _})),t.d(n,"PlayerPlay",(function(){return B})),t.d(n,"PlayerCrossContainer",(function(){return M})),t.d(n,"PlayerCross",(function(){return L})),t.d(n,"PlayerTopMiddle",(function(){return N})),t.d(n,"PlayerFileName",(function(){return A})),t.d(n,"PlayerFileSize",(function(){return z})),t.d(n,"PlayerContainerBottom",(function(){return I})),t.d(n,"PlayerBottomTop",(function(){return H})),t.d(n,"PlayerBottomTrack",(function(){return D})),t.d(n,"PlayerBottomThumb",(function(){return R})),t.d(n,"PlayerBottomBottom",(function(){return G})),t.d(n,"PlayerTimeIndicator",(function(){return F}));var r=t(156),a=t(155),o=t(160),i=t(178);function c(){var e=Object(r.a)(["\n  opacity: 0.6;\n  line-height: 1;\n"]);return c=function(){return e},e}function u(){var e=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n"]);return u=function(){return e},e}function l(){var e=Object(r.a)(["\n  position: absolute;\n  top: -2px;\n  left: ",";\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background-color: ",";\n  transform: translateX(-50%);\n  ","\n"]);return l=function(){return e},e}function s(){var e=Object(r.a)(["\n  width: 100%;\n  height: 1px;\n  background-color: ",";\n"]);return s=function(){return e},e}function f(){var e=Object(r.a)(["\n  position: relative;\n  margin-bottom: 4px;\n"]);return f=function(){return e},e}function d(){var e=Object(r.a)([""]);return d=function(){return e},e}function m(){var e=Object(r.a)(["\n  text-align: left;\n  color: ",";\n\n  @media screen and (",") {\n    font-size: 0.875rem;\n    line-height: 24px;\n  }\n"]);return m=function(){return e},e}function b(){var e=Object(r.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  text-align: left;\n\n  @media screen and (",") {\n    font-size: 1.5rem;\n    line-height: 24px;\n  }\n"]);return b=function(){return e},e}function v(){var e=Object(r.a)(["\n  flex: 1;\n"]);return v=function(){return e},e}function p(){var e=Object(r.a)(["\n  width: 14px;\n  height: 14px;\n"]);return p=function(){return e},e}function g(){var e=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  width: 22px;\n  padding-bottom: 22px;\n  margin-right: -20px;\n  padding-right: 20px;\n  box-sizing: content-box;\n"]);return g=function(){return e},e}function h(){var e=Object(r.a)(["\n  width: 10px;\n  height: 16px;\n"]);return h=function(){return e},e}function O(){var e=Object(r.a)(["\n  width: 22px;\n  padding-bottom: 22px;\n  display: flex;\n  margin-left: -20px;\n  padding-left: 20px;\n  box-sizing: content-box;\n"]);return O=function(){return e},e}function y(){var e=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  margin-bottom: 10px;\n"]);return y=function(){return e},e}function E(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n\n  @media screen and (",") {\n    max-width: 592px;\n    margin: 0 auto;\n  }\n"]);return E=function(){return e},e}function j(){var e=Object(r.a)(["\n  margin-bottom: 52px;\n  color: ",";\n\n  @media screen and (",") {\n    margin-bottom: 85px;\n  }\n"]);return j=function(){return e},e}function x(){var e=Object(r.a)(["\n  margin-top: 48px;\n  margin-bottom: 16px;\n\n  @media screen and (",") {\n    margin-top: 64px;\n    margin-bottom: 40px;\n  }\n"]);return x=function(){return e},e}function w(){var e=Object(r.a)(["\n @media screen and (",") {\n  margin-bottom: 64px;\n }\n"]);return w=function(){return e},e}var k=a.default.div(w(),(function(e){return e.theme.breakpoints.tablet})),S=Object(a.default)(i.a)(x(),(function(e){return e.theme.breakpoints.tablet})),T=Object(a.default)(i.b)(j(),(function(e){return e.theme.colors.darkGray_70}),(function(e){return e.theme.breakpoints.tablet})),P=a.default.div(E(),(function(e){return e.theme.breakpoints.tablet})),C=a.default.div(y()),_=a.default.div(O()),B=a.default.img(h()),M=a.default.div(g()),L=a.default.img(p()),N=a.default.div(v()),A=Object(a.default)(i.b).attrs({dark:!0,fontSize:"1rem"})(b(),(function(e){return e.theme.breakpoints.tablet})),z=Object(a.default)(i.b).attrs({dark:!0,fontSize:"0.625rem"})(m(),(function(e){return e.theme.colors.darkGray}),(function(e){return e.theme.breakpoints.tablet})),I=a.default.div(d()),H=a.default.div(f()),D=a.default.div(s(),o.a.darkBlack_65),R=a.default.div(l(),(function(e){return e.progress?"".concat(e.progress,"%"):"0px"}),o.a.darkBlack,(function(e){return e.playing?"transition: left 0.2s linear;":""})),G=a.default.div(u()),F=Object(a.default)(i.b).attrs({dark:!0,fontSize:"0.625rem"})(c())},329:function(e,n,t){"use strict";n.a={sizeAsHuman:function(e,n){var t=n?1e3:1024;if(Math.abs(e)<t)return"".concat(e," B");var r=n?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],a=-1;do{e/=t,++a}while(Math.abs(e)>=t&&a<r.length-1);return"".concat(e.toFixed(1)," ").concat(r[a])},blobToFile:function(e,n){var t=e;return t.lastModifiedDate=new Date,t.name=n,e}}},735:function(e,n,t){e.exports=t.p+"static/media/play.391795a2.svg"},736:function(e,n,t){e.exports=t.p+"static/media/cross.13e841fb.svg"}}]);
//# sourceMappingURL=11.2409efd9.chunk.js.map