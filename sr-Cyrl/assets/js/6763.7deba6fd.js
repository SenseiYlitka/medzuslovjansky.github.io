(self.webpackChunkinterslavic_fun=self.webpackChunkinterslavic_fun||[]).push([[6763],{8241:(e,t,n)=>{"use strict";n.d(t,{Z:()=>le});var o=n(7294),s=n(1514),r=n(1048),a=n(6010),c=n(9200),l=n(107);function i(){const{prism:e}=(0,l.L)(),{colorMode:t}=(0,c.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var u=n(3702),d=n(7594),p=n.n(d);const m=/title=(?<quote>["'])(?<title>.*?)\1/,h=/\{(?<range>[\d,-]+)\}/,f={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"},lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""}};function g(e,t){const n=e.map((e=>{const{start:n,end:o}=f[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function y(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:s,metastring:r}=t;if(r&&h.test(r)){const e=r.match(h).groups.range;if(0===s.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${r}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=s[0].className,o=p()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const a=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"],t);case"jsx":case"tsx":return g(["js","jsBlock","jsx"],t);case"html":return g(["js","jsBlock","html"],t);case"python":case"py":case"bash":return g(["bash"],t);case"markdown":case"md":return g(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return g(["tex"],t);case"lua":case"haskell":case"sql":return g(["lua"],t);case"wasm":return g(["wasm"],t);default:return g(Object.keys(f).filter((e=>!["lua","wasm","tex","latex","matlab"].includes(e))),t)}}(o,s),c=n.split("\n"),l=Object.fromEntries(s.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(s.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),d=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<c.length;){const e=c[p].match(a);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?l[i[t]].range+=`${p},`:u[t]?l[u[t]].start=p:d[t]&&(l[d[t]].range+=`${l[d[t]].start}-${p-1},`),c.splice(p,1)}n=c.join("\n");const m={};return Object.entries(l).forEach((e=>{let[t,{range:n}]=e;p()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const b={codeBlockContainer:"codeBlockContainer_Ckt0"};var k=n(5893);function v(e){let{as:t,...n}=e;const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,s]=e;const r=t[o];r&&"string"==typeof s&&(n[r]=s)})),n}(i());return(0,k.jsx)(t,{...n,style:o,className:(0,a.Z)(n.className,b.codeBlockContainer,u.k.common.codeBlock)})}const j={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function x(e){let{children:t,className:n}=e;return(0,k.jsx)(v,{as:"pre",tabIndex:0,className:(0,a.Z)(j.codeBlockStandalone,"thin-scrollbar",n),children:(0,k.jsx)("code",{className:j.codeBlockLines,children:t})})}var N=n(3768);const B={attributes:!0,characterData:!0,childList:!0,subtree:!0};function C(e,t){const[n,s]=(0,o.useState)(),r=(0,o.useCallback)((()=>{s(e.current?.closest("[role=tabpanel][hidden]"))}),[e,s]);(0,o.useEffect)((()=>{r()}),[r]),function(e,t,n){void 0===n&&(n=B);const s=(0,N.zX)(t),r=(0,N.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(s);return e&&t.observe(e,r),()=>t.disconnect()}),[e,s,r])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),r())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const w={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var L={Prism:n(1205).Z,theme:w};function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(){return T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},T.apply(this,arguments)}var _=/\r\n|\r|\n/,S=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},Z=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function I(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var A=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),E(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,o=Object.create(null),s=e.styles.reduce((function(e,n){var o=n.languages,s=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=T({},e[t],s);e[t]=n})),e}),o);return s.root=n,s.plain=T({},n,{backgroundColor:null}),s}(e.theme,e.language):void 0;return t.themeDict=n})),E(this,"getLineProps",(function(e){var n=e.key,o=e.className,s=e.style,r=T({},I(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(r.style=a.plain),void 0!==s&&(r.style=void 0!==r.style?T({},r.style,s):s),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),E(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,s=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===s&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===s&&!o)return r[n[0]];var a=o?{display:"inline-block"}:{},c=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[a].concat(c))}})),E(this,"getTokenProps",(function(e){var n=e.key,o=e.className,s=e.style,r=e.token,a=T({},I(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==s&&(a.style=void 0!==a.style?T({},a.style,s):s),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),E(this,"tokenize",(function(e,t,n,o){var s={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",s);var r=s.tokens=e.tokenize(s.code,s.grammar,s.language);return e.hooks.run("after-tokenize",s),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,s=e.children,r=this.getThemeDict(this.props),a=t.languages[n];return s({tokens:function(e){for(var t=[[]],n=[e],o=[0],s=[e.length],r=0,a=0,c=[],l=[c];a>-1;){for(;(r=o[a]++)<s[a];){var i=void 0,u=t[a],d=n[a][r];if("string"==typeof d?(u=a>0?u:["plain"],i=d):(u=Z(u,d.type),d.alias&&(u=Z(u,d.alias)),i=d.content),"string"==typeof i){var p=i.split(_),m=p.length;c.push({types:u,content:p[0]});for(var h=1;h<m;h++)S(c),l.push(c=[]),c.push({types:u,content:p[h]})}else a++,t.push(u),n.push(i),o.push(0),s.push(i.length)}a--,t.pop(),n.pop(),o.pop(),s.pop()}return S(c),l}(void 0!==a?this.tokenize(t,o,a,n):[o]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);const O=A,P={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function D(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:s,getTokenProps:r}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const c=s({line:t,className:(0,a.Z)(n,o&&P.codeLine)}),l=t.map(((e,t)=>(0,k.jsx)("span",{...r({token:e,key:t})},t)));return(0,k.jsxs)("span",{...c,children:[o?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("span",{className:P.codeLineNumber}),(0,k.jsx)("span",{className:P.codeLineContent,children:l})]}):l,(0,k.jsx)("br",{})]})}var z=n(7325);function W(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function $(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const M={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function H(e){let{code:t,className:n}=e;const[s,r]=(0,o.useState)(!1),c=(0,o.useRef)(void 0),l=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const o=document.createElement("textarea"),s=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const r=document.getSelection(),a=r.rangeCount>0&&r.getRangeAt(0);n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}o.remove(),a&&(r.removeAllRanges(),r.addRange(a)),s&&s.focus()}(t),r(!0),c.current=window.setTimeout((()=>{r(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),(0,k.jsx)("button",{type:"button","aria-label":s?(0,z.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,z.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,z.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.Z)("clean-btn",n,M.copyButton,s&&M.copyButtonCopied),onClick:l,children:(0,k.jsxs)("span",{className:M.copyButtonIcons,"aria-hidden":"true",children:[(0,k.jsx)(W,{className:M.copyButtonIcon}),(0,k.jsx)($,{className:M.copyButtonSuccessIcon})]})})}function V(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const R={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function q(e){let{className:t,onClick:n,isEnabled:o}=e;const s=(0,z.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,k.jsx)("button",{type:"button",onClick:n,className:(0,a.Z)("clean-btn",t,o&&R.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,k.jsx)(V,{className:R.wordWrapButtonIcon,"aria-hidden":"true"})})}function F(e){let{children:t,className:n="",metastring:s,title:r,showLineNumbers:c,language:u}=e;const{prism:{defaultLanguage:d,magicComments:p}}=(0,l.L)(),h=u??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??d,f=i(),g=function(){const[e,t]=(0,o.useState)(!1),[n,s]=(0,o.useState)(!1),r=(0,o.useRef)(null),a=(0,o.useCallback)((()=>{const n=r.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[r,e]),c=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=r.current,n=e>t||r.current.querySelector("code").hasAttribute("style");s(n)}),[r]);return C(r,c),(0,o.useEffect)((()=>{c()}),[e,c]),(0,o.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:r,isEnabled:e,isCodeScrollable:n,toggle:a}}(),b=function(e){return e?.match(m)?.groups.title??""}(s)||r,{lineClassNames:x,code:N}=y(t,{metastring:s,language:h,magicComments:p}),B=c??function(e){return Boolean(e?.includes("showLineNumbers"))}(s);return(0,k.jsxs)(v,{as:"div",className:(0,a.Z)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`),children:[b&&(0,k.jsx)("div",{className:j.codeBlockTitle,children:b}),(0,k.jsxs)("div",{className:j.codeBlockContent,children:[(0,k.jsx)(O,{...L,theme:f,code:N,language:h??"text",children:e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:s}=e;return(0,k.jsx)("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,a.Z)(t,j.codeBlock,"thin-scrollbar"),children:(0,k.jsx)("code",{className:(0,a.Z)(j.codeBlockLines,B&&j.codeBlockLinesWithNumbering),children:n.map(((e,t)=>(0,k.jsx)(D,{line:e,getLineProps:o,getTokenProps:s,classNames:x[t],showLineNumbers:B},t)))})})}}),(0,k.jsxs)("div",{className:j.buttonGroup,children:[(g.isEnabled||g.isCodeScrollable)&&(0,k.jsx)(q,{className:j.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),(0,k.jsx)(H,{className:j.codeButton,code:N})]})]})]})}function G(e){let{children:t,...n}=e;const s=(0,r.Z)(),a=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),c="string"==typeof a?F:x;return(0,k.jsx)(c,{...n,children:a},String(s))}var U=n(3699);var Y=n(4639);const J={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function K(e){return!!e&&("SUMMARY"===e.tagName||K(e.parentElement))}function Q(e,t){return!!e&&(e===t||Q(e.parentElement,t))}function X(e){let{summary:t,children:n,...s}=e;const c=(0,r.Z)(),l=(0,o.useRef)(null),{collapsed:i,setCollapsed:u}=(0,Y.u)({initialState:!s.open}),[d,p]=(0,o.useState)(s.open),m=o.isValidElement(t)?t:(0,k.jsx)("summary",{children:t??"Details"});return(0,k.jsxs)("details",{...s,ref:l,open:d,"data-collapsed":i,className:(0,a.Z)(J.details,c&&J.isBrowser,s.className),onMouseDown:e=>{K(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;K(t)&&Q(t,l.current)&&(e.preventDefault(),i?(u(!1),p(!0)):u(!0))},children:[m,(0,k.jsx)(Y.z,{lazy:!1,collapsed:i,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{u(e),p(!e)},children:(0,k.jsx)("div",{className:J.collapsibleContent,children:n})})]})}const ee={details:"details_b_Ee"},te="alert alert--info";function ne(e){let{...t}=e;return(0,k.jsx)(X,{...t,className:(0,a.Z)(te,ee.details,t.className)})}var oe=n(3899);function se(e){return(0,k.jsx)(oe.Z,{...e})}const re={containsTaskList:"containsTaskList_mC6p"};const ae={img:"img_ev3q"};var ce=n(8201);const le={Head:s.Z,Details:function(e){const t=o.Children.toArray(e.children),n=t.find((e=>o.isValidElement(e)&&"summary"===e.type)),s=(0,k.jsx)(k.Fragment,{children:t.filter((e=>e!==n))});return(0,k.jsx)(ne,{...e,summary:n,children:s})},code:function(e){return o.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?(0,k.jsx)("code",{...e}):(0,k.jsx)(G,{...e})},a:function(e){return(0,k.jsx)(U.Z,{...e})},pre:function(e){return(0,k.jsx)(k.Fragment,{children:e.children})},ul:function(e){return(0,k.jsx)("ul",{...e,className:(t=e.className,(0,a.Z)(t,t?.includes("contains-task-list")&&re.containsTaskList))});var t},img:function(e){return(0,k.jsx)("img",{loading:"lazy",...e,className:(t=e.className,(0,a.Z)(t,ae.img))});var t},h1:e=>(0,k.jsx)(se,{as:"h1",...e}),h2:e=>(0,k.jsx)(se,{as:"h2",...e}),h3:e=>(0,k.jsx)(se,{as:"h3",...e}),h4:e=>(0,k.jsx)(se,{as:"h4",...e}),h5:e=>(0,k.jsx)(se,{as:"h5",...e}),h6:e=>(0,k.jsx)(se,{as:"h6",...e}),admonition:ce.Z,mermaid:()=>null}},2381:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});n(7294);var o=n(1151),s=n(9389),r=n(5893);function a(e){let{children:t}=e;return(0,r.jsx)(o.Zo,{components:s.Z,children:t})}},7594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,s,r]=t;if(o&&r){o=parseInt(o),r=parseInt(r);const e=o<r?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(r+=e);for(let t=o;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);
//# sourceMappingURL=6763.7deba6fd.js.map