(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[6],{160:function(e,t,n){"use strict";n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return S}));var r=n(159),a=n(157),o=n(5),c=function(e,t){var n=e.getItem(t);try{return n?JSON.parse(n):void 0}catch(r){return}};function i(e,t){var n=t||"__STATE_MACHINE__",r=c(e,n);return{set:function(e){r=e},get:function(){return r},getName:function(){return n}}}var s=function(e){return void 0===e};function u(e,t,n,r){"undefined"!==typeof window&&e&&(window.STATE_MACHINE_DEBUG=function(e){return t.setItem("___STATE_MACHINE_DEBUG__",e)},window.STATE_MACHINE_RESET=function(){return t.clear()},window.STATE_MACHINE_GET_STORE=function(){return t.getItem(n())},window.STATE_MACHINE_SAVE_TO=function(e){return window.localStorage.setItem(e,JSON.stringify(r()))},window.STATE_MACHINE_LOAD=function(e){var r=e.storeName,a=e.data;return t.setItem(n()||"___STATE_MACHINE_DEBUG__",a||window.localStorage.getItem(r)||"")})}var l=Object(o.createContext)({store:{},updateStore:function(e){return e}}),f=function(e){var t=e.transform,n=e.externalStoreName,r=e.storageType,a=e.store;return t({externalStoreData:c(r,n),currentStoreData:a})};function p(e,t,n){var o=e,i=t.syncStores;if(!i)return o;try{if(Array.isArray(i))i.forEach((function(e){o=f({transform:e.transform,externalStoreName:e.externalStoreName,storageType:n,store:o})}));else{if(i.externalStoreName&&"function"===typeof i.transform&&"string"===typeof i.externalStoreName)return f({transform:i.transform,externalStoreName:i.externalStoreName,storageType:n,store:o});Object.entries(i).forEach((function(e){var t=Object(a.a)(e,2),i=t[0],s=t[1],u=c(n,i);s.forEach((function(e){o=Object.assign(Object.assign({},o),Object(r.a)({},e,Object.assign(Object.assign({},o[e]),u[e])))}))}))}}catch(s){return o}return o}var m,d,b,y="undefined"!==typeof window,v=y?window.sessionStorage:{getItem:function(e){return e},setItem:function(e){return e},clear:function(){},length:0,key:function(e){return e.toString()},removeItem:function(){}},h=[];function g(e){v=e}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:"__STATE_MACHINE__",middleWares:[],syncStores:void 0},n=t?t.name:"__STATE_MACHINE__",r=i(v,n);b=r.getName,m=r.get,d=r.set,h=t.middleWares,u(!1,v,b,m),d(p(m()||e,t,v))}function E(e){var t=Object(o.useState)(m()),n=Object(a.a)(t,2),r=n[0],c=n[1],i=Object(o.useMemo)((function(){return{store:r,updateStore:c}}),[r]);return Object(o.createElement)(l.Provider,Object.assign({value:i},e))}var j=function(e){var t=e.options,n=e.callback,r=e.updateStore;return function(e){var a;n&&n.name;if(n&&(a=n(m(),e)),d(s(a)?m():a),v.setItem(b(),JSON.stringify(m())),s(t)||t&&!1!==t.shouldReRenderApp){var o=m();Array.isArray(h)&&h.length&&(o=h.reduce((function(e,t){return t(e)||e}),o)),r(o)}}};function S(e,t){var n=Object(o.useContext)(l),c=n.store,i=n.updateStore;return e&&Object.keys(e).length?{actions:Object.entries(e).reduce((function(e,n){var c=Object(a.a)(n,2),s=c[0],u=c[1];return Object.assign(Object.assign({},e),Object(r.a)({},s,Object(o.useCallback)(j({options:t,callback:u,updateStore:i}),[])))}),{}),action:function(e){return e},state:c}:{actions:{},action:Object(o.useCallback)(e?j({options:t,callback:e,updateStore:i}):function(){},[]),state:c}}},163:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(159),a=n(166);function o(e){return function(t,n){return Object(a.a)(Object(a.a)({},t),{},Object(r.a)({},e,Object(a.a)(Object(a.a)({},t[e]),n)))}}function c(){return function(e){return{welcome:{language:e.welcome.language}}}}},194:function(e,t,n){var r=n(53);e.exports=function(e,t){if(null==e)return{};var n,a,o=r(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},195:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},196:function(e,t,n){e.exports={parse:n(197),stringify:n(200)}},197:function(e,t,n){var r=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,a=n(198),o=Object.create?Object.create(null):{};function c(e,t,n,r,a){var o=t.indexOf("<",r),c=t.slice(r,-1===o?void 0:o);/^\s*$/.test(c)&&(c=" "),(!a&&o>-1&&n+e.length>=0||" "!==c)&&e.push({type:"text",content:c})}e.exports=function(e,t){t||(t={}),t.components||(t.components=o);var n,i=[],s=-1,u=[],l={},f=!1;return e.replace(r,(function(r,o){if(f){if(r!=="</"+n.name+">")return;f=!1}var p,m="/"!==r.charAt(1),d=0===r.indexOf("\x3c!--"),b=o+r.length,y=e.charAt(b);m&&!d&&(s++,"tag"===(n=a(r)).type&&t.components[n.name]&&(n.type="component",f=!0),n.voidElement||f||!y||"<"===y||c(n.children,e,s,b,t.ignoreWhitespace),l[n.tagName]=n,0===s&&i.push(n),(p=u[s-1])&&p.children.push(n),u[s]=n),(d||!m||n.voidElement)&&(d||s--,!f&&"<"!==y&&y&&c(p=-1===s?i:u[s].children,e,s,b,t.ignoreWhitespace))})),!i.length&&e.length&&c(i,e,0,0,t.ignoreWhitespace),i}},198:function(e,t,n){var r=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,a=n(199);e.exports=function(e){var t,n=0,o=!0,c={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(r,(function(r){if("="===r)return o=!0,void n++;o?0===n?((a[r]||"/"===e.charAt(e.length-2))&&(c.voidElement=!0),c.name=r):(c.attrs[t]=r.replace(/^['"]|['"]$/g,""),t=void 0):(t&&(c.attrs[t]=t),t=r),n++,o=!1})),c}},199:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},200:function(e,t){function n(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(n,"")+"</"+t.name+">"}}e.exports=function(e){return e.reduce((function(e,t){return e+n("",t)}),"")}},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var r=n(194),a=n.n(r),o=n(195),c=n.n(o),i=n(6),s=n.n(i),u=n(5),l=n.n(u),f=n(196),p=n.n(f),m=n(147),d=n(210);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function h(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function g(e){return Array.isArray(e)?e:[e]}function O(e,t,n,r,a){if(""===t)return[];var o=r.transKeepBasicHtmlNodesFor||[],i=t&&new RegExp(o.join("|")).test(t);if(!e&&!i)return[t];var s={};!function e(t){g(t).forEach((function(t){"string"!==typeof t&&(v(t)?e(h(t)):"object"!==c()(t)||l.a.isValidElement(t)||Object.assign(s,t))}))}(e);var u=n.services.interpolator.interpolate(t,y(y({},s),a),n.language),f=p.a.parse("<0>".concat(u,"</0>"));function m(e,t,n){var r=h(e),a=b(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return l.a.isValidElement(e)}))}(r)&&0===a.length?r:a}function d(e,t,n,r){e.dummy&&(e.children=t),n.push(l.a.cloneElement(e,y(y({},e.props),{},{key:r}),t))}function b(t,n,a){var s=g(t);return g(n).reduce((function(t,n,u){var f=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var p=s[parseInt(n.name,10)];!p&&1===a.length&&a[0][n.name]&&(p=a[0][n.name]),p||(p={});var h=0!==Object.keys(n.attrs).length?function(e,t){var n=y({},t);return n.props=Object.assign(e.props,t.props),n}({props:n.attrs},p):p,g=l.a.isValidElement(h),O=g&&v(n,!0)&&!n.voidElement,E=i&&"object"===c()(h)&&h.dummy&&!g,j="object"===c()(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"===typeof h)t.push(h);else if(v(h)||O){d(h,m(h,n,a),t,u)}else if(E){var S=b(s,n.children,a);t.push(l.a.cloneElement(h,y(y({},h.props),{},{key:u}),S))}else if(Number.isNaN(parseFloat(n.name))){if(j)d(h,m(h,n,a),t,u);else if(r.transSupportBasicHtmlNodes&&o.indexOf(n.name)>-1)if(n.voidElement)t.push(l.a.createElement(n.name,{key:"".concat(n.name,"-").concat(u)}));else{var x=b(s,n.children,a);t.push(l.a.createElement(n.name,{key:"".concat(n.name,"-").concat(u)},x))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var w=b(s,n.children,a);t.push("<".concat(n.name,">").concat(w,"</").concat(n.name,">"))}}else if("object"!==c()(h)||g)1===n.children.length&&f?t.push(l.a.cloneElement(h,y(y({},h.props),{},{key:u}),f)):t.push(l.a.cloneElement(h,y(y({},h.props),{},{key:u})));else{var _=n.children[0]?f:null;_&&t.push(_)}}else"text"===n.type&&t.push(n.content);return t}),[])}return h(b([{dummy:!0,children:e}],f,g(e||[]))[0])}function E(e){var t=e.children,n=e.count,r=e.parent,o=e.i18nKey,i=e.tOptions,s=e.values,f=e.defaults,p=e.components,b=e.ns,v=e.i18n,h=e.t,E=a()(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),j=Object(u.useContext)(m.a)||{},S=j.i18n,x=j.defaultNS,w=v||S||Object(m.d)();if(!w)return Object(d.d)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var _=h||w.t.bind(w)||function(e){return e},A=y(y({},Object(m.c)()),w.options&&w.options.react),N=b||_.ns||x||w.options&&w.options.defaultNS;N="string"===typeof N?[N]:N||["translation"];var T=f||function e(t,n){if(!t)return"";var r="",o=g(t),i=n.transKeepBasicHtmlNodesFor||[];return o.forEach((function(t,o){if("string"===typeof t)r+="".concat(t);else if(l.a.isValidElement(t)){var s=Object.keys(t.props).length,u=i.indexOf(t.type)>-1,f=t.props.children;if(!f&&u&&0===s)r+="<".concat(t.type,"/>");else if(f||u&&0===s)if(t.props.i18nIsDynamicList)r+="<".concat(o,"></").concat(o,">");else if(u&&1===s&&"string"===typeof f)r+="<".concat(t.type,">").concat(f,"</").concat(t.type,">");else{var p=e(f,n);r+="<".concat(o,">").concat(p,"</").concat(o,">")}else r+="<".concat(o,"></").concat(o,">")}else if("object"===c()(t)){var m=t.format,b=a()(t,["format"]),y=Object.keys(b);if(1===y.length){var v=m?"".concat(y[0],", ").concat(m):y[0];r+="{{".concat(v,"}}")}else Object(d.c)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",t)}else Object(d.c)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",t)})),r}(t,A)||A.transEmptyNodeValue||o,k=A.hashTransKey,I=o||(k?k(T):T),M=s?{}:{interpolation:{prefix:"#$?",suffix:"?$#"}},C=y(y(y(y({},i),{},{count:n},s),M),{},{defaultValue:T,ns:N}),P=O(p||t,I?_(I,C):T,w,A,C),H=void 0!==r?r:A.defaultTransParent;return H?l.a.createElement(H,E,P):P}},332:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n(5),a=n.n(r),o=n(748),c=n(156),i=n(155);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createElement("defs",null,a.a.createElement("style",null,".cls-1{fill:url(#linear-gradient);}.cls-2{fill:url(#linear-gradient-2);}"),a.a.createElement("linearGradient",{id:"linear-gradient",x1:-3.15,y1:189.74,x2:687.53,y2:189.74,gradientUnits:"userSpaceOnUse"},a.a.createElement("stop",{offset:0,stopColor:"#00a6e1"}),a.a.createElement("stop",{offset:1,stopColor:"#4fc1bc"})),a.a.createElement("linearGradient",{id:"linear-gradient-2",x1:-3.15,y1:63.25,x2:687.53,y2:63.25,xlinkHref:"#linear-gradient"})),f=a.a.createElement("g",null,a.a.createElement("path",{className:"cls-1",d:"M236.59,220.19a93.8,93.8,0,0,1-93.69-93.69,125.71,125.71,0,0,1-16.4,62.23,126.44,126.44,0,0,0,220.19,0,125.71,125.71,0,0,1-16.4-62.23A93.8,93.8,0,0,1,236.59,220.19Z"}),a.a.createElement("path",{className:"cls-2",d:"M456.78,32.8a93.8,93.8,0,0,1,93.69,93.69,125.72,125.72,0,0,1,16.4-62.23,126.44,126.44,0,0,0-220.19,0,125.71,125.71,0,0,1,16.4,62.23A93.8,93.8,0,0,1,456.78,32.8Z"}),a.a.createElement("path",{className:"cls-2",d:"M16.4,0a16.4,16.4,0,0,0,0,32.8,93.8,93.8,0,0,1,93.69,93.69,125.72,125.72,0,0,1,16.4-62.23A126.58,126.58,0,0,0,16.4,0Z"}),a.a.createElement("path",{className:"cls-2",d:"M677,0A126.58,126.58,0,0,0,566.87,64.26a125.71,125.71,0,0,1,16.4,62.23A93.8,93.8,0,0,1,677,32.8,16.4,16.4,0,0,0,677,0Z"}),a.a.createElement("path",{className:"cls-1",d:"M16.4,220.19a16.4,16.4,0,1,0,0,32.8,126.58,126.58,0,0,0,110.09-64.26,125.72,125.72,0,0,1-16.4-62.23A93.8,93.8,0,0,1,16.4,220.19Z"}),a.a.createElement("path",{className:"cls-1",d:"M566.87,142.89a16.4,16.4,0,0,1-16.4-16.4,93.69,93.69,0,0,1-187.39,0,125.71,125.71,0,0,1-16.4,62.23,126.47,126.47,0,0,0,236.59-62.23A16.4,16.4,0,0,1,566.87,142.89Z"}),a.a.createElement("path",{className:"cls-2",d:"M236.59,32.8a93.8,93.8,0,0,1,93.69,93.69,125.71,125.71,0,0,1,16.4-62.23,126.44,126.44,0,0,0-220.19,0,125.71,125.71,0,0,1,16.4,62.23A93.8,93.8,0,0,1,236.59,32.8Z"})),p=function(e){var t=e.svgRef,n=e.title,r=u(e,["svgRef","title"]);return a.a.createElement("svg",s({viewBox:"0 0 693.36 252.99",ref:t},r),n?a.a.createElement("title",null,n):null,l,f)},m=a.a.forwardRef((function(e,t){return a.a.createElement(p,s({svgRef:t},e))}));n.p;function d(){var e=Object(c.a)(["\n  width: 60px;\n"]);return d=function(){return e},e}function b(){var e=Object(c.a)(['\n  font-family: "Open Sans";\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: ',";\n"]);return b=function(){return e},e}function y(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: ",";\n  align-items: ",";\n  flex-direction: ",";\n  margin-top: ",";\n  > * {\n    margin: ",";\n  }\n"]);return y=function(){return e},e}var v=i.default.div(y(),(function(e){return e.inline?"center":"flex-end"}),(function(e){return e.inline?"flex-end":"center"}),(function(e){return e.inline?"row":"column"}),(function(e){return e.mt||"22px"}),(function(e){return e.inline?"0px 5px":"5px 0px"})),h=i.default.div(b(),(function(e){return e.color||"#393939"})),g=Object(i.default)(m)(d()),O=function(e){var t=e.inline,n=void 0!==t&&t,r=e.mt,c=e.color,i=Object(o.a)().t;return a.a.createElement(v,{inline:n,mt:r},a.a.createElement(h,{color:c},i("main:createdBy","Created By")),a.a.createElement("a",{href:"https://xoor.io",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(g,null)))}}}]);
//# sourceMappingURL=6.378c865f.chunk.js.map