(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[13,48],{160:function(t,n,e){"use strict";e.d(n,"a",(function(){return O})),e.d(n,"b",(function(){return x})),e.d(n,"c",(function(){return y})),e.d(n,"d",(function(){return E}));var r=e(159),a=e(157),o=e(5),i=function(t,n){var e=t.getItem(n);try{return e?JSON.parse(e):void 0}catch(r){return}};function c(t,n){var e=n||"__STATE_MACHINE__",r=i(t,e);return{set:function(t){r=t},get:function(){return r},getName:function(){return e}}}var u=function(t){return void 0===t};function l(t,n,e,r){"undefined"!==typeof window&&t&&(window.STATE_MACHINE_DEBUG=function(t){return n.setItem("___STATE_MACHINE_DEBUG__",t)},window.STATE_MACHINE_RESET=function(){return n.clear()},window.STATE_MACHINE_GET_STORE=function(){return n.getItem(e())},window.STATE_MACHINE_SAVE_TO=function(t){return window.localStorage.setItem(t,JSON.stringify(r()))},window.STATE_MACHINE_LOAD=function(t){var r=t.storeName,a=t.data;return n.setItem(e()||"___STATE_MACHINE_DEBUG__",a||window.localStorage.getItem(r)||"")})}var f=Object(o.createContext)({store:{},updateStore:function(t){return t}}),s=function(t){var n=t.transform,e=t.externalStoreName,r=t.storageType,a=t.store;return n({externalStoreData:i(r,e),currentStoreData:a})};function d(t,n,e){var o=t,c=n.syncStores;if(!c)return o;try{if(Array.isArray(c))c.forEach((function(t){o=s({transform:t.transform,externalStoreName:t.externalStoreName,storageType:e,store:o})}));else{if(c.externalStoreName&&"function"===typeof c.transform&&"string"===typeof c.externalStoreName)return s({transform:c.transform,externalStoreName:c.externalStoreName,storageType:e,store:o});Object.entries(c).forEach((function(t){var n=Object(a.a)(t,2),c=n[0],u=n[1],l=i(e,c);u.forEach((function(t){o=Object.assign(Object.assign({},o),Object(r.a)({},t,Object.assign(Object.assign({},o[t]),l[t])))}))}))}}catch(u){return o}return o}var m,b,g,p="undefined"!==typeof window,v=p?window.sessionStorage:{getItem:function(t){return t},setItem:function(t){return t},clear:function(){},length:0,key:function(t){return t.toString()},removeItem:function(){}},h=[];function y(t){v=t}function x(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:"__STATE_MACHINE__",middleWares:[],syncStores:void 0},e=n?n.name:"__STATE_MACHINE__",r=c(v,e);g=r.getName,m=r.get,b=r.set,h=n.middleWares,l(!1,v,g,m),b(d(m()||t,n,v))}function O(t){var n=Object(o.useState)(m()),e=Object(a.a)(n,2),r=e[0],i=e[1],c=Object(o.useMemo)((function(){return{store:r,updateStore:i}}),[r]);return Object(o.createElement)(f.Provider,Object.assign({value:c},t))}var j=function(t){var n=t.options,e=t.callback,r=t.updateStore;return function(t){var a;e&&e.name;if(e&&(a=e(m(),t)),b(u(a)?m():a),v.setItem(g(),JSON.stringify(m())),u(n)||n&&!1!==n.shouldReRenderApp){var o=m();Array.isArray(h)&&h.length&&(o=h.reduce((function(t,n){return n(t)||t}),o)),r(o)}}};function E(t,n){var e=Object(o.useContext)(f),i=e.store,c=e.updateStore;return t&&Object.keys(t).length?{actions:Object.entries(t).reduce((function(t,e){var i=Object(a.a)(e,2),u=i[0],l=i[1];return Object.assign(Object.assign({},t),Object(r.a)({},u,Object(o.useCallback)(j({options:n,callback:l,updateStore:c}),[])))}),{}),action:function(t){return t},state:i}:{actions:{},action:Object(o.useCallback)(t?j({options:n,callback:t,updateStore:c}):function(){},[]),state:i}}},161:function(t,n,e){"use strict";var r=e(5),a=e.n(r),o=e(174);n.a=function(){var t=a.a.useContext(o.a),n=t.title,e=t.setTitle,r=t.logoSize,i=t.setLogoSize,c=t.setDoGoBack;return{title:n,setTitle:e,logoSize:r,setLogoSize:i,doGoBack:t.doGoBack,setDoGoBack:c}}},162:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r=function(){window.scrollTo({top:0,behavior:"smooth"})}},163:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return i}));var r=e(159),a=e(166);function o(t){return function(n,e){return Object(a.a)(Object(a.a)({},n),{},Object(r.a)({},t,Object(a.a)(Object(a.a)({},n[t]),e)))}}function i(){return function(t){return{welcome:{language:t.welcome.language}}}}},165:function(t,n,e){"use strict";e.d(n,"a",(function(){return g}));var r=e(5),a=e.n(r),o=e(176),i=e(156),c=e(155),u=e(158);function l(){var t=Object(i.a)(["\n  height: 50px;\n  border-radius: 4px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return l=function(){return t},t}var f=c.default.button(l(),(function(t){var n=t.dark,e=t.disabled?u.a.midGray:u.a.darkBlack;return n?"\n    background-color: ".concat(e,";\n    color: ").concat(u.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(u.a.white,";\n    color: ").concat(e,";\n    border: 1px solid ").concat(e,";\n  ")})),s=a.a.memo((function(t){var n=t.children,e=Object(o.a)(t,["children"]);return a.a.createElement(f,Object.assign({type:"button"},e),n)}));function d(){var t=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n\n    &:last-of-type {\n      margin-left: 20px;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return d=function(){return t},t}var m=c.default.div(d(),(function(t){return"calc(100% - ".concat(2*t.theme.layout.generalPaddingAmount,"px)")}),(function(t){return t.theme.breakpoints.tablet})),b=a.a.memo((function(t){var n=t.invert,e=void 0!==n&&n,r=t.leftLabel,o=t.leftDisabled,i=t.leftHandler,c=t.rightLabel,u=t.rightDisabled,l=t.rightHandler;return a.a.createElement(m,null,a.a.createElement(s,{dark:e,disabled:o,onClick:i},r),c&&l&&a.a.createElement(s,{dark:!e,disabled:u,onClick:l},c))})),g=a.a.memo(b)},182:function(t,n,e){"use strict";e.d(n,"b",(function(){return f})),e.d(n,"a",(function(){return s}));var r=e(156),a=e(155),o=e(158);function i(){var t=Object(r.a)(["\n  font-family: 'Open Sans';\n  font-weight: 700;\n  font-size: 1.5rem;\n  line-height: 34.24px;\n  color: ",";\n"]);return i=function(){return t},t}function c(){var t=Object(r.a)(["\n  ","\n  color: ",";\n  ","\n"]);return c=function(){return t},t}function u(){var t=Object(r.a)(["\n  font-family: 'Source Sans Pro';\n  font-size: 0.875rem;\n  line-height: 20px;\n"]);return u=function(){return t},t}var l=Object(a.css)(u()),f=a.default.div(c(),l,(function(t){return t.dark?o.a.darkBlack:o.a.black}),(function(t){return t.fontSize?"font-size: ".concat(t.fontSize,";"):""})),s=a.default.div(i(),o.a.darkBlack)},280:function(t,n,e){"use strict";e.r(n);var r=e(159),a=e(168),o=e.n(a),i=e(169),c=e(157),u=e(5),l=e.n(u),f=e(179),s=e(170),d=e.n(s),m=e(744),b=e(160),g=e(161),p=e(165),v=e(163),h=e(162),y=e(732),x=e.n(y),O=e(733),j=e.n(O),E=e(327),T=e(281);n.default=l.a.memo((function(t){var n,e=t.storeKey,a=t.previousStep,s=t.nextStep,y=t.metadata,O=l.a.useMemo((function(){return!!y&&"recordYourCough"===y.currentLogic}),[y]),k=d()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,S=Object(g.a)(),w=S.setDoGoBack,P=S.setTitle,B=Object(f.g)(),_=Object(f.h)(),C=Object(b.d)(Object(v.b)(e)),A=C.state,M=C.action,N=Object(m.a)().t,z=null===A||void 0===A||null===(n=A[e])||void 0===n?void 0:n[null===y||void 0===y?void 0:y.currentLogic],I=z?z.recordingFile||z.uploadedFile:null,L=l.a.useRef(null),H=l.a.useRef(),G=l.a.useState(!0),D=Object(c.a)(G,2),F=D[0],R=D[1],U=l.a.useState(!1),J=Object(c.a)(U,2),Y=J[0],K=J[1],W=l.a.useState(0),Z=Object(c.a)(W,2),V=Z[0],X=Z[1],q=l.a.useState(0),Q=Object(c.a)(q,2),$=Q[0],tt=Q[1];l.a.useEffect((function(){var t=function(){!function t(n){tt(n/1e3),H.current=setTimeout((function(){t(n+200)}),200)}(0),setTimeout((function(){K(!0)}),0)},n=function(t){X(t.target.currentTime),tt(t.target.currentTime),K(!1),clearTimeout(H.current)},e=function(){var t=Object(i.a)(o.a.mark((function t(n){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){n.target.duration!==1/0&&t(n.target.duration);n.target.addEventListener("durationchange",(function e(){n.target.pause(),n.target.volume=1,n.target.currentTime=0,t(n.target.duration),n.target.removeEventListener("durationchange",e)})),n.target.volume=0,n.target.currentTime=86400}));case 2:e=t.sent,n.target.volume=1,X(e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return L.current&&(L.current.addEventListener("playing",t),L.current.addEventListener("pause",n),L.current.addEventListener("loadedmetadata",e)),function(){L.current&&(L.current.removeEventListener("playing",t),L.current.removeEventListener("pause",n),L.current.removeEventListener("loadedmetadata",e))}}),[]);var nt=l.a.useMemo((function(){var t={fileUrl:"",fileName:"",fileSize:""};if(I&&void 0!==I.size)try{var n=URL.createObjectURL(I);t.fileUrl=n,t.fileName=I.name,t.fileSize=E.a.sizeAsHuman(I.size,!0)}catch(e){console.log("Error",e)}return t}),[I]),et=nt.fileUrl,rt=nt.fileName,at=nt.fileSize,ot=l.a.useCallback((function(){s&&(R(!1),B.push(s))}),[B,s]),it=l.a.useCallback((function(){if(R(!1),_.state&&_.state.from){var t="/submit-steps/step-record/".concat(O?"cough":"speech");B.push(t)}else a?B.push(a):B.goBack()}),[_.state,a,B,O]),ct=l.a.useCallback((function(){Y&&L.current&&L.current.pause(),(null===A||void 0===A?void 0:A[e][null===y||void 0===y?void 0:y.currentLogic])&&(M(Object(r.a)({},null===y||void 0===y?void 0:y.currentLogic,{recordingFile:null,uploadFile:null})),it())}),[Y,A,e,y,M,it]),ut=l.a.useCallback((function(){Y||(tt(0),L.current&&L.current.play())}),[Y]);Object(u.useEffect)((function(){Object(h.a)(),P(N("recordingsListen:recordCough.header")),w((function(){return it}))}),[it,O,w,P,N]);var lt=l.a.useMemo((function(){var t={currentTime:"0:00",remainingTime:"0:00",trackProgress:0};if(V){var n=Math.floor(Math.floor($)/60),e=Math.floor($)-60*n;t.currentTime="".concat(n,":").concat(e<10?"0".concat(e):e);var r=V>$?Math.ceil(V-$):0,a=Math.floor(r/60),o=r-60*a;t.remainingTime="-".concat(a,":").concat(o<10?"0".concat(o):o),t.trackProgress=Math.ceil($/V*100)}return t}),[V,$]),ft=lt.currentTime,st=lt.remainingTime,dt=lt.trackProgress;return l.a.createElement(l.a.Fragment,null,et&&l.a.createElement("audio",{ref:L},l.a.createElement("source",{src:et})),l.a.createElement(T.MainContainer,null,l.a.createElement(T.Title,null,N("recordingsListen:title")),l.a.createElement(T.Text,null,N("recordingsListen:subtitle")),l.a.createElement(T.PlayerContainer,null,l.a.createElement(T.PlayerContainerTop,null,l.a.createElement(T.PlayerPlayContainer,{onClick:ut},l.a.createElement(T.PlayerPlay,{src:x.a})),l.a.createElement(T.PlayerTopMiddle,null,l.a.createElement(T.PlayerFileName,null,rt),l.a.createElement(T.PlayerFileSize,null,at)),l.a.createElement(T.PlayerCrossContainer,{onClick:ct},l.a.createElement(T.PlayerCross,{src:j.a}))),l.a.createElement(T.PlayerContainerBottom,null,l.a.createElement(T.PlayerBottomTop,null,l.a.createElement(T.PlayerBottomTrack,null),l.a.createElement(T.PlayerBottomThumb,{playing:Y,progress:dt})),l.a.createElement(T.PlayerBottomBottom,null,l.a.createElement(T.PlayerTimeIndicator,null,ft),l.a.createElement(T.PlayerTimeIndicator,null,st))))),F&&l.a.createElement(k,null,l.a.createElement(p.a,{invert:!0,leftLabel:N("recordingsListen:next"),leftHandler:ot})))}))},281:function(t,n,e){"use strict";e.r(n),e.d(n,"MainContainer",(function(){return k})),e.d(n,"Title",(function(){return S})),e.d(n,"Text",(function(){return w})),e.d(n,"PlayerContainer",(function(){return P})),e.d(n,"PlayerContainerTop",(function(){return B})),e.d(n,"PlayerPlayContainer",(function(){return _})),e.d(n,"PlayerPlay",(function(){return C})),e.d(n,"PlayerCrossContainer",(function(){return A})),e.d(n,"PlayerCross",(function(){return M})),e.d(n,"PlayerTopMiddle",(function(){return N})),e.d(n,"PlayerFileName",(function(){return z})),e.d(n,"PlayerFileSize",(function(){return I})),e.d(n,"PlayerContainerBottom",(function(){return L})),e.d(n,"PlayerBottomTop",(function(){return H})),e.d(n,"PlayerBottomTrack",(function(){return G})),e.d(n,"PlayerBottomThumb",(function(){return D})),e.d(n,"PlayerBottomBottom",(function(){return F})),e.d(n,"PlayerTimeIndicator",(function(){return R}));var r=e(156),a=e(155),o=e(158),i=e(182);function c(){var t=Object(r.a)(["\n  opacity: 0.6;\n  line-height: 1;\n"]);return c=function(){return t},t}function u(){var t=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n"]);return u=function(){return t},t}function l(){var t=Object(r.a)(["\n  position: absolute;\n  top: -2px;\n  left: ",";\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background-color: ",";\n  transform: translateX(-50%);\n  ","\n"]);return l=function(){return t},t}function f(){var t=Object(r.a)(["\n  width: 100%;\n  height: 1px;\n  background-color: ",";\n"]);return f=function(){return t},t}function s(){var t=Object(r.a)(["\n  position: relative;\n  margin-bottom: 4px;\n"]);return s=function(){return t},t}function d(){var t=Object(r.a)([""]);return d=function(){return t},t}function m(){var t=Object(r.a)(["\n  text-align: left;\n  color: ",";\n\n  @media screen and (",") {\n    font-size: 0.875rem;\n    line-height: 24px;\n  }\n"]);return m=function(){return t},t}function b(){var t=Object(r.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  text-align: left;\n\n  @media screen and (",") {\n    font-size: 1.5rem;\n    line-height: 24px;\n  }\n"]);return b=function(){return t},t}function g(){var t=Object(r.a)(["\n  flex: 1;\n"]);return g=function(){return t},t}function p(){var t=Object(r.a)(["\n  width: 14px;\n  height: 14px;\n"]);return p=function(){return t},t}function v(){var t=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  width: 22px;\n  padding-bottom: 22px;\n  margin-right: -20px;\n  padding-right: 20px;\n  box-sizing: content-box;\n"]);return v=function(){return t},t}function h(){var t=Object(r.a)(["\n  width: 10px;\n  height: 16px;\n"]);return h=function(){return t},t}function y(){var t=Object(r.a)(["\n  width: 22px;\n  padding-bottom: 22px;\n  display: flex;\n  margin-left: -20px;\n  padding-left: 20px;\n  box-sizing: content-box;\n"]);return y=function(){return t},t}function x(){var t=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  margin-bottom: 10px;\n"]);return x=function(){return t},t}function O(){var t=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n\n  @media screen and (",") {\n    max-width: 592px;\n    margin: 0 auto;\n  }\n"]);return O=function(){return t},t}function j(){var t=Object(r.a)(["\n  margin-bottom: 52px;\n  color: ",";\n\n  @media screen and (",") {\n    margin-bottom: 85px;\n  }\n"]);return j=function(){return t},t}function E(){var t=Object(r.a)(["\n  margin-top: 48px;\n  margin-bottom: 16px;\n\n  @media screen and (",") {\n    margin-top: 64px;\n    margin-bottom: 40px;\n  }\n"]);return E=function(){return t},t}function T(){var t=Object(r.a)(["\n @media screen and (",") {\n  margin-bottom: 64px;\n }\n"]);return T=function(){return t},t}var k=a.default.div(T(),(function(t){return t.theme.breakpoints.tablet})),S=Object(a.default)(i.a)(E(),(function(t){return t.theme.breakpoints.tablet})),w=Object(a.default)(i.b)(j(),(function(t){return t.theme.colors.darkGray_70}),(function(t){return t.theme.breakpoints.tablet})),P=a.default.div(O(),(function(t){return t.theme.breakpoints.tablet})),B=a.default.div(x()),_=a.default.div(y()),C=a.default.img(h()),A=a.default.div(v()),M=a.default.img(p()),N=a.default.div(g()),z=Object(a.default)(i.b).attrs({dark:!0,fontSize:"1rem"})(b(),(function(t){return t.theme.breakpoints.tablet})),I=Object(a.default)(i.b).attrs({dark:!0,fontSize:"0.625rem"})(m(),(function(t){return t.theme.colors.darkGray}),(function(t){return t.theme.breakpoints.tablet})),L=a.default.div(d()),H=a.default.div(s()),G=a.default.div(f(),o.a.darkBlack_65),D=a.default.div(l(),(function(t){return t.progress?"".concat(t.progress,"%"):"0px"}),o.a.darkBlack,(function(t){return t.playing?"transition: left 0.2s linear;":""})),F=a.default.div(u()),R=Object(a.default)(i.b).attrs({dark:!0,fontSize:"0.625rem"})(c())},327:function(t,n,e){"use strict";n.a={sizeAsHuman:function(t,n){var e=n?1e3:1024;if(Math.abs(t)<e)return"".concat(t," B");var r=n?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],a=-1;do{t/=e,++a}while(Math.abs(t)>=e&&a<r.length-1);return"".concat(t.toFixed(1)," ").concat(r[a])},blobToFile:function(t,n){var e=t;return e.lastModifiedDate=new Date,e.name=n,t}}},732:function(t,n,e){t.exports=e.p+"static/media/play.391795a2.svg"},733:function(t,n,e){t.exports=e.p+"static/media/cross.13e841fb.svg"}}]);
//# sourceMappingURL=13.0904f732.chunk.js.map