(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[14],{158:function(e,t,n){"use strict";n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return S}));var r=n(164),o=n(157),c=n(5),a=function(e,t){var n=e.getItem(t);try{return n?JSON.parse(n):void 0}catch(r){return}};function i(e,t){var n=t||"__STATE_MACHINE__",r=a(e,n);return{set:function(e){r=e},get:function(){return r},getName:function(){return n}}}var u=function(e){return void 0===e};function s(e,t,n,r){"undefined"!==typeof window&&e&&(window.STATE_MACHINE_DEBUG=function(e){return t.setItem("___STATE_MACHINE_DEBUG__",e)},window.STATE_MACHINE_RESET=function(){return t.clear()},window.STATE_MACHINE_GET_STORE=function(){return t.getItem(n())},window.STATE_MACHINE_SAVE_TO=function(e){return window.localStorage.setItem(e,JSON.stringify(r()))},window.STATE_MACHINE_LOAD=function(e){var r=e.storeName,o=e.data;return t.setItem(n()||"___STATE_MACHINE_DEBUG__",o||window.localStorage.getItem(r)||"")})}var l=Object(c.createContext)({store:{},updateStore:function(e){return e}}),f=function(e){var t=e.transform,n=e.externalStoreName,r=e.storageType,o=e.store;return t({externalStoreData:a(r,n),currentStoreData:o})};function p(e,t,n){var c=e,i=t.syncStores;if(!i)return c;try{if(Array.isArray(i))i.forEach((function(e){c=f({transform:e.transform,externalStoreName:e.externalStoreName,storageType:n,store:c})}));else{if(i.externalStoreName&&"function"===typeof i.transform&&"string"===typeof i.externalStoreName)return f({transform:i.transform,externalStoreName:i.externalStoreName,storageType:n,store:c});Object.entries(i).forEach((function(e){var t=Object(o.a)(e,2),i=t[0],u=t[1],s=a(n,i);u.forEach((function(e){c=Object.assign(Object.assign({},c),Object(r.a)({},e,Object.assign(Object.assign({},c[e]),s[e])))}))}))}}catch(u){return c}return c}var d,v,m,b="undefined"!==typeof window,y=b?window.sessionStorage:{getItem:function(e){return e},setItem:function(e){return e},clear:function(){},length:0,key:function(e){return e.toString()},removeItem:function(){}},h=[];function O(e){y=e}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:"__STATE_MACHINE__",middleWares:[],syncStores:void 0},n=t?t.name:"__STATE_MACHINE__",r=i(y,n);m=r.getName,d=r.get,v=r.set,h=t.middleWares,s(!1,y,m,d),v(p(d()||e,t,y))}function E(e){var t=Object(c.useState)(d()),n=Object(o.a)(t,2),r=n[0],a=n[1],i=Object(c.useMemo)((function(){return{store:r,updateStore:a}}),[r]);return Object(c.createElement)(l.Provider,Object.assign({value:i},e))}var j=function(e){var t=e.options,n=e.callback,r=e.updateStore;return function(e){var o;n&&n.name;if(n&&(o=n(d(),e)),v(u(o)?d():o),y.setItem(m(),JSON.stringify(d())),u(t)||t&&!1!==t.shouldReRenderApp){var c=d();Array.isArray(h)&&h.length&&(c=h.reduce((function(e,t){return t(e)||e}),c)),r(c)}}};function S(e,t){var n=Object(c.useContext)(l),a=n.store,i=n.updateStore;return e&&Object.keys(e).length?{actions:Object.entries(e).reduce((function(e,n){var a=Object(o.a)(n,2),u=a[0],s=a[1];return Object.assign(Object.assign({},e),Object(r.a)({},u,Object(c.useCallback)(j({options:t,callback:s,updateStore:i}),[])))}),{}),action:function(e){return e},state:a}:{actions:{},action:Object(c.useCallback)(e?j({options:t,callback:e,updateStore:i}):function(){},[]),state:a}}},160:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(5),i=n(24),u=c(n(167));t.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).",t.default=function(e){void 0===e&&(e={});var n=e.closeOnOutsideClick,c=void 0===n||n,s=e.closeOnEsc,l=void 0===s||s,f=e.bindTo,p=e.isOpen,d=void 0!==p&&p,v=e.onOpen,m=e.onClose,b=e.onPortalClick,y=o(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),h=u.default(),O=h.isServer,g=h.isBrowser,E=a.useState(d),j=E[0],S=E[1],w=a.useRef(j),_=a.useCallback((function(e){w.current=e,S(e)}),[]),k=a.useRef(),x=a.useRef(g?document.createElement("div"):null);a.useEffect((function(){g&&!x.current&&(x.current=document.createElement("div"))}),[g,x]);var N=a.useMemo((function(){if(!O)return f&&i.findDOMNode(f)||document.body}),[O,f]),T=function(e){if(!e)return{portal:x,targetEl:k,event:e};var t=e||{};t.persist&&t.persist(),t.portal=x,t.targetEl=k,t.event=e;var n=e.currentTarget;return!k.current&&n&&n!==document&&(k.current=t.currentTarget),t},A=Object.entries(y).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=function(e){O||r(T(e))},e}),{}),C=a.useCallback((function(e){if(!O){var n=T(e);if(null==k.current)throw setTimeout((function(){return _(!0)}),0),Error(t.errorMessage1);v&&v(n),_(!0)}}),[O,x,_,k,v]),P=a.useCallback((function(e){if(!O){var t=T(e);m&&w.current&&m(t),w.current&&_(!1)}}),[O,m,_]),I=a.useCallback((function(e){return w.current?P(e):C(e)}),[P,C]),M=a.useCallback((function(e){return"Escape"===e.key&&l?P(e):void 0}),[l,P]),H=a.useCallback((function(e){var t=function(t){return t.current.contains(e.target)};t(x)||0!==e.button||!w.current||t(k)||c&&P(e)}),[O,P,c,x]),D=a.useCallback((function(e){if(!O&&x.current instanceof HTMLElement){var t=T(e);x.current.contains(t.target)&&b&&b(t),H(e)}}),[H]),R=a.useRef({});a.useEffect((function(){if(!O&&N instanceof HTMLElement&&x.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},t=x.current;return N.appendChild(x.current),Object.entries(e).forEach((function(e){var t=e[0],n=e[1];y[t]&&(R.current[t]=function(e){return y[t](T(e))},document.addEventListener(n,R.current[t]))})),document.addEventListener("keydown",M),document.addEventListener("mousedown",D),function(){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];y[t]&&(document.removeEventListener(n,R.current[t]),delete R.current[t])})),document.removeEventListener("keydown",M),document.removeEventListener("mousedown",D),N.removeChild(t)}}}),[O,H,M,N,x]);var L=a.useCallback((function(e){var t=e.children;return null!=x.current?i.createPortal(t,x.current):null}),[x]);return Object.assign([C,P,w.current,L,I,k,x],r(r({isOpen:w.current,openPortal:C,ref:k,closePortal:P,togglePortal:I,Portal:L,portalRef:x},A),{bind:r({ref:k},A)}))}},167:function(e,t,n){"use strict";var r,o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(r=t.Device||(t.Device={}));var c=r.Browser,a=r.Server,i=r.Native,u=!("undefined"===typeof window||!window.document||!window.document.createElement),s="undefined"!=typeof navigator&&"ReactNative"==navigator.product?i:u?c:a,l={isBrowser:s===c,isServer:s===a,isNative:s===i,device:s,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:s===c&&!!window.addEventListener,canUseViewport:s===c&&!!window.screen},f=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return o(o({},e),t)}),{})}((e=l,Object.keys(e).map((function(t){return e[t]})),l));var e},p=f();t.weAreServer=function(){l.isServer=!0,p=f()},t.useSSR=function(){return p},t.default=t.useSSR},171:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},174:function(e,t,n){var r=n(51);e.exports=function(e,t){if(null==e)return{};var n,o,c=r(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}},175:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},176:function(e,t,n){e.exports={parse:n(177),stringify:n(180)}},177:function(e,t,n){var r=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,o=n(178),c=Object.create?Object.create(null):{};function a(e,t,n,r,o){var c=t.indexOf("<",r),a=t.slice(r,-1===c?void 0:c);/^\s*$/.test(a)&&(a=" "),(!o&&c>-1&&n+e.length>=0||" "!==a)&&e.push({type:"text",content:a})}e.exports=function(e,t){t||(t={}),t.components||(t.components=c);var n,i=[],u=-1,s=[],l={},f=!1;return e.replace(r,(function(r,c){if(f){if(r!=="</"+n.name+">")return;f=!1}var p,d="/"!==r.charAt(1),v=0===r.indexOf("\x3c!--"),m=c+r.length,b=e.charAt(m);d&&!v&&(u++,"tag"===(n=o(r)).type&&t.components[n.name]&&(n.type="component",f=!0),n.voidElement||f||!b||"<"===b||a(n.children,e,u,m,t.ignoreWhitespace),l[n.tagName]=n,0===u&&i.push(n),(p=s[u-1])&&p.children.push(n),s[u]=n),(v||!d||n.voidElement)&&(v||u--,!f&&"<"!==b&&b&&a(p=-1===u?i:s[u].children,e,u,m,t.ignoreWhitespace))})),!i.length&&e.length&&a(i,e,0,0,t.ignoreWhitespace),i}},178:function(e,t,n){var r=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,o=n(179);e.exports=function(e){var t,n=0,c=!0,a={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(r,(function(r){if("="===r)return c=!0,void n++;c?0===n?((o[r]||"/"===e.charAt(e.length-2))&&(a.voidElement=!0),a.name=r):(a.attrs[t]=r.replace(/^['"]|['"]$/g,""),t=void 0):(t&&(a.attrs[t]=t),t=r),n++,c=!1})),a}},179:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},180:function(e,t){function n(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(n,"")+"</"+t.name+">"}}e.exports=function(e){return e.reduce((function(e,t){return e+n("",t)}),"")}},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var r=n(174),o=n.n(r),c=n(175),a=n.n(c),i=n(6),u=n.n(i),s=n(5),l=n.n(s),f=n(176),p=n.n(f),d=n(147),v=n(193);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function h(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function O(e){return Array.isArray(e)?e:[e]}function g(e,t,n,r,o){if(""===t)return[];var c=r.transKeepBasicHtmlNodesFor||[],i=t&&new RegExp(c.join("|")).test(t);if(!e&&!i)return[t];var u={};!function e(t){O(t).forEach((function(t){"string"!==typeof t&&(y(t)?e(h(t)):"object"!==a()(t)||l.a.isValidElement(t)||Object.assign(u,t))}))}(e);var s=n.services.interpolator.interpolate(t,b(b({},u),o),n.language),f=p.a.parse("<0>".concat(s,"</0>"));function d(e,t,n){var r=h(e),o=m(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return l.a.isValidElement(e)}))}(r)&&0===o.length?r:o}function v(e,t,n,r){e.dummy&&(e.children=t),n.push(l.a.cloneElement(e,b(b({},e.props),{},{key:r}),t))}function m(t,n,o){var u=O(t);return O(n).reduce((function(t,n,s){var f=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var p=u[parseInt(n.name,10)];!p&&1===o.length&&o[0][n.name]&&(p=o[0][n.name]),p||(p={});var h=0!==Object.keys(n.attrs).length?function(e,t){var n=b({},t);return n.props=Object.assign(e.props,t.props),n}({props:n.attrs},p):p,O=l.a.isValidElement(h),g=O&&y(n,!0)&&!n.voidElement,E=i&&"object"===a()(h)&&h.dummy&&!O,j="object"===a()(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"===typeof h)t.push(h);else if(y(h)||g){v(h,d(h,n,o),t,s)}else if(E){var S=m(u,n.children,o);t.push(l.a.cloneElement(h,b(b({},h.props),{},{key:s}),S))}else if(Number.isNaN(parseFloat(n.name))){if(j)v(h,d(h,n,o),t,s);else if(r.transSupportBasicHtmlNodes&&c.indexOf(n.name)>-1)if(n.voidElement)t.push(l.a.createElement(n.name,{key:"".concat(n.name,"-").concat(s)}));else{var w=m(u,n.children,o);t.push(l.a.createElement(n.name,{key:"".concat(n.name,"-").concat(s)},w))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var _=m(u,n.children,o);t.push("<".concat(n.name,">").concat(_,"</").concat(n.name,">"))}}else if("object"!==a()(h)||O)1===n.children.length&&f?t.push(l.a.cloneElement(h,b(b({},h.props),{},{key:s}),f)):t.push(l.a.cloneElement(h,b(b({},h.props),{},{key:s})));else{var k=n.children[0]?f:null;k&&t.push(k)}}else"text"===n.type&&t.push(n.content);return t}),[])}return h(m([{dummy:!0,children:e}],f,O(e||[]))[0])}function E(e){var t=e.children,n=e.count,r=e.parent,c=e.i18nKey,i=e.tOptions,u=e.values,f=e.defaults,p=e.components,m=e.ns,y=e.i18n,h=e.t,E=o()(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),j=Object(s.useContext)(d.a)||{},S=j.i18n,w=j.defaultNS,_=y||S||Object(d.d)();if(!_)return Object(v.d)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var k=h||_.t.bind(_)||function(e){return e},x=b(b({},Object(d.c)()),_.options&&_.options.react),N=m||k.ns||w||_.options&&_.options.defaultNS;N="string"===typeof N?[N]:N||["translation"];var T=f||function e(t,n){if(!t)return"";var r="",c=O(t),i=n.transKeepBasicHtmlNodesFor||[];return c.forEach((function(t,c){if("string"===typeof t)r+="".concat(t);else if(l.a.isValidElement(t)){var u=Object.keys(t.props).length,s=i.indexOf(t.type)>-1,f=t.props.children;if(!f&&s&&0===u)r+="<".concat(t.type,"/>");else if(f||s&&0===u)if(t.props.i18nIsDynamicList)r+="<".concat(c,"></").concat(c,">");else if(s&&1===u&&"string"===typeof f)r+="<".concat(t.type,">").concat(f,"</").concat(t.type,">");else{var p=e(f,n);r+="<".concat(c,">").concat(p,"</").concat(c,">")}else r+="<".concat(c,"></").concat(c,">")}else if("object"===a()(t)){var d=t.format,m=o()(t,["format"]),b=Object.keys(m);if(1===b.length){var y=d?"".concat(b[0],", ").concat(d):b[0];r+="{{".concat(y,"}}")}else Object(v.c)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",t)}else Object(v.c)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",t)})),r}(t,x)||x.transEmptyNodeValue||c,A=x.hashTransKey,C=c||(A?A(T):T),P=u?{}:{interpolation:{prefix:"#$?",suffix:"?$#"}},I=b(b(b(b({},i),{},{count:n},u),P),{},{defaultValue:T,ns:N}),M=g(p||t,C?k(C,I):T,_,x,I),H=void 0!==r?r:x.defaultTransParent;return H?l.a.createElement(H,E,M):M}}}]);
//# sourceMappingURL=14.79c67aad.chunk.js.map