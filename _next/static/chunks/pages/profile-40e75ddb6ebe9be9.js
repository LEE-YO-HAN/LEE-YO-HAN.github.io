(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{99813:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return t(75587)}])},75587:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return eE}});var i=t(7297),r=t(85893),o=t(19521),s=t(67294);function c(){let n=(0,i.Z)(["\n  position: fixed;\n  top: 45%;\n  left: 50%;\n  .lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n  .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: gold;\n    animation-timing-function: cubic-bezier(0, 1, 1, 0);\n  }\n  .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    animation: lds-ellipsis1 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    animation: lds-ellipsis2 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    animation: lds-ellipsis2 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    animation: lds-ellipsis3 0.6s infinite;\n  }\n  @keyframes lds-ellipsis1 {\n    0% {\n      transform: scale(0);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n  @keyframes lds-ellipsis3 {\n    0% {\n      transform: scale(1);\n    }\n    100% {\n      transform: scale(0);\n    }\n  }\n  @keyframes lds-ellipsis2 {\n    0% {\n      transform: translate(0, 0);\n    }\n    100% {\n      transform: translate(24px, 0);\n    }\n  }\n"]);return c=function(){return n},n}let l=()=>(0,r.jsx)(d,{children:(0,r.jsxs)("div",{className:"lds-ellipsis",children:[(0,r.jsx)("div",{}),(0,r.jsx)("div",{}),(0,r.jsx)("div",{}),(0,r.jsx)("div",{})]})}),d=o.ZP.div.withConfig({componentId:"sc-18408d72-0"})(c()),a=(n,e)=>{let t=window.pageYOffset,i=n-t,r=null,o=n=>{var s;null===r&&(r=n);let c=n-r,l=(s=c/(e/2))<1?i/2*s*s+t:-i/2*(--s*(s-2)-1)+t;window.scrollTo(0,l),c<e&&requestAnimationFrame(o)};requestAnimationFrame(o)},f=()=>{let[n,e]=(0,s.useState)(""),t=(0,s.useRef)(0),i=(0,s.useRef)(!1);return(0,s.useEffect)(()=>{let n=()=>{let n=window.pageYOffset;i.current||(n>t.current?e("DOWN"):e("UP"),i.current=!0,setTimeout(()=>{i.current=!1,e("")},600)),t.current=n};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[t]),{scrollCheck:n}};function u(){let n=(0,i.Z)(["\n  margin: 0 auto;\n  width: 95vw;\n  height: 100vh;\n"]);return u=function(){return n},n}let h=n=>{let{children:e}=n;return(0,r.jsx)(p,{children:e})},p=o.ZP.div.withConfig({componentId:"sc-c22faee9-0"})(u());var x=t(41664),g=t.n(x),m=t(91731);function j(){let n=(0,i.Z)(["\n  position: absolute;\n  top: 2%;\n  left: 2%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 135px;\n  font-weight: bold;\n  font-size: 1.2rem;\n  color: #838383;\n  transition: 0.2s;\n  cursor: pointer;\n\n  &:hover {\n    color: black;\n  }\n"]);return j=function(){return n},n}let b=()=>(0,r.jsx)(g(),{href:"/",children:(0,r.jsxs)(w,{children:[(0,r.jsx)(m.fcR,{}),"Back to Blog"]})}),w=o.ZP.span.withConfig({componentId:"sc-205ecc49-0"})(j());var y=t(63750);function v(){let n=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 15%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 2rem;\n"]);return v=function(){return n},n}function k(){let n=(0,i.Z)(["\n  margin-left: 10px;\n  margin-right: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  @keyframes spinningStar {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes spinningStar2 {\n    from {\n      transform: rotate(360deg);\n    }\n    to {\n      transform: rotate(0deg);\n    }\n  }\n  & svg {\n    animation: spinningStar 1.5s infinite ease-in-out;\n  }\n  & .star2 {\n    animation: spinningStar2 1.5s infinite ease-in-out;\n  }\n"]);return k=function(){return n},n}let C=()=>(0,r.jsxs)(Z,{children:[(0,r.jsx)(I,{children:(0,r.jsx)(y.RrZ,{className:"star2"})}),"Welcome To My Profile"," ",(0,r.jsx)(I,{children:(0,r.jsx)(y.RrZ,{})})]}),Z=o.ZP.header.withConfig({componentId:"sc-6adbf0cb-0"})(v()),I=o.ZP.div.withConfig({componentId:"sc-6adbf0cb-1"})(k());var P=t(25675),E=t.n(P);function S(){let n=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 25%;\n  animation: ProfileFadeIn 2s ease-in-out;\n  @keyframes ProfileFadeIn {\n    0% {\n      opacity: 0;\n    }\n    25% {\n      opacity: 0;\n    }\n    50% {\n      opacity: 1;\n    }\n  }\n  & img {\n    border-radius: 50%;\n  }\n  & span {\n    margin: 5px 0 5px 0;\n    font-weight: bold;\n    font-size: 1.6rem;\n  }\n"]);return S=function(){return n},n}let z=()=>(0,r.jsxs)(L,{children:[(0,r.jsx)(E(),{src:"https://user-images.githubusercontent.com/85297720/227774217-57222e9b-baca-493d-80a1-dfc5be3f93ed.png",width:200,height:200,alt:"profile",priority:!0}),(0,r.jsx)("span",{children:"Yo Han (26)"})]}),L=o.ZP.div.withConfig({componentId:"sc-eb11ae68-0"})(S());function _(){let n=(0,i.Z)(["\n  margin: 20px 0 20px 50px;\n  display: flex;\n  flex-direction: column;\n  font-size: 1.4rem;\n  animation: IntroductionFadeIn 2s ease-in-out;\n  @keyframes IntroductionFadeIn {\n    0% {\n      opacity: 0;\n    }\n    50% {\n      opacity: 0;\n    }\n    75% {\n      opacity: 1;\n    }\n  }\n  & h2 {\n    font-size: 2rem;\n    margin-bottom: 10px;\n  }\n"]);return _=function(){return n},n}function N(){let n=(0,i.Z)(["\n  list-style: circle;\n  & li {\n    margin: 0 0 10px 10px;\n    list-style-type: circle;\n    list-style-position: inside;\n  }\n"]);return N=function(){return n},n}let T=()=>(0,r.jsxs)(F,{children:[(0,r.jsx)("h2",{children:"Introduction"}),(0,r.jsxs)(B,{children:[(0,r.jsx)("li",{children:"안녕하세요! 프론트엔드 개발자 Yohan입니다."}),(0,r.jsx)("li",{children:"실질적인 문제 해결에 기여한다는 매력에 이끌려 개발자의 길을 걷고 있습니다."}),(0,r.jsx)("li",{children:"작은 것이라도 새롭게 배운 것은 Github나 블로그를 통해 꾸준히 기록합니다."}),(0,r.jsx)("li",{children:"좋은 코드에 대해 끊임없이 고민하고 있습니다."}),(0,r.jsx)("li",{children:"개인의 성장에 많은 관심이 있습니다."})]})]}),F=o.ZP.div.withConfig({componentId:"sc-23176ce8-0"})(_()),B=o.ZP.ul.withConfig({componentId:"sc-23176ce8-1"})(N());var R=t(8193),O=t(89583);function A(){let n=(0,i.Z)(["\n  font-size: 1.4rem;\n\n  & a {\n    margin-left: 10px;\n    color: black;\n    transition: 0.1s;\n    &:hover {\n      color: gold;\n    }\n  }\n"]);return A=function(){return n},n}function Y(){let n=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: 10px;\n  & svg {\n    margin-right: 5px;\n  }\n  & span {\n    margin-left: 10px;\n  }\n"]);return Y=function(){return n},n}function H(){let n=(0,i.Z)(["\n  margin: 20px 70px 20px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  font-size: 1.2rem;\n  animation: ContactFadeIn 2s ease-in-out;\n  @keyframes ContactFadeIn {\n    0% {\n      opacity: 0;\n    }\n    75% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  & h2 {\n    font-size: 2rem;\n    margin-bottom: 10px;\n  }\n"]);return H=function(){return n},n}let q=()=>{let n=[{icon:(0,r.jsx)(R.Dme,{}),name:"Connect : ",content:"yhl0078@gmail.com"},{icon:(0,r.jsx)(y.rFR,{}),name:"Github : ",content:"https://github.com/LEE-YO-HAN"},{icon:(0,r.jsx)(O.vu5,{}),name:"Blog : ",content:"https://lee-yo-han.github.io/"}];return(0,r.jsxs)(U,{children:[(0,r.jsx)("h2",{children:"Contact & Channel"}),(0,r.jsx)(D,{children:n.map((n,e)=>{let{icon:t,name:i,content:o}=n;return(0,r.jsxs)(M,{children:[t," ",(0,r.jsx)("strong",{children:i}),0===e?(0,r.jsx)("span",{children:o}):(0,r.jsx)(g(),{href:o,target:"_blank",children:o})]},e)})})]})},D=o.ZP.div.withConfig({componentId:"sc-12e2bcea-0"})(A()),M=o.ZP.div.withConfig({componentId:"sc-12e2bcea-1"})(Y()),U=o.ZP.div.withConfig({componentId:"sc-12e2bcea-2"})(H()),X=()=>(0,r.jsxs)(h,{children:[(0,r.jsx)(b,{}),(0,r.jsx)(C,{}),(0,r.jsx)(z,{}),(0,r.jsx)(T,{}),(0,r.jsx)(q,{})]});function G(){let n=(0,i.Z)(["\n  margin: 20px 80px 20px 0;\n  padding: 30px;\n  width: 35vw;\n  min-height: 15vh;\n  border: 3px solid gold;\n  border-radius: 20px;\n  background-color: #f8f0ca7c;\n  transition: 0.3s;\n\n  animation: ActiveStack 0.3s ease-in-out;\n  @keyframes ActiveStack {\n    0% {\n      opacity: 0;\n      margin-right: 500px;\n    }\n    100% {\n      opacity: 1;\n      margin-right: 80px;\n    }\n  }\n  & h2 {\n    font-size: 1.6rem;\n    margin: 10px 0 10px 0;\n  }\n  & hr {\n    margin: 10px 0 10px 0;\n    border: none;\n    box-shadow: 0 0 0 1px gold;\n  }\n  & p {\n    margin: 10px 0 10px 0;\n    font-size: 1.2rem;\n  }\n"]);return G=function(){return n},n}function K(){let n=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n\n  & img {\n    margin-right: 15px;\n  }\n"]);return K=function(){return n},n}function W(){let n=(0,i.Z)(["\n  margin-bottom: 15px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100px;\n  font-size: 1.6rem;\n  color: gold;\n"]);return W=function(){return n},n}function Q(){let n=(0,i.Z)(["\n  margin-top: 45px;\n  width: 50px;\n  text-align: center;\n  animation: QCircle 0.4s ease-in;\n  @keyframes QCircle {\n    0% {\n      opacity: 0;\n      margin-right: 230px;\n    }\n    100% {\n      opacity: 1;\n      margin-right: 0px;\n    }\n  }\n  & svg {\n    font-size: 1.4rem;\n    cursor: pointer;\n    transition: 0.3s;\n    &:hover {\n      color: gold;\n    }\n  }\n"]);return Q=function(){return n},n}function V(){let n=(0,i.Z)(["\n  padding: 10px;\n  position: absolute;\n  transform: translate(-92%, -4%);\n  width: 300px;\n  border-radius: 10px;\n  border: 3px solid gold;\n  background-color: #fde77cd8;\n  opacity: 0;\n  font-weight: bold;\n  transition: 0.4s;\n  & li {\n    list-style: none;\n    text-align: left;\n  }\n"]);return V=function(){return n},n}let J={callName:"",name:"",star:0,comment:""},$=n=>{let{activeItem:e}=n,[{callName:i,name:o,star:c,comment:l},d]=(0,s.useState)(J),[a,f]=(0,s.useState)(!1),u=async n=>{if(""!==n){let{stackStatus:e}=await t.e(718).then(t.bind(t,48718)),i=e.filter(e=>e.callName===n)[0];d(i)}};(0,s.useEffect)(()=>{u(e)},[e]);let h=[,,,].fill(0);return(0,r.jsx)(nn,{onClick:n=>{n.stopPropagation()},style:""===e?{display:"none"}:{},children:""!==e&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(ne,{children:[(0,r.jsx)(E(),{src:"/images/stack/".concat(i,".png"),alt:"stackLogo",width:100,height:100}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:o}),(0,r.jsx)(nt,{children:h.map((n,e)=>e<c?(0,r.jsx)(y.kRm,{},e):(0,r.jsx)(y.RrZ,{},e))})]}),(0,r.jsxs)(ni,{children:[(0,r.jsx)(R.KpA,{onMouseEnter:()=>f(!a),onMouseLeave:()=>f(!a)}),(0,r.jsxs)(nr,{style:a?{opacity:"1"}:{},children:[(0,r.jsx)("p",{children:"별점 기준"}),(0,r.jsx)("li",{children:"실력이 아닌 사용 익숙함의 정도로 구분했습니다!"}),(0,r.jsx)("hr",{}),(0,r.jsx)("li",{children:"1 : 사용 빈도가 많진 않지만 사용 방법은 아는 정도"}),(0,r.jsx)("li",{children:"2 : 간간히 사용하며 어느정도 익숙함."}),(0,r.jsx)("li",{children:"3 : 주로 사용하는 스택"})]})]})]}),(0,r.jsx)("hr",{}),(0,r.jsx)("p",{children:l})]})})},nn=o.ZP.div.withConfig({componentId:"sc-c8bccc4f-0"})(G()),ne=o.ZP.div.withConfig({componentId:"sc-c8bccc4f-1"})(K()),nt=o.ZP.span.withConfig({componentId:"sc-c8bccc4f-2"})(W()),ni=o.ZP.div.withConfig({componentId:"sc-c8bccc4f-3"})(Q()),nr=o.ZP.div.withConfig({componentId:"sc-c8bccc4f-4"})(V()),no=()=>{let[n,e]=(0,s.useState)(!1),t=(0,s.useRef)(),i=n=>{t.current&&t.current.disconnect(),t.current=new IntersectionObserver(n=>{let[t]=n;t.isIntersecting&&e(!0)}),n&&t.current.observe(n)};return{observer:i,isObserved:n}};function ns(){let n=(0,i.Z)(["\n  margin: 0 auto;\n  /* width: 90%; */\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  transition: 1.5s ease-in-out;\n  opacity: 0;\n"]);return ns=function(){return n},n}function nc(){let n=(0,i.Z)(["\n  margin: 0 50px;\n  margin-top: 20px;\n  min-width: 440px;\n  & h2 {\n    font-size: 2rem;\n    margin-bottom: 10px;\n  }\n  & p {\n    margin: 25px 0 10px 0;\n    font-size: 1.6rem;\n    font-weight: bold;\n  }\n  & img {\n    margin: 0 5px 0 5px;\n    border-radius: 30px;\n    cursor: pointer;\n    transition: 0.2s;\n    &:hover {\n      box-shadow: 2px 2px 4px 2px gold;\n    }\n  }\n"]);return nc=function(){return n},n}let nl=()=>{let[n,e]=(0,s.useState)(""),{observer:t,isObserved:i}=no();return(0,r.jsx)(h,{children:(0,r.jsxs)(na,{onClick:()=>e(""),style:i?{opacity:"1"}:{},children:[(0,r.jsxs)(nf,{children:[(0,r.jsx)("h2",{ref:t,children:"Skills"}),[["Languages","html","css","javascript","typescript"],["FrameWorks","react","next"],["Librarys","styledcomponents","reduxtoolkit","reactquery","jest"],["DevOps","git","sourcetree","vsc","vercel"],["Now Learning...","nest","postgresql"]].map((t,i)=>(0,r.jsx)(s.Fragment,{children:t.map((t,i)=>(0,r.jsx)(s.Fragment,{children:0===i?(0,r.jsx)("p",{children:t}):(0,r.jsx)(E(),{src:"/images/stack/".concat(t,".png"),alt:"stackCard",width:80,height:80,priority:!0,onClick:n=>{n.stopPropagation(),e(t)},style:n===t?{boxShadow:"2px 2px 4px 3px gold"}:{}})},i))},i))]}),(0,r.jsx)($,{activeItem:n})]})})},nd=s.memo(nl),na=o.ZP.section.withConfig({componentId:"sc-54320502-0"})(ns()),nf=o.ZP.div.withConfig({componentId:"sc-54320502-1"})(nc());function nu(){let n=(0,i.Z)(["\n  margin: 0 auto;\n  & h2 {\n    font-size: 2rem;\n    padding-top: 10px;\n  }\n"]);return nu=function(){return n},n}function nh(){let n=(0,i.Z)(["\n  margin: 30px 0 30px 0;\n  & h3 {\n    font-size: 1.6rem;\n  }\n  & p {\n    font-size: 1.4rem;\n  }\n  & ul {\n    font-size: 1.2rem;\n    list-style-type: circle;\n  }\n  & li {\n    font-size: 1.2rem;\n  }\n"]);return nh=function(){return n},n}function np(){let n=(0,i.Z)(["\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n\n  & p {\n    margin-bottom: 5px;\n    font-weight: bold;\n  }\n  & a {\n    color: #796aff;\n    transition: 0.2s;\n    &:hover {\n      color: gold;\n    }\n  }\n"]);return np=function(){return n},n}function nx(){let n=(0,i.Z)(["\n  & h4 {\n    margin-bottom: 10px;\n  }\n"]);return nx=function(){return n},n}let ng=()=>(0,r.jsx)(h,{children:(0,r.jsxs)(nm,{children:[(0,r.jsx)("h2",{children:"Projects"}),(0,r.jsx)(nj,{children:(0,r.jsxs)(nb,{children:[(0,r.jsxs)(nw,{children:[(0,r.jsx)("h3",{children:"EVER-RENT"}),(0,r.jsx)("p",{children:"개인 간 중고 물품 렌탈 거래 플랫폼 개발"}),(0,r.jsx)("h4",{children:"팀원 (React: 3명 / Spring 2명)"}),(0,r.jsx)("iframe",{width:"500",height:"300",src:"https://www.youtube.com/embed/DRviCVKXfDY",title:"에버렌트 시연영상",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("p",{children:"핵심경험"}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Kakao map API"}),"를 이용한 위치 정보 조회"]}),(0,r.jsx)("li",{children:"Redux/toolkit을 이용한 글 목록 구현 (무한 스크롤 / 페이지네이션)"}),(0,r.jsxs)("li",{children:["카테고리, 지역별 제품 필터링, ",(0,r.jsx)("strong",{children:"검색 기능"})," 연동"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"LoadingSpinner, SkeletonUI"})," 제작"]}),(0,r.jsxs)("li",{children:["React-datepicker를 이용한 ",(0,r.jsx)("strong",{children:"custom calendar"})," 제작"]}),(0,r.jsx)("li",{children:"React-responsive(mediaQuery)를 이용한 반응형 웹 적용"}),(0,r.jsx)(g(),{href:"https://github.com/ever-rent/ever-rent-FE",target:"_blank",children:"Github Link"})]})]})}),(0,r.jsx)(nj,{children:(0,r.jsxs)(nb,{children:[(0,r.jsxs)("ul",{children:[(0,r.jsx)("p",{children:"핵심경험"}),(0,r.jsx)("li",{children:"기능 구현 코드 복습과 더 나은 코드에 대한 고민"}),(0,r.jsx)("li",{children:"부드러운 다크모드 전환 구현"}),(0,r.jsx)("li",{children:"기능별 컴포넌트의 분리를 통해 라이브러리와 유사한 틀 구성"}),(0,r.jsx)(g(),{href:"https://github.com/ToyCode-org/ToyCode",target:"_blank",children:"Github Link"})]}),(0,r.jsxs)(nw,{children:[(0,r.jsx)("h3",{children:"ToyCode"}),(0,r.jsx)("p",{children:"라이브러리를 사용하지 않은 간단한 기능 구현"}),(0,r.jsx)("h4",{children:"개인 프로젝트"}),(0,r.jsx)("iframe",{width:"500",height:"300",src:"https://www.youtube.com/embed/BkL5agYVa9k",title:"ToyCode test",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})]})})]})}),nm=o.ZP.section.withConfig({componentId:"sc-39e91ad6-0"})(nu()),nj=o.ZP.div.withConfig({componentId:"sc-39e91ad6-1"})(nh()),nb=o.ZP.div.withConfig({componentId:"sc-39e91ad6-2"})(np()),nw=o.ZP.div.withConfig({componentId:"sc-39e91ad6-3"})(nx());function ny(){let n=(0,i.Z)(["\n  animation: ExpFadein 0.6s;\n  @keyframes ExpFadein {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n\n  & p {\n    font-size: 1.2rem;\n    margin-bottom: 10px;\n  }\n"]);return ny=function(){return n},n}let nv=()=>(0,r.jsxs)(nI,{children:[(0,r.jsx)("h2",{children:"Now Doing"}),(0,r.jsx)("p",{children:"개인 프로젝트"}),(0,r.jsx)("li",{children:(0,r.jsx)(g(),{href:"https://lee-yo-han.github.io/",target:"_blank",children:"GITHUB Blog 제작"})}),(0,r.jsx)("li",{children:(0,r.jsx)(g(),{href:"https://github.com/ToyCode-org/ToyCode",target:"_blank",children:"ToyCode - 간단한 기능 복습"})}),(0,r.jsx)("li",{children:(0,r.jsx)(g(),{href:"https://github.com/ToyCode-org/optional-React-Redux-snippet",target:"_blank",children:"코드스니펫 제작 - 반복되는 코드를 최소화하기 위한 간단한 스니펫 제작"})})]}),nk=()=>(0,r.jsxs)(nI,{children:[(0,r.jsx)("h2",{children:"원티드 프리온보딩 인턴십"}),(0,r.jsx)("p",{children:"2022.12.19 - 2023.01.20(4주)"}),(0,r.jsx)("li",{children:(0,r.jsxs)(g(),{href:"https://github.com/LEE-YO-HAN/week4-project",target:"_blank",children:["프로젝트 과제",(0,r.jsx)("strong",{children:"(4주차) - Pagination"})]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(g(),{href:"https://github.com/wanted-onboarding8-6/pre-onboarding-8th-3week-6",target:"_blank",children:["프로젝트 과제",(0,r.jsx)("strong",{children:"(3주차) - Search & caching"})]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(g(),{href:"https://github.com/wanted-onboarding8-6/pre-onboarding-8th-2week-6",target:"_blank",children:["프로젝트 과제",(0,r.jsx)("strong",{children:"(2주차) - kanbanBoard"})]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(g(),{href:"https://github.com/LEE-YO-HAN/wanted-pre-onboarding-frontend",target:"_blank",children:["프로젝트 과제",(0,r.jsx)("strong",{children:"(1주차) - TodoList"})]})})]}),nC=()=>(0,r.jsxs)(nI,{children:[(0,r.jsx)("h2",{children:"디지털서울문화예술대학교"}),(0,r.jsx)("p",{children:"2015.03.02 - 2021-08-18(졸업)"}),(0,r.jsx)("span",{children:"상담심리학과(학사)"})]}),nZ=()=>(0,r.jsxs)(nI,{children:[(0,r.jsx)("h2",{children:"팀스파르타 주관 부트캠 프 이수"}),(0,r.jsx)("p",{children:"2022.08.01 - 2022.11.04(12주)"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("p",{children:"팀 프로젝트를 통한 협업능력 강화(React-Sprig)"}),(0,r.jsx)("li",{children:(0,r.jsx)(g(),{href:"https://github.com/ever-rent/ever-rent-FE",target:"_blank",children:"Ever-Rent (6주)"})}),(0,r.jsx)("li",{children:(0,r.jsx)(g(),{href:"https://github.com/ohhouse-team10/OHouse_FE",target:"_blank",children:"오늘의 집 클론코딩 (1주)"})})]})]}),nI=o.ZP.section.withConfig({componentId:"sc-fb4dbffc-0"})(ny());function nP(){let n=(0,i.Z)(["\n  & h2 {\n    font-size: 2rem;\n    margin-bottom: 10px;\n    padding-top: 10px;\n  }\n"]);return nP=function(){return n},n}function nE(){let n=(0,i.Z)(["\n  margin-top: 20vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  height: 50vh;\n"]);return nE=function(){return n},n}function nS(){let n=(0,i.Z)(["\n  position: absolute;\n  transform: translate(-228%, 150%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 18%;\n  font-size: 1.5rem;\n  & li {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    list-style: none;\n    height: 15%;\n    border: 1px solid gold;\n    background: linear-gradient(165deg, #ffff97 0%, #ffffa6 0%, #ffffff 100%);\n    cursor: pointer;\n    &:hover {\n      background: linear-gradient(\n        165deg,\n        #ffffa7 0%,\n        #ffffa6 50%,\n        #feffec 100%\n      );\n    }\n    &:first-child {\n      border-radius: 0 15px 0 0;\n    }\n    &:last-child {\n      border-radius: 0 0 15px 0;\n    }\n  }\n"]);return nS=function(){return n},n}function nz(){let n=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 25%;\n"]);return nz=function(){return n},n}function nL(){let n=(0,i.Z)(["\n  width: 15px;\n  height: 40%;\n  background-color: #6360ff;\n  border-radius: 10px 10px 0 0;\n  cursor: pointer;\n  & div {\n    border: 3px solid #6360ff;\n    transform: translate(-30%, 225%);\n    transition: 0.2s;\n    &:hover {\n      background-color: #6360ff;\n    }\n  }\n"]);return nL=function(){return n},n}function n_(){let n=(0,i.Z)(["\n  width: 15px;\n  height: 30%;\n  background-color: #60b2ff;\n  border-radius: 10px 10px 0 0;\n  cursor: pointer;\n  & div {\n    border: 3px solid #60b2ff;\n    transform: translate(-30%, 150%);\n    transition: 0.2s;\n    &:hover {\n      background-color: #60b2ff;\n    }\n  }\n"]);return n_=function(){return n},n}function nN(){let n=(0,i.Z)(["\n  width: 15px;\n  height: 20%;\n  background-color: #ffad60;\n  cursor: pointer;\n  & div {\n    border: 3px solid #ffad60;\n    transform: translate(-30%, 90%);\n    transition: 0.2s;\n    &:hover {\n      background-color: #ffad60;\n    }\n  }\n"]);return nN=function(){return n},n}function nT(){let n=(0,i.Z)(["\n  width: 15px;\n  height: 10%;\n  background-color: #ff6060;\n  border-radius: 0 0 10px 10px;\n  cursor: pointer;\n  & div {\n    border: 3px solid #ff6060;\n    transform: translate(-30%, 15%);\n    transition: 0.2s;\n    &:hover {\n      background-color: #ff6060;\n    }\n  }\n"]);return nT=function(){return n},n}function nF(){let n=(0,i.Z)(["\n  position: absolute;\n  transform: translate(-30%, 250%);\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: white;\n  border: 3px solid gold;\n  cursor: pointer;\n"]);return nF=function(){return n},n}function nB(){let n=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 50%;\n\n  & li {\n    list-style: none;\n  }\n  & a {\n    font-size: 1.2rem;\n    color: #796aff;\n    transition: 0.3s;\n    &:hover {\n      color: gold;\n    }\n  }\n"]);return nB=function(){return n},n}let nR=()=>{let[n,e]=(0,s.useState)(1),t=n=>{e(n)};return(0,r.jsx)(h,{children:(0,r.jsxs)(nO,{children:[(0,r.jsx)("h2",{children:"Personal Experience"}),(0,r.jsxs)(nA,{children:[(0,r.jsxs)(nY,{children:[(0,r.jsx)("li",{onClick:()=>t(1),children:"Now Doing"}),(0,r.jsx)("li",{onClick:()=>t(2),children:"원티드 프리온보딩 인턴십"}),(0,r.jsx)("li",{onClick:()=>t(3),children:"팀스파르타 부트캠프"}),(0,r.jsx)("li",{onClick:()=>t(4),children:"학사"})]}),(0,r.jsxs)(nH,{children:[(0,r.jsx)(nq,{onClick:()=>t(1),children:(0,r.jsx)(nX,{style:1===n?{backgroundColor:"#6360ff"}:{}})}),(0,r.jsx)(nD,{onClick:()=>t(2),children:(0,r.jsx)(nX,{style:2===n?{backgroundColor:"#60b2ff"}:{}})}),(0,r.jsx)(nM,{onClick:()=>t(3),children:(0,r.jsx)(nX,{style:3===n?{backgroundColor:"#ffad60"}:{}})}),(0,r.jsx)(nU,{onClick:()=>t(4),children:(0,r.jsx)(nX,{style:4===n?{backgroundColor:"#ff6060"}:{}})})]}),(0,r.jsxs)(nG,{children:[1===n?(0,r.jsx)(nv,{}):null,2===n?(0,r.jsx)(nk,{}):null,3===n?(0,r.jsx)(nZ,{}):null,4===n?(0,r.jsx)(nC,{}):null]})]})]})})},nO=o.ZP.section.withConfig({componentId:"sc-d9c660f9-0"})(nP()),nA=o.ZP.div.withConfig({componentId:"sc-d9c660f9-1"})(nE()),nY=o.ZP.nav.withConfig({componentId:"sc-d9c660f9-2"})(nS()),nH=o.ZP.div.withConfig({componentId:"sc-d9c660f9-3"})(nz()),nq=o.ZP.div.withConfig({componentId:"sc-d9c660f9-4"})(nL()),nD=o.ZP.div.withConfig({componentId:"sc-d9c660f9-5"})(n_()),nM=o.ZP.div.withConfig({componentId:"sc-d9c660f9-6"})(nN()),nU=o.ZP.div.withConfig({componentId:"sc-d9c660f9-7"})(nT()),nX=o.ZP.div.withConfig({componentId:"sc-d9c660f9-8"})(nF()),nG=o.ZP.div.withConfig({componentId:"sc-d9c660f9-9"})(nB());function nK(){let n=(0,i.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: gold;\n  z-index: 999;\n  transition: 0.2s;\n"]);return nK=function(){return n},n}let nW=()=>{let[n,e]=(0,s.useState)(0);return(0,s.useEffect)(()=>{let n=()=>{let n=window.pageYOffset,t=document.body.scrollHeight-window.innerHeight;e(Math.floor(n/t*100))};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[]),(0,r.jsx)(nQ,{style:{width:"".concat(n,"%"),height:"4px"}})},nQ=o.ZP.div.withConfig({componentId:"sc-f587e01a-0"})(nK());function nV(){let n=(0,i.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100vw;\n  height: 100vh;\n"]);return nV=function(){return n},n}function nJ(){let n=(0,i.Z)(["\n  margin: 0;\n  background-color: #ffd90081;\n  animation: CurtainBox1 2s;\n  @keyframes CurtainBox1 {\n    0% {\n      border-radius: 0 0 0 0;\n      width: 50%;\n      height: 100%;\n    }\n    100% {\n      border-radius: 0 0 100% 0;\n      width: 0%;\n      height: 98%;\n    }\n  }\n"]);return nJ=function(){return n},n}function n$(){let n=(0,i.Z)(["\n  margin: 0;\n\n  height: 100%;\n  background-color: #ffd90081;\n  animation: CurtainBox2 2s;\n  @keyframes CurtainBox2 {\n    0% {\n      border-radius: 0 0 0 0;\n      width: 50%;\n    }\n    100% {\n      border-radius: 0 0 0 100%;\n      width: 0%;\n      height: 98%;\n    }\n  }\n"]);return n$=function(){return n},n}let n0=()=>{let[n,e]=(0,s.useState)(!1);return setTimeout(()=>{e(!0)},2e3),(0,r.jsxs)(n1,{style:n?{display:"none"}:{},children:[(0,r.jsx)(n2,{}),(0,r.jsx)(n5,{})]})},n1=o.ZP.div.withConfig({componentId:"sc-9fb6efee-0"})(nV()),n2=o.ZP.div.withConfig({componentId:"sc-9fb6efee-1"})(nJ()),n5=o.ZP.div.withConfig({componentId:"sc-9fb6efee-2"})(n$());var n6=t(14578),n3=t(45155);function n9(){let n=(0,i.Z)(["\n  margin-right: 10px;\n  display: flex;\n  flex-direction: row;\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  border-radius: 20px;\n"]);return n9=function(){return n},n}function n4(){let n=(0,i.Z)(["\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 100px;\n  height: 100px;\n  line-height: 100px;\n  text-align: center;\n  border-radius: 20px;\n  color: transparent;\n  transition: 0.3s;\n  user-select: none;\n  cursor: pointer;\n  &:hover {\n    color: white;\n    background-color: #8080805c;\n  }\n"]);return n4=function(){return n},n}let n8=()=>{let n=(0,s.useRef)(.3),[e,t]=(0,s.useState)(-0),i=()=>{n.current=.3,t(n=>n-100),-300===e&&setTimeout(()=>{n.current=0,t(0)},300)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n7,{children:["eatjs","jseatme","kindreact","ts","eatjs"].map((t,i)=>(0,r.jsx)(E(),{src:"/images/eastereggs/".concat(t,".png"),width:100,height:100,alt:"eggs",style:{transform:"translateX(".concat(e,"%)"),transition:"".concat(n.current,"s")}},i))}),(0,r.jsx)(en,{onClick:i,children:"Click Me!"})]})},n7=o.ZP.div.withConfig({componentId:"sc-9fd2d752-0"})(n9()),en=o.ZP.div.withConfig({componentId:"sc-9fd2d752-1"})(n4());var ee=t(86455),et=t.n(ee),ei=t(64183);let er=new ei.vd({auth:"".concat("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")}),eo=async(n,e)=>{await er.request("POST /repos/LEE-YO-HAN/LEE-YO-HAN.github.io/issues/7/comments",{owner:"LEE-YO-HAN",repo:"LEE-YO-HAN.github.io",title:"".concat(n,"님 피드백"),body:"".concat(n,"님 ").concat(e)})},es=()=>{et().fire({title:"자유롭게 의견을 적어주세요!",html:'<input id="swal-input1" class="swal2-input" placeholder="이름 (필수x)" maxlength="20" /><textarea id="swal-input2" class="swal2-input"  placeholder="내용 - 최대 200자" maxlength="200" />',inputAttributes:{autocapitalize:"off"},focusConfirm:!1,confirmButtonColor:"gold",confirmButtonText:"send Feedback",showCancelButton:!0,cancelButtonColor:"rgb(160, 160, 160)",preConfirm:()=>{let n=document.querySelector("#swal-input1"),e=document.querySelector("#swal-input2");if(e)return{name:n,feed:e}}}).then(n=>{var e,t;let i=(null===(e=n.value.name)||void 0===e?void 0:e.value)!==""?n.value.name.value:"Guest",r=null===(t=n.value.feed)||void 0===t?void 0:t.value;""===r?et().fire({title:"내용이 없어요ㅠ",focusConfirm:!1,cancelButtonText:"ok...",confirmButtonColor:"gold"}):et().fire({title:"이 피드백을 전송할까요?",icon:"question",focusConfirm:!1,iconColor:"gold",showCancelButton:!0,confirmButtonText:"보내줘!",cancelButtonText:"생각좀...",confirmButtonColor:"gold",cancelButtonColor:"rgb(160, 160, 160)"}).then(()=>{eo(i,r),et().fire({title:"소중한 의견 감사합니다!",icon:"success",iconColor:"gold",confirmButtonColor:"gold"})})})};function ec(){let n=(0,i.Z)(["\n  width: 70%;\n"]);return ec=function(){return n},n}function el(){let n=(0,i.Z)(["\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  border-radius: 10px;\n\n  & button {\n    margin: 0 5px;\n    width: 90px;\n    height: 30px;\n    border: none;\n    background: none;\n    border: 2px solid #ffd900;\n    border-radius: 10px;\n    color: black;\n    font-weight: bold;\n    transition: 0.2s;\n    cursor: pointer;\n    &:hover {\n      color: white;\n      background-color: #ffd90094;\n    }\n  }\n"]);return el=function(){return n},n}function ed(){let n=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  & svg {\n    width: 25px;\n    height: 25px;\n    transition: 0.2s;\n    cursor: pointer;\n    &:hover {\n      color: gold;\n    }\n  }\n"]);return ed=function(){return n},n}function ea(){let n=(0,i.Z)(["\n  position: absolute;\n"]);return ea=function(){return n},n}function ef(){let n=(0,i.Z)(["\n  padding: 10px;\n  position: absolute;\n  transform: translate(-100%, 20%);\n  width: 350px;\n  border-radius: 10px;\n  border: 3px solid gold;\n  background-color: #fde77c;\n  opacity: 0;\n  font-size: 0.9rem;\n  transition: 0.4s;\n  & li {\n    list-style: none;\n    text-align: left;\n  }\n"]);return ef=function(){return n},n}let eu=n=>{let{eggs:e}=n,[t,i]=(0,s.useState)(!1),o=()=>{i(!t)};return(0,r.jsxs)(eh,{children:[(0,r.jsx)("p",{children:"1"===e?"이력서를 통해서 와주셨군요!":"또 와주셨네요!"}),(0,r.jsx)("span",{children:"블로그를 먼저 보시려면 좌측 상단의 버튼을 눌러주세요!"}),(0,r.jsxs)(ep,{children:[(0,r.jsx)("button",{onClick:es,children:"Feedback"}),(0,r.jsx)(ex,{onMouseEnter:o,onMouseLeave:o,children:(0,r.jsx)(R.KpA,{})}),(0,r.jsx)(eg,{children:(0,r.jsxs)(em,{style:t?{opacity:"1"}:{},children:[(0,r.jsx)("p",{children:"아직 많이 부족하지만 점점 채우고 있습니다!"}),(0,r.jsx)("li",{children:"자유롭게 의견을 남겨주신다면 미리 감사드립니다!!"})]})})]})]})},eh=o.ZP.div.withConfig({componentId:"sc-c0a41696-0"})(ec()),ep=o.ZP.div.withConfig({componentId:"sc-c0a41696-1"})(el()),ex=o.ZP.div.withConfig({componentId:"sc-c0a41696-2"})(ed()),eg=o.ZP.div.withConfig({componentId:"sc-c0a41696-3"})(ea()),em=o.ZP.div.withConfig({componentId:"sc-c0a41696-4"})(ef()),ej=()=>{let[n,e]=(0,s.useState)("");return(0,s.useEffect)(()=>{let n=window.location.hash;"#easteregg"===n&&(localStorage.getItem("egg")?localStorage.setItem("egg","2"):localStorage.setItem("egg","1")),setTimeout(()=>{let n=localStorage.getItem("egg");n&&e(n)},1500)},[]),n};function eb(){let n=(0,i.Z)(["\n  padding: 10px;\n  position: fixed;\n  top: 50px;\n  right: 20px;\n  width: 400px;\n  height: 100px;\n  border-radius: 0 10px 10px 10px;\n  border: 3px solid gold;\n  background-color: #fde77ca2;\n  font-weight: bold;\n  transform: translateX(105%);\n  transition: 0.4s;\n"]);return eb=function(){return n},n}function ew(){let n=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n"]);return ew=function(){return n},n}function ey(){let n=(0,i.Z)(["\n  position: absolute;\n  top: -3px;\n  left: -31px;\n  width: 25px;\n  height: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n  border: 3px solid gold;\n  border-radius: 5px 0 0 5px;\n  background-color: gold;\n  transition: 0.3s;\n  cursor: pointer;\n\n  color: black;\n  &:hover {\n    color: white;\n  }\n"]);return ey=function(){return n},n}let ev=()=>{let n=ej(),[e,t]=(0,s.useState)(!0),i=()=>{t(!e)};return(0,r.jsx)(eC,{style:""===n?{opacity:"0"}:{display:"block",transform:"translateX(".concat(e?0:105,"%)")},children:(0,r.jsxs)(eZ,{children:[(0,r.jsx)(eI,{children:e?(0,r.jsx)(n6.ven,{onClick:i}):(0,r.jsx)(n3.$K8,{onClick:i})}),(0,r.jsx)(n8,{}),(0,r.jsx)(eu,{eggs:n})]})})},ek=s.memo(ev),eC=o.ZP.div.withConfig({componentId:"sc-2415f183-0"})(eb()),eZ=o.ZP.div.withConfig({componentId:"sc-2415f183-1"})(ew()),eI=o.ZP.div.withConfig({componentId:"sc-2415f183-2"})(ey());function eP(){let n=(0,i.Z)(["\n  background: linear-gradient(\n    70deg,\n    #ffff97 20%,\n    #ffffae 40%,\n    #fffec8 60%,\n    #ffffae 80%,\n    #ffffe4 100%\n  );\n"]);return eP=function(){return n},n}function eE(){let[n,e]=(0,s.useState)(!0),{scrollCheck:t}=f(),i=(0,s.useRef)({height:0}),o=()=>{let n=document.documentElement.scrollHeight,e=i.current.height;"UP"===t&&0!==e?(i.current.height-=window.innerHeight,a(i.current.height,500)):"DOWN"===t&&e!==n&&(i.current.height+=window.innerHeight,a(i.current.height,500))};return(0,s.useEffect)(()=>{setTimeout(()=>{e(!n)},1500)},[]),(0,s.useEffect)(()=>{o()},[t]),(0,r.jsxs)(eS,{children:[n&&(0,r.jsx)(l,{}),(0,r.jsx)(nW,{}),(0,r.jsx)(X,{}),(0,r.jsx)(nd,{}),(0,r.jsx)(ng,{}),(0,r.jsx)(nR,{}),(0,r.jsx)(n0,{}),(0,r.jsx)(ek,{})]})}let eS=o.ZP.div.withConfig({componentId:"sc-dbfb3605-0"})(eP())},5696:function(){}},function(n){n.O(0,[876,158,445,549,224,727,774,888,179],function(){return n(n.s=99813)}),_N_E=n.O()}]);