(this["webpackJsonppwa-demo"]=this["webpackJsonppwa-demo"]||[]).push([[26],{162:function(e,t,n){"use strict";var r=n(5),o=n.n(r),c=n(178);t.a=function(){var e=o.a.useContext(c.a),t=e.title,n=e.setTitle,r=e.subtitle,i=e.setSubtitle,a=e.type,u=e.setType,s=e.logoSize,l=e.setLogoSize,f=e.setDoGoBack;return{title:t,setTitle:n,subtitle:r,setSubtitle:i,type:a,setType:u,logoSize:s,setLogoSize:l,doGoBack:e.doGoBack,setDoGoBack:f}}},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){window.scrollTo({top:0,behavior:"smooth"})}},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(160),o=n(37),c=n(169),i=n(5),a=n.n(i),u=n(157),s=n(156),l=n(158);function f(){var e=Object(u.a)(["\n  height: 52px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return f=function(){return e},e}var d=s.default.button(f(),(function(e){var t=e.dark,n=e.disabled?l.a.purple_50:l.a.purple;return t?"\n    background-color: ".concat(n,";\n    color: ").concat(l.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(l.a.white,";\n    color: ").concat(n,";\n    border: 1px solid ").concat(n,";\n  ")})),b=a.a.memo((function(e){var t=e.children,n=Object(c.a)(e,["children"]);return Object(o.jsx)(d,Object(r.a)(Object(r.a)({type:"button"},n),{},{children:t}))}))},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(37),o=n(5),c=n.n(o),i=n(166),a=n(157);function u(){var e=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n\n    &:last-of-type {\n      margin-left: 20px;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return u=function(){return e},e}var s=n(156).default.div(u(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),l=c.a.memo((function(e){var t=e.invert,n=void 0!==t&&t,o=e.leftLabel,c=e.leftDisabled,a=e.leftHandler,u=e.rightLabel,l=e.rightDisabled,f=e.rightHandler;return Object(r.jsxs)(s,{children:[Object(r.jsx)(i.a,{dark:n,disabled:c,onClick:a,children:o}),u&&f&&Object(r.jsx)(i.a,{dark:!n,disabled:l,onClick:f,children:u})]})})),f=c.a.memo(l)},169:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},172:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),a=n(24),u=c(n(175));t.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).",t.default=function(e){void 0===e&&(e={});var n=e.closeOnOutsideClick,c=void 0===n||n,s=e.closeOnEsc,l=void 0===s||s,f=e.bindTo,d=e.isOpen,b=void 0!==d&&d,p=e.onOpen,v=e.onClose,m=e.onPortalClick,h=o(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),O=u.default(),g=O.isServer,j=O.isBrowser,y=i.useState(b),w=y[0],k=y[1],S=i.useRef(w),x=i.useCallback((function(e){S.current=e,k(e)}),[]),E=i.useRef(),C=i.useRef(j?document.createElement("div"):null);i.useEffect((function(){j&&!C.current&&(C.current=document.createElement("div"))}),[j,C]);var P=i.useMemo((function(){if(!g)return f&&a.findDOMNode(f)||document.body}),[g,f]),L=function(e){if(!e)return{portal:C,targetEl:E,event:e};var t=e||{};t.persist&&t.persist(),t.portal=C,t.targetEl=E,t.event=e;var n=e.currentTarget;return!E.current&&n&&n!==document&&(E.current=t.currentTarget),t},_=Object.entries(h).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=function(e){g||r(L(e))},e}),{}),T=i.useCallback((function(e){if(!g){var n=L(e);if(null==E.current)throw setTimeout((function(){return x(!0)}),0),Error(t.errorMessage1);p&&p(n),x(!0)}}),[g,C,x,E,p]),B=i.useCallback((function(e){if(!g){var t=L(e);v&&S.current&&v(t),S.current&&x(!1)}}),[g,v,x]),D=i.useCallback((function(e){return S.current?B(e):T(e)}),[B,T]),M=i.useCallback((function(e){return"Escape"===e.key&&l?B(e):void 0}),[l,B]),I=i.useCallback((function(e){var t=function(t){return t.current.contains(e.target)};t(C)||0!==e.button||!S.current||t(E)||c&&B(e)}),[g,B,c,C]),W=i.useCallback((function(e){if(!g&&C.current instanceof HTMLElement){var t=L(e);C.current.contains(t.target)&&m&&m(t),I(e)}}),[I]),R=i.useRef({});i.useEffect((function(){if(!g&&P instanceof HTMLElement&&C.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},t=C.current;return P.appendChild(C.current),Object.entries(e).forEach((function(e){var t=e[0],n=e[1];h[t]&&(R.current[t]=function(e){return h[t](L(e))},document.addEventListener(n,R.current[t]))})),document.addEventListener("keydown",M),document.addEventListener("mousedown",W),function(){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];h[t]&&(document.removeEventListener(n,R.current[t]),delete R.current[t])})),document.removeEventListener("keydown",M),document.removeEventListener("mousedown",W),P.removeChild(t)}}}),[g,I,M,P,C]);var z=i.useCallback((function(e){var t=e.children;return null!=C.current?a.createPortal(t,C.current):null}),[C]);return Object.assign([T,B,S.current,z,D,E,C],r(r({isOpen:S.current,openPortal:T,ref:E,closePortal:B,togglePortal:D,Portal:z,portalRef:C},_),{bind:r({ref:E},_)}))}},175:function(e,t,n){"use strict";var r,o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(r=t.Device||(t.Device={}));var c=r.Browser,i=r.Server,a=r.Native,u=!("undefined"===typeof window||!window.document||!window.document.createElement),s="undefined"!=typeof navigator&&"ReactNative"==navigator.product?a:u?c:i,l={isBrowser:s===c,isServer:s===i,isNative:s===a,device:s,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:s===c&&!!window.addEventListener,canUseViewport:s===c&&!!window.screen},f=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return o(o({},e),t)}),{})}((e=l,Object.keys(e).map((function(t){return e[t]})),l));var e},d=f();t.weAreServer=function(){l.isServer=!0,d=f()},t.useSSR=function(){return d},t.default=t.useSSR},242:function(e,t,n){"use strict";n.r(t);var r=n(37),o=n(161),c=n(5),i=n.n(c),a=n(173),u=n(172),s=n.n(u),l=n(866),f=n(162),d=n(168),b=n(158),p=n(163),v=n(203),m=["Please use your own device and wear a mask when appropriate.","Disinfect your device and any affected or nearby surfaces after recording your cough/speech.","If you have an underlying condition that increases your risk from coughing, please check with your health care provider before participating.","If you feel your symptoms are getting worse, please contact your local medical response"],h=function(e){var t=s()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,n=Object(c.useState)(!0),u=Object(o.a)(n,2),h=u[0],O=u[1],g=Object(f.a)(),j=g.setDoGoBack,y=g.setTitle,w=g.title,k=g.setType,S=g.setLogoSize,x=g.setSubtitle,E=Object(a.g)(),C=Object(l.a)().t,P=i.a.useCallback((function(){e.nextStep&&E.push(e.nextStep)}),[E,e.nextStep]),L=Object(c.useCallback)((function(){e.previousStep?(O(!1),E.push(e.previousStep)):E.goBack()}),[]);Object(c.useEffect)((function(){w&&y("")}),[w]),Object(c.useEffect)((function(){Object(p.a)(),j((function(){return L}))}),[L,j]),Object(c.useEffect)((function(){k("shapeDown"),S("regular"),x(C("beforeStart:title"))}),[]);var _=C("beforeStart:advise_list",{returnObjects:!0,defaultValue:m});return Object(r.jsxs)(v.WelcomeStyledFormAlternative,{children:[Object(r.jsx)(v.ShapeDownContainer,{children:Object(r.jsx)(v.WelcomeBorderContainer,{children:Object(r.jsx)(v.WelcomeSubtitle,{fontColor:b.a.mineShaft,mb:15,mt:20,textAlign:"left",isBold:!0,children:Object(r.jsx)("strong",{children:C("beforeStart:subtitle")})})})}),Object(r.jsxs)(v.WelcomeContent,{mt:10,mb:95,children:[Object(r.jsx)(v.WelcomeItemList,{children:_.map((function(e,t){return Object(r.jsx)(v.WelcomeItemListItem,{children:e},"advise_".concat(t))}))}),h&&Object(r.jsx)(t,{children:Object(r.jsx)(d.a,{leftLabel:C("beforeStart:startButton"),leftHandler:P,invert:!0})})]})]})};t.default=i.a.memo(h)}}]);
//# sourceMappingURL=26.8d17e710.chunk.js.map