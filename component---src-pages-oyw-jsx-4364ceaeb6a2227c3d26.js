(self.webpackChunk=self.webpackChunk||[]).push([[39],{1691:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return g}});var m=t(7294),l=t(7852),n=t(9703),i=t(4959),s=t(1496),r={ambassadors:[{mediaLink:"https://www.linkedin.com/in/amilkhanzada",id:"amil",defaultName:"Amil Khanzada",imageName:"amil"},{mediaLink:"https://www.linkedin.com/in/matd-bolivia/?originalSubdomain=bo",id:"annelisse",defaultName:"Annelisse Torrez Daza",imageName:"annelisse"},{mediaLink:"https://www.linkedin.com/in/gonzalo-roiffe-62421592/",id:"gonzalo",defaultName:"Gonzalo Roiffe",imageName:"gonzalo"},{mediaLink:"https://www.linkedin.com/in/jasonpareja/",id:"jason",defaultName:"Jason Pareja Jauregui",imageName:"jason"},{mediaLink:"https://www.linkedin.com/in/katherine-thalia-ortiz-le%C3%B3n-bb7408a0/",id:"katherine",defaultName:"Katherine Thalia Ortiz León",imageName:"katherine"},{mediaLink:"https://www.linkedin.com/in/marcos-deza/",id:"marcos",defaultName:"Marcos Deza",imageName:"marcos"},{mediaLink:"https://www.linkedin.com/in/namathom/",id:"nathan",defaultName:"Nathan Thomas",imageName:"nathan"},{mediaLink:"https://www.linkedin.com/in/jean-sebastian-pedraza-paez-02b8aa11a/",id:"sebastian",defaultName:"Sebastian Pedraza",imageName:"sebastian"},{mediaLink:"https://www.linkedin.com/in/ver%C3%B3nica-guzm%C3%A1n-quilaqueo-91220a34/",id:"veronica",defaultName:"Verónica Guzmán Quilaqueo",imageName:"veronica"},{mediaLink:"https://www.linkedin.com/in/madhavdatt/",id:"madhav",defaultName:"Madhav Datt",imageName:"madhav"},{mediaLink:"https://www.linkedin.com/in/yulieq/",id:"yulie",defaultName:"Yulie Qiao",imageName:"yulie"},{mediaLink:"https://www.linkedin.com/in/kenmaru-suedomi-b871555b/",id:"kenmaru",defaultName:"Kenmaru Suedomi",imageName:"kenmaru"}],testimonials:[{id:"annelisse",defaultName:"Annelisse Torrez Daza",country:"Bolivia"},{id:"sebastian",defaultName:"Sebastian Pedraza",country:"Colombia"},{id:"gonzalo",defaultName:"Gonzalo Roiffe",country:"Argentina"},{id:"marcos",defaultName:"Marcos Deza",country:"Argentina"}]},d=function(e){var a=(0,n.useIntl)(),t=e.image,l=e.person,i=l.id,r=l.defaultName,d=l.mediaLink;return m.createElement("div",{className:"flex flex-col text-left\t mx-auto mb-10 w-full"},m.createElement("a",{className:"w-full",target:"_blank",rel:"noreferrer",href:d},m.createElement(s.Z,{className:"mx-auto my-2 rounded-md overflow-hidden team-icons",imgStyle:{objectFit:"fill"},fluid:t}),m.createElement("h5",{className:"mt-4 text-xl font-semibold text-black no-underline\t"},a.formatMessage({id:"OYW.ambassador.ambassador-list."+i+".name",defaultMessage:r}))),m.createElement("div",{className:"my-2"}),a.formatMessage({id:"OYW.ambassador.ambassador-list."+i+".description"}))},c=function(e){var a=e.images,t=(0,n.useIntl)();return m.createElement("section",{className:"p-8"},m.createElement("div",{className:"pb-12"},m.createElement("h2",{class:"mb-4 text-4xl font-bold text-gray-200"},t.formatMessage({id:"OYW.ambassador.header"}))),m.createElement("div",{className:"mt-4 sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-6 xl:grid-cols-4"},r.ambassadors.map((function(e,t){return m.createElement(d,{key:"ambs"+t,image:a[e.imageName].childImageSharp.fluid,person:e})}))))},o=function(e){var a=e.images,t=e.testimonial,l=e.active,i=(0,n.useIntl)();return m.createElement("div",{style:{display:l?"block":"none"},className:"fade"},m.createElement("div",{className:"rectangle-testimonial"},m.createElement(s.Z,{className:"absolute md:flex hidden top-4 md:top-10 left-0 w-4 md:w-10 h-4 md:h-10 pt-9 ml-9",imgStyle:{objectFit:"fill"},fluid:a.semicolon.childImageSharp.fluid})," ",l,m.createElement("h5",{className:"absolute text-sm top-0 text-gray-200 testimonial-margin"},i.formatMessage({id:"OYW.testimonials."+t.id})),m.createElement("div",{className:"oyw-testimonial-name-small"},m.createElement("div",{className:"flex flex-col md:flex-row mt-10 md:mt-0"},m.createElement("div",{className:"column md:flex hidden"},m.createElement(s.Z,{className:"w-24 md:w-32 mx-auto my-2 rounded-full team-icons",imgStyle:{objectFit:"fill"},fluid:a[t.id].childImageSharp.fluid,alt:"Annelisse Torrez Daza"})),m.createElement("div",{className:"column"},m.createElement("h5",{className:"mt-48 md:mt-4 text-sm md:rext-base font-semibold text-gray-200 text-center"},t.defaultName),m.createElement("h6",{className:"text-sm text-center text-gray-200"},t.country))))))},u=function(e){var a=e.images,t=(0,n.useIntl)(),l=(0,m.useState)(1),i=l[0],s=l[1],d=(0,m.useCallback)((function(e){var a=i+e;a<=0&&(a=r.testimonials.length),a>=r.testimonials.length+1&&(a=1),s(a)}),[i,s]);return m.createElement("section",{className:"my-10 wrapper"},m.createElement("h2",{className:"mb-4 text-4xl font-bold text-gray-200 text-center"},t.formatMessage({id:"OYW.testimonials.title"})),m.createElement("div",{className:"mb-4 text-gray-200 text-center mx-10"},m.createElement("p",null,t.formatMessage({id:"OYW.testimonials.intro"})," ")),m.createElement("div",{className:"slideshow-container"},r.testimonials.map((function(e,t){return m.createElement(o,{key:"testimonial-"+t,images:a,testimonial:e,active:i===t+1})})),m.createElement("a",{className:"prev",onClick:function(){return d(-1)}},"❮"),m.createElement("a",{className:"next",onClick:function(){return d(1)}},"❯")),m.createElement("div",{style:{textAlign:"center"}},r.testimonials.map((function(e,a){return m.createElement("span",{className:(i===a+1?" active ":"")+" dot",onClick:function(){return s(a+1)}})}))))};var f=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),m.createElement("section",{className:"my-10 wrapper"},m.createElement("iframe",{width:"560",height:"315",class:"video",src:"https://www.youtube-nocookie.com/embed/KVjh6uKJ-ig","data-cookieconsent":"marketing",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),m.createElement("div",{class:"text-center justify-between mb-8 text-gray-500"},"Presented at"," ",m.createElement("a",{class:"text-xl",target:"_blank",href:"https://www.sdgscaucus.com/speakers.html"},m.createElement("span",{class:"text-secondary-400"},"One Young World Tokyo 2020 Caucus"))))};function g(e){var a=e.data,t=(0,n.useIntl)(),r={};return a.allFile.edges.forEach((function(e){return r[e.node.name]=e.node})),m.createElement(l.Z,null,m.createElement(i.Z,{title:"OYW | Virufy"}),m.createElement("div",{className:"wrapper md:flex items-center justify-between md:py-4"},m.createElement("div",{className:"pb-10 md:pb-0 pr-6"},m.createElement("h1",{classNmae:"font-bold text-5xl w-full"},t.formatMessage({id:"OYW.headers.header"})),m.createElement("p",{className:"text-xl mt-8",dangerouslySetInnerHTML:{__html:t.formatMessage({id:"OYW.headers.sub-header"})}})),m.createElement("div",{className:"w-full"},m.createElement(s.Z,{className:"my-6 md:my-0 items-end w-7-12 lg:flex hidden",fluid:r.oyw.childImageSharp.fluid}))),m.createElement("div",{className:"my-10 wrapper"},m.createElement("h2",{className:"mb-4 text-2xl font-bold text-gray-200"},t.formatMessage({id:"OYW.section1.header"})),m.createElement("p",{className:"text-lg mt-8",dangerouslySetInnerHTML:{__html:t.formatMessage({id:"OYW.section1.sub-header"})}}),m.createElement("section",{className:"flex flex-wrap mb-20 wrapper md:justify-between"},m.createElement("div",{className:"flex flex-wrap justify-center my-5 md:w-1/2 md:my-10 md:flex-no-wrap md:justify-start"},m.createElement("div",{className:"w-full"},m.createElement(s.Z,{className:"my-6 md:my-0 md:w-2/12 mb-4 lg:flex hidden",fluid:r.globe.childImageSharp.fluid})),m.createElement("div",{className:"w-full md:w-10/12"},m.createElement("h2",{className:"mb-2 text-2xl font-bold text-gray-200"},t.formatMessage({id:"OYW.section2.header"})),m.createElement("p",null,t.formatMessage({id:"OYW.section2.sub-header"})))),m.createElement("div",{className:"flex flex-wrap justify-center my-5 md:w-1/2 md:my-10 md:flex-no-wrap md:justify-start"},m.createElement("div",{className:"w-full"},m.createElement(s.Z,{className:"my-6 md:my-0 md:pr-2 md:w-3/12 mb-4 lg:flex hidden",fluid:r.youth.childImageSharp.fluid})),m.createElement("div",{className:"w-full md:w-10/12"},m.createElement("h2",{className:"mb-2 text-2xl font-bold text-gray-200"},t.formatMessage({id:"OYW.section2.youth"})),m.createElement("p",null,t.formatMessage({id:"OYW.section2.youth-des"})))),m.createElement("div",{className:"flex flex-wrap justify-center my-5 md:w-1/2 md:my-10 md:flex-no-wrap md:justify-start"},m.createElement("div",{className:"w-full"},m.createElement(s.Z,{className:"my-6 md:my-0 md:w-3/12 mb-4 lg:flex hidden",fluid:r.ambassador.childImageSharp.fluid})),m.createElement("div",{className:"w-full md:w-10/12"},m.createElement("h2",{className:"mb-2 text-2xl font-bold text-gray-200"},t.formatMessage({id:"OYW.section2.ambassador"})),m.createElement("p",null,t.formatMessage({id:"OYW.section2.ambassador-des"})))),m.createElement("div",{className:"flex flex-wrap justify-center my-5 md:w-1/2 md:my-10 md:flex-no-wrap md:justify-start"},m.createElement("div",{className:"w-full"},m.createElement(s.Z,{className:"my-6 md:my-0 md:pr-2 md:w-3/12 mb-4 lg:flex hidden",fluid:r.diverse.childImageSharp.fluid})),m.createElement("div",{className:"w-full md:w-10/12"},m.createElement("h2",{className:"mb-2 text-2xl font-bold text-gray-200"},t.formatMessage({id:"OYW.section2.diverse"})),m.createElement("p",null,t.formatMessage({id:"OYW.section2.diverse-des"})))))),m.createElement(c,{images:r}),m.createElement(u,{images:r}),m.createElement(f,null))}}}]);
//# sourceMappingURL=component---src-pages-oyw-jsx-4364ceaeb6a2227c3d26.js.map