(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[869],{89681:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/redux/[slug]",function(){return e(81732)}])},73245:function(n,t,e){"use strict";e.d(t,{B:function(){return c}});var o=e(85893),i=e(9008),r=e.n(i);let c=n=>{let{title:t,description:e,category:i}=n;return(0,o.jsxs)(r(),{children:[(0,o.jsx)("title",{children:"Rain Sugar BangBang Front-End"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("meta",{name:"description",content:"".concat(e)}),(0,o.jsx)("meta",{name:"keywords",content:"".concat(i,", ").concat(i,"-").concat(t)}),(0,o.jsx)("meta",{httpEquiv:"subject",content:"".concat(i)}),(0,o.jsx)("meta",{property:"og:title",content:"".concat(t)}),(0,o.jsx)("meta",{property:"og:description",content:"".concat(e)}),(0,o.jsx)("meta",{property:"og:image",content:"../images/".concat(i.toUpperCase(),".png")}),(0,o.jsx)("meta",{name:"naver-site-verification",content:"af9c8049662a7c6c85ea946e9eb561086e70062c"}),(0,o.jsx)("meta",{name:"google-site-verification",content:"Zgp7rA3RAdcRnhPPsGLK-t4KVTO86AejlDIQQIGpvLg"}),(0,o.jsx)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4077287316160146",crossOrigin:"anonymous"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})}},92541:function(n,t,e){"use strict";e.d(t,{F:function(){return C}});var o=e(7297),i=e(85893),r=e(89313),c=e(19521),a=e(11163),s=e(67294),d=e(6154),l=e(41664),p=e.n(l),m=e(83454),u=e(21876).Buffer;function g(){let n=(0,o.Z)(["\n  margin: 50px 0;\n  padding: 15px;\n  list-style: none;\n  border: 1px solid #3a3a3a;\n\n  & p {\n    margin-bottom: 15px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid #3a3a3a;\n  }\n"]);return g=function(){return n},n}function h(){let n=(0,o.Z)(["\n  height: 150px;\n  overflow-y: scroll;\n\n  & a {\n    cursor: auto;\n  }\n  & li {\n    margin-bottom: 5px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  & span:first-child {\n    cursor: pointer;\n    transition: 0.3s;\n\n    &:hover {\n      color: #3a3a3a;\n      font-weight: bold;\n    }\n    & span:last-child {\n      cursor: auto;\n    }\n  }\n\n  &::-webkit-scrollbar {\n    width: 2px;\n    background-color: #aaa;\n  }\n  &::-webkit-scrollbar-thumb {\n    height: 10vh;\n    background: rgb(100, 100, 100);\n  }\n"]);return h=function(){return n},n}let f=n=>{let{description:t}=n,{pathname:e}=(0,a.useRouter)(),o=e.split("/")[1],r="https://api.github.com/repos/LEE-YO-HAN/LEE-YO-HAN.github.io/contents/src/posting",c={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(m.env.NEXT_PUBLIC_GITHUB_API_TOKEN)}},[l,g]=(0,s.useState)([]),h=async n=>{let t="".concat(r,"/").concat(o,"/").concat(n),e=await d.Z.get(t,c),i=u.from(e.data.content,"base64").toString(),a=i.match(/^---\n([\s\S]+?)\n---/);if(a){let n=JSON.stringify(a[0]).split("\\n"),t=n[4].match(/\d{4}-\d{2}-\d{2}/);if(t){let e={title:n[1].split("title: ")[1].replaceAll(" ","-"),description:n[2].split("description: ")[1],category:n[3].split("category: ")[1],date:t[0]};g(n=>n.concat(e))}}},f=async()=>{let n="".concat(r,"/").concat(o),t=await d.Z.get(n,c);for(let n of t.data)h(n.name)};return(0,s.useEffect)(()=>{f()},[]),(0,i.jsxs)(x,{children:[(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"blog"===o?'"Simple Memo"':'"'.concat(o,'"')})," ","카테고리의 다른 글"]}),(0,i.jsx)(b,{children:l.map((n,e)=>(0,i.jsx)(p(),{href:"".concat(n.title.replaceAll(" ","-")),children:(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{style:t===n.description?{fontWeight:"bold",color:"white"}:{},children:n.description}),(0,i.jsx)("span",{children:n.date})]})},e))})]})},x=c.ZP.div.withConfig({componentId:"sc-cff1a32c-0"})(g()),b=c.ZP.ul.withConfig({componentId:"sc-cff1a32c-1"})(h());var w=e(72490),j=e(98683),y=e(84283);let k=()=>{let n=n=>{if(n){let t=document.createElement("script");t.src="https://utteranc.es/client.js",t.async=!0,t.setAttribute("repo","LEE-YO-HAN/github.io.utterances"),t.setAttribute("issue-term","pathname"),t.setAttribute("theme","github-dark"),t.setAttribute("label","blog-comment"),t.crossOrigin="anonymous",n.appendChild(t)}};return(0,s.useEffect)(()=>{let t=document.getElementById("comment-box");n(t)},[]),(0,i.jsx)("section",{id:"comment-box"})};function E(){let n=(0,o.Z)(["\n  max-width: 640px;\n  @media only screen and (max-width: 480px) {\n    max-width: 480px;\n  }\n"]);return E=function(){return n},n}function _(){let n=(0,o.Z)(["\n  margin-top: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  height: 200px;\n  background-color: #2c2c2c;\n  border-radius: 20px;\n  & h1 {\n    padding: 0 10px;\n    width: 95%;\n    font-weight: bold;\n    font-size: 2rem;\n  }\n  & p {\n    margin-top: 10px;\n    padding: 0 10px;\n    width: 95%;\n    font-weight: bold;\n    font-size: 1.2rem;\n  }\n  & span {\n    padding: 0 10px;\n    width: 95%;\n    font-weight: bold;\n    font-size: 0.9rem;\n  }\n"]);return _=function(){return n},n}function v(){let n=(0,o.Z)(['\n  margin-bottom: 50px;\n\n  // markdown\n  .markdown {\n    font-size: 1.2rem;\n    line-height: 1.5;\n  }\n\n  .markdown h1 {\n    font-size: 1.8rem;\n    margin-top: 2rem;\n    margin-bottom: 1rem;\n  }\n\n  .markdown h2 {\n    font-size: 1.6rem;\n    margin-top: 2rem;\n    margin-bottom: 1rem;\n  }\n\n  .markdown h3 {\n    font-size: 1.1rem;\n    margin-top: 2rem;\n    margin-bottom: 1rem;\n  }\n\n  .markdown p {\n    margin-bottom: 1rem;\n  }\n\n  .markdown a {\n    color: #0070f3;\n    text-decoration: underline;\n  }\n\n  .markdown img {\n    width: 100%;\n    text-align: center;\n  }\n\n  .markdown pre {\n    margin: 20px 0 80px 0;\n    padding: 10px;\n    background-color: #161b22;\n    font-size: 0.9rem;\n    font-family: "Consolas", "Sans Mono", "Courier", "monospace";\n    border-radius: 10px;\n  }\n\n  .markdown code {\n  }\n']);return v=function(){return n},n}function Z(){let n=(0,o.Z)(["\n  margin-bottom: 100px;\n  width: 100%;\n\n  & p {\n    font-weight: bold;\n  }\n"]);return Z=function(){return n},n}let C=n=>{let{title:t,description:e,category:o,date:c,content:a}=n;return(0,i.jsxs)(N,{children:[(0,i.jsxs)(A,{children:[(0,i.jsx)("p",{children:o}),(0,i.jsx)("h1",{children:e}),(0,i.jsx)("span",{children:c})]}),(0,i.jsx)(P,{children:(0,i.jsx)(r.D,{className:"markdown",remarkPlugins:[w.Z],components:{code(n){let{inline:t,className:e,children:o,...r}=n,c=/language-(\w+)/.exec(e||"");return!t&&c?(0,i.jsx)(j.Z,{language:c[1],PreTag:"pre",...r,style:y.xm,children:String(o).replace(/\n$/,"")}):(0,i.jsx)("code",{className:e,...r,children:o})}},children:a})}),(0,i.jsx)(f,{description:e}),(0,i.jsxs)(I,{children:[(0,i.jsx)("p",{children:"COMMENTS"}),(0,i.jsx)(k,{})]})]})},N=c.ZP.main.withConfig({componentId:"sc-11af7490-0"})(E()),A=c.ZP.section.withConfig({componentId:"sc-11af7490-1"})(_()),P=c.ZP.main.withConfig({componentId:"sc-11af7490-2"})(v()),I=c.ZP.div.withConfig({componentId:"sc-11af7490-3"})(Z())},81732:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return c},default:function(){return a}});var o=e(85893),i=e(92541),r=e(73245),c=!0;function a(n){let{title:t,description:e,category:c,date:a,content:s}=n;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.B,{title:t,description:e,category:c}),(0,o.jsx)(i.F,{title:t,description:e,category:c,date:a,content:s})]})}}},function(n){n.O(0,[572,774,888,179],function(){return n(n.s=89681)}),_N_E=n.O()}]);