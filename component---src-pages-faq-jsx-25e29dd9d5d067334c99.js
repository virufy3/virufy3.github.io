(self.webpackChunk=self.webpackChunk||[]).push([[534],{39703:function(e,t,n){"use strict";var a=n(95318),o=n(20862);t.__esModule=!0;var l={Link:!0,withIntl:!0,navigate:!0,changeLocale:!0,IntlContextProvider:!0,IntlContextConsumer:!0};t.IntlContextConsumer=t.IntlContextProvider=t.changeLocale=t.navigate=t.withIntl=t.Link=void 0;var r=n(83074);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(l,e)||(t[e]=r[e]))}));var i=o(n(4687));t.Link=i.default,t.navigate=i.navigate,t.changeLocale=i.changeLocale;var u=a(n(98770));t.withIntl=u.default;var c=n(38368);t.IntlContextProvider=c.IntlContextProvider,t.IntlContextConsumer=c.IntlContextConsumer},4687:function(e,t,n){"use strict";var a=n(95318);t.__esModule=!0,t.changeLocale=t.navigate=t.default=void 0;var o=a(n(67154)),l=a(n(37316)),r=a(n(67294)),i=a(n(45697)),u=n(25444),c=n(38368),d=function(e){var t=e.to,n=e.language,a=e.children,i=e.onClick,d=(0,l.default)(e,["to","language","children","onClick"]);return r.default.createElement(c.IntlContextConsumer,null,(function(e){var l=n||e.language,c=e.routed||n?"/"+l+t:""+t;return r.default.createElement(u.Link,(0,o.default)({},d,{to:c,onClick:function(e){n&&localStorage.setItem("gatsby-intl-language",n),i&&i(e)}}),a)}))};d.propTypes={children:i.default.node.isRequired,to:i.default.string,language:i.default.string},d.defaultProps={to:""};var f=d;t.default=f;t.navigate=function(e,t){if("undefined"!=typeof window){var n=window.___gatsbyIntl,a=n.language,o=n.routed?"/"+a+e:""+e;(0,u.navigate)(o,t)}};t.changeLocale=function(e,t){if("undefined"!=typeof window){var n=window.___gatsbyIntl.routed,a="/"+e+(t||function(e){if(!n)return e;var t=e.indexOf("/",1);return e.substring(t)}(window.location.pathname))+window.location.search;localStorage.setItem("gatsby-intl-language",e),(0,u.navigate)(a)}}},98770:function(e,t,n){"use strict";var a=n(95318);t.__esModule=!0,t.default=void 0;var o=a(n(67294)),l=n(83074);t.default=function(e){return function(t){return console.warn("withIntl is deprecated. Please use injectIntl instead."),o.default.createElement((0,l.injectIntl)(e),t)}}},1556:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var a=n(67294),o=n(39703);function l(){var e=(0,o.useIntl)();return(0,a.useEffect)((function(){window.location.replace("/"+e.locale+"/our-approach#faq")})),a.createElement("p",null,"Redirecting...")}}}]);
//# sourceMappingURL=component---src-pages-faq-jsx-25e29dd9d5d067334c99.js.map