(this["webpackJsonppwa-demo"]=this["webpackJsonppwa-demo"]||[]).push([[24],{165:function(e,t,n){"use strict";var r=n(5),a=n.n(r),o=n(191);t.a=function(){var e=a.a.useContext(o.a),t=e.title,n=e.setTitle,r=e.setDoGoBack;return{title:t,setTitle:n,doGoBack:e.doGoBack,setDoGoBack:r}}},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){window.scrollTo({top:0,behavior:"smooth"})}},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(37),a=n(5),o=n.n(a),c=n(161),i=n(183),s=n(157),u=n(156),l=n(158);function d(){var e=Object(s.a)(["\n  height: 50px;\n  border-radius: 4px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return d=function(){return e},e}var b=u.default.button(d(),(function(e){var t=e.dark,n=e.disabled?l.a.midGray:l.a.darkBlack;return t?"\n    background-color: ".concat(n,";\n    color: ").concat(l.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(l.a.white,";\n    color: ").concat(n,";\n    border: 1px solid ").concat(n,";\n  ")})),f=o.a.memo((function(e){var t=e.children,n=Object(i.a)(e,["children"]);return Object(r.jsx)(b,Object(c.a)(Object(c.a)({type:"button"},n),{},{children:t}))}));function p(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n\n    &:last-of-type {\n      margin-left: 20px;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return p=function(){return e},e}var j=u.default.div(p(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),m=o.a.memo((function(e){var t=e.invert,n=void 0!==t&&t,a=e.leftLabel,o=e.leftDisabled,c=e.leftHandler,i=e.rightLabel,s=e.rightDisabled,u=e.rightHandler;return Object(r.jsxs)(j,{children:[Object(r.jsx)(f,{dark:n,disabled:o,onClick:c,children:a}),i&&u&&Object(r.jsx)(f,{dark:!n,disabled:s,onClick:u,children:i})]})})),h=o.a.memo(m)},172:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(162),a=n(161);function o(e){return function(t,n){return Object(a.a)(Object(a.a)({},t),{},Object(r.a)({},e,Object(a.a)(Object(a.a)({},t[e]),n)))}}function c(){return function(e){return{welcome:{language:e.welcome.language}}}}},238:function(e,t,n){"use strict";n.r(t);var r=n(37),a=n(187),o=n.n(a),c=n(188),i=n(164),s=n(5),u=n.n(s),l=n(169),d=n(173),b=n.n(d),f=n(841),p=n(315),j=n(160),m=n(171),h=n(316),x=n(390),v=n.n(x).a.create({baseURL:"https://ti7vvvk450.execute-api.us-east-2.amazonaws.com/prod"});var O=n(172),g=n(165),k=n(166),y=n(274),w=function(){var e=b()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,t=Object(g.a)(),n=t.setDoGoBack,a=t.setTitle,s=Object(l.g)(),d=Object(f.a)().t,x=Object(j.c)({resetStore:Object(O.a)()}),w=x.state,T=x.actions,S=v,P=u.a.useState(null),B=Object(i.a)(P,2),C=B[0],D=B[1],I=u.a.useState(!0),R=Object(i.a)(I,2),E=R[0],G=R[1],L=u.a.useState(),X=Object(i.a)(L,2),z=X[0],H=X[1];u.a.useEffect((function(){var e=document&&document.getElementById("footer-report-problems");e&&(e.style.display=E?"none":"flex")}),[E]),u.a.useEffect((function(){Object(k.a)(),a(""),n((function(){}))}),[]);var F=u.a.useCallback((function(){s.replace("")}),[s]),J=function(){var e=Object(c.a)(o.a.mark((function e(){var t,n,r,a,c,i,s,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,D(null),!(w&&w.welcome&&w["submit-steps"])){e.next=15;break}return t=w.welcome,n=t.language,r=t.hospitalCode,a=void 0===r?"virufy":r,c=t.patientId,i=void 0===c?"virufy":c,s=new FormData,n&&s.append("language",n),a&&s.append("hospitalCode",a),i&&s.append("patientId",i),e.next=10,S.post("saveDemoSurvey",s,{headers:{"Content-Type":"multipart/form-data; boundary=SaveDemoSurvey"}});case 10:u=e.sent,T.resetStore({}),u.data&&(console.log(u.data),G(!1),H("XX")),e.next=17;break;case 15:G(!1),H("XX");case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(0),console.log("Error",e.t0),D(d("beforeSubmit:submitError"));case 23:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}();return u.a.useEffect((function(){setTimeout((function(){J()}),3e3)}),[]),Object(r.jsxs)(r.Fragment,{children:[E?Object(r.jsxs)(y.ProcessingContainer,{children:[Object(r.jsx)(y.Title,{children:d("predictionResult:processingTitle")}),Object(r.jsx)(y.ImageProcessing,{})]}):Object(r.jsxs)(y.PredictionResultContainer,{children:[Object(r.jsx)(y.TitleResult,{children:d("predictionResult:predictionResultTitle")}),Object(r.jsx)(y.IntroText,{children:Object(r.jsxs)(p.a,{i18nKey:"main:introductionText",children:[Object(r.jsx)("strong",{children:"Important note:"})," This app is only for demonstration purposes and does not provide a prediction. Please visit ",Object(r.jsx)(h.a,{to:"https://virufy.org/study",target:"_blank",children:"Virufy Study"})," to contribute your cough and help us to complete this app."]})}),z&&Object(r.jsxs)(y.LikelihoodText,{children:[d("predictionResult:likelihoodPrefix"),Object(r.jsxs)(y.LikelihoodPercentageText,{children:[" ",z,"%"]})]}),Object(r.jsx)(y.ImagePredictionResult,{})]}),C&&Object(r.jsx)(y.SubmitError,{children:C}),!E&&Object(r.jsx)(e,{children:Object(r.jsx)(m.a,{invert:!0,leftLabel:d("predictionResult:nextButton"),leftHandler:F,leftDisabled:!1})})]})};t.default=u.a.memo(w)}}]);
//# sourceMappingURL=24.92574380.chunk.js.map