(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[924],{61244:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/react/[slug]",function(){return e(93048)}])},73245:function(n,t,e){"use strict";e.d(t,{B:function(){return a}});var o=e(85893),r=e(9008),i=e.n(r);let a=n=>{let{title:t,description:e,category:r}=n;return(0,o.jsxs)(i(),{children:[(0,o.jsx)("title",{children:"Rain Sugar BangBang Front-End"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("meta",{name:"description",content:"".concat(e)}),(0,o.jsx)("meta",{name:"keywords",content:"".concat(r,", ").concat(r,"-").concat(t)}),(0,o.jsx)("meta",{property:"og:title",content:"".concat(t)}),(0,o.jsx)("meta",{property:"og:description",content:"".concat(e)}),(0,o.jsx)("meta",{property:"og:image",content:"../images/".concat(r.toUpperCase(),".png")}),(0,o.jsx)("meta",{name:"naver-site-verification",content:"af9c8049662a7c6c85ea946e9eb561086e70062c"}),(0,o.jsx)("meta",{name:"google-site-verification",content:"Zgp7rA3RAdcRnhPPsGLK-t4KVTO86AejlDIQQIGpvLg"}),(0,o.jsx)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4077287316160146",crossOrigin:"anonymous"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})}},92541:function(n,t,e){"use strict";e.d(t,{F:function(){return b}});var o=e(7297),r=e(85893),i=e(89313),a=e(19521),c=e(11163),s=e(67294),d=e(6154);function m(){let n=(0,o.Z)(["\n  margin: 50px 0;\n  padding: 15px;\n  width: 100%;\n  list-style: none;\n  border: 1px solid #3a3a3a;\n\n  & p {\n    margin-bottom: 15px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid #3a3a3a;\n  }\n  & li {\n    margin-bottom: 5px;\n  }\n  & span {\n    cursor: pointer;\n    transition: 0.3s;\n\n    &:hover {\n      color: #3a3a3a;\n      font-weight: bold;\n    }\n  }\n"]);return m=function(){return n},n}let l=n=>{let{title:t}=n,{pathname:e}=(0,c.useRouter)(),[o,i]=(0,s.useState)([]),[a,m]=(0,s.useState)(0),l=async()=>{let n=await d.Z.get("/api/md");i(n.data),m(n.data.findIndex(n=>n.title===t))};return(0,s.useEffect)(()=>{l()},[]),(0,r.jsxs)(p,{children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"blog"===e.split("/")[1]?'"Simple Memo"':'"'.concat(e.split("/")[1],'"')})," ","카테고리의 다른 글"]}),o.map((n,t)=>{if(a-2<=t&&t<=a+2)return(0,r.jsx)("li",{children:(0,r.jsx)("span",{children:n.description})},t)})]})},p=a.ZP.ul.withConfig({componentId:"sc-35f451a6-0"})(m());var u=e(72490),g=e(98683),x=e(84283);let h=()=>{let n=n=>{if(n){let t=document.createElement("script");t.src="https://utteranc.es/client.js",t.async=!0,t.setAttribute("repo","LEE-YO-HAN/github.io.utterances"),t.setAttribute("issue-term","pathname"),t.setAttribute("theme","github-dark"),t.setAttribute("label","blog-comment"),t.crossOrigin="anonymous",n.appendChild(t)}};return(0,s.useEffect)(()=>{let t=document.getElementById("comment-box");n(t)},[]),(0,r.jsx)("section",{id:"comment-box"})};function f(){let n=(0,o.Z)(["\n  margin-top: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  height: 200px;\n  background-color: #2c2c2c;\n  border-radius: 20px;\n  & h1 {\n    padding: 0 10px;\n    width: 640px;\n    font-weight: bold;\n    font-size: 2rem;\n  }\n  & p {\n    margin-top: 10px;\n    padding: 0 10px;\n    width: 640px;\n    font-weight: bold;\n    font-size: 1.2rem;\n  }\n  & span {\n    padding: 0 10px;\n    width: 640px;\n    font-weight: bold;\n    font-size: 0.9rem;\n  }\n"]);return f=function(){return n},n}function w(){let n=(0,o.Z)(['\n  margin: 0px 0 50px 0;\n  width: 660px;\n\n  // markdown\n  .markdown {\n    font-size: 1.2rem;\n    line-height: 1.5;\n  }\n\n  .markdown h1 {\n    font-size: 1.8rem;\n    margin-top: 2rem;\n    margin-bottom: 1rem;\n  }\n\n  .markdown h2 {\n    font-size: 1.6rem;\n    margin-top: 2rem;\n    margin-bottom: 1rem;\n  }\n\n  .markdown h3 {\n    font-size: 1.1rem;\n    margin-top: 2rem;\n    margin-bottom: 1rem;\n  }\n\n  .markdown p {\n    margin-bottom: 1rem;\n  }\n\n  .markdown a {\n    color: #0070f3;\n    text-decoration: underline;\n  }\n\n  .markdown img {\n    max-width: 45vw;\n    text-align: center;\n  }\n\n  .markdown pre {\n    margin: 20px 0 80px 0;\n    padding: 20px;\n    background-color: #161b22;\n    font-size: 0.9rem;\n    font-family: "Consolas", "Sans Mono", "Courier", "monospace";\n    border-radius: 10px;\n  }\n\n  .markdown code {\n  }\n']);return w=function(){return n},n}function j(){let n=(0,o.Z)(["\n  margin-bottom: 100px;\n  width: 100%;\n\n  & p {\n    font-weight: bold;\n  }\n"]);return j=function(){return n},n}let b=n=>{let{title:t,description:e,category:o,date:a,content:c}=n;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(k,{children:[(0,r.jsx)("p",{children:o}),(0,r.jsx)("h1",{children:e}),(0,r.jsx)("span",{children:a})]}),(0,r.jsx)(y,{children:(0,r.jsx)(i.D,{className:"markdown",remarkPlugins:[u.Z],components:{code(n){let{inline:t,className:e,children:o,...i}=n,a=/language-(\w+)/.exec(e||"");return!t&&a?(0,r.jsx)(g.Z,{language:a[1],PreTag:"pre",...i,style:x.xm,children:String(o).replace(/\n$/,"")}):(0,r.jsx)("code",{className:e,...i,children:o})}},children:c})}),(0,r.jsx)(l,{title:t}),(0,r.jsxs)(_,{children:[(0,r.jsx)("p",{children:"COMMENTS"}),(0,r.jsx)(h,{})]})]})},k=a.ZP.section.withConfig({componentId:"sc-dc45dd47-0"})(f()),y=a.ZP.main.withConfig({componentId:"sc-dc45dd47-1"})(w()),_=a.ZP.div.withConfig({componentId:"sc-dc45dd47-2"})(j())},93048:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return a},default:function(){return c}});var o=e(85893),r=e(92541),i=e(73245),a=!0;function c(n){let{title:t,description:e,category:a,date:c,content:s}=n;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.B,{title:t,description:e,category:a}),(0,o.jsx)(r.F,{title:t,description:e,category:a,date:c,content:s})]})}}},function(n){n.O(0,[572,774,888,179],function(){return n(n.s=61244)}),_N_E=n.O()}]);