(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[44],{247:function(e,a,n){"use strict";n.r(a);var t=n(177),o=n(168),r=n.n(o),i=n(169),l=n(157),u=n(5),c=n.n(u),s=n(175),m=n(167),d=n.n(m),f=n(748),g=n(238),h=n(166),p=n(159),v=n(173),b=n(174),C=n(165),y=n(251),E=n(330),S=n(164),x=n(162),w=[{code:"en",label:"English"},{code:"es",label:"Espa\xf1ol"},{code:"pt",label:"Portugu\xeas"}],P=[{name:"Argentina",val:"Argentina",telephonePrefix:"+54",states:["Ciudad Aut\xf3noma de Buenos Aires","Buenos Aires","Catamarca","Chaco","Chubut","C\xf3rdoba","Corrientes","Entre R\xedos","Formosa","Jujuy","La Pampa","La Rioja","Mendoza","Misiones","Neuqu\xe9n","R\xedo Negro","Salta","San Juan","San Luis","Santa Cruz","Santa Fe","Santiago del Estero","Tierra del Fuego","Tucum\xe1n"]},{name:"Bolivia",val:"Bolivia",telephonePrefix:"+591",states:[]},{name:"Brazil",val:"Brazil",telephonePrefix:"+55",states:["Acre","Alagoas","Amap\xe1","Amazonas","Bahia","Cear\xe1","Distrito Federal","Esp\xedrito Santo","Goi\xe1s","Maranh\xe3o","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Par\xe1","Para\xedba","Paran\xe1","Pernambuco","Piau\xed","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rond\xf4nia","Roraima","Santa Catarina","S\xe3o Paulo","Sergipe","Tocantins"]},{name:"Colombia",val:"Colombia",telephonePrefix:"+57",states:["Amazonas","Antioquia","Arauca","Atl\xe1ntico","Bogot\xe1","Bol\xedvar","Boyac\xe1","Caldas","Capital District","Caquet\xe1","Casanare","Cauca","Cesar","Choc\xf3","C\xf3rdoba","Cundinamarca","Guain\xeda","Guaviare","Huila","La Guajira","Magdalena","Meta","Nari\xf1o","Norte de Santander","Putumayo","Quind\xedo","Risaralda","San Andr\xe9s y Providencia","Santander","Sucre","Tolima","Valle del Cauca","Vaup\xe9s","Vichada"]},{name:"Mexico",val:"Mexico",telephonePrefix:"+52",states:[]},{name:"Pakistan",val:"Pakistan",telephonePrefix:"+92",states:[]},{name:"Peru",val:"Peru",telephonePrefix:"+51",states:["Amazonas","Ancash","Apur\xedmac","Arequipa","Ayacucho","Cajamarca","Callao","Cuzco","Huancavelica","Hu\xe1nuco","Ica","Jun\xedn","La Libertad","Lambayeque","Lima","Loreto","Madre de Dios","Moquegua","Pasco","Piura","Puno","San Martin","Tacna","Tumbes","Ucayali"]},{name:"United States",val:"United States",telephonePrefix:"+51",states:["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]}],k=P.filter((function(e){return e.states.length>0})).map((function(e){return e.val})),M=n(216),A=n(163),O=n(202),j=b.e().shape({country:b.f().required(),language:b.f().required(),region:b.f().when("country",{is:function(e){return k.includes(e)},then:b.f().required(),else:b.f()})}).defined();a.default=c.a.memo((function(e){var a=Object(M.a)().width,n=d()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,o=c.a.useState(!0),m=Object(l.a)(o,2),b=m[0],k=m[1],W=Object(x.a)(),L=W.doGoBack,B=W.setDoGoBack,T=W.setLogoSize,V=Object(p.d)(Object(S.b)(e.storeKey)),N=V.state,R=V.action,z=null===N||void 0===N?void 0:N[e.storeKey],F=Object(h.e)({defaultValues:z,resolver:Object(v.a)(j),mode:"onChange"}),G=F.control,I=F.formState,q=F.handleSubmit,D=F.watch,H=F.setValue,J=Object(s.g)(),K=I.isValid,U=function(){var a=Object(i.a)(r.a.mark((function a(n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n&&(R(n),e.nextStep&&(k(!1),J.push(e.nextStep)));case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();Object(u.useEffect)((function(){Object(A.a)(),L&&B(null),T("big")}),[]);var Q=Object(f.a)(),Y=Q.t,Z=Q.i18n,X=D("language"),$=D("country");Object(u.useEffect)((function(){Z.changeLanguage(X)}),[Z,X]);var _=Object(u.useMemo)((function(){return[{name:Y("main:selectCountry"),consentFormUrl:"",val:""}].concat(Object(t.a)(P))}),[Y]),ee=Object(u.useMemo)((function(){var e=[{name:Y("main:selectRegion"),val:""}];if($){var a=P.find((function(e){return e.val===$}));a&&a.states.forEach((function(a){e.push({name:a,val:a})}))}return e}),[Y,$]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(O.WelcomeStyledForm,{mt:"-4px"},c.a.createElement(O.WelcomeLogo,null),c.a.createElement(O.WelcomeLogoText,null,Y("main:logoIntro","An Independent Nonprofit Research Organization")),c.a.createElement(O.WelcomeTitle,{fontSize:a&&a>560?32:24,mt:48},Y("main:title")),c.a.createElement(O.WelcomeContent,null,c.a.createElement(O.WelcomeSubtitle,{fontWeight:700,mb:0,mt:a&&a>560?0:18,textAlign:a&&a>560?"center":"left"},Y("main:paragraph1")),c.a.createElement(O.WelcomeSubtitle,{mt:a&&a>560?50:32,mb:a&&a>560?50:16,fontWeight:400,textAlign:a&&a>560?"center":"left"},"Please select your language."),c.a.createElement(h.a,{control:G,name:"language",defaultValue:Z.language.split("-")[0]||w[0].code,render:function(e){var a=e.onChange,n=e.value;return c.a.createElement(y.a,{onChange:function(e){return a(e.currentTarget.value)},value:n},w.map((function(e){var a=e.code,n=e.label;return c.a.createElement("option",{key:a,id:a,value:a},n)})))}}),c.a.createElement(O.WelcomeSubtitle,{mt:a&&a>560?50:32,mb:a&&a>560?50:16,fontWeight:400,textAlign:a&&a>560?"center":"left"},Y("main:paragraph2"),c.a.createElement(O.WelcomeRequiredFieldText,null," *")),c.a.createElement(h.a,{control:G,name:"country",defaultValue:_[0].val,render:function(e){var a=e.onChange,n=e.value;return c.a.createElement(y.a,{onChange:function(e){a(e.currentTarget.value),H("region","",{shouldValidate:!0})},value:n},_.map((function(e){var a=e.name,n=e.val;return c.a.createElement("option",{key:a,id:a,value:n},a)})))}}),c.a.createElement(h.a,{control:G,name:"region",defaultValue:ee[0].val,render:function(e){var a=e.onChange,n=e.value;return ee.length>1?c.a.createElement(O.RegionContainer,null,c.a.createElement(y.a,{onChange:function(e){return a(e.currentTarget.value)},value:n},ee.map((function(e){var a=e.name,n=e.val;return c.a.createElement("option",{key:a,id:a,value:n},a)})))):c.a.createElement(c.a.Fragment,null)}}),c.a.createElement(O.WelcomeNote,null,c.a.createElement(g.a,{i18nKey:"main:note"},c.a.createElement("strong",null,"Please note:")," This form is for data collection only. It will not predict your COVID-19 status or diagnose any disease, disorder, or other health condition. Virufy is conducting research and will use the information you provide for that research only. Virufy will not take place of a doctor and would like to remind you it is your responsibility to seek medical advice from your doctor.")),b&&c.a.createElement(n,null,c.a.createElement(C.a,{leftLabel:Y("main:nextButton"),leftHandler:q(U),leftDisabled:!K,invert:!0}),c.a.createElement(E.a,{inline:!0})))))}))},251:function(e,a,n){"use strict";n.d(a,"a",(function(){return u}));var t=n(5),o=n.n(t),r=n(156);function i(){var e=Object(r.a)(["\n  appearance: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='12' height='6' viewBox='0 0 12 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.538574 0.838867L6.1155 5.83887L11.6924 0.838867H0.538574Z' fill='%2321242C'/%3E%3C/svg%3E\");\n  background-color: ",";\n  background-position: 95% 50%;\n  background-repeat: no-repeat;\n  border: 0;\n  border-radius: 4px;\n  color: ",";\n  font-family: 'Source Sans Pro';\n  margin: auto;\n  padding: 12px 15px;\n  \n  height: 48px;\n  max-width: ",";\n  width: 100%;\n\n\n  @media screen and (","){\n    max-width: 348px;\n    }\n"]);return i=function(){return e},e}var l=n(155).default.select(i(),(function(e){return e.theme.colors.lightGray}),(function(e){return e.theme.colors.darkBlack}),(function(e){return e.isMobileFullWidth?"none":"320px"}),(function(e){return e.theme.breakpoints.tablet})),u=function(e){var a=e.children,n=e.value,t=e.isMobileFullWidth;return o.a.createElement(l,Object.assign({},e,{value:n,isMobileFullWidth:t}),a)}}}]);
//# sourceMappingURL=44.e9cfaefa.chunk.js.map