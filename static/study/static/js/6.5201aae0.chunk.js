(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[6],{162:function(e,t,n){"use strict";var o=n(5),a=n.n(o),r=n(181);t.a=function(){var e=a.a.useContext(r.a),t=e.title,n=e.setTitle,o=e.logoSize,c=e.setLogoSize,i=e.setDoGoBack;return{title:t,setTitle:n,logoSize:o,setLogoSize:c,doGoBack:e.doGoBack,setDoGoBack:i}}},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=function(){window.scrollTo({top:0,behavior:"smooth"})}},164:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var o=n(158),a=n(170);function r(e){return function(t,n){return Object(a.a)(Object(a.a)({},t),{},Object(o.a)({},e,Object(a.a)(Object(a.a)({},t[e]),n)))}}function c(){return function(e){return{welcome:{language:e.welcome.language}}}}},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var o=n(5),a=n.n(o),r=n(179),c=n(156),i=n(155),s=n(160);function u(){var e=Object(c.a)(["\n  height: 50px;\n  border-radius: 4px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return u=function(){return e},e}var p=i.default.button(u(),(function(e){var t=e.dark,n=e.disabled?s.a.midGray:s.a.darkBlack;return t?"\n    background-color: ".concat(n,";\n    color: ").concat(s.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(s.a.white,";\n    color: ").concat(n,";\n    border: 1px solid ").concat(n,";\n  ")})),l=a.a.memo((function(e){var t=e.children,n=Object(r.a)(e,["children"]);return a.a.createElement(p,Object.assign({type:"button"},n),t)}));function d(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n\n    &:last-of-type {\n      margin-left: 20px;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return d=function(){return e},e}var m=i.default.div(d(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),h=a.a.memo((function(e){var t=e.invert,n=void 0!==t&&t,o=e.leftLabel,r=e.leftDisabled,c=e.leftHandler,i=e.rightLabel,s=e.rightDisabled,u=e.rightHandler;return a.a.createElement(m,null,a.a.createElement(l,{dark:n,disabled:r,onClick:c},o),i&&u&&a.a.createElement(l,{dark:!n,disabled:s,onClick:u},i))})),f=a.a.memo(h)},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(5),a=n.n(o),r=n(160),c=n(156),i=n(155);function s(){var e=Object(c.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: 'SF Pro Display';\n  font-size: 16px;\n  line-height: 24px;\n"]);return s=function(){return e},e}function u(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  margin: -4px 0px 20px;\n\n  svg {\n    circle {\n      transition: stroke-dashoffset 0.35s;\n      transform: rotate(-90deg);\n      transform-origin: 50% 50%;\n\n      &.track {\n        transform: rotate(90deg);\n      }\n    }\n  }\n\n  @media screen and (",") {\n    margin: 20px 0px 40px;\n\n    svg {\n      width: 80px;\n      height: 80px;\n    }\n  }\n"]);return u=function(){return e},e}var p=i.default.div(u(),(function(e){return e.theme.breakpoints.tablet})),l=(i.default.div(s()),a.a.memo((function(e){var t=e.className,n=void 0===t?"":t,o=e.radius,c=void 0===o?30:o,i=e.stroke,s=void 0===i?6:i,u=e.currentStep,l=void 0===u?2:u,d=e.totalSteps,m=void 0===d?4:d,h=e.color,f=void 0===h?r.a.green:h,v=e.colorTrack,g=void 0===v?r.a.gray3:v,b=l/m*100,S=c-s/2,y=2*S*Math.PI,x=y-b/100*y;return a.a.createElement(p,{className:n},a.a.createElement("svg",{width:2*c,height:2*c,viewBox:"0 0 ".concat(2*c," ").concat(2*c)},a.a.createElement("circle",{className:"track",stroke:g,fill:"transparent",strokeWidth:s,r:S,cx:c,cy:c}),a.a.createElement("circle",{stroke:f,fill:"transparent",strokeWidth:s,strokeDasharray:"".concat(y," ").concat(y),style:{strokeDashoffset:x},r:S,cx:c,cy:c}),a.a.createElement("text",{fontSize:"16",fill:"#000000",x:"50%",y:"50%",dominantBaseline:"middle",textAnchor:"middle"},"".concat(l,"/").concat(m))))})))},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var o=n(177),a=n(157),r=n(5),c=n.n(r),i=n(156),s=n(155);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=c.a.createElement("path",{d:"M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM10.0234 4.71406L6.73281 9.27656C6.68682 9.34076 6.62619 9.39306 6.55595 9.42914C6.48571 9.46523 6.40787 9.48405 6.32891 9.48405C6.24994 9.48405 6.17211 9.46523 6.10186 9.42914C6.03162 9.39306 5.97099 9.34076 5.925 9.27656L3.97656 6.57656C3.91719 6.49375 3.97656 6.37813 4.07812 6.37813H4.81094C4.97031 6.37813 5.12187 6.45469 5.21562 6.58594L6.32812 8.12969L8.78438 4.72344C8.87813 4.59375 9.02812 4.51562 9.18906 4.51562H9.92188C10.0234 4.51562 10.0828 4.63125 10.0234 4.71406Z",fill:"#00A588"}),d=function(e){var t=e.svgRef,n=e.title,o=p(e,["svgRef","title"]);return c.a.createElement("svg",u({width:14,height:14,viewBox:"0 0 14 14",fill:"none",ref:t},o),n?c.a.createElement("title",null,n):null,l)},m=c.a.forwardRef((function(e,t){return c.a.createElement(d,u({svgRef:t},e))}));n.p;function h(){var e=Object(i.a)(["\n  height: 50px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  color: ",";\n  width: 100%;\n  padding: 0 20px;\n  border: none;\n  background-color: ",";\n  border-top: 1px "," solid;\n  border-bottom: 1px "," solid;\n  ::placeholder {\n    color: ",";\n  }\n  @media screen and (","){\n    text-align: center;\n  }\n"]);return h=function(){return e},e}function f(){var e=Object(i.a)(["\n  position: relative;\n  display: inline-block;\n  width: calc(100% + 40px);\n  margin: 0 -20px;\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return f=function(){return e},e}function v(){var e=Object(i.a)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin-top: 18px;\n  margin-right: 29px;\n  @media screen and (","){\n    margin-right: 31px;\n  }\n"]);return v=function(){return e},e}function g(){var e=Object(i.a)(["\n  font-weight: bold;\n"]);return g=function(){return e},e}function b(){var e=Object(i.a)(["\n  position: relative;\n  height: 50px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  color: ",";\n  font-size: 14px;\n  text-align: left;\n  width: calc(100% + 40px);\n  padding: 0 20px;\n  margin: 0 -20px;\n  border: none;\n  background-color: ",";\n  border-top: 1px "," solid;\n  border-bottom: ",";\n  @media screen and (","){\n    max-width: 470px;\n    text-align: center;\n  }\n"]);return b=function(){return e},e}var S=s.default.button(b(),(function(e){return e.theme.colors.darkBlack}),(function(e){return e.isSelected?e.theme.colors.green_25:"transparent"}),(function(e){return e.theme.colors.darkBlack_04}),(function(e){return e.lastItem?"1px ".concat(e.theme.colors.darkBlack_04," solid"):"none"}),(function(e){return e.theme.breakpoints.tablet})),y=Object(s.default)(S)(g()),x=Object(s.default)(m)(v(),(function(e){return e.theme.breakpoints.tablet})),k=s.default.div(f(),(function(e){return e.theme.breakpoints.tablet})),O=s.default.input(h(),(function(e){return e.theme.colors.darkBlack}),(function(e){return e.isSelected?e.theme.colors.green_25:"transparent"}),(function(e){return e.theme.colors.darkBlack_04}),(function(e){return e.theme.colors.darkBlack_04}),(function(e){return e.theme.colors.midDarkGray}),(function(e){return e.theme.breakpoints.tablet})),j={selected:[],other:""},w=function(e){var t=e.value,n=void 0===t?j:t,i=e.items,s=e.excludableValue,u=e.singleSelection,p=e.onChange,l=e.allowAddOther,d=e.addOtherLabel,m=e.enableOther,h=e.otherPlaceholder,f=Object(r.useState)(!1),v=Object(a.a)(f,2),g=v[0],b=v[1];Object(r.useEffect)((function(){b(!!m||!!(null===n||void 0===n?void 0:n.other))}),[n,m]);var w=function(e){var t,o=n.selected;t=u||s&&o.includes(s)?[]:o,p&&p({selected:t,other:e}),e||b(!1)};return c.a.createElement(c.a.Fragment,null,i.map((function(e,t){var a,r=null===n||void 0===n||null===(a=n.selected)||void 0===a?void 0:a.includes(e.value);return c.a.createElement(S,{key:e.value,lastItem:i.length===t+1&&!l&&!m,onClick:function(){return function(e){var t,a,r=n.selected,c=n.other,i=r.indexOf(e.value);i>=0?(t=[].concat(Object(o.a)(r.slice(0,i)),Object(o.a)(r.slice(i+1))),a=c):u||e.value===s||s&&r.includes(s)?(t=[e.value],a=void 0):(t=[].concat(Object(o.a)(r),[e.value]),a=c),p&&p({selected:t,other:a})}(e)},isSelected:r},e.label,r&&c.a.createElement(x,null))})),l&&!g&&c.a.createElement(y,{onClick:function(){b(!0)},lastItem:!0},d),g&&c.a.createElement(k,null,c.a.createElement(O,{placeholder:h,value:(null===n||void 0===n?void 0:n.other)||"",isSelected:!!(null===n||void 0===n?void 0:n.other),onChange:function(e){return w(e.target.value)}}),!!(null===n||void 0===n?void 0:n.other)&&c.a.createElement(x,null)))};w.defaultProps={value:j,excludableValue:void 0,singleSelection:!1,onChange:void 0,allowAddOther:!1,addOtherLabel:"",enableOther:!1,otherPlaceholder:""};var C=c.a.memo(w)},215:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return p}));var o=n(177),a=n(170),r="/submit-steps",c=["Argentina","Bolivia","Brazil","Colombia","Mexico","Pakistan","Peru","United States"],i=[];function s(){var e,t,n=function(){try{return JSON.parse(window.localStorage.getItem("VirufyWizard")||"{}")}catch(e){return{}}}();return null!==(e=null===n||void 0===n||null===(t=n.welcome)||void 0===t?void 0:t.country)&&void 0!==e?e:""}function u(){var e=s();return c.includes(e)?"cough":"voice"}function p(e,t){return[].concat(Object(o.a)(function(e,t){return[{path:"/step-record/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/Introduction"),props:{storeKey:e,previousStep:"/welcome/step-4",nextStep:"".concat(r,"/step-listen/cough"),otherSteps:{manualUploadStep:"".concat(r,"/step-manual-upload/cough")},metadata:{currentLogic:"recordYourCough",progressCurrent:1,progressTotal:c.includes(t)?2:3}}},{path:"/step-manual-upload/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/RecordManualUpload"),props:{storeKey:e,previousStep:"".concat(r,"/step-record/cough"),nextStep:"".concat(r,"/step-listen/cough"),metadata:{currentLogic:"recordYourCough"}}},{path:"/step-listen/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/ListenAudio"),props:{storeKey:e,previousStep:"".concat(r,"/step-record/cough"),nextStep:c.includes(t)?"".concat(r,"/questionary/step1a"):"".concat(r,"/step-record/speech"),metadata:{currentLogic:"recordYourCough"}}}]}(e,t)),Object(o.a)(function(e,t){return c.includes(t)?[]:[{path:"/step-record/speech",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/Introduction"),props:{storeKey:e,previousStep:"".concat(r,"/step-listen/cough"),nextStep:"".concat(r,"/step-listen/speech"),otherSteps:{manualUploadStep:"".concat(r,"/step-manual-upload/speech")},metadata:{currentLogic:"recordYourSpeech",progressCurrent:2,progressTotal:3}}},{path:"/step-manual-upload/speech",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/RecordManualUpload"),props:{storeKey:e,previousStep:"".concat(r,"/step-record/speech"),nextStep:"".concat(r,"/step-listen/speech"),metadata:{currentLogic:"recordYourSpeech"}}},{path:"/step-listen/speech",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/ListenAudio"),props:{storeKey:e,previousStep:"".concat(r,"/step-record/speech"),nextStep:"".concat(r,"/questionary/step1a"),metadata:{currentLogic:"recordYourSpeech"}}}]}(e,t)),Object(o.a)(function(e,t){var n={total:i.includes(t)?5:6,progressCurrent:c.includes(t)?2:3,progressTotal:c.includes(t)?2:3},o=[{path:"/questionary/step1a",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step1a"),props:{storeKey:e,previousStep:c.includes(t)?"".concat(r,"/step-listen/cough"):"".concat(r,"/step-listen/speech"),nextStep:"".concat(r,"/questionary/step1b"),otherSteps:{noTestStep:"".concat(r,"/questionary/step2")},metadata:Object(a.a)({current:1},n)}},{path:"/questionary/step1b",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step1b"),props:{storeKey:e,previousStep:"".concat(r,"/questionary/step1a"),nextStep:"".concat(r,"/questionary/step2"),metadata:Object(a.a)({current:1},n)}},{path:"/questionary/step2",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step2"),props:{storeKey:e,previousStep:"".concat(r,"/questionary/step1b"),nextStep:"".concat(r,"/questionary/step3"),otherSteps:{noTestStep:"".concat(r,"/questionary/step1a")},metadata:Object(a.a)({current:2},n)}},{path:"/questionary/step3",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step3"),props:{storeKey:e,previousStep:"".concat(r,"/questionary/step2"),nextStep:"".concat(r,"/questionary/step4a"),metadata:Object(a.a)({current:3},n)}},{path:"/questionary/step4a",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step4a"),props:{storeKey:e,previousStep:"".concat(r,"/questionary/step3"),nextStep:"".concat(r,"/questionary/step5"),otherSteps:{covidSymptomsStep:"".concat(r,"/questionary/step4b")},metadata:Object(a.a)({current:4},n)}},{path:"/questionary/step4b",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step4b"),props:{storeKey:e,previousStep:"".concat(r,"/questionary/step4a"),nextStep:"".concat(r,"/questionary/step5"),metadata:Object(a.a)({current:4},n)}},{path:"/questionary/step5",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step5"),props:{storeKey:e,previousStep:"".concat(r,"/questionary/step4a"),nextStep:i.includes(t)?"".concat(r,"/thank-you"):"".concat(r,"/questionary/step6"),metadata:Object(a.a)({current:5},n)}}];return i.includes(t)||o.push({path:"/questionary/step6",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step6"),props:{storeKey:e,previousStep:"".concat(r,"/questionary/step5"),nextStep:"".concat(r,"/thank-you"),metadata:Object(a.a)({current:6},n)}}),o}(e,t)),[{path:"/thank-you",componentPath:"".concat("SubmitSteps","/").concat("Submission","/ThankYou"),props:{storeKey:e,previousStep:"".concat(r,"/before-submit"),nextStep:"/welcome"}}])}},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n(5),a=n.n(o),r=n(745),c=n(748),i=n(156);function s(){var e=Object(i.a)(["\n  margin: 20px 0;\n  \n  div {\n    margin: auto;\n  }\n"]);return s=function(){return e},e}var u=n(155).default.div(s()),p=function(e){var t=e.onChange,n=Object(c.a)().i18n;return a.a.createElement(u,null,a.a.createElement(r.a,{sitekey:"6LcRhdIZAAAAAOI8zafkWF0N5SYOUjMszuEUnrJT",onChange:t,hl:n.language}))}},294:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o=n(168),a=n.n(o),r=n(169),c=n(710),i=n.n(c).a.create({baseURL:"https://ti7vvvk450.execute-api.us-east-2.amazonaws.com/prod"});var s=n(215);function u(e){return p.apply(this,arguments)}function p(){return(p=Object(r.a)(a.a.mark((function e(t){var n,o,r,c,u,p,l,d,m,h,f,v,g,b,S,y,x,k,O,j,w,C,P,T,q,E,L,R,I,D,A,B,K,z,M,Y,F,G,Q,U,_;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,o=t.state,r=t.captchaValue,c=t.action,u=t.nextStep,p=t.setActiveStep,l=t.history,e.prev=1,n(null),v=o.welcome,g=v.language,b=v.country,S=v.region,y=v.agreedConsentTerms,x=v.agreedPolicyTerms,k=v.agreedCovidDetection,O=v.agreedTrainingArtificial,j=o["submit-steps"],w=j.recordYourCough,C=j.recordYourSpeech,P=j.testTaken,T=j.pcrTestDate,q=j.pcrTestResult,E=j.antigenTestDate,L=j.antigenTestResult,R=j.ageGroup,I=j.gender,D=j.biologicalSex,A=j.smokeLastSixMonths,B=j.currentSymptoms,K=j.symptomsStartedDate,z=j.currentRespiratoryCondition,M=j.currentMedicalCondition,(Y=new FormData).append("language",g),Y.append("country",b),S&&Y.append("region",S),Y.append("agreedConsentTerms",y),Y.append("agreedPolicyTerms",x),Y.append("agreedCovidDetection",k),Y.append("agreedTrainingArtificial",O),F=w.recordingFile||w.uploadedFile,Y.append("cough",F,F.name||"filename.wav"),s.d.includes(b)||(G=C.recordingFile||C.uploadedFile,Y.append("voice",G,G.name||"filename_voice.wav")),Y.append("testTaken",P.join(",")),P.includes("pcr")&&(Y.append("pcrTestDate",T.toISOString()),Y.append("pcrTestResult",q)),P.includes("antigen")&&(Y.append("antigenTestDate",E.toISOString()),Y.append("antigenTestResult",L)),"unselected"!==R&&Y.append("ageGroup",R),(Q=I.other||I.selected[0])&&Y.append("gender",Q),D&&Y.append("biologicalSex",D),A&&Y.append("smokeLastSixMonths",A),(null===B||void 0===B||null===(d=B.selected)||void 0===d?void 0:d.length)>0&&Y.append("currentSymptoms",B.selected.join(",")),K&&Y.append("symptomsStartedDate",K.toISOString()),(null===z||void 0===z||null===(m=z.selected)||void 0===m?void 0:m.length)>0&&Y.append("currentRespiratoryCondition",z.selected.join(",")),(null===M||void 0===M||null===(h=M.selected)||void 0===h?void 0:h.length)>0&&Y.append("currentMedicalCondition",M.selected.join(",")),(null===B||void 0===B?void 0:B.other)&&Y.append("otherSymptoms",null===B||void 0===B?void 0:B.other),(null===z||void 0===z?void 0:z.other)&&Y.append("otherRespiratoryConditions",null===z||void 0===z?void 0:z.other),(null===M||void 0===M?void 0:M.other)&&Y.append("otherMedicalConditions",null===M||void 0===M?void 0:M.other),r&&Y.append("captchaValue",r),e.next=34,i.post("saveSurvey",Y,{headers:{"Content-Type":"multipart/form-data; boundary=SaveSurvey"}});case 34:U=e.sent,c({}),u&&(null===(f=U.data)||void 0===f?void 0:f.submissionId)&&(p(!1),l.push(u,{submissionId:null===(_=U.data)||void 0===_?void 0:_.submissionId})),e.next=43;break;case 39:e.prev=39,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 43:case"end":return e.stop()}}),e,null,[[1,39]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=6.5201aae0.chunk.js.map