(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[59],{158:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var i=n(166),r=n(335),a={realBlack:"#000000",realBlack_4:"rgba(0, 0, 0, 0.04)",black:"#434334",darkBlack:"#21242C",darkBlack_20:"rgba(33, 36, 44, 0.1)",darkBlack_04:"rgba(33, 36, 44, 0.04)",darkBlack_65:"rgba(33, 36, 44, 0.65)",ultraDarkBlack:"#1F1F1F",lightGray:"#F2F2F2",gray:"#C4C4C4",midGray:"#DEDEDE",midDarkGray:"#D1D1D1",placeholderGray:"#BBBBBB",darkGray:"#434343",darkGray_50:"rgba(67, 67, 67, 0.5)",darkGray_70:"rgba(67, 67, 67, 0.7)",gray3:"#F5F5F5",green_25:"rgba(0, 165, 136, 0.25)",green_05:"rgba(0, 165, 136, 0.05)",green:"#00A588",lightGreen_25:"rgba(19, 194, 194, 0.25)",white:"#FEFEFE",backgroundWhite:"#E5E5E5",red:"#F54E37"},o=Object(i.a)(Object(i.a)({},r.defaultRebootTheme),{},{colors:a,breakpoints:{tablet:"min-width: 560px"},layout:{generalPaddingAmount:20,generalPaddingLeft:"20px",generalPaddingRight:"20px"}})},174:function(e,t,n){"use strict";n.d(t,"c",(function(){return E})),n.d(t,"a",(function(){return R})),n.d(t,"b",(function(){return O}));var i=n(157),r=n(5),a=n.n(r),o=n(156),u=n(155);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.a.createElement("path",{d:"M11.67 1.86998L9.9 0.0999756L0 9.99998L9.9 19.9L11.67 18.13L3.54 9.99998L11.67 1.86998Z",fill:"#21242C"}),l=function(e){var t=e.svgRef,n=e.title,i=p(e,["svgRef","title"]);return a.a.createElement("svg",s({width:12,height:20,viewBox:"0 0 12 20",fill:"none",ref:t},i),n?a.a.createElement("title",null,n):null,c)},S=a.a.forwardRef((function(e,t){return a.a.createElement(l,s({svgRef:t},e))})),m=(n.p,n(229));function d(){var e=Object(o.a)(["\n  margin: 0 auto;\n  width: ",";\n\n\n  @media screen and (","){\n    display: none;\n    }\n"]);return d=function(){return e},e}function b(){var e=Object(o.a)(["\n  fill: ",";\n"]);return b=function(){return e},e}function f(){var e=Object(o.a)(["\n  cursor: pointer;\n  padding: 10px 15px;\n  position: absolute;\n  top: 12px;\n  margin-left: -15px;\n\n  @media screen and (","){\n    top: 42px;\n    margin-left: -8px;\n    > svg {\n      width: 13.62px;\n      height: 23.1px;\n    }\n  }\n"]);return f=function(){return e},e}function g(){var e=Object(o.a)(['\n  font-family: "Open Sans";\n  font-size: 0.875rem;\n  font-weight: 700;\n  line-height: 1.25rem;\n  padding-top: 8px;\n  margin: 0 auto;\n\n  @media screen and (',"){\n    padding-top: 0;\n    margin-top: -2px;\n  }\n"]);return g=function(){return e},e}function y(){var e=Object(o.a)(["\n  align-items: center;\n  display: flex;\n  padding-top: 1rem;\n  position:relative;\n\n  width: 100%;\n\n  @media screen and (","){\n    padding-top: 54px;\n  }\n"]);return y=function(){return e},e}var C=u.default.div(y(),(function(e){return e.theme.breakpoints.tablet})),h=u.default.h1(g(),(function(e){return e.theme.breakpoints.tablet})),x=u.default.div(f(),(function(e){return e.theme.breakpoints.tablet})),v=Object(u.default)(S)(b(),(function(e){return e.theme.colors.darkBlack})),k=Object(u.default)(m.a)(d(),(function(e){switch(e.size){case"big":return"110px";case"regular":default:return"75px"}}),(function(e){return e.theme.breakpoints.tablet})),L=function(){},R=Object(r.createContext)({title:"",setTitle:L,logoSize:"regular",setLogoSize:L,setDoGoBack:L}),O=function(e){var t=e.children,n=Object(r.useState)(""),o=Object(i.a)(n,2),u=o[0],s=o[1],p=Object(r.useState)("regular"),c=Object(i.a)(p,2),l=c[0],S=c[1],m=Object(r.useState)(null),d=Object(i.a)(m,2),b=d[0],f=d[1],g=a.a.useMemo((function(){return{title:u,setTitle:s,logoSize:l,setLogoSize:S,doGoBack:b,setDoGoBack:f}}),[u,l,b]);return a.a.createElement(R.Provider,{value:g},t)},E=a.a.memo((function(){var e=Object(r.useContext)(R),t=e.title,n=e.doGoBack,i=e.logoSize;return a.a.createElement(C,null,n&&a.a.createElement(x,{onClick:n},a.a.createElement(v,null)),t?a.a.createElement(h,null,t):a.a.createElement(k,{size:i}))}))},227:function(e,t,n){"use strict";n.r(t);var i=n(250);n.d(t,"default",(function(){return i.default}))},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var i=n(5),r=n.n(i);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createElement("path",{d:"M37.8564 24.0292H39.7195L39.944 25.8632H40.0787C40.6173 24.4594 41.5227 23.7574 42.7946 23.7574C43.2136 23.7574 43.5803 23.8178 43.8946 23.9386V26.1576H43.064C42.1811 26.1576 41.4778 26.4142 40.954 26.9275C40.4303 27.4408 40.1684 28.2257 40.1684 29.2824V35.9395H37.8564V24.0292ZM49.1606 36.2112C46.6616 36.2112 45.4121 34.8451 45.4121 32.1128V24.0292H47.7241V31.8184C47.7241 32.7091 47.9186 33.3355 48.3077 33.6978C48.7118 34.045 49.2954 34.2186 50.0585 34.2186C50.5822 34.2186 51.0686 34.0903 51.5175 33.8337C51.9665 33.562 52.3181 33.1846 52.5725 32.7016C52.8418 32.2185 52.9766 31.6599 52.9766 31.0259V24.0292H55.2885V35.9395H53.4255L53.201 34.3545H53.0438C52.6099 34.9583 52.0637 35.4187 51.4053 35.7357C50.7469 36.0527 49.9986 36.2112 49.1606 36.2112ZM58.5037 25.9539H56.7978V24.0292H58.5037V22.2856C58.5037 21.4554 58.7132 20.7685 59.1323 20.2251C59.5663 19.6666 60.277 19.3873 61.2647 19.3873C61.5643 19.3873 61.8784 19.4175 62.2072 19.4779C62.5366 19.5383 62.8135 19.6062 63.0377 19.6817V21.3119H61.893C61.1748 21.3119 60.8157 21.6592 60.8157 22.3536V24.0292H63.0377V25.9539H60.8157V35.9395H58.5037V25.9539ZM66.5151 40.0606C65.7824 40.0606 65.206 39.9851 64.7868 39.8341V38.2944H65.7744C67.1361 38.2944 68.0492 37.5094 68.5131 35.9395L63.9342 24.0292H66.3581L68.5577 29.8711C68.8572 30.641 69.2385 31.826 69.7031 33.4261H69.8149C70.2341 31.9166 70.5782 30.7315 70.8478 29.8711L72.688 24.0292H75L71.0947 35.3282C70.5556 36.8377 69.95 38 69.2764 38.8152C68.6029 39.6455 67.6825 40.0606 66.5151 40.0606Z",fill:"#393939"}),s=r.a.createElement("path",{d:"M36.1975 20.0764C36.1879 20.0764 36.1784 20.0783 36.1696 20.082C36.1608 20.0857 36.1528 20.0911 36.146 20.0979C36.1392 20.1047 36.1339 20.1128 36.1302 20.1217C36.1265 20.1306 36.1247 20.1401 36.1247 20.1498V20.2233H35.9243C35.9066 20.071 35.8473 19.9267 35.753 19.8065L35.8948 19.6635L35.9519 19.7122C35.9586 19.719 35.9667 19.7244 35.9755 19.7281C35.9843 19.7318 35.9938 19.7338 36.0033 19.7338C36.0129 19.7338 36.0224 19.7319 36.0312 19.7282C36.0401 19.7245 36.0481 19.7191 36.0549 19.7123C36.0616 19.7054 36.067 19.6973 36.0707 19.6884C36.0744 19.6795 36.0762 19.6699 36.0762 19.6603C36.0762 19.6506 36.0743 19.6411 36.0706 19.6322C36.067 19.6233 36.0616 19.6152 36.0549 19.6083L35.8122 19.3636C35.7986 19.3498 35.7801 19.3421 35.7608 19.3421C35.7414 19.3421 35.7229 19.3498 35.7092 19.3636C35.6956 19.3773 35.6879 19.396 35.6879 19.4155C35.6879 19.435 35.6956 19.4537 35.7092 19.4674L35.7576 19.525L35.6158 19.668C35.4966 19.5729 35.3536 19.5131 35.2026 19.4952V19.2931H35.2754C35.2947 19.2931 35.3133 19.2854 35.3269 19.2716C35.3405 19.2578 35.3483 19.2392 35.3483 19.2197C35.3483 19.2002 35.3405 19.1816 35.3269 19.1678C35.3133 19.154 35.2947 19.1462 35.2754 19.1462H34.9358C34.9165 19.1462 34.8979 19.154 34.8842 19.1678C34.8706 19.1816 34.8629 19.2002 34.8629 19.2197C34.8629 19.2392 34.8706 19.2578 34.8842 19.2716C34.8979 19.2854 34.9165 19.2931 34.9358 19.2931H35.0085V19.4952C34.8576 19.5131 34.7145 19.5729 34.5953 19.668L34.4536 19.525L34.5019 19.4674C34.5087 19.4606 34.514 19.4525 34.5177 19.4436C34.5213 19.4347 34.5233 19.4251 34.5233 19.4155C34.5233 19.4059 34.5213 19.3963 34.5177 19.3874C34.514 19.3785 34.5087 19.3704 34.5019 19.3636C34.4952 19.3568 34.4871 19.3513 34.4783 19.3477C34.4695 19.344 34.46 19.3421 34.4505 19.3421C34.4312 19.3421 34.4127 19.3498 34.399 19.3636L34.1619 19.6083C34.1483 19.6221 34.1407 19.6408 34.1407 19.6602C34.1408 19.6797 34.1484 19.6983 34.1621 19.7121C34.1757 19.7258 34.1942 19.7336 34.2135 19.7336C34.2327 19.7336 34.2512 19.7259 34.2649 19.7122L34.3163 19.6635L34.4581 19.8065C34.3638 19.9267 34.3045 20.071 34.2868 20.2233H34.0865V20.1498C34.0865 20.1303 34.0788 20.1117 34.0652 20.0979C34.0515 20.0841 34.033 20.0764 34.0137 20.0764C33.9944 20.0764 33.9759 20.0841 33.9622 20.0979C33.9486 20.1117 33.9409 20.1303 33.9409 20.1498V20.4925C33.9409 20.5119 33.9486 20.5307 33.9622 20.5444C33.9759 20.5582 33.9944 20.5659 34.0137 20.5659C34.033 20.5659 34.0515 20.5582 34.0652 20.5444C34.0788 20.5307 34.0865 20.5119 34.0865 20.4925V20.4191H34.2868C34.3045 20.5713 34.3638 20.7156 34.4581 20.8358L34.3163 20.9789L34.2593 20.9301C34.2456 20.9164 34.2271 20.9087 34.2078 20.9087C34.1886 20.9087 34.1701 20.9164 34.1564 20.9301C34.1428 20.9439 34.1351 20.9626 34.1351 20.982C34.1351 21.0015 34.1427 21.0202 34.1564 21.0339L34.399 21.2787C34.4057 21.2856 34.4138 21.2909 34.4226 21.2946C34.4314 21.2983 34.4409 21.3002 34.4505 21.3002C34.46 21.3002 34.4695 21.2983 34.4783 21.2946C34.4871 21.2909 34.4952 21.2856 34.5019 21.2787C34.5087 21.2719 34.514 21.2638 34.5177 21.2549C34.5213 21.246 34.5233 21.2364 34.5233 21.2268C34.5233 21.2172 34.5213 21.2076 34.5177 21.1987C34.514 21.1898 34.5087 21.1817 34.5019 21.1749L34.4536 21.1173L34.5953 20.9743C34.7145 21.0694 34.8576 21.1292 35.0085 21.1471V21.3492H34.9358C34.9165 21.3492 34.8979 21.3569 34.8842 21.3707C34.8706 21.3845 34.8629 21.4031 34.8629 21.4226C34.8629 21.4421 34.8706 21.4608 34.8842 21.4746C34.8979 21.4883 34.9165 21.496 34.9358 21.496H35.2754C35.2947 21.496 35.3133 21.4883 35.3269 21.4746C35.3405 21.4608 35.3483 21.4421 35.3483 21.4226C35.3483 21.4031 35.3405 21.3845 35.3269 21.3707C35.3133 21.3569 35.2947 21.3492 35.2754 21.3492H35.2026V21.1471C35.3536 21.1292 35.4966 21.0694 35.6158 20.9743L35.7576 21.1173L35.7092 21.1749C35.6956 21.1887 35.6879 21.2074 35.6879 21.2268C35.6879 21.2463 35.6956 21.265 35.7092 21.2787C35.7229 21.2925 35.7414 21.3002 35.7608 21.3002C35.7801 21.3002 35.7986 21.2925 35.8122 21.2787L36.0549 21.0339C36.0616 21.0272 36.067 21.019 36.0706 21.0101C36.0743 21.0012 36.0762 20.9916 36.0762 20.982C36.0762 20.9724 36.0744 20.9628 36.0707 20.9539C36.067 20.945 36.0616 20.9369 36.0549 20.9301C36.0481 20.9232 36.0401 20.9178 36.0312 20.9141C36.0224 20.9105 36.0129 20.9085 36.0033 20.9085C35.9938 20.9085 35.9843 20.9105 35.9755 20.9142C35.9667 20.9179 35.9586 20.9233 35.9519 20.9301L35.8948 20.9789L35.753 20.8358C35.8473 20.7156 35.9066 20.5713 35.9243 20.4191H36.1247V20.4925C36.1247 20.5119 36.1323 20.5307 36.146 20.5444C36.1597 20.5582 36.1782 20.5659 36.1975 20.5659C36.2168 20.5659 36.2353 20.5582 36.2489 20.5444C36.2626 20.5307 36.2703 20.5119 36.2703 20.4925V20.1498C36.2703 20.1401 36.2684 20.1306 36.2647 20.1217C36.2611 20.1128 36.2557 20.1047 36.2489 20.0979C36.2422 20.0911 36.2342 20.0857 36.2254 20.082C36.2165 20.0783 36.2071 20.0764 36.1975 20.0764Z",fill:"#393939"}),p=r.a.createElement("path",{d:"M36.2703 23.8461H33.9409V35.9308H36.2703V23.8461Z",fill:"#393939"}),c=r.a.createElement("path",{d:"M12.4533 10.5173L24.5608 31.5536H18.3341H12.1074L0 10.5173H12.4533Z",fill:"#00B696"}),l=r.a.createElement("path",{d:"M30.269 0L24.2153 10.5181L18.1617 21.0363L15.1348 26.2953L12.1079 31.5544C12.1079 31.5544 13.7694 35.9393 18.3346 35.9393C22.2966 35.9393 24.5613 31.5544 24.5613 31.5544L36.6687 10.5181L42.7224 0H30.269Z",fill:"#00A588"}),S=function(e){var t=e.svgRef,n=e.title,i=o(e,["svgRef","title"]);return r.a.createElement("svg",a({viewBox:"0 0 75 41",fill:"none",ref:t},i),n?r.a.createElement("title",null,n):null,u,s,p,c,l)},m=r.a.forwardRef((function(e,t){return r.a.createElement(S,a({svgRef:t},e))}));n.p},230:function(e,t,n){var i={"./App":[227],"./App/":[227],"./App/App":[250],"./App/App.test":[339,37,52],"./App/App.test.tsx":[339,37,52],"./App/App.tsx":[250],"./App/index":[227],"./App/index.ts":[227],"./App/style":[300],"./App/style.ts":[300],"./SubmitSteps":[286,8,23],"./SubmitSteps/":[286,8,23],"./SubmitSteps/Questionary/Step1a":[265,0,1,2,15,28],"./SubmitSteps/Questionary/Step1a/":[265,0,1,2,15,28],"./SubmitSteps/Questionary/Step1a/Step1a":[263,0,1,2,15],"./SubmitSteps/Questionary/Step1a/Step1a.tsx":[263,0,1,2,15],"./SubmitSteps/Questionary/Step1a/index":[265,0,1,2,15,28],"./SubmitSteps/Questionary/Step1a/index.ts":[265,0,1,2,15,28],"./SubmitSteps/Questionary/Step1b":[267,0,1,2,12,29],"./SubmitSteps/Questionary/Step1b/":[267,0,1,2,12,29],"./SubmitSteps/Questionary/Step1b/Step1b":[266,0,1,2,12],"./SubmitSteps/Questionary/Step1b/Step1b.tsx":[266,0,1,2,12],"./SubmitSteps/Questionary/Step1b/index":[267,0,1,2,12,29],"./SubmitSteps/Questionary/Step1b/index.ts":[267,0,1,2,12,29],"./SubmitSteps/Questionary/Step2":[268,0,1,2,14,30],"./SubmitSteps/Questionary/Step2/":[268,0,1,2,14,30],"./SubmitSteps/Questionary/Step2/Step2":[296,0,1,2,14],"./SubmitSteps/Questionary/Step2/Step2.tsx":[296,0,1,2,14],"./SubmitSteps/Questionary/Step2/index":[268,0,1,2,14,30],"./SubmitSteps/Questionary/Step2/index.ts":[268,0,1,2,14,30],"./SubmitSteps/Questionary/Step3":[270,0,1,2,16,31],"./SubmitSteps/Questionary/Step3/":[270,0,1,2,16,31],"./SubmitSteps/Questionary/Step3/Step3":[269,0,1,2,16],"./SubmitSteps/Questionary/Step3/Step3.tsx":[269,0,1,2,16],"./SubmitSteps/Questionary/Step3/index":[270,0,1,2,16,31],"./SubmitSteps/Questionary/Step3/index.ts":[270,0,1,2,16,31],"./SubmitSteps/Questionary/Step4a":[272,0,1,2,10,32],"./SubmitSteps/Questionary/Step4a/":[272,0,1,2,10,32],"./SubmitSteps/Questionary/Step4a/Step4a":[271,0,1,2,10],"./SubmitSteps/Questionary/Step4a/Step4a.tsx":[271,0,1,2,10],"./SubmitSteps/Questionary/Step4a/index":[272,0,1,2,10,32],"./SubmitSteps/Questionary/Step4a/index.ts":[272,0,1,2,10,32],"./SubmitSteps/Questionary/Step4b":[273,0,1,2,19],"./SubmitSteps/Questionary/Step4b/":[273,0,1,2,19],"./SubmitSteps/Questionary/Step4b/Step4b":[241,0,1,2,39],"./SubmitSteps/Questionary/Step4b/Step4b.tsx":[241,0,1,2,39],"./SubmitSteps/Questionary/Step4b/index":[273,0,1,2,19],"./SubmitSteps/Questionary/Step4b/index.ts":[273,0,1,2,19],"./SubmitSteps/Questionary/Step5":[275,0,1,4,2,20],"./SubmitSteps/Questionary/Step5/":[275,0,1,4,2,20],"./SubmitSteps/Questionary/Step5/Step5":[242,0,1,4,2,40],"./SubmitSteps/Questionary/Step5/Step5.tsx":[242,0,1,4,2,40],"./SubmitSteps/Questionary/Step5/index":[275,0,1,4,2,20],"./SubmitSteps/Questionary/Step5/index.ts":[275,0,1,4,2,20],"./SubmitSteps/Questionary/Step6":[276,0,1,4,2,21],"./SubmitSteps/Questionary/Step6/":[276,0,1,4,2,21],"./SubmitSteps/Questionary/Step6/Step6":[243,0,1,4,2,41],"./SubmitSteps/Questionary/Step6/Step6.tsx":[243,0,1,4,2,41],"./SubmitSteps/Questionary/Step6/index":[276,0,1,4,2,21],"./SubmitSteps/Questionary/Step6/index.ts":[276,0,1,4,2,21],"./SubmitSteps/Questionary/style":[189,2],"./SubmitSteps/Questionary/style.ts":[189,2],"./SubmitSteps/RecordingsSteps/Introduction":[279,0,1,5,7,18],"./SubmitSteps/RecordingsSteps/Introduction/":[279,0,1,5,7,18],"./SubmitSteps/RecordingsSteps/Introduction/Introduction":[244,0,1,5,7,38],"./SubmitSteps/RecordingsSteps/Introduction/Introduction.tsx":[244,0,1,5,7,38],"./SubmitSteps/RecordingsSteps/Introduction/Record":[208,0,1,5,7,33],"./SubmitSteps/RecordingsSteps/Introduction/Record/":[208,0,1,5,7,33],"./SubmitSteps/RecordingsSteps/Introduction/Record/Record":[209,0,1,5,7],"./SubmitSteps/RecordingsSteps/Introduction/Record/Record.tsx":[209,0,1,5,7],"./SubmitSteps/RecordingsSteps/Introduction/Record/index":[208,0,1,5,7,33],"./SubmitSteps/RecordingsSteps/Introduction/Record/index.ts":[208,0,1,5,7,33],"./SubmitSteps/RecordingsSteps/Introduction/Record/style":[278,45],"./SubmitSteps/RecordingsSteps/Introduction/Record/style.ts":[278,45],"./SubmitSteps/RecordingsSteps/Introduction/index":[279,0,1,5,7,18],"./SubmitSteps/RecordingsSteps/Introduction/index.ts":[279,0,1,5,7,18],"./SubmitSteps/RecordingsSteps/Introduction/style":[225,47],"./SubmitSteps/RecordingsSteps/Introduction/style.ts":[225,47],"./SubmitSteps/RecordingsSteps/ListenAudio":[282,0,13,34],"./SubmitSteps/RecordingsSteps/ListenAudio/":[282,0,13,34],"./SubmitSteps/RecordingsSteps/ListenAudio/ListenAudio":[280,0,13],"./SubmitSteps/RecordingsSteps/ListenAudio/ListenAudio.tsx":[280,0,13],"./SubmitSteps/RecordingsSteps/ListenAudio/index":[282,0,13,34],"./SubmitSteps/RecordingsSteps/ListenAudio/index.ts":[282,0,13,34],"./SubmitSteps/RecordingsSteps/ListenAudio/style":[281,48],"./SubmitSteps/RecordingsSteps/ListenAudio/style.ts":[281,48],"./SubmitSteps/RecordingsSteps/RecordManualUpload":[283,0,1,22],"./SubmitSteps/RecordingsSteps/RecordManualUpload/":[283,0,1,22],"./SubmitSteps/RecordingsSteps/RecordManualUpload/RecordManualUpload":[245,0,1,42],"./SubmitSteps/RecordingsSteps/RecordManualUpload/RecordManualUpload.tsx":[245,0,1,42],"./SubmitSteps/RecordingsSteps/RecordManualUpload/index":[283,0,1,22],"./SubmitSteps/RecordingsSteps/RecordManualUpload/index.ts":[283,0,1,22],"./SubmitSteps/RecordingsSteps/RecordManualUpload/style":[226,49],"./SubmitSteps/RecordingsSteps/RecordManualUpload/style.ts":[226,49],"./SubmitSteps/Submission/ThankYou":[285,6,17,35],"./SubmitSteps/Submission/ThankYou/":[285,6,17,35],"./SubmitSteps/Submission/ThankYou/ThankYou":[294,6,17],"./SubmitSteps/Submission/ThankYou/ThankYou.tsx":[294,6,17],"./SubmitSteps/Submission/ThankYou/index":[285,6,17,35],"./SubmitSteps/Submission/ThankYou/index.ts":[285,6,17,35],"./SubmitSteps/Submission/ThankYou/style":[284,53],"./SubmitSteps/Submission/ThankYou/style.ts":[284,53],"./SubmitSteps/SubmitSteps":[246,8,43],"./SubmitSteps/SubmitSteps.tsx":[246,8,43],"./SubmitSteps/index":[286,8,23],"./SubmitSteps/index.ts":[286,8,23],"./Welcome":[292,8,26],"./Welcome/":[292,8,26],"./Welcome/Step1":[287,0,1,3,6,25],"./Welcome/Step1/":[287,0,1,3,6,25],"./Welcome/Step1/Step1":[249,0,1,3,6,46],"./Welcome/Step1/Step1.tsx":[249,0,1,3,6,46],"./Welcome/Step1/index":[287,0,1,3,6,25],"./Welcome/Step1/index.ts":[287,0,1,3,6,25],"./Welcome/Step2":[289,3,9,36],"./Welcome/Step2/":[289,3,9,36],"./Welcome/Step2/Step2":[288,3,9],"./Welcome/Step2/Step2.tsx":[288,3,9],"./Welcome/Step2/index":[289,3,9,36],"./Welcome/Step2/index.ts":[289,3,9,36],"./Welcome/Step3":[290,0,1,11,3,27],"./Welcome/Step3/":[290,0,1,11,3,27],"./Welcome/Step3/Step3":[248,0,1,11,3,51],"./Welcome/Step3/Step3.tsx":[248,0,1,11,3,51],"./Welcome/Step3/index":[290,0,1,11,3,27],"./Welcome/Step3/index.ts":[290,0,1,11,3,27],"./Welcome/Step4":[291,3,24],"./Welcome/Step4/":[291,3,24],"./Welcome/Step4/Step4":[247,3,44],"./Welcome/Step4/Step4.tsx":[247,3,44],"./Welcome/Step4/index":[291,3,24],"./Welcome/Step4/index.ts":[291,3,24],"./Welcome/Welcome":[251,8,50],"./Welcome/Welcome.tsx":[251,8,50],"./Welcome/index":[292,8,26],"./Welcome/index.ts":[292,8,26],"./Welcome/style":[203,54],"./Welcome/style.ts":[203,54]};function r(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(i)},r.id=230,e.exports=r},250:function(e,t,n){"use strict";n.r(t);var i=n(5),r=n.n(i),a=n(54),o=n(179),u=n(254),s=n(174),p=n(748),c=n(333),l={en:"https://docs.google.com/forms/d/e/1FAIpQLSef77IOT4oxllZABL7aJlTGp6e6Q2_jPoDuIruiDxnU5Wvtxw/viewform",es:"https://docs.google.com/forms/d/e/1FAIpQLScQL20FOhQbTt7lxWC3FxeynFZ4l7YmGBJJNjJdGkWuhr0dLA/viewform",pt:"https://docs.google.com/forms/d/e/1FAIpQLSemk0bvHaE0IAaHNCxZjWHUBh8bALpqAoigLgLOC1VJZTQLQg/viewform"},S=n(156);function m(){var e=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration-line: underline;\n\n  margin-bottom: 43px;\n  \n  @media screen and (","){\n    margin-bottom: 80px;\n  }\n\n  > a {\n    font-family: Source Sans Pro;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 20px;\n\n    color: "," !important;\n  }\n"]);return m=function(){return e},e}var d=n(155).default.div(m(),(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.theme.colors.green})),b=r.a.memo((function(){var e=Object(p.a)(),t=e.t,n=e.i18n,i=Object(o.h)(),a=n.language;return"/welcome"===i.pathname?null:r.a.createElement(d,null,a&&r.a.createElement(c.a,{to:l[a],target:"_blank"},t("footerReportProblems:message")))})),f=n(744),g=n(300),y=Object(a.a)((function(e){var t=e.container;return n(230)("./".concat(t))}),{fallback:r.a.createElement("div",null,"Loading ...")});t.default=function(){var e=Object(o.h)(),t=e.pathname,n=e.search;return r.a.useEffect((function(){var e=new URLSearchParams(n);window.sourceCampaign=e.get("utm_campaign")}),[]),function(){var e=Object(o.g)();f.a.initialize("UA-165690517-6"),e.listen((function(e){f.a.pageview(e.pathname+e.search)}))}(),r.a.createElement(g.AppContainer,null,r.a.createElement(s.b,null,r.a.createElement(s.c,null),r.a.createElement(u.a,{style:{flex:1}},r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/welcome"},r.a.createElement(y,{key:"Welcome",container:"Welcome"})),r.a.createElement(o.a,{exact:!0,from:"/",to:"/welcome"}),r.a.createElement(o.b,{path:"/submit-steps"},r.a.createElement(y,{key:"SubmitSteps",container:"SubmitSteps"})),r.a.createElement(o.b,null,r.a.createElement("div",null,"404 Page")),r.a.createElement(o.a,{exact:!0,from:"/",to:"/welcome"}))),!t.includes("/submit-steps/thank-you")&&r.a.createElement(b,null)))}},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(156);function r(){var e=Object(i.a)(["\n  margin-left: -",";\n  margin-right: -",";\n\n  height: 100%;\n"]);return r=function(){return e},e}var a=n(155).default.div(r(),(function(e){return e.theme.layout.generalPaddingLeft}),(function(e){return e.theme.layout.generalPaddingRight}))},300:function(e,t,n){"use strict";n.r(t),n.d(t,"AppContainer",(function(){return a}));var i=n(156);function r(){var e=Object(i.a)(["\n  margin: 0 auto;\n  padding-left: ",";\n  padding-right: ",";\n\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n\n\n  @media screen and (","){\n    margin: auto;\n    /* padding: 54px 60px 80px 60px; */\n    text-align: center;\n\n    max-width: 768px;\n    height: 100%;\n    width: 100%;\n  }\n"]);return r=function(){return e},e}var a=n(155).default.div(r(),(function(e){return e.theme.layout.generalPaddingLeft}),(function(e){return e.theme.layout.generalPaddingRight}),(function(e){return e.theme.breakpoints.tablet}))},333:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var i=n(5),r=n.n(i),a=n(156),o=n(155),u=n(164);function s(){var e=Object(a.a)(["\n  color: ",";\n  font-weight: ",";\n  text-decoration: underline;\n\n  &:active, :visited {\n    color: ",";\n  } \n"]);return s=function(){return e},e}function p(){var e=Object(a.a)(["\n  color: ",";\n  font-weight: ",";\n  text-decoration: underline;\n\n  &:active, :visited {\n    color: ",";\n  } \n"]);return p=function(){return e},e}var c=Object(o.default)(u.b)(p(),(function(e){return e.theme.colors.darkBlack}),(function(e){return e.isBold?700:400}),(function(e){return e.theme.colors.darkBlack})),l=o.default.a(s(),(function(e){return e.theme.colors.darkBlack}),(function(e){return e.isBold?700:400}),(function(e){return e.theme.colors.darkBlack})),S=function(e){var t=e.children,n=e.to,i=e.target,a=void 0===i?"_self":i,o=e.isBold,u=void 0===o||o;return"_blank"===a?r.a.createElement(l,{href:n,target:"_blank",rel:"noopener noreferrer",isBold:u},t):r.a.createElement(c,{to:n,isBold:u},t)}},415:function(e,t,n){e.exports=n.p+"static/media/SFProDisplay.8fa494e3.woff"},416:function(e,t,n){e.exports=n.p+"static/media/SFProDisplay.6975fe7d.woff2"},747:function(e,t,n){"use strict";n.r(t);var i=n(156),r=n(5),a=n.n(r),o=n(155),u=n(335),s=n(164),p=n(403),c=n(227),l=n(158),S=n(415),m=n.n(S),d=n(416),b=n.n(d);function f(){var e=Object(i.a)(["\n  ","\n\n  html {\n    height: -webkit-fill-available;\n  }\n\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n\n    min-height: 100vh;\n    min-height: -webkit-fill-available;\n    margin: 0;\n    display: flex;\n\n    @font-face {\n        font-family: 'SFProDisplay';\n        src: local('SFProDisplay'), local('SFProDisplay'),\n        url(",") format('woff2'),\n        url(",") format('woff');\n        font-weight: 400;\n        font-style: normal;\n    }\n    input {\n      appearance: none;\n    }\n    select, input {\n      font-size: 1rem;\n    }\n  }\n\n  #root {\n    flex: 1;\n  }\n\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n      monospace;\n  }\n"]);return f=function(){return e},e}var g=Object(o.createGlobalStyle)(f(),u.reboot,b.a,m.a);t.default=function(){return a.a.createElement(o.ThemeProvider,{theme:l.b},a.a.createElement(p.a,{titleTemplate:"%s - Virufy",defaultTitle:"Virufy"}),a.a.createElement(g,null),a.a.createElement(s.a,{basename:"/study"},a.a.createElement(c.default,null)))}}}]);
//# sourceMappingURL=59.c8e04f0b.chunk.js.map