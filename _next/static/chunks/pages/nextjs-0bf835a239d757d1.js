(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[288],{55075:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nextjs",function(){return t(70032)}])},16434:function(n,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/NEXTJS.b97846b2.png",height:571,width:1e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAAAAABd+vKJAAAAH0lEQVR42mNAAmxCMiCKhUE32p+XgRHIZBRnZkJSAAAc4gE7g2oDvgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}},6308:function(n,e,t){"use strict";t.d(e,{Y:function(){return K}});var o=t(7297),i=t(85893),r=t(19521),c=t(25675),l=t.n(c),s=t(67294),a=t(63750);function u(){let n=(0,o.Z)(["\n  padding: 0;\n  margin: auto;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  width: 300px;\n  display: flex;\n  justify-content: center;\n  justify-content: space-evenly;\n  align-items: center;\n  font-weight: bold;\n  user-select: none;\n  -webkit-user-select: none;\n  transition: 0.2s;\n  & ul,\n  li {\n    list-style: none;\n  }\n  & li {\n    width: 35px;\n    height: 35px;\n    line-height: 35px;\n    text-align: center;\n    font-size: 25px;\n    color: ",";\n    border-radius: 5px;\n    transition: 0.2s;\n    cursor: pointer;\n    &:hover {\n      color: ",";\n      background-color: ",";\n    }\n  }\n  & .activePage {\n    color: ",";\n    background-color: ",";\n  }\n  & li:first-child,\n  li:last-child {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: ",";\n    background-color: ",";\n    &:hover {\n      background-color: ",";\n    }\n  }\n  & li:first-child.noPrev,\n  li:last-child.noNext {\n    color: ",";\n    background-color: ",";\n    cursor: auto;\n  }\n"]);return u=function(){return n},n}let h=n=>{let{activePage:e,itemsCountPerPage:t,totalItemsCount:o,handlePageChange:r,maxItems:c}=n,l=Array.from({length:1>Math.ceil(o/t)?1:Math.ceil(o/t)},(n,e)=>e),[u,h]=(0,s.useState)(1);(0,s.useEffect)(()=>{h(Math.floor(Number((e+c-1)/c)))},[e,c]);let p=Array.from({length:c},(n,e)=>e),g=Array.from({length:c},(n,e)=>e+c*(u-1)),f=1===u?p:g;return(0,i.jsxs)(d,{children:[(0,i.jsx)("li",{onClick:()=>{1!==e&&r(e-1)},className:1===e?"noPrev":"",children:(0,i.jsx)(a.aMQ,{})}),l.map((n,t)=>{if(f[0]<=t&&t<=f[f.length-1])return(0,i.jsx)("li",{id:"".concat(t+1),className:t+1===e?"activePage":"page",onClick:()=>{r(t+1)},children:t+1},n)}),(0,i.jsx)("li",{onClick:()=>{e!==l.length&&r(e+1)},className:e===l.length?"noNext":"",children:(0,i.jsx)(a.AV3,{})})]})},d=r.ZP.ul.withConfig({componentId:"sc-d259d100-0"})(u(),n=>n.theme.buttonFontColor,n=>n.theme.activeButtonColor,n=>n.theme.activeBackgroundColor,n=>n.theme.activeButtonColor,n=>n.theme.activeBackgroundColor,n=>n.theme.prevNextFont,n=>n.theme.prevNextBackground,n=>n.theme.prevNextHover,n=>n.theme.noPrevNextFont,n=>n.theme.noPrevNextBackground);var p=t(17119);function g(){let n=(0,o.Z)(["\n  margin: 0 auto;\n  margin-top: 15px;\n  margin-bottom: 5px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 90vw;\n  height: 150px;\n  box-shadow: 1px 1px 4px 1px ",";\n  @keyframes skeleton {\n    from {\n      filter: brightness(0.8);\n    }\n    50% {\n      filter: brightness(1);\n    }\n    to {\n      filter: brightness(0.8);\n    }\n  }\n"]);return g=function(){return n},n}function f(){let n=(0,o.Z)(["\n  width: 150px;\n  height: 150px;\n  background: ",";\n  filter: brightness(0.8);\n  animation: skeleton 1.2s infinite;\n"]);return f=function(){return n},n}function x(){let n=(0,o.Z)(["\n  margin-left: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-end;\n  width: 50vw;\n  height: 100px;\n"]);return x=function(){return n},n}function m(){let n=(0,o.Z)(["\n  width: 50vw;\n  height: 20px;\n  font-weight: bold;\n  background: ",";\n  filter: brightness(1);\n  animation: skeleton 1.2s infinite;\n"]);return m=function(){return n},n}function w(){let n=(0,o.Z)(["\n  text-align: right;\n  font-size: 0.8rem;\n  width: 10vw;\n  height: 20px;\n  background: ",";\n  filter: brightness(1);\n  animation: skeleton 1.2s infinite;\n"]);return w=function(){return n},n}let j=()=>{let n=Array.from({length:10},(n,e)=>e);return(0,i.jsx)(i.Fragment,{children:n.map((n,e)=>(0,i.jsxs)(b,{children:[(0,i.jsx)(v,{}),(0,i.jsxs)(A,{children:[(0,i.jsx)(y,{}),(0,i.jsx)(y,{}),(0,i.jsx)(k,{})]})]},e))})},b=r.ZP.li.withConfig({componentId:"sc-9bf5ca69-0"})(g(),n=>n.theme.componentShadow),v=r.ZP.div.withConfig({componentId:"sc-9bf5ca69-1"})(f(),n=>n.theme.componentBackground),A=r.ZP.div.withConfig({componentId:"sc-9bf5ca69-2"})(x()),y=r.ZP.p.withConfig({componentId:"sc-9bf5ca69-3"})(m(),n=>n.theme.componentBackground),k=r.ZP.span.withConfig({componentId:"sc-9bf5ca69-4"})(w(),n=>n.theme.componentBackground);var C=t(41664),Z=t.n(C);function P(){let n=(0,o.Z)(["\n  margin: 0 auto;\n  margin-top: 15px;\n  margin-bottom: 5px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 90vw;\n  height: 150px;\n  color: ",";\n  background-color: ",";\n  box-shadow: 1px 1px 4px 1px ",";\n"]);return P=function(){return n},n}function I(){let n=(0,o.Z)(["\n  margin-left: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 50vw;\n  height: 100px;\n  & p {\n    font-weight: bold;\n    overflow-x: hidden;\n  }\n  & span {\n    text-align: right;\n    font-size: 0.8rem;\n  }\n"]);return I=function(){return n},n}function N(){let n=(0,o.Z)([""]);return N=function(){return n},n}let B=n=>{let{postlist:e}=n,t=(0,s.useRef)(1),[o,r]=(0,s.useState)(!0);setTimeout(()=>{r(!1)},1e3);let c=Array.from({length:10},(n,e)=>e),[a,u]=(0,s.useState)([]),[h,d]=(0,s.useState)(!0),g=n=>{if(h&&!o){let o=c.map(e=>e+(n-1)*10),i=e.filter((n,e)=>{if(o[0]<=e&&e<=o[o.length-1])return n});u(n=>n.concat(i)),t.current+=1,d(e.length>a.length)}},f=(0,s.useRef)(),x=n=>{!o&&(f.current&&f.current.disconnect(),f.current=new IntersectionObserver(n=>{let[e]=n;e.isIntersecting&&h&&(r(!0),g(t.current),setTimeout(()=>{r(!1)},1500))}),n&&f.current.observe(n))};return(0,i.jsxs)(i.Fragment,{children:[o?(0,i.jsx)(p.T,{}):null,null==a?void 0:a.map((n,e)=>{let{description:t,date:o,category:r,title:c}=n;return(0,i.jsx)(Z(),{href:"/".concat(c.replaceAll(" ","-")),children:(0,i.jsxs)(S,{children:[(0,i.jsx)(l(),{src:"/images/cards/".concat(r.toUpperCase(),".png"),alt:"".concat(r),width:150,height:150,priority:!0}),(0,i.jsxs)(_,{children:[(0,i.jsx)("p",{children:t.length<45?t:"".concat(t.slice(0,45),"...")}),(0,i.jsx)("span",{children:o})]})]})},e)}),o?(0,i.jsx)(j,{}):null,(0,i.jsx)(E,{id:"observeTarget",ref:x,style:o?{display:"none"}:{display:"block"}})]})},S=r.ZP.li.withConfig({componentId:"sc-309e86c0-0"})(P(),n=>n.theme.componentFontColor,n=>n.theme.componentBackground,n=>n.theme.componentShadow),_=r.ZP.div.withConfig({componentId:"sc-309e86c0-1"})(I()),E=r.ZP.div.withConfig({componentId:"sc-309e86c0-2"})(N());var F=t(45272);function R(){let n=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 660px;\n"]);return R=function(){return n},n}function T(){let n=(0,o.Z)(["\n  margin: 0 auto;\n  color: ",";\n  font-weight: bold;\n  width: 660px;\n"]);return T=function(){return n},n}function U(){let n=(0,o.Z)(["\n  margin: 20px 0;\n  display: grid;\n  justify-content: center;\n  grid-template-columns: 200px 200px 200px;\n  grid-gap: 30px;\n  list-style: none;\n"]);return U=function(){return n},n}function O(){let n=(0,o.Z)(["\n  height: 300px;\n  border-radius: 5px 5px 5px 5px;\n  background-color: ",";\n  cursor: pointer;\n  transition: 0.1s;\n  & img {\n    border-radius: 5px 5px 0 0;\n  }\n  &:hover {\n    box-shadow: 1px 1px 4px 2px ",";\n  }\n"]);return O=function(){return n},n}function J(){let n=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 10px;\n  height: 133px;\n  color: ",";\n  font-weight: bold;\n  & p {\n    width: 100%;\n    overflow-x: hidden;\n  }\n  & span {\n    font-size: 0.8rem;\n    color: ",";\n  }\n"]);return J=function(){return n},n}let K=n=>{let{posts:e}=n,t=(0,F.X)(),o=n=>Number(new Date(n)),r=e.sort((n,e)=>o(e.date)-o(n.date)),[c,a]=(0,s.useState)(1),u=n=>{a(n)},d=Array.from({length:6},(n,e)=>e),p=[];return p=d.map(n=>n+(c-1)*6),(0,i.jsx)(i.Fragment,{children:t?(0,i.jsx)(B,{postlist:r}):(0,i.jsxs)(M,{children:[(0,i.jsxs)(X,{children:["전체 글 (",e.length,")"]}),(0,i.jsx)(z,{children:r.map((n,e)=>{let{title:t,description:o,category:r,date:c,content:s}=n;if(p[0]<=e&&e<=p[5])return(0,i.jsx)(Z(),{href:"/".concat(t.replaceAll(" ","-")),children:(0,i.jsxs)(D,{children:[(0,i.jsx)(l(),{src:"/images/cards/".concat(r.toUpperCase(),".png"),alt:"카테고리 이미지",width:200,height:150,priority:!0}),(0,i.jsxs)(G,{children:[(0,i.jsx)("p",{children:o.length>30?o.slice(0,31)+"...":o}),(0,i.jsx)("span",{children:c.replaceAll("-",". ")})]})]})},e)})}),(0,i.jsx)(h,{activePage:c,itemsCountPerPage:6,totalItemsCount:e.length,handlePageChange:u,maxItems:5})]})})},M=r.ZP.div.withConfig({componentId:"sc-910e4799-0"})(R()),X=r.ZP.p.withConfig({componentId:"sc-910e4799-1"})(T(),n=>n.theme.componentShadow),z=r.ZP.ul.withConfig({componentId:"sc-910e4799-2"})(U()),D=r.ZP.li.withConfig({componentId:"sc-910e4799-3"})(O(),n=>n.theme.componentBackground,n=>n.theme.componentShadow),G=r.ZP.div.withConfig({componentId:"sc-910e4799-4"})(J(),n=>n.theme.componentFontColor,n=>n.theme.componentSubFontColor)},70032:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return l},default:function(){return s}});var o=t(85893),i=t(9008),r=t.n(i),c=t(6308),l=!0;function s(n){let{posts:e}=n;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r(),{children:[(0,o.jsx)("title",{children:"Rain Sugar BangBang Front-End"}),(0,o.jsx)("meta",{name:"description",content:"developer's blog"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("meta",{httpEquiv:"subject",content:"nextjs"}),(0,o.jsx)("meta",{property:"og:title",content:"Rain Sugar BangBang"}),(0,o.jsx)("meta",{property:"og:description",content:"welcome to developer's blog"}),(0,o.jsx)("meta",{property:"og:image",content:t(16434)}),(0,o.jsx)("meta",{name:"naver-site-verification",content:"af9c8049662a7c6c85ea946e9eb561086e70062c"}),(0,o.jsx)("meta",{name:"google-site-verification",content:"Zgp7rA3RAdcRnhPPsGLK-t4KVTO86AejlDIQQIGpvLg"}),(0,o.jsx)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4077287316160146",crossOrigin:"anonymous"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsx)(c.Y,{posts:e})]})}},9008:function(n,e,t){n.exports=t(83121)}},function(n){n.O(0,[774,888,179],function(){return n(n.s=55075)}),_N_E=n.O()}]);