(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[31,56],{161:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(190);t.a=function(){var e=r.a.useContext(o.a),t=e.title,n=e.setTitle,a=e.subtitle,i=e.setSubtitle,c=e.type,l=e.setType,u=e.logoSize,s=e.setLogoSize,d=e.setDoGoBack;return{title:t,setTitle:n,subtitle:a,setSubtitle:i,type:c,setType:l,logoSize:u,setLogoSize:s,doGoBack:e.doGoBack,setDoGoBack:d}}},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(){window.scrollTo({top:0,behavior:"smooth"})}},169:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(164),r=n(187);function o(e){return function(t,n){return Object(r.a)(Object(r.a)({},t),{},Object(a.a)({},e,Object(r.a)(Object(r.a)({},t[e]),n)))}}function i(){return function(e){return{welcome:{language:e.welcome.language}}}}},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(5),r=n.n(a),o=n(171),i=n(156),c=n(155),l=n(172);function u(){var e=Object(i.a)(["\n  height: 50px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return u=function(){return e},e}var s=c.default.button(u(),(function(e){var t=e.dark,n=e.disabled?l.a.purple_50:l.a.purple;return t?"\n    background-color: ".concat(n,";\n    color: ").concat(l.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(l.a.white,";\n    color: ").concat(n,";\n    border: 1px solid ").concat(n,";\n  ")})),d=r.a.memo((function(e){var t=e.children,n=Object(o.a)(e,["children"]);return r.a.createElement(s,Object.assign({type:"button"},n),t)}));function f(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n    min-height: 50px;\n    margin-bottom: 8px;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return f=function(){return e},e}var m=c.default.div(f(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),g=r.a.memo((function(e){var t=e.invert,n=void 0!==t&&t,a=e.leftLabel,o=e.leftDisabled,i=e.leftHandler,c=e.rightLabel,l=e.rightDisabled,u=e.rightHandler;return r.a.createElement(m,null,r.a.createElement(d,{dark:n,disabled:o,onClick:i},a),c&&u&&r.a.createElement(d,{dark:!n,disabled:l,onClick:u},c))})),p=r.a.memo(g)},249:function(e,t,n){"use strict";n.r(t);var a=n(165),r=n.n(a),o=n(166),i=n(157),c=n(5),l=n.n(c),u=n(186),s=n(754),d=n(198),f=n(160),m=n.n(f),g=n(163),p=n(158),h=n(173),b=n(168),v=n(181),y=n(170),x=n(301),w=n(156),C=n(155),E=n(335);function k(){var e=Object(w.a)(["\n  margin: auto;\n  margin-left:  ","px;\n  margin-right: 20px;\n"]);return k=function(){return e},e}function O(){var e=Object(w.a)(["\n  appearance: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 2V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z' fill='%2321242C'/%3E%3C/svg%3E%0A\");\n  background-repeat: no-repeat;\n  color: black;\n  cursor: pointer;\n  display: inline-block;\n  height: 18px;\n  left: ","px;\n  outline: 0;\n  position:absolute;\n  width: 18px;\n  border: 0;\n  border-radius: 0;\n  transform: translateY(4px);\n\n  &:checked{\n    height: 18px;\n    width: 28px;\n    background-image: url(\"data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16ZM14.99 6L13.58 4.58L6.99 11.17L4.41 8.6L2.99 10.01L6.99 14L14.99 6Z' fill='%2321242C'/%3E%3C/svg%3E%0A\");\n  }\n"]);return O=function(){return e},e}function L(){var e=Object(w.a)(["font-weight: ",";"]);return L=function(){return e},e}function j(){var e=Object(w.a)(['\n  display: flex;\n  font-family: "Source Sans Pro";\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  ',"\n  padding: 15px 0;\n  position: relative;\n\n  @media screen and (","){\n    max-width: 470px;\n    margin: auto;\n    width: 100%;\n  }\n"]);return j=function(){return e},e}var S=Object(C.default)(E.a)(j(),(function(e){var t=e.fontWeight;return t&&Object(C.css)(L(),t)}),(function(e){return e.theme.breakpoints.tablet})),P=C.default.input.attrs((function(){return{type:"checkbox"}}))(O(),(function(e){return e.checkboxLeftOffsetPosition})),B=C.default.label(k(),(function(e){return e.checkboxLeftOffsetPosition+32})),T=function(e){var t=e.label,n=e.id,a=e.name,r=e.value,o=e.fontWeight,i=void 0===o?400:o,c=e.margin,u=void 0===c?"auto":c,s=e.checkboxLeftOffsetPosition,d=void 0===s?20:s,f=e.onChange;return l.a.createElement(S,{isChecked:r,fontWeight:i,margin:u},l.a.createElement(P,{onChange:f,checkboxLeftOffsetPosition:d,id:n,name:a,checked:r}),l.a.createElement(B,{htmlFor:n,checkboxLeftOffsetPosition:d},t))},_=n(192),z=n(169),V=n(161),D=n(401),A=n.n(D)()(window),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(c.useState)(!1),n=Object(i.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(""),l=Object(i.a)(o,2),u=l[0],s=l[1];return Object(c.useEffect)((function(){r(!0),fetch(e,{mode:"no-cors"}).then((function(e){return e.text()})).then((function(e){r(!1),s(e)}))}),[e]),{file:A.sanitize(u,{ADD_ATTR:["target"]}),isLoadingFile:a}},I={Argentina:{consentLang:["default.html"]},Bolivia:{consentLang:["default.html"]},Brazil:{consentLang:["default.html"]},Colombia:{consentLang:["default.html"]},Mexico:{consentLang:["default.html"]},Pakistan:{consentLang:["default.html"]},Peru:{consentLang:["default.html"]},"United States":{consentLang:["default.html"]}},K=n(162),M={Argentina:"https://virufy.org/ar/privacy_policy.pdf",Bolivia:"https://virufy.org/bo/privacy_policy.pdf",Brazil:"https://virufy.org/br/privacy_policy.pdf",Colombia:"https://virufy.org/co/privacy_policy.pdf",Peru:"https://virufy.org/pe/privacy_policy.pdf",Mexico:"https://virufy.org/mx/privacy_policy.pdf","United States":"https://virufy.org/us/privacy_policy.pdf"},q={Argentina:"https://virufy.org/ar/study_consent.pdf",Bolivia:"https://virufy.org/bo/study_consent.pdf",Brazil:"https://virufy.org/br/study_consent.pdf",Colombia:"https://virufy.org/co/study_consent.pdf",Peru:"https://virufy.org/pe/study_consent.pdf",Mexico:"https://virufy.org/mx/study_consent.pdf","United States":"https://virufy.org/us/study_consent.pdf"},F=n(206),G=v.e().shape({agreedConsentTerms:v.b().required().default(!1).oneOf([!0]),agreedPolicyTerms:v.b().required().default(!1).oneOf([!0]),agreedCovidDetection:v.b().when("$country",{is:"Brazil",then:v.b().notRequired(),otherwise:v.b().required().default(!1).oneOf([!0])}),agreedTrainingArtificial:v.b().required().default(!1).oneOf([!0]),agreedBiometric:v.b().when("$country",{is:"Brazil",then:v.b().notRequired(),otherwise:v.b().required().default(!1).oneOf([!0])})});t.default=l.a.memo((function(e){var t=m()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,n=l.a.useState(!0),a=Object(i.a)(n,2),f=a[0],v=a[1],w=Object(V.a)(),C=w.setType,E=w.setDoGoBack,k=w.setSubtitle,O=Object(p.d)(Object(z.b)(e.storeKey)),L=O.state,j=O.action,S=null===L||void 0===L?void 0:L[e.storeKey],P=L.welcome.country,B=Object(g.e)({defaultValues:S,resolver:Object(h.a)(G),context:{country:P},mode:"onChange"}),D=B.control,A=B.handleSubmit,W=B.formState,Z=W.errors,R=W.isValid,U=Object(u.g)(),J=H(function(e,t){var n="".concat("https://virufy.org/clinic","/static/consent"),a=I[e].consentLang.indexOf("".concat(t,".html"));if(-1!==a)return"".concat(n,"/").concat(e,"/").concat(I[e].consentLang[a]);var r=I[e].consentLang.indexOf("default.html");return"".concat(n,"/").concat(e,"/").concat(I[e].consentLang[r])}(P,L.welcome.language)),Y=J.isLoadingFile,$=J.file,N=function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n&&(j(n),e.nextStep&&(v(!1),U.push(e.nextStep)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Q=Object(c.useCallback)((function(){e.previousStep?(v(!1),U.push(e.previousStep)):U.goBack()}),[]),X=Object(s.a)().t;return Object(c.useEffect)((function(){Object(K.a)(),E((function(){return Q})),C("secondary"),k(X("consent:title"))}),[Q,E,C,k,X]),l.a.createElement(F.WelcomeStyledFormAlternative,null,l.a.createElement(F.ContainerShapeDown,null,l.a.createElement(F.InnerContainerShapeDown,null,l.a.createElement(_.a,null,l.a.createElement(d.a,{i18nKey:"consent:paragraph1"},"Virufy cares about your privacy and is advised by licensed data privacy experts. The information and recordings you provide will only be used for the purposes described in our",l.a.createElement(x.a,{to:M[P],target:"_blank"},"Privacy Policy")," and consent form. Please read the consent Form:")))),l.a.createElement(F.WelcomeContent,null,l.a.createElement(F.WelcomeConsentForm,{dangerouslySetInnerHTML:{__html:Y?"Loading...":$}}),l.a.createElement(_.a,null,l.a.createElement(d.a,{i18nKey:"consent:paragraph3"},"By checking the below boxes, you are granting your explicit, freely given, and informed consent to Virufy to collect, process, and share your information for the purposes indicated above and as provided in greater detail in our ",l.a.createElement(x.a,{to:M[P],target:"_blank"},"Privacy Policy"),". You can print a copy of this Consent Form for your personal records by accessing ",l.a.createElement(x.a,{to:q[P],target:"_blank"},"Privacy Policy"))),"Brazil"===(null===S||void 0===S?void 0:S.country)&&l.a.createElement(_.a,null,l.a.createElement(d.a,{i18nKey:"consent:paragraph3_brazil"},'If you are located inside Brazilian national territory, and for the purposes of the General Personal Data Protection Law ("LGPD"), "consent", in its free, informed, and unequivocal pronouncement, will be the legal basis on which we process sensitive personal data.')),l.a.createElement(F.CheckboxTitle,null,X("consent:pleaseConfirm","Please confirm the following:")),l.a.createElement(g.a,{control:D,name:"agreedConsentTerms",defaultValue:!1,render:function(e){var t=e.onChange,n=e.value;return l.a.createElement(T,{id:"Step2-ConsentTerms",label:X("Brazil"!==P?"consent:certify":"consent:certifyBrazil"),name:"agreedConsentTerms",onChange:function(e){return t(e.target.checked)},value:n})}}),l.a.createElement(g.a,{control:D,name:"agreedPolicyTerms",defaultValue:!1,render:function(e){var t=e.onChange,n=e.value;return l.a.createElement(T,{id:"Step2-PolicyTerms",label:l.a.createElement(d.a,{i18nKey:"consent:agree"},"I agree to the terms of the Virufy",l.a.createElement(x.a,{to:M[P],target:"_blank"},"Privacy Policy")),name:"agreedPolicyTerms",onChange:function(e){return t(e.target.checked)},value:n})}}),"Brazil"!==P&&l.a.createElement(g.a,{control:D,name:"agreedCovidDetection",defaultValue:!1,render:function(e){var t=e.onChange,n=e.value,a=e.name;return l.a.createElement(T,{id:"Step2-DetectionCovid",label:l.a.createElement(d.a,{i18nKey:"consent:detection"},"I hereby acknowledge and agree that processing shall be done for the purposes indicated above and, in particular but without limitation, for research and compiling a dataset needed for the development of artificial intelligence algorithms for device-based COVID-19 detection."),name:a,onChange:function(e){return t(e.target.checked)},value:n})}}),l.a.createElement(g.a,{control:D,name:"agreedTrainingArtificial",defaultValue:!1,render:function(e){var t=e.onChange,n=e.value,a=e.name;return l.a.createElement(T,{id:"Step2-TrainingArtificial",label:l.a.createElement(d.a,{i18nKey:"consent:signs"},"I hereby acknowledge and agree that processing shall be done for the purposes indicated above and, in particular but without limitation, for training artificial intelligence algorithms to analyze cough audio recordings to better determine signs of COVID-19."),name:a,onChange:function(e){return t(e.target.checked)},value:n})}}),"Brazil"!==P&&l.a.createElement(g.a,{control:D,name:"agreedBiometric",defaultValue:!1,render:function(e){var t=e.onChange,n=e.value,a=e.name;return l.a.createElement(T,{id:"Step2-Biometric",label:l.a.createElement(d.a,{i18nKey:"consent:biometric"},"I hereby expressly consent to the collection and processing of my personal information, biometric information, and health information."),name:a,onChange:function(e){return t(e.target.checked)},value:n})}}),l.a.createElement("p",null,l.a.createElement(b.a,{errors:Z,name:"name"})),f&&l.a.createElement(t,null,l.a.createElement(y.a,{invert:!0,leftLabel:X("consent:nextButton"),leftHandler:A(N),leftDisabled:!R}))))}))},292:function(e,t,n){"use strict";n.r(t);var a=n(249);n.d(t,"default",(function(){return a.default}))}}]);
//# sourceMappingURL=31.63a78c75.chunk.js.map