(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[5],{194:function(t,e,n){var i=n(53);t.exports=function(t,e){if(null==t)return{};var n,r,o=i(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}},195:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},196:function(t,e,n){t.exports={parse:n(197),stringify:n(200)}},197:function(t,e,n){var i=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,r=n(198),o=Object.create?Object.create(null):{};function s(t,e,n,i,r){var o=e.indexOf("<",i),s=e.slice(i,-1===o?void 0:o);/^\s*$/.test(s)&&(s=" "),(!r&&o>-1&&n+t.length>=0||" "!==s)&&t.push({type:"text",content:s})}t.exports=function(t,e){e||(e={}),e.components||(e.components=o);var n,a=[],u=-1,c=[],p={},l=!1;return t.replace(i,(function(i,o){if(l){if(i!=="</"+n.name+">")return;l=!1}var f,m="/"!==i.charAt(1),h=0===i.indexOf("\x3c!--"),d=o+i.length,y=t.charAt(d);m&&!h&&(u++,"tag"===(n=r(i)).type&&e.components[n.name]&&(n.type="component",l=!0),n.voidElement||l||!y||"<"===y||s(n.children,t,u,d,e.ignoreWhitespace),p[n.tagName]=n,0===u&&a.push(n),(f=c[u-1])&&f.children.push(n),c[u]=n),(h||!m||n.voidElement)&&(h||u--,!l&&"<"!==y&&y&&s(f=-1===u?a:c[u].children,t,u,d,e.ignoreWhitespace))})),!a.length&&t.length&&s(a,t,0,0,e.ignoreWhitespace),a}},198:function(t,e,n){var i=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,r=n(199);t.exports=function(t){var e,n=0,o=!0,s={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return t.replace(i,(function(i){if("="===i)return o=!0,void n++;o?0===n?((r[i]||"/"===t.charAt(t.length-2))&&(s.voidElement=!0),s.name=i):(s.attrs[e]=i.replace(/^['"]|['"]$/g,""),e=void 0):(e&&(s.attrs[e]=e),e=i),n++,o=!1})),s}},199:function(t,e){t.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},200:function(t,e){function n(t,e){switch(e.type){case"text":return t+e.content;case"tag":return t+="<"+e.name+(e.attrs?function(t){var e=[];for(var n in t)e.push(n+'="'+t[n]+'"');return e.length?" "+e.join(" "):""}(e.attrs):"")+(e.voidElement?"/>":">"),e.voidElement?t:t+e.children.reduce(n,"")+"</"+e.name+">"}}t.exports=function(t){return t.reduce((function(t,e){return t+n("",e)}),"")}},240:function(t,e,n){"use strict";n.d(e,"a",(function(){return P}));var i=n(194),r=n.n(i),o=n(195),s=n.n(o),a=n(6),u=n.n(a),c=n(5),p=n.n(c),l=n(196),f=n.n(l),m=n(147),h=n(210);function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){u()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e){if(!t)return!1;var n=t.props?t.props.children:t.children;return e?n.length>0:!!n}function b(t){return t?t&&t.children?t.children:t.props&&t.props.children:[]}function g(t){return Array.isArray(t)?t:[t]}function T(t,e,n,i,r){if(""===e)return[];var o=i.transKeepBasicHtmlNodesFor||[],a=e&&new RegExp(o.join("|")).test(e);if(!t&&!a)return[e];var u={};!function t(e){g(e).forEach((function(e){"string"!==typeof e&&(v(e)?t(b(e)):"object"!==s()(e)||p.a.isValidElement(e)||Object.assign(u,e))}))}(t);var c=n.services.interpolator.interpolate(e,y(y({},u),r),n.language),l=f.a.parse("<0>".concat(c,"</0>"));function m(t,e,n){var i=b(t),r=d(i,e.children,n);return function(t){return"[object Array]"===Object.prototype.toString.call(t)&&t.every((function(t){return p.a.isValidElement(t)}))}(i)&&0===r.length?i:r}function h(t,e,n,i){t.dummy&&(t.children=e),n.push(p.a.cloneElement(t,y(y({},t.props),{},{key:i}),e))}function d(e,n,r){var u=g(e);return g(n).reduce((function(e,n,c){var l=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var f=u[parseInt(n.name,10)];!f&&1===r.length&&r[0][n.name]&&(f=r[0][n.name]),f||(f={});var b=0!==Object.keys(n.attrs).length?function(t,e){var n=y({},e);return n.props=Object.assign(t.props,e.props),n}({props:n.attrs},f):f,g=p.a.isValidElement(b),T=g&&v(n,!0)&&!n.voidElement,P=a&&"object"===s()(b)&&b.dummy&&!g,O="object"===s()(t)&&null!==t&&Object.hasOwnProperty.call(t,n.name);if("string"===typeof b)e.push(b);else if(v(b)||T){h(b,m(b,n,r),e,c)}else if(P){var S=d(u,n.children,r);e.push(p.a.cloneElement(b,y(y({},b.props),{},{key:c}),S))}else if(Number.isNaN(parseFloat(n.name))){if(O)h(b,m(b,n,r),e,c);else if(i.transSupportBasicHtmlNodes&&o.indexOf(n.name)>-1)if(n.voidElement)e.push(p.a.createElement(n.name,{key:"".concat(n.name,"-").concat(c)}));else{var E=d(u,n.children,r);e.push(p.a.createElement(n.name,{key:"".concat(n.name,"-").concat(c)},E))}else if(n.voidElement)e.push("<".concat(n.name," />"));else{var j=d(u,n.children,r);e.push("<".concat(n.name,">").concat(j,"</").concat(n.name,">"))}}else if("object"!==s()(b)||g)1===n.children.length&&l?e.push(p.a.cloneElement(b,y(y({},b.props),{},{key:c}),l)):e.push(p.a.cloneElement(b,y(y({},b.props),{},{key:c})));else{var k=n.children[0]?l:null;k&&e.push(k)}}else"text"===n.type&&e.push(n.content);return e}),[])}return b(d([{dummy:!0,children:t}],l,g(t||[]))[0])}function P(t){var e=t.children,n=t.count,i=t.parent,o=t.i18nKey,a=t.tOptions,u=t.values,l=t.defaults,f=t.components,d=t.ns,v=t.i18n,b=t.t,P=r()(t,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),O=Object(c.useContext)(m.a)||{},S=O.i18n,E=O.defaultNS,j=v||S||Object(m.d)();if(!j)return Object(h.d)("You will need to pass in an i18next instance by using i18nextReactModule"),e;var k=b||j.t.bind(j)||function(t){return t},I=y(y({},Object(m.c)()),j.options&&j.options.react),w=d||k.ns||E||j.options&&j.options.defaultNS;w="string"===typeof w?[w]:w||["translation"];var _=l||function t(e,n){if(!e)return"";var i="",o=g(e),a=n.transKeepBasicHtmlNodesFor||[];return o.forEach((function(e,o){if("string"===typeof e)i+="".concat(e);else if(p.a.isValidElement(e)){var u=Object.keys(e.props).length,c=a.indexOf(e.type)>-1,l=e.props.children;if(!l&&c&&0===u)i+="<".concat(e.type,"/>");else if(l||c&&0===u)if(e.props.i18nIsDynamicList)i+="<".concat(o,"></").concat(o,">");else if(c&&1===u&&"string"===typeof l)i+="<".concat(e.type,">").concat(l,"</").concat(e.type,">");else{var f=t(l,n);i+="<".concat(o,">").concat(f,"</").concat(o,">")}else i+="<".concat(o,"></").concat(o,">")}else if("object"===s()(e)){var m=e.format,d=r()(e,["format"]),y=Object.keys(d);if(1===y.length){var v=m?"".concat(y[0],", ").concat(m):y[0];i+="{{".concat(v,"}}")}else Object(h.c)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else Object(h.c)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),i}(e,I)||I.transEmptyNodeValue||o,C=I.hashTransKey,D=o||(C?C(_):_),U=u?{}:{interpolation:{prefix:"#$?",suffix:"?$#"}},x=y(y(y(y({},a),{},{count:n},u),U),{},{defaultValue:_,ns:w}),N=T(f||e,D?k(D,x):_,j,I,x),M=void 0!==i?i:I.defaultTransParent;return M?p.a.createElement(M,P,N):N}},330:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=["ms","s","m","h","d"],i=n.findIndex((function(t){return t===e})),r=[1e3,60,60,24,1],o=[1,1e3,6e4,36e5,864e5];return n.reduce((function(e,n,s){return e[n]=s>i?0:s===i?Math.floor(t/o[s]):Math.floor(t/o[s])%r[s],e}),{ms:0,s:0,m:0,h:0,d:0})}},397:function(t,e,n){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(330)),o=i(n(730)),s=i(n(731)),a=function(){function t(t){var e=t.initialTime,n=t.direction,i=t.timeToUpdate,r=t.lastUnit,a=t.checkpoints,u=t.onChange;this.internalTime=o.default(),this.initialTime=e,this.time=e,this.direction=n,this.timeToUpdate=i,this.lastUnit=r,this.checkpoints=a,this.innerState=new s.default(u),this.onChange=u,this.timerId=null}return Object.defineProperty(t.prototype,"state",{get:function(){return this.innerState.getState()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"timeParts",{get:function(){return this.getTimeParts(this.computeTime())},enumerable:!0,configurable:!0}),t.prototype.getTimeParts=function(t){return r.default(t,this.lastUnit)},t.prototype.setTime=function(t){this.internalTime=o.default(),this.initialTime=t,this.time=this.initialTime,this.onChange(this.getTimeParts(this.time))},t.prototype.getTime=function(){return this.time},t.prototype.setLastUnit=function(t){this.innerState.isPlaying()?(this.pause(),this.lastUnit=t,this.resume(!0)):this.lastUnit=t},t.prototype.setTimeToUpdate=function(t){this.innerState.isPlaying()?(this.pause(),this.timeToUpdate=t,this.resume()):this.timeToUpdate=t},t.prototype.setDirection=function(t){this.direction=t},t.prototype.setCheckpoints=function(t){this.checkpoints=t},t.prototype.start=function(){this.innerState.setPlaying()&&this.setTimerInterval(!0)},t.prototype.resume=function(t){void 0===t&&(t=!1),!this.innerState.isStopped()&&this.innerState.setPlaying()&&this.setTimerInterval(t)},t.prototype.pause=function(){this.innerState.setPaused()&&clearInterval(this.timerId)},t.prototype.stop=function(){this.innerState.setStopped()&&clearInterval(this.timerId)},t.prototype.reset=function(){this.time=this.initialTime,this.onChange(this.getTimeParts(this.time))},t.prototype.setTimerInterval=function(t){var e=this;void 0===t&&(t=!1),this.timerId&&clearInterval(this.timerId),this.internalTime=o.default();t&&this.onChange(this.getTimeParts(this.time)),this.timerId=window.setInterval((function(){var t=e.time,n=e.computeTime();e.onChange(e.getTimeParts(n)),e.checkpoints.map((function(i){var r=i.time,o=i.callback,s=r>t&&r<=n,a=r<t&&r>=n;("backward"===e.direction?a:s)&&o()}))}),this.timeToUpdate)},t.prototype.computeTime=function(){if(this.innerState.isPlaying()){var t=o.default(),e=Math.abs(t-this.internalTime);switch(this.direction){case"forward":return this.time=this.time+e,this.internalTime=t,this.time;case"backward":return this.time=this.time-e,this.internalTime=t,this.time<0?(this.stop(),0):this.time;default:return this.time}}return this.time},t}();e.TimerModel=a},728:function(t,e,n){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(729)),o=i(n(330));e.getTimeParts=o.default;var s=n(732);e.useTimer=s.useTimer,e.default=r.default},729:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=o(n(5)),a=n(397),u=s.default.createContext({ms:0,s:0,m:0,h:0,d:0,formatValue:function(t){return String(t)}}),c=function(t){var e=t.unit,n=t.formatValue;return s.default.createElement(d.Consumer,null,(function(t){return(n||t.formatValue)(t[e])||null}))},p=function(t){return s.default.createElement(c,r({unit:"ms"},t))},l=function(t){return s.default.createElement(c,r({unit:"s"},t))},f=function(t){return s.default.createElement(c,r({unit:"m"},t))},m=function(t){return s.default.createElement(c,r({unit:"h"},t))},h=function(t){return s.default.createElement(c,r({unit:"d"},t))},d=function(t){function e(e){var n=t.call(this,e)||this,i=n.props,o=i.initialTime,s=i.direction,u=i.timeToUpdate,c=i.lastUnit,p=i.checkpoints;return n.timer=new a.TimerModel({initialTime:o,direction:s,timeToUpdate:u,lastUnit:c,checkpoints:p,onChange:n.setState.bind(n)}),n.state=r({},n.timer.timeParts,{timerState:"INITED"}),n.start=n.start.bind(n),n.pause=n.pause.bind(n),n.resume=n.resume.bind(n),n.stop=n.stop.bind(n),n.reset=n.reset.bind(n),n.setTime=n.setTime.bind(n),n.getTime=n.getTime.bind(n),n.getTimerState=n.getTimerState.bind(n),n.setDirection=n.setDirection.bind(n),n.setCheckpoints=n.setCheckpoints.bind(n),n}return i(e,t),e.getUI=function(t,e){if(null===t)return null;if(Array.isArray(t)||s.default.isValidElement(t))return t;if(t.prototype&&t.prototype.isReactComponent)return s.default.createElement(t,e);if("function"===typeof t)return t(e);throw new Error("Please use one of the supported APIs for children")},e.prototype.componentDidMount=function(){this.props.startImmediately&&this.timer.start()},e.prototype.componentWillUnmount=function(){this.timer.stop()},e.prototype.render=function(){var t=this,n=t.start,i=t.pause,r=t.resume,o=t.stop,a=t.reset,c=t.getTime,p=t.getTimerState,l=t.setTime,f=t.setDirection,m=t.setCheckpoints,h=this.state,d=h.ms,y=h.s,v=h.m,b=h.h,g=h.d,T=h.timerState,P=this.props,O=P.formatValue,S=P.children;return s.default.createElement(u.Provider,{value:{ms:d,s:y,m:v,h:b,d:g,formatValue:O}},e.getUI(S,{start:n,resume:r,pause:i,stop:o,reset:a,getTime:c,getTimerState:p,setTime:l,setDirection:f,setCheckpoints:m,timerState:T}))},e.prototype.setTime=function(t){this.timer.setTime(t)},e.prototype.getTime=function(){return this.timer.getTime()},e.prototype.getTimerState=function(){return this.timer.state},e.prototype.setDirection=function(t){this.timer.setDirection(t)},e.prototype.setCheckpoints=function(t){this.timer.setCheckpoints(t)},e.prototype.start=function(){this.timer.start(),this.props.onStart()},e.prototype.stop=function(){this.timer.stop(),this.props.onStop()},e.prototype.pause=function(){this.timer.pause(),this.props.onPause()},e.prototype.reset=function(){this.timer.reset(),this.props.onReset()},e.prototype.resume=function(){this.timer.resume(),this.props.onResume()},e.Consumer=u.Consumer,e.Milliseconds=p,e.Seconds=l,e.Minutes=f,e.Hours=m,e.Days=h,e.defaultProps={timeToUpdate:1e3,direction:"forward",initialTime:0,startImmediately:!0,lastUnit:"d",checkpoints:[],children:null,formatValue:function(t){return String(t)},onStart:function(){},onResume:function(){},onPause:function(){},onStop:function(){},onReset:function(){}},e}(s.default.PureComponent);e.default=d},730:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return"undefined"!==typeof window&&"performance"in window?performance.now():Date.now()}},731:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.INITED="INITED",e.PLAYING="PLAYING",e.PAUSED="PAUSED",e.STOPPED="STOPPED";var i=function(){function t(t){var n=this;void 0===t&&(t=function(t){}),this.state=e.INITED,this.onChange=function(){return t({state:n.state})},this.state=e.INITED}return t.prototype.getState=function(){return this.state},t.prototype.setInited=function(){return this.state!==e.INITED&&(this.state=e.INITED,this.onChange(),!0)},t.prototype.isInited=function(){return this.state===e.INITED},t.prototype.setPlaying=function(){return this.state!==e.PLAYING&&(this.state=e.PLAYING,this.onChange(),!0)},t.prototype.isPlaying=function(){return this.state===e.PLAYING},t.prototype.setPaused=function(){return this.state===e.PLAYING&&(this.state=e.PAUSED,this.onChange(),!0)},t.prototype.isPaused=function(){return this.state===e.PAUSED},t.prototype.setStopped=function(){return this.state!==e.INITED&&(this.state=e.STOPPED,this.onChange(),!0)},t.prototype.isStopped=function(){return this.state===e.STOPPED},t}();e.default=i},732:function(t,e,n){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),s=n(397),a=r(n(330));e.useTimer=function(t){var e=void 0===t?{}:t,n=e.initialTime,r=void 0===n?0:n,u=e.direction,c=void 0===u?"forward":u,p=e.timeToUpdate,l=void 0===p?1e3:p,f=e.startImmediately,m=void 0===f||f,h=e.lastUnit,d=void 0===h?"d":h,y=e.checkpoints,v=void 0===y?[]:y,b=e.onStart,g=e.onResume,T=e.onPause,P=e.onStop,O=e.onReset,S=o.useState(i({},a.default(r<0?0:r,d),{state:"INITED"})),E=S[0],j=S[1],k=o.useMemo((function(){return new s.TimerModel({initialTime:r,direction:c,timeToUpdate:l,lastUnit:d,checkpoints:v,onChange:function(t){return j((function(e){return i({},e,t)}))}})}),[]),I=o.useCallback((function(t){return k.setTime(t)}),[k]),w=o.useCallback((function(){return k.getTime()}),[k]),_=o.useCallback((function(){return k.state}),[k]),C=o.useCallback((function(t){return k.setDirection(t)}),[k]),D=o.useCallback((function(t){return k.setLastUnit(t)}),[k]),U=o.useCallback((function(t){return k.setCheckpoints(t)}),[k]),x=o.useCallback((function(t){return k.setTimeToUpdate(t)}),[k]),N=o.useCallback((function(){k.start(),b&&b()}),[k,b]),M=o.useCallback((function(){k.stop(),P&&P()}),[k,P]),A=o.useCallback((function(){k.pause(),T&&T()}),[k,T]),V=o.useCallback((function(){k.reset(),O&&O()}),[k,O]),L=o.useCallback((function(){k.resume(),g&&g()}),[k,g]),R=o.useMemo((function(){return{start:N,stop:M,pause:A,reset:V,resume:L,setTime:I,getTime:w,getTimerState:_,setDirection:C,setLastUnit:D,setTimeToUpdate:x,setCheckpoints:U}}),[N,M,A,V,L,I,w,_,C,D,x,U]);return o.useEffect((function(){return m&&N(),function(){M()}}),[]),{controls:R,value:E}}},733:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return i}))}}]);
//# sourceMappingURL=5.1f3bb278.chunk.js.map