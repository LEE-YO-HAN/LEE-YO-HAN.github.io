(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{11587:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[slug]",function(){return e(76783)}])},73245:function(n,t,e){"use strict";e.d(t,{B:function(){return c}});var o=e(85893),r=e(9008),i=e.n(r);let c=n=>{let{title:t,description:e,keyword:r,category:c}=n;return(0,o.jsxs)(i(),{children:[(0,o.jsxs)("title",{children:["Hanbbi","'","s DevLog"]}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("meta",{name:"description",content:"".concat(e)}),(0,o.jsx)("meta",{name:"keywords",content:"".concat(c,", ").concat(t,", ").concat(r)}),(0,o.jsx)("meta",{httpEquiv:"title",content:"".concat(e)}),(0,o.jsx)("meta",{httpEquiv:"subject",content:"".concat(c)}),(0,o.jsx)("meta",{property:"og:title",content:"".concat(t)}),(0,o.jsx)("meta",{property:"og:description",content:"".concat(e)}),(0,o.jsx)("meta",{property:"og:image",content:"/images/cards/".concat(c.toUpperCase(),".png")}),(0,o.jsx)("meta",{name:"naver-site-verification",content:"af9c8049662a7c6c85ea946e9eb561086e70062c"}),(0,o.jsx)("meta",{name:"google-site-verification",content:"Zgp7rA3RAdcRnhPPsGLK-t4KVTO86AejlDIQQIGpvLg"}),(0,o.jsx)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4077287316160146",crossOrigin:"anonymous"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})}},76783:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return T},default:function(){return z}});var o=e(85893),r=e(73245),i=e(7297),c=e(89313),a=e(19521),s=e(11163),l=e(67294),d=e(45272),m=e(6154),p=e(41664),h=e.n(p);let u={github:"Simple Memo",html:"HTML",css:"CSS",javascript:"javascript",typescript:"TypeScript",react:"React",nextjs:"NextJS",nestjs:"NestJS",sw:"정보처리기사",redux:"Redux"};var g=e(21876).Buffer;function x(){let n=(0,i.Z)(["\n  margin: 50px 0;\n  padding: 15px;\n  list-style: none;\n  border: 1px solid #3a3a3a;\n  color: ",";\n  background-color: ",";\n\n  & p {\n    margin-bottom: 15px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid #3a3a3a;\n  }\n"]);return x=function(){return n},n}function f(){let n=(0,i.Z)(["\n  height: 150px;\n  overflow-y: scroll;\n\n  & a {\n    cursor: auto;\n    & span {\n      color: ",";\n      cursor: pointer;\n      transition: 0.2s;\n\n      &:hover {\n        color: ",";\n        font-weight: bold;\n      }\n    }\n    & .thisPost {\n      color: ",";\n      font-weight: bold;\n    }\n  }\n  & li {\n    margin-bottom: 5px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n\n  &::-webkit-scrollbar {\n    width: 2px;\n    background-color: #aaa;\n  }\n  &::-webkit-scrollbar-thumb {\n    height: 10vh;\n    background: rgb(100, 100, 100);\n  }\n"]);return f=function(){return n},n}let b=n=>{let{description:t}=n,{asPath:e}=(0,s.useRouter)(),r=(0,d.X)(),i=e.split("-")[0].replace("/",""),c="https://api.github.com/repos/LEE-YO-HAN/LEE-YO-HAN.github.io/contents/src/posting",a={headers:{"Content-Type":"application/json"}},[p,x]=(0,l.useState)([]),f=async n=>{let t="".concat(c,"/").concat(i,"/").concat(n),e=await m.Z.get(t,a),o=g.from(e.data.content,"base64").toString(),r=o.match(/^---\n([\s\S]+?)\n---/);if(r){let n=JSON.stringify(r[0]).split("\\n"),t=n[5].match(/\d{4}-\d{2}-\d{2}/);if(t){let e={title:n[1].split("title: ")[1].replaceAll(" ","-"),description:n[2].split("description: ")[1],category:n[3].split("category: ")[1],date:t[0]};return e}}},b=async()=>{let n="".concat(c,"/").concat(i),t=await m.Z.get(n,a),e=[];for(let n of t.data){let t=await f(n.name);t&&e.push(t)}e.sort((n,t)=>+new Date(t.date)-+new Date(n.date)),x(e)};return(0,l.useEffect)(()=>{b()},[]),(0,o.jsxs)(w,{children:[(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:u[i]})," 카테고리의 다른 글"]}),(0,o.jsx)(j,{children:p.map((n,e)=>(0,o.jsxs)("li",{children:[(0,o.jsx)(h(),{href:"".concat(n.title.replaceAll(" ","-")),children:(0,o.jsx)("span",{className:t===n.description?"thisPost":"",children:n.description.length<50?n.description:n.description.slice(0,50)+"..."})}),(0,o.jsx)("span",{style:r?{display:"none"}:{},children:n.date})]},e))})]})},w=a.ZP.div.withConfig({componentId:"sc-e5001ff0-0"})(x(),n=>n.theme.componentFontColor,n=>n.theme.componentBackground),j=a.ZP.ul.withConfig({componentId:"sc-e5001ff0-1"})(f(),n=>n.theme.componentFontColor,n=>n.theme.componentHover,n=>n.theme.componentHover);var k=e(72490),y=e(98683),v=e(84283);let C=()=>{let n=n=>{if(n){let t=document.createElement("script");t.src="https://utteranc.es/client.js",t.async=!0,t.setAttribute("repo","LEE-YO-HAN/github.io.utterances"),t.setAttribute("issue-term","pathname"),t.setAttribute("theme","github-dark"),t.setAttribute("label","blog-comment"),t.crossOrigin="anonymous",n.appendChild(t)}};return(0,l.useEffect)(()=>{let t=document.getElementById("comment-box");n(t)},[]),(0,o.jsx)("section",{id:"comment-box"})};function E(){let n=(0,i.Z)(["\n  max-width: 640px;\n\n  @media only screen and (max-width: 480px) {\n    max-width: 480px;\n    width: 90vw;\n  }\n"]);return E=function(){return n},n}function Z(){let n=(0,i.Z)(["\n  margin-top: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  height: 200px;\n  color: ",";\n  background-color: ",";\n  border-radius: 20px;\n  & h1 {\n    padding: 0 10px;\n    width: 95%;\n    font-weight: bold;\n    font-size: 2rem;\n    overflow-x: hidden;\n  }\n  & p {\n    margin-top: 10px;\n    padding: 0 10px;\n    width: 95%;\n    font-weight: bold;\n    font-size: 1.2rem;\n  }\n  & span {\n    padding: 0 10px;\n    width: 95%;\n    font-weight: bold;\n    font-size: 0.9rem;\n  }\n"]);return Z=function(){return n},n}function N(){let n=(0,i.Z)(["\n  margin-bottom: 50px;\n  color: ",";\n\n  // markdown\n  .markdown {\n    font-size: 1.2rem;\n    line-height: 1.5;\n  }\n\n  .markdown hr {\n    margin-top: 100px;\n    margin-bottom: 50px;\n  }\n\n  .markdown h1 {\n    font-size: 1.8rem;\n    margin-top: 2rem;\n    margin-bottom: 1rem;\n    color: ",";\n  }\n\n  .markdown h2 {\n    font-size: 1.6rem;\n    margin-top: 2rem;\n    margin-bottom: 1rem;\n    color: ",";\n  }\n\n  .markdown h3 {\n    font-size: 1.2rem;\n    margin-top: 2rem;\n    margin-bottom: 1rem;\n  }\n\n  .markdown p {\n    margin-top: 1.2rem;\n    margin-bottom: 1.2rem;\n  }\n\n  .markdown a {\n    color: #0070f3;\n    text-decoration: underline;\n    transition: 0.3s;\n    &:hover {\n      color: ",';\n    }\n  }\n  .markdown li {\n    margin-left: 40px;\n  }\n  .markdown img {\n    width: 100%;\n    text-align: center;\n  }\n\n  .markdown pre {\n    margin: 20px 0 80px 0;\n    padding: 10px;\n    background-color: #161b22;\n    font-size: 0.9rem;\n    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n    border-radius: 10px;\n    &::-webkit-scrollbar {\n      width: 2px;\n      background-color: #aaa;\n      border-radius: 10px;\n    }\n    &::-webkit-scrollbar-thumb {\n      height: 10vh;\n      background: rgb(100, 100, 100);\n      border-radius: 10px;\n    }\n  }\n\n  .markdown code {\n  }\n']);return N=function(){return n},n}function S(){let n=(0,i.Z)(["\n  margin-bottom: 100px;\n  width: 100%;\n\n  & p {\n    font-weight: bold;\n  }\n"]);return S=function(){return n},n}let _=n=>{let{title:t,description:e,category:r,keyword:i,date:a,content:s}=n;return(0,o.jsxs)(A,{children:[(0,o.jsxs)(P,{children:[(0,o.jsx)("p",{children:u[r]}),(0,o.jsx)("h1",{children:e}),(0,o.jsx)("span",{children:a})]}),(0,o.jsx)(I,{children:(0,o.jsx)(c.D,{className:"markdown",remarkPlugins:[k.Z],components:{code(n){let{inline:t,className:e,children:r,...i}=n,c=/language-(\w+)/.exec(e||"");return!t&&c?(0,o.jsx)(y.Z,{language:c[1],PreTag:"pre",...i,style:v.xm,children:String(r).replace(/\n$/,"")}):(0,o.jsx)("code",{className:e,...i,children:r})}},children:s})}),(0,o.jsx)(b,{description:e}),(0,o.jsxs)(O,{children:[(0,o.jsx)("p",{children:"COMMENTS"}),(0,o.jsx)(C,{})]})]})},A=a.ZP.main.withConfig({componentId:"sc-39211eb-0"})(E()),P=a.ZP.section.withConfig({componentId:"sc-39211eb-1"})(Z(),n=>n.theme.mainFontColor,n=>n.theme.componentBackground),I=a.ZP.main.withConfig({componentId:"sc-39211eb-2"})(N(),n=>n.theme.mainFontColor,n=>n.theme.componentAccentFontColor,n=>n.theme.componentAccentFontColor,n=>n.theme.componentHover),O=a.ZP.div.withConfig({componentId:"sc-39211eb-3"})(S());var T=!0;function z(n){let{title:t,description:e,category:i,keyword:c,date:a,content:s}=n;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.B,{title:t,description:e,keyword:c,category:i}),(0,o.jsx)(_,{title:t,description:e,category:i,date:a,keyword:c,content:s})]})}}},function(n){n.O(0,[0,774,888,179],function(){return n(n.s=11587)}),_N_E=n.O()}]);