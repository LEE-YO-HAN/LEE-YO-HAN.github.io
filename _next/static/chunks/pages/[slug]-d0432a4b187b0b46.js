(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{11587:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[slug]",function(){return e(76783)}])},73245:function(n,t,e){"use strict";e.d(t,{B:function(){return c}});var o=e(85893),r=e(9008),i=e.n(r);let c=n=>{let{title:t,description:e,keyword:r,category:c}=n;return(0,o.jsxs)(i(),{children:[(0,o.jsxs)("title",{children:["Hanbbi","'","s DevLog"]}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("meta",{name:"description",content:"".concat(e)}),(0,o.jsx)("meta",{name:"keywords",content:"".concat(c,", ").concat(t,", ").concat(r)}),(0,o.jsx)("meta",{httpEquiv:"title",content:"".concat(e)}),(0,o.jsx)("meta",{httpEquiv:"subject",content:"".concat(c)}),(0,o.jsx)("meta",{property:"og:title",content:"".concat(t)}),(0,o.jsx)("meta",{property:"og:description",content:"".concat(e)}),(0,o.jsx)("meta",{property:"og:image",content:"/images/cards/".concat(c.toUpperCase(),".png")}),(0,o.jsx)("meta",{name:"naver-site-verification",content:"af9c8049662a7c6c85ea946e9eb561086e70062c"}),(0,o.jsx)("meta",{name:"google-site-verification",content:"Zgp7rA3RAdcRnhPPsGLK-t4KVTO86AejlDIQQIGpvLg"}),(0,o.jsx)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4077287316160146",crossOrigin:"anonymous"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})}},76783:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return H},default:function(){return F}});var o=e(85893),r=e(4298),i=e.n(r),c=e(73245),a=e(7297),s=e(89313),l=e(19521),d=e(11163),m=e(67294),p=e(45272),u=e(6154),h=e(41664),g=e.n(h);let x={github:"Simple Memo",html:"HTML",css:"CSS",javascript:"javascript",typescript:"TypeScript",react:"React",nextjs:"NextJS",nestjs:"NestJS",sw:"정보처리기사",redux:"Redux"};var f=e(21876).Buffer;function b(){let n=(0,a.Z)(["\n  margin: 50px 0;\n  padding: 15px;\n  list-style: none;\n  border: 1px solid #3a3a3a;\n  color: ",";\n  background-color: ",";\n\n  & p {\n    margin-bottom: 15px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid #3a3a3a;\n  }\n"]);return b=function(){return n},n}function w(){let n=(0,a.Z)(["\n  height: 150px;\n  overflow-y: scroll;\n\n  & a {\n    cursor: auto;\n    & span {\n      color: ",";\n      cursor: pointer;\n      transition: 0.2s;\n\n      &:hover {\n        color: ",";\n        font-weight: bold;\n      }\n    }\n    & .thisPost {\n      color: ",";\n      font-weight: bold;\n    }\n  }\n  & li {\n    margin-bottom: 5px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n\n  &::-webkit-scrollbar {\n    width: 2px;\n    background-color: #aaa;\n  }\n  &::-webkit-scrollbar-thumb {\n    height: 10vh;\n    background: rgb(100, 100, 100);\n  }\n"]);return w=function(){return n},n}let j=n=>{let{description:t}=n,{asPath:e}=(0,d.useRouter)(),r=(0,p.X)(),i=e.split("-")[0].replace("/",""),c="https://api.github.com/repos/LEE-YO-HAN/LEE-YO-HAN.github.io/contents/src/posting",a={headers:{"Content-Type":"application/json"}},[s,l]=(0,m.useState)([]),h=async n=>{let t="".concat(c,"/").concat(i,"/").concat(n),e=await u.Z.get(t,a),o=f.from(e.data.content,"base64").toString(),r=o.match(/^---\n([\s\S]+?)\n---/);if(r){let n=JSON.stringify(r[0]).split("\\n"),t=n[5].match(/\d{4}-\d{2}-\d{2}/);if(t){let e={title:n[1].split("title: ")[1].replaceAll(" ","-"),description:n[2].split("description: ")[1],category:n[3].split("category: ")[1],date:t[0]};return e}}},b=async()=>{let n="".concat(c,"/").concat(i),t=await u.Z.get(n,a),e=[];for(let n of t.data){let t=await h(n.name);t&&e.push(t)}e.sort((n,t)=>+new Date(t.date)-+new Date(n.date)),l(e)};return(0,m.useEffect)(()=>{b()},[]),(0,o.jsxs)(y,{children:[(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:x[i]})," 카테고리의 다른 글"]}),(0,o.jsx)(k,{children:s.map((n,e)=>(0,o.jsxs)("li",{children:[(0,o.jsx)(g(),{href:"".concat(n.title.replaceAll(" ","-")),children:(0,o.jsx)("span",{className:t===n.description?"thisPost":"",children:n.description.length<50?n.description:n.description.slice(0,50)+"..."})}),(0,o.jsx)("span",{style:r?{display:"none"}:{},children:n.date})]},e))})]})},y=l.ZP.div.withConfig({componentId:"sc-e5001ff0-0"})(b(),n=>n.theme.componentFontColor,n=>n.theme.componentBackground),k=l.ZP.ul.withConfig({componentId:"sc-e5001ff0-1"})(w(),n=>n.theme.componentFontColor,n=>n.theme.componentHover,n=>n.theme.componentHover);var v=e(72490),C=e(98683),E=e(84283);let Z=()=>{let n=n=>{if(n){let t=document.createElement("script");t.src="https://utteranc.es/client.js",t.async=!0,t.setAttribute("repo","LEE-YO-HAN/github.io.utterances"),t.setAttribute("issue-term","pathname"),t.setAttribute("theme","github-dark"),t.setAttribute("label","blog-comment"),t.crossOrigin="anonymous",n.appendChild(t)}};return(0,m.useEffect)(()=>{let t=document.getElementById("comment-box");n(t)},[]),(0,o.jsx)("section",{id:"comment-box"})};function N(){let n=(0,a.Z)(["\n  max-width: 640px;\n\n  @media only screen and (max-width: 480px) {\n    max-width: 480px;\n    width: 90vw;\n  }\n"]);return N=function(){return n},n}function S(){let n=(0,a.Z)(["\n  margin-top: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  height: 200px;\n  color: ",";\n  background-color: ",";\n  border-radius: 20px;\n  & h1 {\n    padding: 0 10px;\n    width: 95%;\n    font-weight: bold;\n    font-size: 2rem;\n    overflow-x: hidden;\n  }\n  & p {\n    margin-top: 10px;\n    padding: 0 10px;\n    width: 95%;\n    font-weight: bold;\n    font-size: 1.2rem;\n  }\n  & span {\n    padding: 0 10px;\n    width: 95%;\n    font-weight: bold;\n    font-size: 0.9rem;\n  }\n"]);return S=function(){return n},n}function _(){let n=(0,a.Z)(["\n  margin-bottom: 50px;\n  color: ",";\n\n  // markdown\n  .markdown {\n    font-size: 1.2rem;\n    line-height: 1.5;\n  }\n\n  .markdown hr {\n    margin-top: 100px;\n    margin-bottom: 50px;\n  }\n\n  .markdown h1 {\n    font-size: 1.8rem;\n    margin-top: 2rem;\n    margin-bottom: 1rem;\n    color: ",";\n  }\n\n  .markdown h2 {\n    font-size: 1.6rem;\n    margin-top: 2rem;\n    margin-bottom: 1rem;\n    color: ",";\n  }\n\n  .markdown h3 {\n    font-size: 1.2rem;\n    margin-top: 2rem;\n    margin-bottom: 1rem;\n  }\n\n  .markdown p {\n    margin-top: 1.2rem;\n    margin-bottom: 1.2rem;\n  }\n\n  .markdown a {\n    color: #0070f3;\n    text-decoration: underline;\n    transition: 0.3s;\n    &:hover {\n      color: ",';\n    }\n  }\n  .markdown li {\n    margin-left: 40px;\n  }\n  .markdown img {\n    width: 100%;\n    text-align: center;\n  }\n\n  .markdown pre {\n    margin: 20px 0 80px 0;\n    padding: 10px;\n    background-color: #161b22;\n    font-size: 0.9rem;\n    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n    border-radius: 10px;\n    &::-webkit-scrollbar {\n      width: 2px;\n      background-color: #aaa;\n      border-radius: 10px;\n    }\n    &::-webkit-scrollbar-thumb {\n      height: 10vh;\n      background: rgb(100, 100, 100);\n      border-radius: 10px;\n    }\n  }\n\n  .markdown code {\n  }\n']);return _=function(){return n},n}function A(){let n=(0,a.Z)(["\n  margin-bottom: 100px;\n  width: 100%;\n\n  & p {\n    font-weight: bold;\n  }\n"]);return A=function(){return n},n}let P=n=>{let{title:t,description:e,category:r,keyword:i,date:c,content:a}=n;return(0,o.jsxs)(O,{children:[(0,o.jsxs)(I,{children:[(0,o.jsx)("p",{children:x[r]}),(0,o.jsx)("h1",{children:e}),(0,o.jsx)("span",{children:c})]}),(0,o.jsx)(T,{children:(0,o.jsx)(s.D,{className:"markdown",remarkPlugins:[v.Z],components:{code(n){let{inline:t,className:e,children:r,...i}=n,c=/language-(\w+)/.exec(e||"");return!t&&c?(0,o.jsx)(C.Z,{language:c[1],PreTag:"pre",...i,style:E.xm,children:String(r).replace(/\n$/,"")}):(0,o.jsx)("code",{className:e,...i,children:r})}},children:a})}),(0,o.jsx)(j,{description:e}),(0,o.jsxs)(z,{children:[(0,o.jsx)("p",{children:"COMMENTS"}),(0,o.jsx)(Z,{})]})]})},O=l.ZP.main.withConfig({componentId:"sc-39211eb-0"})(N()),I=l.ZP.section.withConfig({componentId:"sc-39211eb-1"})(S(),n=>n.theme.mainFontColor,n=>n.theme.componentBackground),T=l.ZP.main.withConfig({componentId:"sc-39211eb-2"})(_(),n=>n.theme.mainFontColor,n=>n.theme.componentAccentFontColor,n=>n.theme.componentAccentFontColor,n=>n.theme.componentHover),z=l.ZP.div.withConfig({componentId:"sc-39211eb-3"})(A());var H=!0;function F(n){let{title:t,description:e,category:r,keyword:a,date:s,content:l}=n;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.B,{title:t,description:e,keyword:a,category:r}),(0,o.jsx)(P,{title:t,description:e,category:r,date:s,keyword:a,content:l}),(0,o.jsx)(i(),{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4077287316160146",crossOrigin:"anonymous"})]})}}},function(n){n.O(0,[235,774,888,179],function(){return n(n.s=11587)}),_N_E=n.O()}]);