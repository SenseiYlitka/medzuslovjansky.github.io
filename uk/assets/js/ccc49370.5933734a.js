"use strict";(self.webpackChunkinterslavic_fun=self.webpackChunkinterslavic_fun||[]).push([[6103,7918],{324:(e,n,i)=>{i.r(n),i.d(n,{default:()=>p});i(7294);var t=i(6010),s=i(5463),r=i(3702),l=i(9107),a=i(7306),c=i(1116),o=i(7325),d=i(3672),h=i(5893);function m(e){const{nextItem:n,prevItem:i}=e;return(0,h.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[i&&(0,h.jsx)(d.Z,{...i,subLabel:(0,h.jsx)(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),n&&(0,h.jsx)(d.Z,{...n,subLabel:(0,h.jsx)(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function x(){const{assets:e,metadata:n}=(0,l.C)(),{title:i,description:t,date:r,tags:a,authors:c,frontMatter:o}=n,{keywords:d}=o,m=e.image??o.image;return(0,h.jsxs)(s.d,{title:i,description:t,keywords:d,image:m,children:[(0,h.jsx)("meta",{property:"og:type",content:"article"}),(0,h.jsx)("meta",{property:"article:published_time",content:r}),c.some((e=>e.url))&&(0,h.jsx)("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),a.length>0&&(0,h.jsx)("meta",{property:"article:tag",content:a.map((e=>e.label)).join(",")})]})}var j=i(7086),u=i(9501);function g(e){let{sidebar:n,children:i}=e;const{metadata:t,toc:s}=(0,l.C)(),{nextItem:r,prevItem:o,frontMatter:d,unlisted:x}=t,{hide_table_of_contents:g,toc_min_heading_level:p,toc_max_heading_level:v}=d;return(0,h.jsxs)(a.Z,{sidebar:n,toc:!g&&s.length>0?(0,h.jsx)(j.Z,{toc:s,minHeadingLevel:p,maxHeadingLevel:v}):void 0,children:[x&&(0,h.jsx)(u.Z,{}),(0,h.jsx)(c.Z,{children:i}),(r||o)&&(0,h.jsx)(m,{nextItem:r,prevItem:o})]})}function p(e){const n=e.content;return(0,h.jsx)(l.n,{content:e.content,isBlogPostPage:!0,children:(0,h.jsxs)(s.FG,{className:(0,t.Z)(r.k.wrapper.blogPages,r.k.page.blogPostPage),children:[(0,h.jsx)(x,{}),(0,h.jsx)(g,{sidebar:e.sidebar,children:(0,h.jsx)(n,{})})]})})}},7086:(e,n,i)=>{i.d(n,{Z:()=>o});i(7294);var t=i(6010),s=i(2728);const r={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=i(5893);const a="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function o(e){let{className:n,...i}=e;return(0,l.jsx)("div",{className:(0,t.Z)(r.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(s.Z,{...i,linkClassName:a,linkActiveClassName:c})})}},2728:(e,n,i)=>{i.d(n,{Z:()=>u});var t=i(7294),s=i(107);function r(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),i=Array(7).fill(-1);n.forEach(((e,n)=>{const t=i.slice(2,e.level);e.parentIndex=Math.max(...t),i[e.level]=n}));const t=[];return n.forEach((e=>{const{parentIndex:i,...s}=e;i>=0?n[i].children.push(s):t.push(s)})),t}function l(e){let{toc:n,minHeadingLevel:i,maxHeadingLevel:t}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:i,maxHeadingLevel:t});return function(e){return e.level>=i&&e.level<=t}(e)?[{...e,children:n}]:n}))}function a(e){const n=e.getBoundingClientRect();return n.top===n.bottom?a(e.parentNode):n}function c(e,n){let{anchorTopOffset:i}=n;const t=e.find((e=>a(e).top>=i));if(t){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(a(t))?t:e[e.indexOf(t)-1]??null}return e[e.length-1]??null}function o(){const e=(0,t.useRef)(0),{navbar:{hideOnScroll:n}}=(0,s.L)();return(0,t.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,t.useRef)(void 0),i=o();(0,t.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:t,linkActiveClassName:s,minHeadingLevel:r,maxHeadingLevel:l}=e;function a(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(t),a=function(e){let{minHeadingLevel:n,maxHeadingLevel:i}=e;const t=[];for(let s=n;s<=i;s+=1)t.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(t.join()))}({minHeadingLevel:r,maxHeadingLevel:l}),o=c(a,{anchorTopOffset:i.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,i){i?(n.current&&n.current!==e&&n.current.classList.remove(s),e.classList.add(s),n.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,i])}var h=i(3699),m=i(5893);function x(e){let{toc:n,className:i,linkClassName:t,isChild:s}=e;return n.length?(0,m.jsx)("ul",{className:s?void 0:i,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(h.Z,{to:`#${e.id}`,className:t??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(x,{isChild:!0,toc:e.children,className:i,linkClassName:t})]},e.id)))}):null}const j=t.memo(x);function u(e){let{toc:n,className:i="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:h,...x}=e;const u=(0,s.L)(),g=o??u.tableOfContents.minHeadingLevel,p=h??u.tableOfContents.maxHeadingLevel,v=function(e){let{toc:n,minHeadingLevel:i,maxHeadingLevel:s}=e;return(0,t.useMemo)((()=>l({toc:r(n),minHeadingLevel:i,maxHeadingLevel:s})),[n,i,s])}({toc:n,minHeadingLevel:g,maxHeadingLevel:p});return d((0,t.useMemo)((()=>{if(a&&c)return{linkClassName:a,linkActiveClassName:c,minHeadingLevel:g,maxHeadingLevel:p}}),[a,c,g,p])),(0,m.jsx)(j,{toc:v,className:i,linkClassName:a,...x})}},9501:(e,n,i)=>{i.d(n,{Z:()=>x});i(7294);var t=i(6010),s=i(7325),r=i(1514),l=i(5893);function a(){return(0,l.jsx)(s.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function c(){return(0,l.jsx)(s.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,l.jsx)(r.Z,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=i(3702),h=i(8201);function m(e){let{className:n}=e;return(0,l.jsx)(h.Z,{type:"caution",title:(0,l.jsx)(a,{}),className:(0,t.Z)(n,d.k.common.unlistedBanner),children:(0,l.jsx)(c,{})})}function x(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{}),(0,l.jsx)(m,{...e})]})}},184:(e,n,i)=>{i.d(n,{n:()=>l});i(7294);var t=i(6010);const s="ipa_NFsD";var r=i(5893);const l=e=>{let{script:n="art",children:i}=e;return(0,r.jsx)("span",{lang:`${n}-fonipa`,className:(0,t.Z)(s,"notranslate"),translate:"no",children:i})}},1383:(e,n,i)=>{i.d(n,{jL:()=>M,lr:()=>k,pz:()=>q,o8:()=>ee,AN:()=>U,n$:()=>ne.n});var t=i(7294),s=i(6010);const r={root:"root_birv"};var l;function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},a.apply(this,arguments)}const c=e=>{let{title:n,titleId:i,...s}=e;return t.createElement("svg",a({width:19,height:21,viewBox:"0 0 19 21",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":i},s),n?t.createElement("title",{id:i},n):null,l||(l=t.createElement("path",{d:"M14.993 11.064c-1.45 1.864-4.099 4.66-5.9 6.406-1.8-1.746-4.83-4.172-6.242-6.066-.338-.453 4.823-6.367 6.409-8.372 1.585 2.005 6.59 6.931 5.733 8.032ZM10.278.656c-.794-.679-1.469-.793-2.368 0C5.93 2.398-.436 9.96.042 11.342c1.19 3.44 5.837 6.894 8.206 9.339.287.296.58.366.846.291.266.075 7.861-6.19 9.052-9.63.478-1.382-5.865-8.974-7.868-10.686",fill:"#D5DEEB"})))};var o;function d(){return d=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},d.apply(this,arguments)}const h=e=>{let{title:n,titleId:i,...s}=e;return t.createElement("svg",d({width:19,height:21,viewBox:"0 0 19 21",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":i},s),n?t.createElement("title",{id:i},n):null,o||(o=t.createElement("path",{d:"M7.26 5.915a24.55 24.55 0 0 0-2.749 2.813c-.85-1.692-1.436-3.497-1.676-5.299 1.413.628 2.935 1.477 4.426 2.486Zm2.224 1.66c1.31 1.073 2.531 2.26 3.547 3.527a17.01 17.01 0 0 1-3.547 3.704 16.974 16.974 0 0 1-3.548-3.704c1.016-1.267 2.239-2.454 3.548-3.528Zm6.647-4.146c-.239 1.802-.825 3.607-1.675 5.299a24.546 24.546 0 0 0-2.749-2.813c1.49-1.01 3.011-1.858 4.424-2.486Zm-4.216 12.878c.986-.85 1.883-1.81 2.696-2.835.703 1.295 1.166 2.635 1.264 3.99-1.384-.142-2.71-.553-3.96-1.155Zm-8.823 1.155c.098-1.355.56-2.695 1.264-3.99a20.884 20.884 0 0 0 2.696 2.835c-1.248.602-2.575 1.013-3.96 1.155ZM.099 20.104c1.686 1.358 7.43-.844 9.137-1.857.085-.05.164-.11.248-.163.084.053.163.113.247.163 1.706 1.013 7.45 3.215 9.137 1.857.237-.19.275-4.235-2.652-8.94.493-.82.942-1.663 1.32-2.53.963-2.208 1.44-4.672 1.431-7.085 0-.202-.04-.38-.105-.534-.17-.666-.777-1.242-1.602-.926-3.115 1.195-5.669 2.594-7.776 4.085C7.377 2.683 4.822 1.284 1.708.089.882-.227.275.35.105 1.015A1.385 1.385 0 0 0 0 1.549C-.009 3.962.47 6.426 1.43 8.634c.38.867.828 1.71 1.32 2.53C-.174 15.87-.137 19.914.1 20.104",fill:"#D5DEEB"})))};var m=i(5893);function x(e){return e%2==0?(0,m.jsx)(c,{},e):(0,m.jsx)(h,{},e)}function j(){return(0,m.jsx)("div",{className:r.root,children:[1,2,3,4,5,6,7,8,9].map(x)})}const u="root_KRXN",g="image_Fs90",p="content_oIQC",v="title_Ut4b",N="description_aGav",f="cta_l4ik";const M=function(e){let{image:n,title:i,description:r,cta:l}=e;return(0,m.jsxs)("section",{className:(0,s.Z)(u),children:[(0,m.jsxs)("div",{className:"row",children:[(0,m.jsxs)("div",{className:(0,s.Z)("container","col","col--6",p),children:[(0,m.jsx)("h2",{className:(0,s.Z)("hero__heading",v),children:i}),(0,m.jsx)("p",{className:(0,s.Z)("hero__subtitle",N),children:r}),t.cloneElement(l,{className:(0,s.Z)(f,l.props.className)})]}),(0,m.jsx)("img",{className:(0,s.Z)("col","col--6",g),src:n,alt:""})]}),(0,m.jsx)(j,{})]})},b="root_Vlmr",y=e=>{let{children:n,interval:i=1e4}=e;t.Children.count(n);const[r,l]=(0,t.useState)(0);return(0,m.jsx)("div",{className:(0,s.Z)(b),children:t.Children.toArray(n)[r]})},I="root_P3PE",L="content_YXIA",Z="image_jwsx",$="title_vMKl",D="subtitle_UdXd",C="cta_H9t5";const T=function(e){let{title:n,subtitle:i,cta:r,image:l}=e;return(0,m.jsxs)("div",{className:(0,s.Z)("hero",I),children:[(0,m.jsx)("img",{src:l,alt:"",className:(0,s.Z)(Z)}),(0,m.jsxs)("div",{className:(0,s.Z)(L),children:[(0,m.jsx)("h1",{className:(0,s.Z)("hero__heading",$),children:n}),(0,m.jsx)("p",{className:(0,s.Z)("hero__subtitle",D),children:i}),t.cloneElement(r,{className:(0,s.Z)("button","button--lg","button--primary",C,r.props.className)})]})]})};y.Slide=T;const k=y,A={root:"root_S0Pk",title:"title_lCT1",image:"image_B1Xl"};function E(e){let{className:n,image:i,title:t,description:r}=e;const l="string"==typeof i?(0,m.jsx)("img",{src:i,alt:"",className:(0,s.Z)(A.image)}):(0,m.jsx)(i,{});return(0,m.jsxs)("div",{className:(0,s.Z)(n,A.root),children:[(0,m.jsx)("div",{className:"text--center",children:l}),(0,m.jsxs)("div",{className:"padding-horiz--md",children:[(0,m.jsx)("h2",{className:(0,s.Z)(A.title),children:t}),(0,m.jsx)("p",{className:(0,s.Z)(A.description),children:r})]})]})}E.displayName="Features.Card";const _="root_agY0",z="actions_WULL",O="primaryAction_LMlh",w="secondaryAction_wVbS",F={root:"root_zuIk"};function H(e,n){const i=[];for(let t=0;t<e;t++)i.push(n(t));return i}function P(){return(0,m.jsx)("div",{className:F.root,children:H(3,(e=>(0,m.jsx)("img",{alt:"",src:i(9238).Z},e)))})}const S=function(e){let{className:n,children:i,primaryAction:r,secondaryAction:l}=e;return(0,m.jsxs)("section",{className:(0,s.Z)(_,n),children:[(0,m.jsx)("div",{className:"row",children:t.Children.map(i,(e=>t.cloneElement(e,{className:(0,s.Z)("col","col--4",e.props.className)})))}),(0,m.jsx)("div",{className:(0,s.Z)("row"),children:(0,m.jsxs)("div",{className:(0,s.Z)("col",z),children:[t.cloneElement(r,{className:(0,s.Z)("button","button--primary","button--lg",O,r.props.className)}),t.cloneElement(l,{className:(0,s.Z)(w,l.props.className)})]})}),(0,m.jsx)(P,{})]})};S.Card=E;const U=S;var Q=i(3699),B=i(7325),G=i(8201);function Y(e){let{origin:n,author:i}=e;return(0,m.jsx)(G.Z,{type:"info",title:(0,B.I)({id:"com.admonitions.license.title",message:"Legal information"}),children:(0,m.jsx)(B.Z,{id:"com.admonitions.license.republish.message",values:{author:(0,m.jsx)("b",{children:i}),republished:(0,m.jsx)(Q.Z,{to:n,children:(0,B.I)({id:"com.admonitions.license.republish.link",message:"republished"})})},children:"This article has been {republished} with the permission of its original author, {author}."})})}var R=i(1871);function W(){const{license:e,origin:n,author:i}=function(){const{frontMatter:e}=(0,R.k)(),{license:n,origin:i,author:t,original_author:s}=e;return{license:n,origin:i,author:s||t}}();return"republish"===e?(0,m.jsx)(Y,{origin:n,author:i}):null}const q=()=>(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(W,{})});var K=i(9962);function J(e){let{editUrl:n}=e;return(0,m.jsx)(G.Z,{type:"caution",title:(0,B.I)({id:"com.admonitions.autotranslation.title",message:"Automatic translation"}),children:(0,m.jsx)(B.Z,{id:"com.admonitions.autotranslation.message",values:{Discord:(0,m.jsx)(Q.Z,{to:"https://discord.com/invite/n3saqm27QW",children:"Discord"}),GitHub:(0,m.jsx)(Q.Z,{to:n,children:"GitHub"})},children:"This article has been automatically translated and may contain any kind of errors.\nIt is a challenging task to provide more than a dozen translation targets, and we are looking for your help with translations.\nPlease contact us on {Discord} if you want to help us improve the quality of our translations.\nAlso, you can suggest corrections directly via {GitHub}."})})}function X(){return(0,m.jsx)(G.Z,{type:"danger",title:(0,B.I)({id:"com.admonitions.missingTranslation.title",message:"Missing translation"}),children:(0,m.jsx)(B.Z,{id:"com.admonitions.missingTranslation.message",values:{Discord:(0,m.jsx)(Q.Z,{to:"https://discord.com/invite/n3saqm27QW",children:"Discord"})},children:"This article has not yet been translated.\nProviding translation in over ten languages is a challenging task and we look forward to your help.\nPlease contact us on {Discord} if you would like to help us improve the quality of our translations."})})}function V(){const{i18n:e}=(0,K.Z)();if(!(e.currentLocale!==e.defaultLocale))return null;const{frontMatter:n,metadata:i}=(0,R.k)();return i.source.startsWith("@site/i18n/")?n.verified?null:(0,m.jsx)(J,{editUrl:i.editUrl}):(0,m.jsx)(X,{})}const ee=()=>(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(V,{})});var ne=i(184)},9389:(e,n,i)=>{i.d(n,{Z:()=>h});var t=i(8241),s=i(1383),r=i(7294),l=i(7325),a=i(2826),c=i(5893);const o=[{isv:"A",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"\u0251"})," ~ ",(0,c.jsx)(s.n$,{children:"a"})]})},{isv:"B",ipa:(0,c.jsx)(s.n$,{children:"b"})},{isv:"C",ipa:(0,c.jsx)(s.n$,{children:"t\u0361s"})},{isv:"\u010c",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"t\u0361\u0283"})," ~ ",(0,c.jsx)(s.n$,{children:"t\u0361\u0282"})]}),pl:"cz"},{isv:"D",ipa:(0,c.jsx)(s.n$,{children:"d"})},{isv:"D\u017d",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"d\u0361\u0292"})," ~ ",(0,c.jsx)(s.n$,{children:"d\u0361\u0290"})]}),pl:"d\u017c",sr:"\u045f",mk:"\u045f"},{isv:"E",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"\u025b"})," ~ ",(0,c.jsx)(s.n$,{children:"e"})]}),ru:"\u044d"},{isv:"\u011a",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"j\u025b"})," ~ ",(0,c.jsx)(s.n$,{children:"je"})]}),pl:"ie",sk:"ie",sl:"je",ru:"\u0435",bg:"\u0439\u0435"},{isv:"F",ipa:(0,c.jsx)(s.n$,{children:"f"})},{isv:"G",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"g"})," ~ ",(0,c.jsx)(s.n$,{children:"\u0266"})]}),uk:"\u0491",ru:"\u0491"},{isv:"H",ipa:(0,c.jsx)(s.n$,{children:"x"}),pl:"ch",cz:"ch",sl:"ch"},{isv:"I",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"i"})," ~ ",(0,c.jsx)(s.n$,{children:"\u026a"})]}),uk:"\u0456",ru:"\u0456",bg:"\u0438"},{isv:"J",ipa:(0,c.jsx)(s.n$,{children:"j"}),ru:"\u0439",uk:"\u0439",bg:"\u0439"},{isv:"K",ipa:(0,c.jsx)(s.n$,{children:"k"})},{isv:"L",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"l"})," ~ ",(0,c.jsx)(s.n$,{children:"\u026b"})]})},{isv:"LJ",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"l\u02b2"})," ~ ",(0,c.jsx)(s.n$,{children:"\u028e"})]}),pl:"l",cz:"l",ru:"\u043b\u044c",uk:"\u043b\u044c",bg:"\u043b\u044c"},{isv:"M",ipa:(0,c.jsx)(s.n$,{children:"m"})},{isv:"N",ipa:(0,c.jsx)(s.n$,{children:"n"})},{isv:"NJ",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"n\u02b2"})," ~ ",(0,c.jsx)(s.n$,{children:"\u0272"})]}),pl:"\u0144",cz:"\u0148",ru:"\u043d\u044c",uk:"\u043d\u044c",bg:"\u043d\u044c"},{isv:"O",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"\u0254"})," ~ ",(0,c.jsx)(s.n$,{children:"o"})]})},{isv:"P",ipa:(0,c.jsx)(s.n$,{children:"p"})},{isv:"R",ipa:(0,c.jsx)(s.n$,{children:"r"})},{isv:"S",ipa:(0,c.jsx)(s.n$,{children:"s"})},{isv:"\u0160",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"\u0283"})," ~ ",(0,c.jsx)(s.n$,{children:"\u0282"})]}),pl:"sz"},{isv:"T",ipa:(0,c.jsx)(s.n$,{children:"t"})},{isv:"U",ipa:(0,c.jsx)(s.n$,{children:"u"})},{isv:"V",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"v"})," ~ ",(0,c.jsx)(s.n$,{children:"\u028b"})]}),pl:"w"},{isv:"Y",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"i"})," ~ ",(0,c.jsx)(s.n$,{children:"\u0268"})]}),uk:"\u0438",ru:"\u0438",bg:"\u0438"},{isv:"Z",ipa:(0,c.jsx)(s.n$,{children:"z"})},{isv:"\u017d",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"\u0292"})," ~ ",(0,c.jsx)(s.n$,{children:"\u0290"})]}),pl:"\u017c"}];const d=[{isv:"\xc5",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"\u0251"})," ~ ",(0,c.jsx)(s.n$,{children:"\u0252"})]})},{isv:"\u0106",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"t\u0361\u0283"})," ~ ",(0,c.jsx)(s.n$,{children:"t\u0361\u0255"})]})},{isv:"D\u0301",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"d\u02b2"})," ~ ",(0,c.jsx)(s.n$,{children:"\u025f"})]})},{isv:"\xd0",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"d\u0361\u0292"})," ~ ",(0,c.jsx)(s.n$,{children:"d\u0361\u0291"})]})},{isv:"\u0116",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"\u025b"})," ~ ",(0,c.jsx)(s.n$,{children:"\u01dd"})]})},{isv:"\u0118",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"j\xe6"})," ~ ",(0,c.jsx)(s.n$,{children:"j\u025b"})]})},{isv:"\u0139",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"l\u02b2"})," ~ ",(0,c.jsx)(s.n$,{children:"\u028e"})]})},{isv:"\u0143",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"n\u02b2"})," ~ ",(0,c.jsx)(s.n$,{children:"\u0272"})]})},{isv:"\u022e",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"\u0259"})," ~ ",(0,c.jsx)(s.n$,{children:"\u028c"})]})},{isv:"\u0154",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"r\u02b2"})," ~ ",(0,c.jsx)(s.n$,{children:"r\u031d"})]})},{isv:"\u015a",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"s\u02b2"})," ~ ",(0,c.jsx)(s.n$,{children:"\u0255"})]})},{isv:"T\u0301",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"t\u02b2"})," ~ ",(0,c.jsx)(s.n$,{children:"c"})]})},{isv:"\u0172",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"o"})," ~ ",(0,c.jsx)(s.n$,{children:"\u028a"})]})},{isv:"\u0179",ipa:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.n$,{children:"z\u02b2"})," ~ ",(0,c.jsx)(s.n$,{children:"\u0291"})]})}];const h={...t.Z,CustomAfterSection:s.pz,CustomBeforeSection:s.o8,IPA:s.n$,MDPronunciation1:function(e){let{children:n}=e;const i=r.Children.toArray(r.Children.only(n).props.children).filter((e=>"li"===e.type));return(0,c.jsxs)("table",{children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:(0,l.I)({id:"com.script.Latin",message:"Latin"})}),(0,c.jsx)("th",{children:(0,l.I)({id:"com.script.Cyrillic",message:"Cyrillic"})}),(0,c.jsx)("th",{children:(0,l.I)({id:"com.script.IPA",message:"IPA"})}),(0,c.jsx)("th",{children:(0,l.I)({id:"com.markdown.Pronunciation",message:"Pronunciation"})})]})}),(0,c.jsx)("tbody",{children:o.map(((e,n)=>(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{lang:"art-Latn-x-interslv",children:e.isv}),(0,c.jsx)("td",{lang:"art-Cyrl-x-interslv",children:(0,a.transliterate)(e.isv,"art-Cyrl-x-interslv")}),(0,c.jsx)("td",{children:r.cloneElement(e.ipa)}),(0,c.jsx)("td",{children:i[n].props.children})]},n)))})]})},MDPronunciation2:function(e){let{children:n}=e;const i=r.Children.toArray(r.Children.only(n).props.children).filter((e=>"li"===e.type));return(0,c.jsxs)("table",{children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:(0,l.I)({id:"com.script.Latin",message:"Latin"})}),(0,c.jsx)("th",{children:(0,l.I)({id:"com.script.IPA",message:"IPA"})}),(0,c.jsx)("th",{children:(0,l.I)({id:"com.markdown.Pronunciation",message:"Pronunciation"})})]})}),(0,c.jsx)("tbody",{children:d.map(((e,n)=>(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{lang:"art-Latn-x-interslv",children:e.isv}),(0,c.jsx)("td",{children:r.cloneElement(e.ipa)}),(0,c.jsx)("td",{children:i[n].props.children})]},n)))})]})}}},9238:(e,n,i)=>{i.d(n,{Z:()=>t});const t="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAzMSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuNjc5MTEgMTEuMzcyNUM4LjY0MzExIDEzLjY3NzkgMTMuMzk5MSA0LjU1MjUyIDEyLjAyNTggMi4xNzkxOEMxMS4zNjU4IDEuMDM5MTggMC44NDMxMDggLTIuNDYzNDggMC4yNDA0NDIgMi44OTkxOEMwLjAxNjQ0MTYgNC44NTkxOCAxLjkxNjQ0IDYuMjM5MTggMy44OTUxMSA2LjI4MTg1QzMuMDE5MTEgOC4yMTExOCAyLjk5Nzc3IDEwLjM5NjUgNC42NzkxMSAxMS4zNzI1WiIgZmlsbD0iIzRDNTg3QiIvPgo8cGF0aCBkPSJNMjcuMzI3NSAxMS40ODY5QzI4Ljg3NjggMTAuMjY4MyAyOC41Mjc1IDcuOTQ4MjYgMjcuMTcxNSA2LjUxMzZDMjkuMTU5NSA1Ljc3ODkzIDMwLjczMDEgNC4yNjAyNiAzMC4yNDQ4IDIuMzc4OTNDMjkuMTAyMSAtMi4wNTk3NCAxOS4yNTk1IDAuOTUzNTk2IDE4LjU0MDggMy41OTg5M0MxOC4xOTE1IDQuODcyMjYgMjMuMDg2MSAxNC44MjAzIDI3LjMyNzUgMTEuNDg2OVoiIGZpbGw9IiM0QzU4N0IiLz4KPHBhdGggZD0iTTE0Ljg4MzUgMTYuNjg3NUMxNi4xNzQyIDE4LjM2NzUgMTguMDg3NSAxOS40MTgxIDE5Ljc0MzUgMTguNDAwOEMyMy42NDQ5IDE1Ljk5NDEgMTcuODUwMiA3LjQ5MDE0IDE1LjExNTUgNy41ODM0N0MxMy43ODg5IDcuNjI0OCA1LjczOTU1IDE1LjI0NDggMTAuMTgyMiAxOC4zMTI4QzExLjc5OTUgMTkuNDMyOCAxMy45MTI5IDE4LjQxMTUgMTQuODgzNSAxNi42ODc1WiIgZmlsbD0iIzRDNTg3QiIvPgo8L3N2Zz4K"}}]);
//# sourceMappingURL=ccc49370.5933734a.js.map