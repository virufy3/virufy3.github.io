(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[13,14],{158:function(e,t,n){"use strict";n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return w}));var r=n(164),o=n(157),a=n(5),c=function(e,t){var n=e.getItem(t);try{return n?JSON.parse(n):void 0}catch(r){return}};function i(e,t){var n=t||"__STATE_MACHINE__",r=c(e,n);return{set:function(e){r=e},get:function(){return r},getName:function(){return n}}}var u=function(e){return void 0===e};function s(e,t,n,r){"undefined"!==typeof window&&e&&(window.STATE_MACHINE_DEBUG=function(e){return t.setItem("___STATE_MACHINE_DEBUG__",e)},window.STATE_MACHINE_RESET=function(){return t.clear()},window.STATE_MACHINE_GET_STORE=function(){return t.getItem(n())},window.STATE_MACHINE_SAVE_TO=function(e){return window.localStorage.setItem(e,JSON.stringify(r()))},window.STATE_MACHINE_LOAD=function(e){var r=e.storeName,o=e.data;return t.setItem(n()||"___STATE_MACHINE_DEBUG__",o||window.localStorage.getItem(r)||"")})}var l=Object(a.createContext)({store:{},updateStore:function(e){return e}}),f=function(e){var t=e.transform,n=e.externalStoreName,r=e.storageType,o=e.store;return t({externalStoreData:c(r,n),currentStoreData:o})};function p(e,t,n){var a=e,i=t.syncStores;if(!i)return a;try{if(Array.isArray(i))i.forEach((function(e){a=f({transform:e.transform,externalStoreName:e.externalStoreName,storageType:n,store:a})}));else{if(i.externalStoreName&&"function"===typeof i.transform&&"string"===typeof i.externalStoreName)return f({transform:i.transform,externalStoreName:i.externalStoreName,storageType:n,store:a});Object.entries(i).forEach((function(e){var t=Object(o.a)(e,2),i=t[0],u=t[1],s=c(n,i);u.forEach((function(e){a=Object.assign(Object.assign({},a),Object(r.a)({},e,Object.assign(Object.assign({},a[e]),s[e])))}))}))}}catch(u){return a}return a}var d,m,v,b="undefined"!==typeof window,y=b?window.sessionStorage:{getItem:function(e){return e},setItem:function(e){return e},clear:function(){},length:0,key:function(e){return e.toString()},removeItem:function(){}},O=[];function h(e){y=e}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:"__STATE_MACHINE__",middleWares:[],syncStores:void 0},n=t?t.name:"__STATE_MACHINE__",r=i(y,n);v=r.getName,d=r.get,m=r.set,O=t.middleWares,s(!1,y,v,d),m(p(d()||e,t,y))}function E(e){var t=Object(a.useState)(d()),n=Object(o.a)(t,2),r=n[0],c=n[1],i=Object(a.useMemo)((function(){return{store:r,updateStore:c}}),[r]);return Object(a.createElement)(l.Provider,Object.assign({value:i},e))}var j=function(e){var t=e.options,n=e.callback,r=e.updateStore;return function(e){var o;n&&n.name;if(n&&(o=n(d(),e)),m(u(o)?d():o),y.setItem(v(),JSON.stringify(d())),u(t)||t&&!1!==t.shouldReRenderApp){var a=d();Array.isArray(O)&&O.length&&(a=O.reduce((function(e,t){return t(e)||e}),a)),r(a)}}};function w(e,t){var n=Object(a.useContext)(l),c=n.store,i=n.updateStore;return e&&Object.keys(e).length?{actions:Object.entries(e).reduce((function(e,n){var c=Object(o.a)(n,2),u=c[0],s=c[1];return Object.assign(Object.assign({},e),Object(r.a)({},u,Object(a.useCallback)(j({options:t,callback:s,updateStore:i}),[])))}),{}),action:function(e){return e},state:c}:{actions:{},action:Object(a.useCallback)(e?j({options:t,callback:e,updateStore:i}):function(){},[]),state:c}}},160:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=n(5),i=n(24),u=a(n(167));t.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).",t.default=function(e){void 0===e&&(e={});var n=e.closeOnOutsideClick,a=void 0===n||n,s=e.closeOnEsc,l=void 0===s||s,f=e.bindTo,p=e.isOpen,d=void 0!==p&&p,m=e.onOpen,v=e.onClose,b=e.onPortalClick,y=o(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),O=u.default(),h=O.isServer,g=O.isBrowser,E=c.useState(d),j=E[0],w=E[1],S=c.useRef(j),_=c.useCallback((function(e){S.current=e,w(e)}),[]),k=c.useRef(),x=c.useRef(g?document.createElement("div"):null);c.useEffect((function(){g&&!x.current&&(x.current=document.createElement("div"))}),[g,x]);var N=c.useMemo((function(){if(!h)return f&&i.findDOMNode(f)||document.body}),[h,f]),T=function(e){if(!e)return{portal:x,targetEl:k,event:e};var t=e||{};t.persist&&t.persist(),t.portal=x,t.targetEl=k,t.event=e;var n=e.currentTarget;return!k.current&&n&&n!==document&&(k.current=t.currentTarget),t},P=Object.entries(y).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=function(e){h||r(T(e))},e}),{}),A=c.useCallback((function(e){if(!h){var n=T(e);if(null==k.current)throw setTimeout((function(){return _(!0)}),0),Error(t.errorMessage1);m&&m(n),_(!0)}}),[h,x,_,k,m]),C=c.useCallback((function(e){if(!h){var t=T(e);v&&S.current&&v(t),S.current&&_(!1)}}),[h,v,_]),I=c.useCallback((function(e){return S.current?C(e):A(e)}),[C,A]),M=c.useCallback((function(e){return"Escape"===e.key&&l?C(e):void 0}),[l,C]),H=c.useCallback((function(e){var t=function(t){return t.current.contains(e.target)};t(x)||0!==e.button||!S.current||t(k)||a&&C(e)}),[h,C,a,x]),D=c.useCallback((function(e){if(!h&&x.current instanceof HTMLElement){var t=T(e);x.current.contains(t.target)&&b&&b(t),H(e)}}),[H]),R=c.useRef({});c.useEffect((function(){if(!h&&N instanceof HTMLElement&&x.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},t=x.current;return N.appendChild(x.current),Object.entries(e).forEach((function(e){var t=e[0],n=e[1];y[t]&&(R.current[t]=function(e){return y[t](T(e))},document.addEventListener(n,R.current[t]))})),document.addEventListener("keydown",M),document.addEventListener("mousedown",D),function(){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];y[t]&&(document.removeEventListener(n,R.current[t]),delete R.current[t])})),document.removeEventListener("keydown",M),document.removeEventListener("mousedown",D),N.removeChild(t)}}}),[h,H,M,N,x]);var L=c.useCallback((function(e){var t=e.children;return null!=x.current?i.createPortal(t,x.current):null}),[x]);return Object.assign([A,C,S.current,L,I,k,x],r(r({isOpen:S.current,openPortal:A,ref:k,closePortal:C,togglePortal:I,Portal:L,portalRef:x},P),{bind:r({ref:k},P)}))}},167:function(e,t,n){"use strict";var r,o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(r=t.Device||(t.Device={}));var a=r.Browser,c=r.Server,i=r.Native,u=!("undefined"===typeof window||!window.document||!window.document.createElement),s="undefined"!=typeof navigator&&"ReactNative"==navigator.product?i:u?a:c,l={isBrowser:s===a,isServer:s===c,isNative:s===i,device:s,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:s===a&&!!window.addEventListener,canUseViewport:s===a&&!!window.screen},f=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return o(o({},e),t)}),{})}((e=l,Object.keys(e).map((function(t){return e[t]})),l));var e},p=f();t.weAreServer=function(){l.isServer=!0,p=f()},t.useSSR=function(){return p},t.default=t.useSSR},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(5),o=n.n(r),a=n(163),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var i=function(e){var t=e.as,n=e.errors,r=e.name,i=e.message,u=e.render,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["as","errors","name","message","render"]),l=Object(a.f)(),f=Object(a.c)(n||l.errors,r);if(!f)return null;var p=f.message,d=f.types,m=c(c({},s),{children:p||i});return t?o.a.isValidElement(t)?o.a.cloneElement(t,m):o.a.createElement(t,m):u?u({message:p||i,messages:d}):o.a.createElement(o.a.Fragment,c({},m))}},171:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},174:function(e,t,n){var r=n(51);e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},175:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},176:function(e,t,n){e.exports={parse:n(177),stringify:n(180)}},177:function(e,t,n){var r=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,o=n(178),a=Object.create?Object.create(null):{};function c(e,t,n,r,o){var a=t.indexOf("<",r),c=t.slice(r,-1===a?void 0:a);/^\s*$/.test(c)&&(c=" "),(!o&&a>-1&&n+e.length>=0||" "!==c)&&e.push({type:"text",content:c})}e.exports=function(e,t){t||(t={}),t.components||(t.components=a);var n,i=[],u=-1,s=[],l={},f=!1;return e.replace(r,(function(r,a){if(f){if(r!=="</"+n.name+">")return;f=!1}var p,d="/"!==r.charAt(1),m=0===r.indexOf("\x3c!--"),v=a+r.length,b=e.charAt(v);d&&!m&&(u++,"tag"===(n=o(r)).type&&t.components[n.name]&&(n.type="component",f=!0),n.voidElement||f||!b||"<"===b||c(n.children,e,u,v,t.ignoreWhitespace),l[n.tagName]=n,0===u&&i.push(n),(p=s[u-1])&&p.children.push(n),s[u]=n),(m||!d||n.voidElement)&&(m||u--,!f&&"<"!==b&&b&&c(p=-1===u?i:s[u].children,e,u,v,t.ignoreWhitespace))})),!i.length&&e.length&&c(i,e,0,0,t.ignoreWhitespace),i}},178:function(e,t,n){var r=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,o=n(179);e.exports=function(e){var t,n=0,a=!0,c={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(r,(function(r){if("="===r)return a=!0,void n++;a?0===n?((o[r]||"/"===e.charAt(e.length-2))&&(c.voidElement=!0),c.name=r):(c.attrs[t]=r.replace(/^['"]|['"]$/g,""),t=void 0):(t&&(c.attrs[t]=t),t=r),n++,a=!1})),c}},179:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},180:function(e,t){function n(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(n,"")+"</"+t.name+">"}}e.exports=function(e){return e.reduce((function(e,t){return e+n("",t)}),"")}},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var r=n(174),o=n.n(r),a=n(175),c=n.n(a),i=n(6),u=n.n(i),s=n(5),l=n.n(s),f=n(176),p=n.n(f),d=n(147),m=n(193);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function O(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function h(e){return Array.isArray(e)?e:[e]}function g(e,t,n,r,o){if(""===t)return[];var a=r.transKeepBasicHtmlNodesFor||[],i=t&&new RegExp(a.join("|")).test(t);if(!e&&!i)return[t];var u={};!function e(t){h(t).forEach((function(t){"string"!==typeof t&&(y(t)?e(O(t)):"object"!==c()(t)||l.a.isValidElement(t)||Object.assign(u,t))}))}(e);var s=n.services.interpolator.interpolate(t,b(b({},u),o),n.language),f=p.a.parse("<0>".concat(s,"</0>"));function d(e,t,n){var r=O(e),o=v(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return l.a.isValidElement(e)}))}(r)&&0===o.length?r:o}function m(e,t,n,r){e.dummy&&(e.children=t),n.push(l.a.cloneElement(e,b(b({},e.props),{},{key:r}),t))}function v(t,n,o){var u=h(t);return h(n).reduce((function(t,n,s){var f=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var p=u[parseInt(n.name,10)];!p&&1===o.length&&o[0][n.name]&&(p=o[0][n.name]),p||(p={});var O=0!==Object.keys(n.attrs).length?function(e,t){var n=b({},t);return n.props=Object.assign(e.props,t.props),n}({props:n.attrs},p):p,h=l.a.isValidElement(O),g=h&&y(n,!0)&&!n.voidElement,E=i&&"object"===c()(O)&&O.dummy&&!h,j="object"===c()(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"===typeof O)t.push(O);else if(y(O)||g){m(O,d(O,n,o),t,s)}else if(E){var w=v(u,n.children,o);t.push(l.a.cloneElement(O,b(b({},O.props),{},{key:s}),w))}else if(Number.isNaN(parseFloat(n.name))){if(j)m(O,d(O,n,o),t,s);else if(r.transSupportBasicHtmlNodes&&a.indexOf(n.name)>-1)if(n.voidElement)t.push(l.a.createElement(n.name,{key:"".concat(n.name,"-").concat(s)}));else{var S=v(u,n.children,o);t.push(l.a.createElement(n.name,{key:"".concat(n.name,"-").concat(s)},S))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var _=v(u,n.children,o);t.push("<".concat(n.name,">").concat(_,"</").concat(n.name,">"))}}else if("object"!==c()(O)||h)1===n.children.length&&f?t.push(l.a.cloneElement(O,b(b({},O.props),{},{key:s}),f)):t.push(l.a.cloneElement(O,b(b({},O.props),{},{key:s})));else{var k=n.children[0]?f:null;k&&t.push(k)}}else"text"===n.type&&t.push(n.content);return t}),[])}return O(v([{dummy:!0,children:e}],f,h(e||[]))[0])}function E(e){var t=e.children,n=e.count,r=e.parent,a=e.i18nKey,i=e.tOptions,u=e.values,f=e.defaults,p=e.components,v=e.ns,y=e.i18n,O=e.t,E=o()(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),j=Object(s.useContext)(d.a)||{},w=j.i18n,S=j.defaultNS,_=y||w||Object(d.d)();if(!_)return Object(m.d)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var k=O||_.t.bind(_)||function(e){return e},x=b(b({},Object(d.c)()),_.options&&_.options.react),N=v||k.ns||S||_.options&&_.options.defaultNS;N="string"===typeof N?[N]:N||["translation"];var T=f||function e(t,n){if(!t)return"";var r="",a=h(t),i=n.transKeepBasicHtmlNodesFor||[];return a.forEach((function(t,a){if("string"===typeof t)r+="".concat(t);else if(l.a.isValidElement(t)){var u=Object.keys(t.props).length,s=i.indexOf(t.type)>-1,f=t.props.children;if(!f&&s&&0===u)r+="<".concat(t.type,"/>");else if(f||s&&0===u)if(t.props.i18nIsDynamicList)r+="<".concat(a,"></").concat(a,">");else if(s&&1===u&&"string"===typeof f)r+="<".concat(t.type,">").concat(f,"</").concat(t.type,">");else{var p=e(f,n);r+="<".concat(a,">").concat(p,"</").concat(a,">")}else r+="<".concat(a,"></").concat(a,">")}else if("object"===c()(t)){var d=t.format,v=o()(t,["format"]),b=Object.keys(v);if(1===b.length){var y=d?"".concat(b[0],", ").concat(d):b[0];r+="{{".concat(y,"}}")}else Object(m.c)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",t)}else Object(m.c)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",t)})),r}(t,x)||x.transEmptyNodeValue||a,P=x.hashTransKey,A=a||(P?P(T):T),C=u?{}:{interpolation:{prefix:"#$?",suffix:"?$#"}},I=b(b(b(b({},i),{},{count:n},u),C),{},{defaultValue:T,ns:N}),M=g(p||t,A?k(A,I):T,_,x,I),H=void 0!==r?r:x.defaultTransParent;return H?l.a.createElement(H,E,M):M}}}]);
//# sourceMappingURL=13.a173191c.chunk.js.map