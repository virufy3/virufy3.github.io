(self.webpackChunk=self.webpackChunk||[]).push([[748],{9756:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,{Z:function(){return a}})},7852:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var a=n(7294),r=n(4959),o=n(5183),l=(n.p,n(9694)),i=function(e){var t=e.textColor;return a.createElement("svg",{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"w-6 "+t},a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}))},s=function(e){var t=e.textColor;return a.createElement("svg",{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"w-6 "+t},a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"}))},A=function(e){var t=e.mobileNavOpen,n=e.setMobileNavOpen,r=e.textColor;return a.createElement("button",{onClick:function(){return n(!t)}},t?a.createElement(s,{textColor:r}):a.createElement(i,{textColor:r}))},c=n(9703),m=function(e){var t=e.bgColor,n=e.textColor,r={en:"Language - EN",es:"Español - ES",pt:"Português - PT",hi:"हिन्दी - HI",ja:"日本語 - JA"};return a.createElement(c.IntlContextConsumer,null,(function(e){var o=e.languages,l=e.language;return a.createElement("select",{value:l,onChange:function(e){return(0,c.changeLocale)(e.target.value)},className:"cursor-pointer "+t+" "+n},o.map((function(e){return a.createElement("option",{key:e,value:e},r[e])})))}))},u=n(2340),v=[{intlId:"nav.ourApproach",defMsg:"Our Approach",path:"/our-approach",dropDownLinks:[{intlId:"nav.techBehind",sectionId:"tech-behind"},{intlId:"nav.faqs",sectionId:"faq"}]},{intlId:"nav.ourOrg",defMsg:"Our Org",path:"/team",dropDownLinks:[{intlId:"nav.ourVision",sectionId:"our-vision"},{intlId:"nav.ourTeam",sectionId:"our-team"},{intlId:"nav.ourSupporters",sectionId:"our-supporters"}]},{intlId:"nav.inTheNews",defMsg:"In the News",path:"/news"},{intlId:"nav.faqs",defMsg:"FAQs",path:"/our-approach#faq"},{intlId:"nav.getInvolved",defMsg:"GET INVOLVED",path:"/get-involved",btnStyle:!0,classes:"text-white bg-primary py-2 px-6"}],f=n(5444),d=n(3928),g=function(e,t){return function(e,t){return e===t.path.replace("/","").split("#")[0]}(function(e){var t=e.pathname.split("/");return t[t.length-1]}(e),t)&&(n={hash:e.hash,path:t.path},a=n.hash,r=n.path,o=n.hashLink,l=void 0===o?"#faq":o,(i=r.split("#")).length<2?a!==l:!(i[1]===l&&!a)&&i[1]===a.replace("#",""));var n,a,r,o,l,i},E=function(e){var t=e.textColor,n=e.bgColor,r=e.virufyLogo,o=(0,a.useState)(!1),i=o[0],s=o[1],E=(0,c.useIntl)(),p=(0,l.useLocation)();(0,d.Z)(!0,(function(){return s(!1)}));var h=function(e){var t=g(p,e);return e.btnStyle?"no-underline text-white py-2 px-6 "+(t?"bg-black":"bg-primary"):"no-underline "+(t?"font-bold":"")};return a.createElement(c.IntlContextConsumer,null,(function(e){var o=e.language;return a.createElement(a.Fragment,null,a.createElement("div",{className:"flex items-end justify-between lg:hidden p-4"},a.createElement(A,{mobileNavOpen:i,setMobileNavOpen:s,textColor:t}),a.createElement("span",{className:"flex items-end"},a.createElement(f.Link,{to:"/"},a.createElement("img",{src:r,alt:"virufy",className:"mr-8 inline-block w-20"})),a.createElement(m,{bgColor:n,textColor:t}))),a.createElement(u.Z,{active:i,onClick:function(){return s(!1)}},a.createElement("div",{className:"inline-flex flex-col p-4 bg-white",style:{transform:"translate(1.5rem, 50%)"},onClick:function(e){return e.stopPropagation()}},v.map((function(e){return a.createElement(f.Link,{className:h(e),to:"/"+o+e.path},E.formatMessage({id:e.intlId,defaultMessage:e.defMsg}))})))))}))},p=function(e){var t=e.bgColor,n=e.textColor,r=e.virufyLogo,o=(0,c.useIntl)(),i=(0,l.useLocation)(),s=(0,a.useState)(-1),A=s[0],u=s[1],d=function(e){var t=g(i,e);return e.btnStyle?"ml-4 mr-0 no-underline text-white py-2 px-6 "+(t?"bg-black":"bg-primary"):"ml-4 mr-0 no-underline "+n+" "+(t?"font-bold border-b-4 border-green":"")};return a.createElement(c.IntlContextConsumer,null,(function(e){var l=e.language;return a.createElement("div",{className:"lg:flex justify-between py-3 px-6 hidden"},a.createElement(f.Link,{to:"/",className:"inline-block"},a.createElement("img",{className:"logo",src:r,alt:o.formatMessage({id:"nav.logoAlt",defaultMessage:"home"})})),a.createElement("div",{className:"flex items-center text-base"},a.createElement(m,{bgColor:t,textColor:n}),v.map((function(e,t){return a.createElement("span",{onMouseEnter:function(){return u(t)},onMouseLeave:function(){return u(-1)},key:t},a.createElement(f.Link,{className:d(e),to:"/"+l+e.path},a.createElement("span",{className:"px-2"},o.formatMessage({id:e.intlId,defaultMessage:e.defMsg}))),e.dropDownLinks&&A===t&&a.createElement("div",{className:"absolute ml-4 bg-gray-100"},e.dropDownLinks.map((function(t,n){var r=t.intlId,i=t.sectionId;return a.createElement(f.Link,{className:"p-4 block text-black hover:bg-gray-200 no-underline",to:"/"+l+e.path+"#"+i,key:n},o.formatMessage({id:r}))}))))}))))}))},h=function(){var e=((0,l.useLocation)().pathname.includes("/team"),["bg-white","text-black",o.Z]),t=e[0],n=e[1],r=e[2];return a.createElement("nav",{className:""+t},a.createElement(E,{textColor:n,bgColor:t,virufyLogo:r}),a.createElement(p,{textColor:n,bgColor:t,virufyLogo:r}))},w=[{name:"GitHub",logo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAhFBMVEUAAAD+/v7+/v7+/v77+/v+/v7+/v79/f34+Pj+/v79/f3t7e3+/v7+/v78/Pz+/v79/f38/Pz6+vr+/v7+/v7+/v7+/v79/f3+/v77+/v8/Pz+/v7+/v7+/v79/f39/f38/Pz6+vr+/v7+/v7+/v7+/v78/Pz+/v7+/v79/f39/f3+/v60h2edAAAAK3RSTlMA+PWYFdPBbgd0VgLgtizPNB4K6sarf2DkHiSgkYNJPikQ8L2vlBvDfGJU+OoLQAAAAeJJREFUSMelVut2syAQXESJihpjNBpzaa79vnbf//16UhfQILQ5nV9wnAksOwwBC9v2LrIAMcgEb7fwA8JkiRMsk9BDX3GGFhhfOejxhuiWZBPP8YsInYgKm58G6EGQPvMX+AMWFv8lRYq/QDqqNxg2GjgKoM+68pjOp5Snw/qZvT6cZElnpU53Q58kAFT/GWInmt2uEd2jBRUASPqZDfWX+iWGaX88A+F87IeBoA4OPec44AZO3IjCv/2mDHF1C67KJA8nJoi6BgekPooEALSfu7NLcO602wG2qPAGTrxp0hZaJDTgQYOEFri1gHcJDoJGF+kTyAuqZmU0qsGLmmgZKMPlfkGujAj4mgABX9sS6i11fkGnt5QhIfQGHOqihbmBHqRIEMCtqr01c2MNLN38UpPakfmiysWvImO+kb0xrxz83IQ5XSA1LWb3ExlGoq5o8zEkfXOMnyL9eEMDFqoQWK7glA2due519eVdTLONm5i5lHBi1BtdSqW7qmPGBNk6VIm8cGb0YRKVd5DJYw3WG0E/4UfxJIyDEOC9TT7DccmTTC6erNJIsOCIe9ps3jsE7ieo3u13/+YFC/ejOCcIUsez6xBEhedhtwXsEMM83jmzBYyvvH9O6v14vq+TEP6GLxrLnKo0lwHMAAAAAElFTkSuQmCC",address:"https://github.com/virufy"},{name:"Instagram",logo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAY1BMVEUAAAD9/f3+/v78/Pz+/v7+/v79/f3+/v7+/v7+/v7+/v719fX4+Pj9/f39/f39/f309PT+/v7+/v78/Pz7+/v+/v7+/v7+/v7+/v79/f39/f37+/v+/v7+/v79/f38/Pz+/v5JXcyeAAAAIHRSTlMAV9IW9nVm6996awgGXEJiArytKA/FpZeHUjwk15mBGoWyNuoAAAGpSURBVEjHnJXpkoIwEITbBJD7VE518/5Puc6YpAxbkIXvh8RUxvQctLAs0dCI+Booh+Aai2aoFqzIIqF2EVGGL8pYeYlLWEL1L8L1edGPYVoVxcVSFFUajr1wI0pFXEOJTWR4VQSrylh/e8Mut5bzoMwjPl/DQ84REQBBevZ+vy7aZwfcSJUAFp3NNi/qX6drs6Cih9zTwr1/AvKjaeCLVsh5mmap01VEq8UPaN6fvXs6EbovCcc0tC4A9O9nw2Hjt4IkUJYgyYGfRgUvquLIYmI3Z3lXDndJqnI7ETGoWCkM8qFWPCQMKTUAJKCyeu4f8WmXZV0qPnfk0FQkEiYjJmHhUQ2mjjidBJqCvnHAxQgK6HwJS8kbRtTlT0BixsUS8RWbAYL0184c8dZWgFS2Yk5llNwImGndwaGjvXkjYKJ1BoeM9qaTAecl+ZM+WtbTjTs1GoeH7/B4H36B/K+oa/Kx3wQ01gT8NmNhm/EZmcUYmbFKL8YqjRl7sWbst3vG2L39Q/kdD5EVCslVFhmVIma1y4gE0KpdUit2UpsO5DdOCDd/2BDNHwBlpHIPqfACPAAAAABJRU5ErkJggg==",address:"https://www.instagram.com/virufyorg/"},{name:"Twitter",logo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAn1BMVEUAAADx8fH+/v7+/v78/Pz7+/v7+/v+/v7+/v78/Pz4+Pj+/v7+/v79/f35+fn+/v7+/v7+/v7+/v79/f39/f3+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v79/f39/f39/f37+/v+/v7+/v7+/v7+/v7+/v7+/v79/f39/f39/f39/f39/f38/Pz8/Pz+/v7+/v76+vr+/v7y7YDKAAAANHRSTlMAAv3BKRAN8+ohBrudRQjul45ybF338dzY1NDLqKR7dmQ5MhXjxbOug4FNPWpZUxwYh4UY6bVfdgAAAX5JREFUSMfdk9eWgyAURa+9G2uMJdZMepsZ/v/bxsXSjAZUnrPf4J4NF0T4fLQgP/kXnTHNnb8QZuVKgBHPeP5Gz8sZeqFabc468CK0WKik5lM0gP/OVIRMXDERH1D62SOCWMalTev7hHAj88nTPl/bUohaHP1tgw2RV11D2T3bGo+HqTgSakRjXUOLijBhYQ8Ej5ZfVbhm9OMo+O/LoeQjkVgs8ppOMCmC1tUaZXjfhi9y7aQ7I0D+3qpgng4U4bcXdAEx0V2KdHxITMa6X59HSaYwCAl0bBAb215wGQWvF0SeTaihx2TKq9xLkJhO4Qx/9YhBuMAAKVvMxxyMqLbqvFDCkGB/EFaz+Z09Eh4hWiCAMceF/Fd/AsYHG4rwjmzMCT6Q6Lky/ew4oNF4Ezcl2DDFZUfJp9JUvHF42vpTec2lHsKk9iNXBf1elZI4r2Wk8eQz2mtAIv2spz6vBXRkP6E0s61gBrEwBvvwsXOXYQlOs8ridMyv91qGz+YP8iDedbgWa7UAAAAASUVORK5CYII=",address:"https://twitter.com/VirufyOrg"},{name:"Facebook",logo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAARVBMVEUAAAD5+fn+/v79/f3+/v7+/v79/f309PT+/v7+/v7+/v79/f38/Pz6+vr+/v7+/v7+/v7+/v7+/v79/f39/f3v7+/+/v7VKEHQAAAAFnRSTlMACuhgsZlaBOXjcjgkE/nv3beDbEoIqOd+AgAAAKBJREFUSMft1skOgkAURNF6PUEzOFv//6maJppgOqZroWHB3Z9AYFEPJfOh59f64A3vkmNDLmGpi2wsdgVENhfL+1AoAeYU4AyeUh5BAwG5/ujLOC+fhOsyWOs84xU/qoKTQQNXiGBSwV0FKA1HPhPAgSLgjwDWmQomFYwquKnAq2DYwH/YwQ7+BrIGsjwo8mTJo6jOrjrs+umgHyfy+fMA/1OlR/7V8cYAAAAASUVORK5CYII=",address:"https://www.facebook.com/Virufy/"},{name:"LinkedIn",logo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAWlBMVEUAAAD+/v7+/v7+/v7y8vL+/v79/f3+/v79/f35+fn+/v75+fn+/v74+Pj+/v7+/v7+/v78/Pz7+/v+/v7+/v7+/v79/f3+/v79/f38/Pz+/v79/f38/Pz+/v68ItToAAAAHXRSTlMA4/uxA5lg51oKkAbEDfXenx4W082Xg3Y4LLlIJNqUfVMAAADsSURBVEjH7dbZCoMwEIXhk8W4xLX7Nu//mpWx0UJBZy561f5XI/iBRiQBVwZnLK1kjQsl5oqcBOUFpnxGwjLPgO8XCn4eUlQAZa4BeYmwXNXnc70lAtw8nzzgTxvAwaRx73nJ9uvAwKaxAletAwvSAVpAFzEWOzGgfhSxJzkgczwaUgDuqwDc+9Rm951vLlUrBPWAqaEWgVtEqjlIwA5LV7sOPnMyEJs0BQkYnKXD5fVMknfgz94+ptcWgIq4ni+8AHTpl+EEIK2kGNAf/DawpMrC6ICB0wGHoANBvSlqt13txq4/OugPJ+rjzxOvisLcDFQFcQAAAABJRU5ErkJggg==",address:"https://www.linkedin.com/company/virufy/"},{name:"Youtube",logo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACgElEQVRo3u2ZT0sbQRiHn3l3Nysi4kF6kGJBetR68CIYqKb6AfwCPfRr9FB66GfoxVOPfgMptTZQFKSC2qMIFfFQPIho0d3MOz3spoT+NcluxkoeeFlYwjvPLzOEyQz06dOnj0/M714mSTISBEHNGDMNjAMjwDAwBAwCA3lVWkqAMH/KH8bTvBr5M2mpq7y+ARfAOXAGHDnndq2165VK5eyvARqNxj0ReQU8zaVuEwnwRlWfh2H49ZcAjUbjoYi8B+77Nv0Hx6q6EIbhwY8A19fXlSiKPgGTvu1uyOc0TWfiOE4EIAzDZ/+RPMBk7pzNgKruAo98W7XJnohMmzRNx4Mg+OLbphOstQ9ERGZ9i3SKiMyKMWbKt0inGGOmBJjwLdIFEwKMFdHJOfcEqPc4wJgAo0V0CoJgXUQe9zjIqJDtcQqjx0GGhWyDVjgtQRZKDDIkZLvK0giCYKPEIANCj3adPwXZKKhtxaiqK6KTiJh2Pm+tnTfGvADmuxq3oG+ibfIZWeh2RrwFANjZ2Wku4c6Xsaq6IqqdMbe3t8Vau6iqH7seV1XTXgXY3NwsTDyvFFW9LDtAvV4vWrxZlyHZScBgGWu8Xq/L3NxcLf+1qZYwxJWQHWEUytramlhrF6vV6gdjzNuS5AEuhOz8pRBWV1fFWltbWloqW7zJeQicFtHJWlszxrzsgXQrpyFwUkQnY8y7Hoo3ORHg0MPARXEozrl93xad4pzbF1Xd8i3SKaq6JVEUHQF7vmU6YC+KoiMBcM699m3TLk3nu3G4G8dxoqrLwLFvsxtwrKrLcRwn0PJ/IAzDA1WdAVbILhNuGwmwoqozzbsBuANXTH369Onjl++dNrEmXRJE7AAAAABJRU5ErkJggg==",address:"https://www.youtube.com/channel/UC6m20FEpd6J-HAoyitJKfkg"}],b=[{intlId:"footer.cookiePolicy",address:"/cookie_policy"},{intlId:"footer.cookieSettings",address:"/index#cookie"},{intlId:"footer.privacyPolicy",address:"/privacy_policy"},{intlId:"footer.dontSellPersonalInfo",address:"/ccpa"}],k=function(){var e=(0,c.useIntl)(),t=e.formatMessage({id:"footer.email",defaultMessage:"info@virufy.org"}),n=function(e){return"footer.cookieSettings"===e.intlId?"javascript: Cookiebot.renew()":e.address};return a.createElement("div",{className:"md:grid md:grid-cols-2 md:gap-4 text-white px-6 md:mx-8"},a.createElement("div",null,a.createElement("a",{className:"md:flex flex-initial md:flex-row block underline mb-6 text-white",href:"mailto:"+t},t),a.createElement("p",{className:"block no-underline mb-6 text-white"},e.formatMessage({id:"footer.address",defaultMessage:""})),a.createElement("div",{className:"md:flex flex-initial md:flex-row"},a.createElement("div",{className:"flex flex-grow"},w.map((function(e){return a.createElement("a",{href:e.address,key:e.name,className:"mr-6"},a.createElement("img",{src:e.logo,alt:e.name}))}))))),a.createElement("div",{className:"pt-6 md:pt-0 md:ml-6"},b.map((function(t,r){return a.createElement(a.Fragment,null,a.createElement("a",{className:"underline text-sm text-white",href:n(t),key:t.intlId},e.formatMessage({id:t.intlId})),r+1!==b.length&&a.createElement(a.Fragment,null,"  |  "))})),a.createElement("p",{className:"text-sm"},e.formatMessage({id:"footer.copyrightInformation",defaultMessage:"©2021 Virufy  |  All rights reserved"})),a.createElement("p",{className:"mt-4 text-sm"},e.formatMessage({id:"footer.nonprofit"}))))},x=n(5186),M=function(){return a.createElement(x.q,null,a.createElement("script",{id:"Cookiebot",src:"https://consent.cookiebot.com/uc.js","data-cbid":"fb5fec28-28e3-45e9-baa6-51f9f62f936b","data-blockingmode":"auto",type:"text/javascript"}),a.createElement("script",{id:"CookieDeclaration",src:"https://consent.cookiebot.com/fb5fec28-28e3-45e9-baa6-51f9f62f936b/cd.js",type:"text/javascript",async:!0}))},I=function(e){var t=e.children,n=e.className;return a.createElement(a.Fragment,null,a.createElement(r.Z,null),a.createElement("header",{className:"sticky top-0 z-10"},a.createElement(h,null)),a.createElement("main",{className:n},t),a.createElement("footer",{className:"bg-secondary-100 py-16"},a.createElement(M,null),a.createElement(k,null)))}},2340:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(9756),r=n(7294);function o(e){var t=e.active,n=(0,a.Z)(e,["active"]),o=void 0!==n.children;return r.createElement(r.Fragment,null,t&&r.createElement("div",Object.assign({className:"bg-black bg-opacity-30 fixed inset-0 z-10"},n),o&&r.createElement("div",{className:"z-20"},n.children)))}},3928:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(7294);function r(e,t){(0,a.useEffect)((function(){function n(e){27===e.keyCode&&t()}return e?document.addEventListener("keydown",n):document.removeEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}}),[e,t])}},7516:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var a=n(7294),r=n(9703),o=n(7852),l=n(4959),i=n(9790),s=function(e){var t=e.items,n=(0,a.useState)(-1),r=n[0],o=n[1];return a.createElement(a.Fragment,null,a.createElement("hr",{className:"w-full mb-2"}),t.map((function(e,t){return a.createElement(a.Fragment,null,a.createElement("p",{className:"flex font-bold justify-between items-center w-full",onClick:function(){return function(e){o(e===r?-1:e)}(t)}},e.title,a.createElement("img",{className:"inline-block "+(r===t?"rotate-45 transform":""),src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADYSURBVHgB7ZQxDoJAEEX/AIJoww28CkfA2sJwCkug9BSEwlq4AUfxCDQSwMRxhUKRZaOGTn+xySR/32xmZoegUhw4sOwjGC7AKZrKhx8VY3ZNCTPnXge6izyY9lZlV8OgrfoxOUo3JtSPwKhtv7kUXeJhcYndRzdbdw6mXEI5oS4zA9YiBl89aSoexK44XKnPsnMNzHLQpxKJtPbp09BSA7W1hl550F8HFO/XDFSgOScElQ77QGQMny6F2OyiMfv/B0wOo/4iZDHpX8OaWdJu2A6U41JmKvsNNnI/6wbH5WwAAAAASUVORK5CYII="})),r===t&&a.createElement("div",{className:"mt-2"},e.contents),a.createElement("hr",{className:"w-full mb-2"}))})))};var A=function(e){var t=e.data;return a.createElement(o.Z,null,a.createElement(l.Z,{title:"Virufy | Cookie Policy"}),a.createElement(r.IntlContextConsumer,null,(function(e){var n=e.language;if(void 0===t[n])return a.createElement(a.Fragment,null);var r=t[n].edges.reduce((function(e,t){var n,a=t.node,r=a.html,o=a.frontmatter,l=o.name,i=o.title;return Object.assign({},e,((n={})[l]={html:r,name:l,title:i},n))}),{});return a.createElement("div",{className:"px-6 py-8 cookie_policy-module--container--OI80W"},a.createElement("img",{className:"-z-10 absolute w-screen left-0",src:i.Z,alt:"waves"}),a.createElement("div",{dangerouslySetInnerHTML:{__html:r.top.html}}),a.createElement(s,{items:[{title:r["essential cookies"].title,contents:a.createElement("div",{dangerouslySetInnerHTML:{__html:r["essential cookies"].html}})},{title:r["preference cookies"].title,contents:a.createElement("div",{dangerouslySetInnerHTML:{__html:r["preference cookies"].html}})},{title:r["performance cookies"].title,contents:a.createElement("div",{dangerouslySetInnerHTML:{__html:r["performance cookies"].html}})},{title:r["marketing cookies"].title,contents:a.createElement("div",{dangerouslySetInnerHTML:{__html:r["marketing cookies"].html}})}]}),a.createElement("div",{dangerouslySetInnerHTML:{__html:r.bot.html}}))})))}},9790:function(e,t,n){"use strict";t.Z=n.p+"static/background-wave-4b46ad589f1ae976934a2f1b063fc0b9.png"}}]);
//# sourceMappingURL=component---src-pages-cookie-policy-jsx-15f444bd496b50948724.js.map