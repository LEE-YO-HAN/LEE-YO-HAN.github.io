(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[428],{10357:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/css/[slug]",function(){return e(31653)}])},73245:function(n,t,e){"use strict";e.d(t,{B:function(){return a}});var o=e(85893),i=e(9008),r=e.n(i);let a=n=>{let{title:t,description:e,category:i}=n;return(0,o.jsxs)(r(),{children:[(0,o.jsx)("title",{children:"Rain Sugar BangBang Front-End"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("meta",{name:"description",content:"".concat(e)}),(0,o.jsx)("meta",{name:"keywords",content:"".concat(i,", ").concat(i,"-").concat(t)}),(0,o.jsx)("meta",{httpEquiv:"subject",content:"".concat(i)}),(0,o.jsx)("meta",{property:"og:title",content:"".concat(t)}),(0,o.jsx)("meta",{property:"og:description",content:"".concat(e)}),(0,o.jsx)("meta",{property:"og:image",content:"../images/".concat(i.toUpperCase(),".png")}),(0,o.jsx)("meta",{name:"naver-site-verification",content:"af9c8049662a7c6c85ea946e9eb561086e70062c"}),(0,o.jsx)("meta",{name:"google-site-verification",content:"Zgp7rA3RAdcRnhPPsGLK-t4KVTO86AejlDIQQIGpvLg"}),(0,o.jsx)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4077287316160146",crossOrigin:"anonymous"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})}},92541:function(n,t,e){"use strict";e.d(t,{F:function(){return Z}});var o=e(7297),i=e(85893),r=e(89313),a=e(19521),c=e(11163),s=e(67294),d=e(6154),l=e(54363);function m(){let n=(0,o.Z)(["\n  margin: 50px 0;\n  padding: 15px;\n  /* width: 100%; */\n  list-style: none;\n  border: 1px solid #3a3a3a;\n\n  & p {\n    margin-bottom: 15px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid #3a3a3a;\n  }\n"]);return m=function(){return n},n}function p(){let n=(0,o.Z)(["\n  height: 150px;\n  overflow-y: scroll;\n\n  & li {\n    margin-bottom: 5px;\n  }\n  & span {\n    cursor: pointer;\n    transition: 0.3s;\n\n    &:hover {\n      color: #3a3a3a;\n      font-weight: bold;\n    }\n  }\n\n  &::-webkit-scrollbar {\n    width: 2px;\n    background-color: #aaa;\n  }\n  &::-webkit-scrollbar-thumb {\n    height: 10vh;\n    background: rgb(100, 100, 100);\n  }\n"]);return p=function(){return n},n}let u=n=>{let{description:t}=n,{pathname:e}=(0,c.useRouter)(),o=(0,c.useRouter)(),r=(0,l.qZ)(),a=(0,l.__)(),m=async()=>{let n=await d.Z.get("/api/md");"blog"===e.split("/")[1]?a(n.data.filter(n=>"github"===n.category)):a(n.data.filter(n=>n.category===e.split("/")[1]))};(0,s.useEffect)(()=>{m()},[]);let p=n=>{o.push(n.replaceAll(" ","-"))};return(0,i.jsxs)(g,{children:[(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"blog"===e.split("/")[1]?'"Simple Memo"':'"'.concat(e.split("/")[1],'"')})," ","카테고리의 다른 글"]}),(0,i.jsx)(h,{children:r.map((n,e)=>(0,i.jsx)("li",{children:(0,i.jsx)("span",{onClick:()=>p(n.title),style:t===n.description?{fontWeight:"bold",color:"white"}:{},children:n.description})},e))})]})},g=a.ZP.div.withConfig({componentId:"sc-bb0f742b-0"})(m()),h=a.ZP.ul.withConfig({componentId:"sc-bb0f742b-1"})(p());var x=e(72490),f=e(98683),b=e(84283);let w=()=>{let n=n=>{if(n){let t=document.createElement("script");t.src="https://utteranc.es/client.js",t.async=!0,t.setAttribute("repo","LEE-YO-HAN/github.io.utterances"),t.setAttribute("issue-term","pathname"),t.setAttribute("theme","github-dark"),t.setAttribute("label","blog-comment"),t.crossOrigin="anonymous",n.appendChild(t)}};return(0,s.useEffect)(()=>{let t=document.getElementById("comment-box");n(t)},[]),(0,i.jsx)("section",{id:"comment-box"})};function j(){let n=(0,o.Z)(["\n  max-width: 640px;\n  @media only screen and (max-width: 480px) {\n    max-width: 480px;\n  }\n"]);return j=function(){return n},n}function k(){let n=(0,o.Z)(["\n  margin-top: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  height: 200px;\n  background-color: #2c2c2c;\n  border-radius: 20px;\n  & h1 {\n    padding: 0 10px;\n    width: 100%;\n    font-weight: bold;\n    font-size: 2rem;\n  }\n  & p {\n    margin-top: 10px;\n    padding: 0 10px;\n    width: 100%;\n    font-weight: bold;\n    font-size: 1.2rem;\n  }\n  & span {\n    padding: 0 10px;\n    width: 100%;\n    font-weight: bold;\n    font-size: 0.9rem;\n  }\n"]);return k=function(){return n},n}function y(){let n=(0,o.Z)(['\n  /* margin: 0px 0 50px 0; */\n  margin-bottom: 50px;\n\n  // markdown\n  .markdown {\n    font-size: 1.2rem;\n    line-height: 1.5;\n  }\n\n  .markdown h1 {\n    font-size: 1.8rem;\n    margin-top: 2rem;\n    margin-bottom: 1rem;\n  }\n\n  .markdown h2 {\n    font-size: 1.6rem;\n    margin-top: 2rem;\n    margin-bottom: 1rem;\n  }\n\n  .markdown h3 {\n    font-size: 1.1rem;\n    margin-top: 2rem;\n    margin-bottom: 1rem;\n  }\n\n  .markdown p {\n    margin-bottom: 1rem;\n  }\n\n  .markdown a {\n    color: #0070f3;\n    text-decoration: underline;\n  }\n\n  .markdown img {\n    max-width: 45vw;\n    text-align: center;\n  }\n\n  .markdown pre {\n    margin: 20px 0 80px 0;\n    padding: 20px;\n    background-color: #161b22;\n    font-size: 0.9rem;\n    font-family: "Consolas", "Sans Mono", "Courier", "monospace";\n    border-radius: 10px;\n  }\n\n  .markdown code {\n  }\n']);return y=function(){return n},n}function v(){let n=(0,o.Z)(["\n  margin-bottom: 100px;\n  width: 100%;\n\n  & p {\n    font-weight: bold;\n  }\n"]);return v=function(){return n},n}let Z=n=>{let{title:t,description:e,category:o,date:a,content:c}=n;return(0,i.jsxs)(_,{children:[(0,i.jsxs)(C,{children:[(0,i.jsx)("p",{children:o}),(0,i.jsx)("h1",{children:e}),(0,i.jsx)("span",{children:a})]}),(0,i.jsx)(E,{children:(0,i.jsx)(r.D,{className:"markdown",remarkPlugins:[x.Z],components:{code(n){let{inline:t,className:e,children:o,...r}=n,a=/language-(\w+)/.exec(e||"");return!t&&a?(0,i.jsx)(f.Z,{language:a[1],PreTag:"pre",...r,style:b.xm,children:String(o).replace(/\n$/,"")}):(0,i.jsx)("code",{className:e,...r,children:o})}},children:c})}),(0,i.jsx)(u,{description:e}),(0,i.jsxs)(P,{children:[(0,i.jsx)("p",{children:"COMMENTS"}),(0,i.jsx)(w,{})]})]})},_=a.ZP.main.withConfig({componentId:"sc-9dd87eaa-0"})(j()),C=a.ZP.section.withConfig({componentId:"sc-9dd87eaa-1"})(k()),E=a.ZP.main.withConfig({componentId:"sc-9dd87eaa-2"})(y()),P=a.ZP.div.withConfig({componentId:"sc-9dd87eaa-3"})(v())},31653:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return a},default:function(){return c}});var o=e(85893),i=e(73245),r=e(92541),a=!0;function c(n){let{title:t,description:e,category:a,date:c,content:s}=n;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.B,{title:t,description:e,category:a}),(0,o.jsx)(r.F,{title:t,description:e,category:a,date:c,content:s})]})}}},function(n){n.O(0,[572,774,888,179],function(){return n(n.s=10357)}),_N_E=n.O()}]);