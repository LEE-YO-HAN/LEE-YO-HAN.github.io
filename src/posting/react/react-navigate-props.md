---
title: react navigate props
description: React navigate로 props 넘기기
category: react
date: "2023-03-03"
---

# useNavigate를 이용한 props 전달

### useNavigate로 다른 페이지의 화면으로 이동할 때, props처럼 값을 넘기는 방법을 사용해볼 수 있다.

```javascript

// 보내는컴포넌트.jsx

import { useNavigate } from "react-router-dom";

const Component1 = () => {
const navigate = useNavigate()

let someDatas = {
	name:"hihi"
    value:"here"
}

return
<div onClick={() => navigate(`/다른페이지주소`,{ state: someDatas });}>
	다른페이지로 이동
</div>
}



// 받는 컴포넌트.jsx

import { useLocation } from "react-router-dom";

const Component2 = () => {
	const location = useLocation();
	console.log(location);
}

```

위와 같이 작성은 아래와 같이 데이터를 받아오는 것을 보여준다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FedpbW9%2FbtrRGwsRGuz%2FKp5GIecYeABXw1FPbGLdsK%2Fimg.png)

하지만 데이터를 받는 페이지가 직접적으로 접속할 수 있는 페이지라면 그렇게 접속한 페이지는 아무 데이터가 없는 화면으로 노출될 수 있기 때문에, 전역 상태를 관리해줄지, 데이터를 넘겨줄지 상황에 알맞는 방식을 적용하는 것이 중요하다.
