(self.webpackChunk=self.webpackChunk||[]).push([[208],{9756:function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(t,{Z:function(){return r}})},1496:function(e,t,a){"use strict";var r=a(5318);t.Z=void 0;var n,i=r(a(1506)),o=r(a(5354)),s=r(a(7316)),l=r(a(7154)),d=r(a(7294)),c=r(a(5697)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(h&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(h&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},A=Object.create({}),v=function(e){var t=u(e),a=m(t);return A[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,E=h&&window.IntersectionObserver,b=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),a&&d.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function k(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},S=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+d+o+s+a+r+t+i+n+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},M=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=d.default.createElement(C,(0,l.default)({ref:t,src:a},i,{ariaHidden:o}));return r.length>1?d.default.createElement("picture",null,n(r),s):s})),C=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},g,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));C.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&v(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!p&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:h}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:v(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=v(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(A[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,A=e.fluid,v=e.fixed,p=e.backgroundColor,h=e.durationFadeIn,E=e.Tag,b=e.itemProp,y=e.loading,I=e.draggable,L=A||v;if(!L)return null;var N=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:N?1:0,transition:O?"opacity "+h+"ms":"none"},s),B="boolean"==typeof p?"lightgray":p,V={transitionDelay:h+"ms"},P=(0,l.default)({opacity:this.state.imgLoaded?0:1},O&&V,s,f),j={title:t,alt:this.state.isVisible?"":a,style:P,className:m,itemProp:b},q=this.state.isHydrated?g(L):L[0];if(A)return d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:q.maxWidth?q.maxWidth+"px":null,maxHeight:q.maxHeight?q.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},d.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),B&&d.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:B,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&V)}),q.base64&&d.default.createElement(M,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:j,imageVariants:L,generateSources:x}),q.tracedSVG&&d.default.createElement(M,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:j,imageVariants:L,generateSources:k}),this.state.isVisible&&d.default.createElement("picture",null,w(L),d.default.createElement(C,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:y,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:S((0,l.default)({alt:a,title:t,loading:y},q,{imageVariants:L}))}}));if(v){var z=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},i);return"inherit"===i.display&&delete z.display,d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},B&&d.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:B,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},O&&V)}),q.base64&&d.default.createElement(M,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:j,imageVariants:L,generateSources:x}),q.tracedSVG&&d.default.createElement(M,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:j,imageVariants:L,generateSources:k}),this.state.isVisible&&d.default.createElement("picture",null,w(L),d.default.createElement(C,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:y,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:S((0,l.default)({alt:a,title:t,loading:y},q,{imageVariants:L}))}}))}return null},t}(d.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),R=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function B(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}N.propTypes={resolutions:O,sizes:R,fixed:B(c.default.oneOfType([O,c.default.arrayOf(O)])),fluid:B(c.default.oneOfType([R,c.default.arrayOf(R)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var V=N;t.Z=V},7852:function(e,t,a){"use strict";a.d(t,{Z:function(){return I}});var r=a(7294),n=a(4959),i=a(5183),o=(a.p,a(9694)),s=function(e){var t=e.textColor;return r.createElement("svg",{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"w-6 "+t},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}))},l=function(e){var t=e.textColor;return r.createElement("svg",{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"w-6 "+t},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"}))},d=function(e){var t=e.mobileNavOpen,a=e.setMobileNavOpen,n=e.textColor;return r.createElement("button",{onClick:function(){return a(!t)}},t?r.createElement(l,{textColor:n}):r.createElement(s,{textColor:n}))},c=a(9703),u=function(e){var t=e.bgColor,a=e.textColor,n={en:"Language - EN",es:"Español - ES",pt:"Português - PT",hi:"हिन्दी - HI",ja:"日本語 - JA"};return r.createElement(c.IntlContextConsumer,null,(function(e){var i=e.languages,o=e.language;return r.createElement("select",{value:o,onChange:function(e){return(0,c.changeLocale)(e.target.value)},className:"cursor-pointer "+t+" "+a},i.map((function(e){return r.createElement("option",{key:e,value:e},n[e])})))}))},f=a(2340),m=[{intlId:"nav.ourApproach",defMsg:"Our Approach",path:"/our-approach",dropDownLinks:[{intlId:"nav.techBehind",sectionId:"tech-behind"},{intlId:"nav.faqs",sectionId:"faq"}]},{intlId:"nav.ourOrg",defMsg:"Our Org",path:"/team",dropDownLinks:[{intlId:"nav.ourVision",sectionId:"our-vision"},{intlId:"nav.ourTeam",sectionId:"our-team"},{intlId:"nav.ourSupporters",sectionId:"our-supporters"}]},{intlId:"nav.inTheNews",defMsg:"In the News",path:"/news"},{intlId:"nav.faqs",defMsg:"FAQs",path:"/our-approach#faq"},{intlId:"nav.getInvolved",defMsg:"GET INVOLVED",path:"/get-involved",btnStyle:!0,classes:"text-white bg-primary py-2 px-6"}],g=a(5444),A=a(3928),v=function(e,t){return function(e,t){return e===t.path.replace("/","").split("#")[0]}(function(e){var t=e.pathname.split("/");return t[t.length-1]}(e),t)&&(a={hash:e.hash,path:t.path},r=a.hash,n=a.path,i=a.hashLink,o=void 0===i?"#faq":i,(s=n.split("#")).length<2?r!==o:!(s[1]===o&&!r)&&s[1]===r.replace("#",""));var a,r,n,i,o,s},p=function(e){var t=e.textColor,a=e.bgColor,n=e.virufyLogo,i=(0,r.useState)(!1),s=i[0],l=i[1],p=(0,c.useIntl)(),h=(0,o.useLocation)();(0,A.Z)(!0,(function(){return l(!1)}));var E=function(e){var t=v(h,e);return e.btnStyle?"no-underline text-white py-2 px-6 "+(t?"bg-black":"bg-primary"):"no-underline "+(t?"font-bold":"")};return r.createElement(c.IntlContextConsumer,null,(function(e){var i=e.language;return r.createElement(r.Fragment,null,r.createElement("div",{className:"flex items-end justify-between lg:hidden p-4"},r.createElement(d,{mobileNavOpen:s,setMobileNavOpen:l,textColor:t}),r.createElement("span",{className:"flex items-end"},r.createElement(g.Link,{to:"/"},r.createElement("img",{src:n,alt:"virufy",className:"mr-8 inline-block w-20"})),r.createElement(u,{bgColor:a,textColor:t}))),r.createElement(f.Z,{active:s,onClick:function(){return l(!1)}},r.createElement("div",{className:"inline-flex flex-col p-4 bg-white",style:{transform:"translate(1.5rem, 50%)"},onClick:function(e){return e.stopPropagation()}},m.map((function(e){return r.createElement(g.Link,{className:E(e),to:"/"+i+e.path},p.formatMessage({id:e.intlId,defaultMessage:e.defMsg}))})))))}))},h=function(e){var t=e.bgColor,a=e.textColor,n=e.virufyLogo,i=(0,c.useIntl)(),s=(0,o.useLocation)(),l=(0,r.useState)(-1),d=l[0],f=l[1],A=function(e){var t=v(s,e);return e.btnStyle?"ml-4 mr-0 no-underline text-white py-2 px-6 "+(t?"bg-black":"bg-primary"):"ml-4 mr-0 no-underline "+a+" "+(t?"font-bold border-b-4 border-green":"")};return r.createElement(c.IntlContextConsumer,null,(function(e){var o=e.language;return r.createElement("div",{className:"lg:flex justify-between py-3 px-6 hidden"},r.createElement(g.Link,{to:"/",className:"inline-block"},r.createElement("img",{className:"logo",src:n,alt:i.formatMessage({id:"nav.logoAlt",defaultMessage:"home"})})),r.createElement("div",{className:"flex items-center text-base"},r.createElement(u,{bgColor:t,textColor:a}),m.map((function(e,t){return r.createElement("span",{onMouseEnter:function(){return f(t)},onMouseLeave:function(){return f(-1)},key:t},r.createElement(g.Link,{className:A(e),to:"/"+o+e.path},r.createElement("span",{className:"px-2"},i.formatMessage({id:e.intlId,defaultMessage:e.defMsg}))),e.dropDownLinks&&d===t&&r.createElement("div",{className:"absolute ml-4 bg-gray-100"},e.dropDownLinks.map((function(t,a){var n=t.intlId,s=t.sectionId;return r.createElement(g.Link,{className:"p-4 block text-black hover:bg-gray-200 no-underline",to:"/"+o+e.path+"#"+s,key:a},i.formatMessage({id:n}))}))))}))))}))},E=function(){var e=((0,o.useLocation)().pathname.includes("/team"),["bg-white","text-black",i.Z]),t=e[0],a=e[1],n=e[2];return r.createElement("nav",{className:""+t},r.createElement(p,{textColor:a,bgColor:t,virufyLogo:n}),r.createElement(h,{textColor:a,bgColor:t,virufyLogo:n}))},b=[{name:"GitHub",logo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAhFBMVEUAAAD+/v7+/v7+/v77+/v+/v7+/v79/f34+Pj+/v79/f3t7e3+/v7+/v78/Pz+/v79/f38/Pz6+vr+/v7+/v7+/v7+/v79/f3+/v77+/v8/Pz+/v7+/v7+/v79/f39/f38/Pz6+vr+/v7+/v7+/v7+/v78/Pz+/v7+/v79/f39/f3+/v60h2edAAAAK3RSTlMA+PWYFdPBbgd0VgLgtizPNB4K6sarf2DkHiSgkYNJPikQ8L2vlBvDfGJU+OoLQAAAAeJJREFUSMelVut2syAQXESJihpjNBpzaa79vnbf//16UhfQILQ5nV9wnAksOwwBC9v2LrIAMcgEb7fwA8JkiRMsk9BDX3GGFhhfOejxhuiWZBPP8YsInYgKm58G6EGQPvMX+AMWFv8lRYq/QDqqNxg2GjgKoM+68pjOp5Snw/qZvT6cZElnpU53Q58kAFT/GWInmt2uEd2jBRUASPqZDfWX+iWGaX88A+F87IeBoA4OPec44AZO3IjCv/2mDHF1C67KJA8nJoi6BgekPooEALSfu7NLcO602wG2qPAGTrxp0hZaJDTgQYOEFri1gHcJDoJGF+kTyAuqZmU0qsGLmmgZKMPlfkGujAj4mgABX9sS6i11fkGnt5QhIfQGHOqihbmBHqRIEMCtqr01c2MNLN38UpPakfmiysWvImO+kb0xrxz83IQ5XSA1LWb3ExlGoq5o8zEkfXOMnyL9eEMDFqoQWK7glA2due519eVdTLONm5i5lHBi1BtdSqW7qmPGBNk6VIm8cGb0YRKVd5DJYw3WG0E/4UfxJIyDEOC9TT7DccmTTC6erNJIsOCIe9ps3jsE7ieo3u13/+YFC/ejOCcIUsez6xBEhedhtwXsEMM83jmzBYyvvH9O6v14vq+TEP6GLxrLnKo0lwHMAAAAAElFTkSuQmCC",address:"https://github.com/virufy"},{name:"Instagram",logo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAY1BMVEUAAAD9/f3+/v78/Pz+/v7+/v79/f3+/v7+/v7+/v7+/v719fX4+Pj9/f39/f39/f309PT+/v7+/v78/Pz7+/v+/v7+/v7+/v7+/v79/f39/f37+/v+/v7+/v79/f38/Pz+/v5JXcyeAAAAIHRSTlMAV9IW9nVm6996awgGXEJiArytKA/FpZeHUjwk15mBGoWyNuoAAAGpSURBVEjHnJXpkoIwEITbBJD7VE518/5Puc6YpAxbkIXvh8RUxvQctLAs0dCI+Booh+Aai2aoFqzIIqF2EVGGL8pYeYlLWEL1L8L1edGPYVoVxcVSFFUajr1wI0pFXEOJTWR4VQSrylh/e8Mut5bzoMwjPl/DQ84REQBBevZ+vy7aZwfcSJUAFp3NNi/qX6drs6Cih9zTwr1/AvKjaeCLVsh5mmap01VEq8UPaN6fvXs6EbovCcc0tC4A9O9nw2Hjt4IkUJYgyYGfRgUvquLIYmI3Z3lXDndJqnI7ETGoWCkM8qFWPCQMKTUAJKCyeu4f8WmXZV0qPnfk0FQkEiYjJmHhUQ2mjjidBJqCvnHAxQgK6HwJS8kbRtTlT0BixsUS8RWbAYL0184c8dZWgFS2Yk5llNwImGndwaGjvXkjYKJ1BoeM9qaTAecl+ZM+WtbTjTs1GoeH7/B4H36B/K+oa/Kx3wQ01gT8NmNhm/EZmcUYmbFKL8YqjRl7sWbst3vG2L39Q/kdD5EVCslVFhmVIma1y4gE0KpdUit2UpsO5DdOCDd/2BDNHwBlpHIPqfACPAAAAABJRU5ErkJggg==",address:"https://www.instagram.com/virufyorg/"},{name:"Twitter",logo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAn1BMVEUAAADx8fH+/v7+/v78/Pz7+/v7+/v+/v7+/v78/Pz4+Pj+/v7+/v79/f35+fn+/v7+/v7+/v7+/v79/f39/f3+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v79/f39/f39/f37+/v+/v7+/v7+/v7+/v7+/v7+/v79/f39/f39/f39/f39/f38/Pz8/Pz+/v7+/v76+vr+/v7y7YDKAAAANHRSTlMAAv3BKRAN8+ohBrudRQjul45ybF338dzY1NDLqKR7dmQ5MhXjxbOug4FNPWpZUxwYh4UY6bVfdgAAAX5JREFUSMfdk9eWgyAURa+9G2uMJdZMepsZ/v/bxsXSjAZUnrPf4J4NF0T4fLQgP/kXnTHNnb8QZuVKgBHPeP5Gz8sZeqFabc468CK0WKik5lM0gP/OVIRMXDERH1D62SOCWMalTev7hHAj88nTPl/bUohaHP1tgw2RV11D2T3bGo+HqTgSakRjXUOLijBhYQ8Ej5ZfVbhm9OMo+O/LoeQjkVgs8ppOMCmC1tUaZXjfhi9y7aQ7I0D+3qpgng4U4bcXdAEx0V2KdHxITMa6X59HSaYwCAl0bBAb215wGQWvF0SeTaihx2TKq9xLkJhO4Qx/9YhBuMAAKVvMxxyMqLbqvFDCkGB/EFaz+Z09Eh4hWiCAMceF/Fd/AsYHG4rwjmzMCT6Q6Lky/ew4oNF4Ezcl2DDFZUfJp9JUvHF42vpTec2lHsKk9iNXBf1elZI4r2Wk8eQz2mtAIv2spz6vBXRkP6E0s61gBrEwBvvwsXOXYQlOs8ridMyv91qGz+YP8iDedbgWa7UAAAAASUVORK5CYII=",address:"https://twitter.com/VirufyOrg"},{name:"Facebook",logo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAARVBMVEUAAAD5+fn+/v79/f3+/v7+/v79/f309PT+/v7+/v7+/v79/f38/Pz6+vr+/v7+/v7+/v7+/v7+/v79/f39/f3v7+/+/v7VKEHQAAAAFnRSTlMACuhgsZlaBOXjcjgkE/nv3beDbEoIqOd+AgAAAKBJREFUSMft1skOgkAURNF6PUEzOFv//6maJppgOqZroWHB3Z9AYFEPJfOh59f64A3vkmNDLmGpi2wsdgVENhfL+1AoAeYU4AyeUh5BAwG5/ujLOC+fhOsyWOs84xU/qoKTQQNXiGBSwV0FKA1HPhPAgSLgjwDWmQomFYwquKnAq2DYwH/YwQ7+BrIGsjwo8mTJo6jOrjrs+umgHyfy+fMA/1OlR/7V8cYAAAAASUVORK5CYII=",address:"https://www.facebook.com/Virufy/"},{name:"LinkedIn",logo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAWlBMVEUAAAD+/v7+/v7+/v7y8vL+/v79/f3+/v79/f35+fn+/v75+fn+/v74+Pj+/v7+/v7+/v78/Pz7+/v+/v7+/v7+/v79/f3+/v79/f38/Pz+/v79/f38/Pz+/v68ItToAAAAHXRSTlMA4/uxA5lg51oKkAbEDfXenx4W082Xg3Y4LLlIJNqUfVMAAADsSURBVEjH7dbZCoMwEIXhk8W4xLX7Nu//mpWx0UJBZy561f5XI/iBRiQBVwZnLK1kjQsl5oqcBOUFpnxGwjLPgO8XCn4eUlQAZa4BeYmwXNXnc70lAtw8nzzgTxvAwaRx73nJ9uvAwKaxAletAwvSAVpAFzEWOzGgfhSxJzkgczwaUgDuqwDc+9Rm951vLlUrBPWAqaEWgVtEqjlIwA5LV7sOPnMyEJs0BQkYnKXD5fVMknfgz94+ptcWgIq4ni+8AHTpl+EEIK2kGNAf/DawpMrC6ICB0wGHoANBvSlqt13txq4/OugPJ+rjzxOvisLcDFQFcQAAAABJRU5ErkJggg==",address:"https://www.linkedin.com/company/virufy/"},{name:"Youtube",logo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACgElEQVRo3u2ZT0sbQRiHn3l3Nysi4kF6kGJBetR68CIYqKb6AfwCPfRr9FB66GfoxVOPfgMptTZQFKSC2qMIFfFQPIho0d3MOz3spoT+NcluxkoeeFlYwjvPLzOEyQz06dOnj0/M714mSTISBEHNGDMNjAMjwDAwBAwCA3lVWkqAMH/KH8bTvBr5M2mpq7y+ARfAOXAGHDnndq2165VK5eyvARqNxj0ReQU8zaVuEwnwRlWfh2H49ZcAjUbjoYi8B+77Nv0Hx6q6EIbhwY8A19fXlSiKPgGTvu1uyOc0TWfiOE4EIAzDZ/+RPMBk7pzNgKruAo98W7XJnohMmzRNx4Mg+OLbphOstQ9ERGZ9i3SKiMyKMWbKt0inGGOmBJjwLdIFEwKMFdHJOfcEqPc4wJgAo0V0CoJgXUQe9zjIqJDtcQqjx0GGhWyDVjgtQRZKDDIkZLvK0giCYKPEIANCj3adPwXZKKhtxaiqK6KTiJh2Pm+tnTfGvADmuxq3oG+ibfIZWeh2RrwFANjZ2Wku4c6Xsaq6IqqdMbe3t8Vau6iqH7seV1XTXgXY3NwsTDyvFFW9LDtAvV4vWrxZlyHZScBgGWu8Xq/L3NxcLf+1qZYwxJWQHWEUytramlhrF6vV6gdjzNuS5AEuhOz8pRBWV1fFWltbWloqW7zJeQicFtHJWlszxrzsgXQrpyFwUkQnY8y7Hoo3ORHg0MPARXEozrl93xad4pzbF1Xd8i3SKaq6JVEUHQF7vmU6YC+KoiMBcM699m3TLk3nu3G4G8dxoqrLwLFvsxtwrKrLcRwn0PJ/IAzDA1WdAVbILhNuGwmwoqozzbsBuANXTH369Onjl++dNrEmXRJE7AAAAABJRU5ErkJggg==",address:"https://www.youtube.com/channel/UC6m20FEpd6J-HAoyitJKfkg"}],w=[{intlId:"footer.cookiePolicy",address:"/cookie_policy"},{intlId:"footer.cookieSettings",address:"/index#cookie"},{intlId:"footer.privacyPolicy",address:"/privacy_policy"},{intlId:"footer.dontSellPersonalInfo",address:"/ccpa"}],y=function(){var e=(0,c.useIntl)(),t=e.formatMessage({id:"footer.email",defaultMessage:"info@virufy.org"}),a=function(e){return"footer.cookieSettings"===e.intlId?"javascript: Cookiebot.renew()":e.address};return r.createElement("div",{className:"md:grid md:grid-cols-2 md:gap-4 text-white px-6 md:mx-8"},r.createElement("div",null,r.createElement("a",{className:"md:flex flex-initial md:flex-row block underline mb-6 text-white",href:"mailto:"+t},t),r.createElement("p",{className:"block no-underline mb-6 text-white"},e.formatMessage({id:"footer.address",defaultMessage:""})),r.createElement("div",{className:"md:flex flex-initial md:flex-row"},r.createElement("div",{className:"flex flex-grow"},b.map((function(e){return r.createElement("a",{href:e.address,key:e.name,className:"mr-6"},r.createElement("img",{src:e.logo,alt:e.name}))}))))),r.createElement("div",{className:"pt-6 md:pt-0 md:ml-6"},w.map((function(t,n){return r.createElement(r.Fragment,null,r.createElement("a",{className:"underline text-sm text-white",href:a(t),key:t.intlId},e.formatMessage({id:t.intlId})),n+1!==w.length&&r.createElement(r.Fragment,null,"  |  "))})),r.createElement("p",{className:"text-sm"},e.formatMessage({id:"footer.copyrightInformation",defaultMessage:"©2021 Virufy  |  All rights reserved"})),r.createElement("p",{className:"mt-4 text-sm"},e.formatMessage({id:"footer.nonprofit"}))))},k=a(5186),x=function(){return r.createElement(k.q,null,r.createElement("script",{id:"Cookiebot",src:"https://consent.cookiebot.com/uc.js","data-cbid":"fb5fec28-28e3-45e9-baa6-51f9f62f936b","data-blockingmode":"auto",type:"text/javascript"}),r.createElement("script",{id:"CookieDeclaration",src:"https://consent.cookiebot.com/fb5fec28-28e3-45e9-baa6-51f9f62f936b/cd.js",type:"text/javascript",async:!0}))},I=function(e){var t=e.children,a=e.className;return r.createElement(r.Fragment,null,r.createElement(n.Z,null),r.createElement("header",{className:"sticky top-0 z-10"},r.createElement(E,null)),r.createElement("main",{className:a},t),r.createElement("footer",{className:"bg-secondary-100 py-16"},r.createElement(x,null),r.createElement(y,null)))}},2340:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var r=a(9756),n=a(7294);function i(e){var t=e.active,a=(0,r.Z)(e,["active"]),i=void 0!==a.children;return n.createElement(n.Fragment,null,t&&n.createElement("div",Object.assign({className:"bg-black bg-opacity-30 fixed inset-0 z-10"},a),i&&n.createElement("div",{className:"z-20"},a.children)))}},3928:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var r=a(7294);function n(e,t){(0,r.useEffect)((function(){function a(e){27===e.keyCode&&t()}return e?document.addEventListener("keydown",a):document.removeEventListener("keydown",a),function(){document.removeEventListener("keydown",a)}}),[e,t])}}}]);
//# sourceMappingURL=04d00693ecfd7ce6f4183fd64cc2919d397abf54-0d7ed07e216461ee71fd.js.map