(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[57],{220:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var r=n(157),a=n(5),u=n.n(a),c=n(54),i=n(296),o=n(186),l=n(158),d=n(156),f=n(155);function p(){var e=Object(d.a)(["\n  padding-bottom: 24px; \n\n  @media screen and (","){\n    margin: auto;\n\n    max-width: 768px;\n    width: 100%;\n  }\n"]);return p=function(){return e},e}var s=f.default.div(p(),(function(e){return e.theme.breakpoints.tablet}));function m(){var e=Object(d.a)(["\n  margin-bottom: 24px;\n"]);return m=function(){return e},e}function h(){var e=Object(d.a)(["\n  height: 100%;\n"]);return h=function(){return e},e}function v(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction:column;\n\n  height:100%;\n"]);return v=function(){return e},e}var b=f.default.div(v()),g=f.default.div(h()),j=f.default.div(m()),O=Object(c.a)((function(e){var t=e.container;return n(228)("./".concat(t))}),{fallback:u.a.createElement("div",null,"Loading ...")});var E=u.a.memo((function(e){var t=e.steps,n=e.children,a=Object(o.i)(),c=Object(o.h)(),d=u.a.useState(!1),f=Object(r.a)(d,2),p=f[0],m=f[1],h=u.a.useMemo((function(){var e=a.url.replace(/\/$/,"");return t.map((function(t){return e+t.path}))}),[a.url,t]);return u.a.useEffect((function(){m(!0)}),[]),u.a.createElement(l.a,null,u.a.createElement(b,null,u.a.createElement(g,null,p&&u.a.createElement(i.a,{location:c,timing:"ease-in-out",duration:500,pathList:h},t.map((function(e){return u.a.createElement(o.b,{key:e.componentPath,exact:!0,path:Array.isArray(e.path)?e.path.map((function(e){return a.path+e})):a.path+e.path,render:function(){return u.a.createElement(s,null,u.a.createElement(O,Object.assign({container:e.componentPath},e.props)))}})})))),u.a.createElement(j,{id:"wizard-buttons"},n)))}))},246:function(e,t,n){"use strict";n.r(t);var r=n(164),a=n(5),u=n.n(a),c=n(158),i=n(186),o=n(220),l=n(183);Object(c.c)(window.localStorage);var d="submit-steps";Object(c.b)(Object(r.a)({},d,{recordYourCough:{recordingFile:null,uploadedFile:null},recordYourSpeech:{recordingFile:null,uploadedFile:null}}),{name:"VirufyWizard"});var f=function(){var e=Object(c.d)().state,t=Object(i.g)();return u.a.useEffect((function(){var n=function(e){var t,n=null;if(!(null===(t=e.welcome)||void 0===t?void 0:t.patientId)&&e[d]){var r=e[d],a=r.recordYourCough,u=r.recordYourSpeech,c=[];if(a){var i=a.recordingFile,o=a.uploadedFile;i&&c.push({file:i,route:"/step-record/cough"}),o&&c.push({file:o,route:"/step-manual-upload/cough"})}if(u){var l=a.recordingFile,f=a.uploadedFile;l&&c.push({file:l,route:"/step-record/speech"}),f&&c.push({file:f,route:"/step-manual-upload/speech"})}var p=c.find((function(e){return!(!(t=e.file)||void 0!==t.size);var t}));p&&(n=p.route)}return n}(e);n&&t.push("/".concat(d).concat(n))}),[]),null};t.default=u.a.memo((function(){var e=Object(l.b)(),t=Object(l.c)(),n=u.a.useMemo((function(){return Object(l.a)(d,e,t)}),[e,t]);return u.a.createElement(o.a,{steps:n},u.a.createElement(f,null))}))}}]);
//# sourceMappingURL=57.f4f9a1ad.chunk.js.map