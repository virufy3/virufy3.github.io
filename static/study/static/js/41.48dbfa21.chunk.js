(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[41],{177:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(226);var a=n(218);function r(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(a.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},215:function(t,e,n){"use strict";n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var o=n(177),a=n(170),r="/submit-steps",c=["Argentina","Bolivia","Brazil","Colombia","Mexico","Pakistan","Peru","United States"],u=[];function p(){var t,e,n=function(){try{return JSON.parse(window.localStorage.getItem("VirufyWizard")||"{}")}catch(t){return{}}}();return null!==(t=null===n||void 0===n||null===(e=n.welcome)||void 0===e?void 0:e.country)&&void 0!==t?t:""}function s(){var t=p();return c.includes(t)?"cough":"voice"}function i(t,e){return[].concat(Object(o.a)(function(t,e){return[{path:"/step-record/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/Introduction"),props:{storeKey:t,previousStep:"/welcome/step-4",nextStep:"".concat(r,"/step-listen/cough"),otherSteps:{manualUploadStep:"".concat(r,"/step-manual-upload/cough")},metadata:{currentLogic:"recordYourCough",progressCurrent:1,progressTotal:c.includes(e)?2:3}}},{path:"/step-manual-upload/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/RecordManualUpload"),props:{storeKey:t,previousStep:"".concat(r,"/step-record/cough"),nextStep:"".concat(r,"/step-listen/cough"),metadata:{currentLogic:"recordYourCough"}}},{path:"/step-listen/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/ListenAudio"),props:{storeKey:t,previousStep:"".concat(r,"/step-record/cough"),nextStep:c.includes(e)?"".concat(r,"/questionary/step1a"):"".concat(r,"/step-record/speech"),metadata:{currentLogic:"recordYourCough"}}}]}(t,e)),Object(o.a)(function(t,e){return c.includes(e)?[]:[{path:"/step-record/speech",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/Introduction"),props:{storeKey:t,previousStep:"".concat(r,"/step-listen/cough"),nextStep:"".concat(r,"/step-listen/speech"),otherSteps:{manualUploadStep:"".concat(r,"/step-manual-upload/speech")},metadata:{currentLogic:"recordYourSpeech",progressCurrent:2,progressTotal:3}}},{path:"/step-manual-upload/speech",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/RecordManualUpload"),props:{storeKey:t,previousStep:"".concat(r,"/step-record/speech"),nextStep:"".concat(r,"/step-listen/speech"),metadata:{currentLogic:"recordYourSpeech"}}},{path:"/step-listen/speech",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/ListenAudio"),props:{storeKey:t,previousStep:"".concat(r,"/step-record/speech"),nextStep:"".concat(r,"/questionary/step1a"),metadata:{currentLogic:"recordYourSpeech"}}}]}(t,e)),Object(o.a)(function(t,e){var n={total:u.includes(e)?5:6,progressCurrent:c.includes(e)?2:3,progressTotal:c.includes(e)?2:3},o=[{path:"/questionary/step1a",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step1a"),props:{storeKey:t,previousStep:c.includes(e)?"".concat(r,"/step-listen/cough"):"".concat(r,"/step-listen/speech"),nextStep:"".concat(r,"/questionary/step1b"),otherSteps:{noTestStep:"".concat(r,"/questionary/step2")},metadata:Object(a.a)({current:1},n)}},{path:"/questionary/step1b",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step1b"),props:{storeKey:t,previousStep:"".concat(r,"/questionary/step1a"),nextStep:"".concat(r,"/questionary/step2"),metadata:Object(a.a)({current:1},n)}},{path:"/questionary/step2",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step2"),props:{storeKey:t,previousStep:"".concat(r,"/questionary/step1b"),nextStep:"".concat(r,"/questionary/step3"),otherSteps:{noTestStep:"".concat(r,"/questionary/step1a")},metadata:Object(a.a)({current:2},n)}},{path:"/questionary/step3",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step3"),props:{storeKey:t,previousStep:"".concat(r,"/questionary/step2"),nextStep:"".concat(r,"/questionary/step4a"),metadata:Object(a.a)({current:3},n)}},{path:"/questionary/step4a",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step4a"),props:{storeKey:t,previousStep:"".concat(r,"/questionary/step3"),nextStep:"".concat(r,"/questionary/step5"),otherSteps:{covidSymptomsStep:"".concat(r,"/questionary/step4b")},metadata:Object(a.a)({current:4},n)}},{path:"/questionary/step4b",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step4b"),props:{storeKey:t,previousStep:"".concat(r,"/questionary/step4a"),nextStep:"".concat(r,"/questionary/step5"),metadata:Object(a.a)({current:4},n)}},{path:"/questionary/step5",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step5"),props:{storeKey:t,previousStep:"".concat(r,"/questionary/step4a"),nextStep:u.includes(e)?"".concat(r,"/thank-you"):"".concat(r,"/questionary/step6"),metadata:Object(a.a)({current:5},n)}}];return u.includes(e)||o.push({path:"/questionary/step6",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step6"),props:{storeKey:t,previousStep:"".concat(r,"/questionary/step5"),nextStep:"".concat(r,"/thank-you"),metadata:Object(a.a)({current:6},n)}}),o}(t,e)),[{path:"/thank-you",componentPath:"".concat("SubmitSteps","/").concat("Submission","/ThankYou"),props:{storeKey:t,previousStep:"".concat(r,"/before-submit"),nextStep:"/welcome"}}])}},217:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var o=n(157),a=n(5),r=n.n(a),c=n(54),u=n(290),p=n(175),s=n(159),i=n(156),d=n(155);function l(){var t=Object(i.a)(["\n  padding-top: 16px;\n  padding-bottom: 24px; \n  padding-left: ",";\n  padding-right: ","; \n\n  @media screen and (","){\n    margin: auto;\n    padding: 0px 60px;\n\n    max-width: 768px;\n    width: 100%;\n  }\n"]);return l=function(){return t},t}var h=d.default.div(l(),(function(t){return t.theme.layout.generalPaddingLeft}),(function(t){return t.theme.layout.generalPaddingRight}),(function(t){return t.theme.breakpoints.tablet}));function m(){var t=Object(i.a)(["\n  margin-bottom: 24px;\n"]);return m=function(){return t},t}function S(){var t=Object(i.a)(["\n  height: 100%;\n"]);return S=function(){return t},t}function b(){var t=Object(i.a)(["\n  display: flex;\n  flex-direction:column;\n\n  height:100%;\n"]);return b=function(){return t},t}var f=d.default.div(b()),y=d.default.div(S()),g=d.default.div(m()),v=Object(c.a)((function(t){var e=t.container;return n(228)("./".concat(e))}),{fallback:r.a.createElement("div",null,"Loading ...")});var j=r.a.memo((function(t){var e=t.steps,n=t.children,a=Object(p.i)(),c=Object(p.h)(),i=r.a.useState(!1),d=Object(o.a)(i,2),l=d[0],m=d[1],S=r.a.useMemo((function(){var t=a.url.replace(/\/$/,"");return e.map((function(e){return t+e.path}))}),[a.url,e]);return r.a.useEffect((function(){m(!0)}),[]),r.a.createElement(s.a,null,r.a.createElement(f,null,r.a.createElement(y,null,l&&r.a.createElement(u.a,{location:c,timing:"ease-in-out",duration:500,pathList:S},e.map((function(t){return r.a.createElement(p.b,{key:t.componentPath,exact:!0,path:Array.isArray(t.path)?t.path.map((function(t){return a.path+t})):a.path+t.path,render:function(){return r.a.createElement(h,null,r.a.createElement(v,Object.assign({container:t.componentPath},t.props)))}})})))),r.a.createElement(g,{id:"wizard-buttons"},n)))}))},244:function(t,e,n){"use strict";n.r(e);var o=n(158),a=n(5),r=n.n(a),c=n(159),u=n(175),p=n(217),s=n(215);Object(c.c)(window.localStorage);var i="submit-steps";Object(c.b)(Object(o.a)({},i,{recordYourCough:{recordingFile:null,uploadedFile:null},recordYourSpeech:{recordingFile:null,uploadedFile:null}}),{name:"VirufyWizard"});var d=function(){var t=Object(c.d)().state,e=Object(u.g)();return r.a.useEffect((function(){var n=function(t){var e=null;if(t[i]){var n=t[i],o=n.recordYourCough,a=n.recordYourSpeech,r=[];if(o){var c=o.recordingFile,u=o.uploadedFile;c&&r.push({file:c,route:"/step-record/cough"}),u&&r.push({file:u,route:"/step-manual-upload/cough"})}if(a){var p=o.recordingFile,s=o.uploadedFile;p&&r.push({file:p,route:"/step-record/speech"}),s&&r.push({file:s,route:"/step-manual-upload/speech"})}var d=r.find((function(t){return!(!(e=t.file)||void 0!==e.size);var e}));d&&(e=d.route)}return e}(t);n&&e.push("/".concat(i).concat(n))}),[]),null};e.default=r.a.memo((function(){var t=Object(s.b)(),e=r.a.useMemo((function(){return Object(s.a)(i,t)}),[t]);return r.a.createElement(p.a,{steps:e},r.a.createElement(d,null))}))}}]);
//# sourceMappingURL=41.48dbfa21.chunk.js.map