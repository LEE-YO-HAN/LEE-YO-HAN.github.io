---
title: react component lifecycle
description: React 함수형 컴포넌트와 Class형 컴포넌트 생명주기
category: react
keyword: react, 함수형 컴포넌트, Class형 컴포넌트
date: "2023-03-23"
---

# **React state와 LifeCycle**

> 함수형 컴포넌트와 class형 컴포넌트의 LifeCycle이 어떻게 되는지 간단하게 비교해 보는 글이다.

## 클래스형 컴포넌트와 생명주기 메서드

### 1. Mount(컴포넌트가 처음 실행될 때)

- state, context, defalutProps 저장
- componentWillMount - 안전하지 않은 접근
- render
- componentDidMount - DOM 접근 가능

### 2. Props Update(프롭스가 업데이트될때)

- componentWillReceiveProps - 사용 종료
- shouldComponentUpdate
- componentWillUpdate - 사용 종료
- render
- componentDidUpdate - DOM 접근 가능

### 3. State Update (스테이트가 업데이트됐을 때)

- shouldComponentUpdate
- componentWillUpdate - 사용 종료
- render
- componentDidUpdate - DOM 접근 가능

**사실상 componentWillReceiveProps와 componentWillUpdate의 사용 종료로 state와 props가 업데이트될 때 동일하게 작동한다.**

### 4. Unmount (컴포넌트가 제거되는 것)

- componentWillUnmount

사용 종료의 기준은 아래와 같다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb0qQTJ%2Fbtr5h96VtyB%2FqLpFZAk7aybC21CEWPD9H1%2Fimg.png)

## 함수형 컴포넌트와 useEffect 훅

### 컴포넌트의 실행

- 함수형 컴포넌트 호출

- 함수형 컴포넌트의 내부에서 실행

- return()으로 화면에 렌더링

- 생명주기 메서드 대신 useEffect를 통한 비슷한 처리 가능

### dependency에 따른 useEffect의 실행

- deps 값이 없는 경우 : 화면이 렌더링 된 이후 수행이 되며, 리렌더링이 발생할 때마다 다시 실행

- deps 값이 빈 배열인 경우 : 첫 렌더링 완료 후 1회만 실행

- deps 값이 존재하는 경우 : 첫 렌더링 완료 후 1회 실행 && deps 값이 변경되었을 경우마다 실행

```javascript
// dep X
useEffect(() => {
  // effect
  return () => {
    // cleanup
  };
});

// dep []
useEffect(() => {
  return () => {};
}, []);

// dep [some dep...]
useEffect(() => {
  return () => {};
}, [dep]);
```

**[Mounting]** useEffect() - 컴포넌트 렌더링 이후 실행

- dep 설정에 따라 실행됨

**[Updating]** useEffect() - 컴포넌트 내에서 변화가 발생했을 경우 실행

- 부모 컴포넌트의 리렌더링, 부모로부터의 props값 변화, 해당 컴포넌트 내에서 state 변경 등

**[Unmounting]** useEffect() - 컴포넌트 내에서 DOM을 제거할 때 실행되는 메서드

- 컴포넌트의 DOM이 제거될 때 수행되며 useEffect 내부의 return 값이 사용됨

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbryvuq%2Fbtr5pFcEsKC%2FIUUp45qfkl3kWGMGsXLoF0%2Fimg.png)

**위와 같이 컴포넌트를 여닫는 페이지가 있다고 가정했을 때, console을 통해 대략적인 흐름을 확인해 볼 수 있다.**

### **Class형 컴포넌트**

**컴포넌트가 처음 실행될 때**

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FOvMHN%2Fbtr5nGi34Pf%2Fr7cGOBhis0thuYoKgE5Y81%2Fimg.png)

**state가 변경될 때 (props가 변경될 때와 동일)**

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FD45Ra%2Fbtr5gtxPbHC%2FBcyreT9Rmknfdukr6PuUMK%2Fimg.png)

**컴포넌트가 제거될 때**

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F6mDAw%2Fbtr5qsKSrcJ%2FSzo6Rjkm0liLDy3wCZZ27k%2Fimg.png)

### **함수형 컴포넌트**

**컴포넌트가 처음 실행될 때**

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F3fXKy%2Fbtr5paDZhii%2FxGLf5vByXzPMT1jphHzBkK%2Fimg.png)

**컴포넌트가 업데이트될 때**

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F7vKwD%2Fbtr5paYhomj%2F5iPCpcpuRTIKbpr0dFNNO1%2Fimg.png)

> 콘솔에 출력된 것과 같이, useEffect의 return 이후 부분은 componentWillUnmount와 비슷하지만, 컴포넌트가 다시 렌더링 되기 전마다 다시 실행된다.

**컴포넌트가 제거될 때**

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb5feUj%2Fbtr5sdzGrHx%2F1FTXMaZBnR6FmKQmslJRK1%2Fimg.png)

컴포넌트가 제거될 때는 componentWillUnmount처럼 useEffect의 return 부분이 실행되는 것을 볼 수 있다.

사용된 코드

```javascript
// Lifecycle.jsx

import { useState } from "react";
import { FunctionComponent } from "./FunctionComponent";
import { ClassComponent } from "./ClassComponent";

export const Lifecycle = () => {
  const [fnOpen, setFnOpen] = useState(false);
  const [classOpen, setClassOpen] = useState(false);
  const effectComponentHandler = num => {
    if (num) {
      setFnOpen(!fnOpen);
    } else {
      setClassOpen(!classOpen);
    }
  };

  return (
    <div>
      <p>Fn component / Class component</p>
      <button onClick={() => effectComponentHandler(1)}>함수 open/close</button>
      <button onClick={() => effectComponentHandler("")}>
        클래스 open/close
      </button>
      {fnOpen ? <FunctionComponent some1={1} some2={2} some3={3} /> : null}
      {classOpen ? <ClassComponent some1={1} some2={2} some3={3} /> : null}
    </div>
  );
};
```

```javascript
// FunctionComponent.jsx

import { useState, useEffect } from "react";

export const FunctionComponent = props => {
  console.log("컴포넌트 렌더링", props);
  const [count, setCount] = useState(0);
  useEffect(() => {
    // effect
    if (count === 0) {
      console.log(`useEffect 첫 등장`);
    } else {
      console.log(`useEffect 다시 등장 count: ${count}`);
    }
    return () => {
      // cleanup
      console.log(
        "useEffect 퇴장 --- componentWillUnmount와 비슷하지만 리렌더링마다 사용됨",
      );
    };
  }, [count]);

  const plus = () => {
    setCount(prev => prev + 1);
  };
  const minus = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div>
      <p>함수형 컴포넌트</p>
      <span>{count}</span>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <p>Props 받기</p>
      <div>props1 = {props.some1}</div>
      <div>props2 = {props.some2}</div>
      <div>props3 = {props.some3}</div>
    </div>
  );
};
```

```javascript
// ClassComponent.jsx

import { Component } from "react";

export class ClassComponent extends Component {
  constructor(props) {
    super(props);
    // Class형 컴포넌트의 state는 무조건 객체 형태여야 한다.
    this.state = {
      counter: 0,
    };
    console.log(
      "Mount - 컴포넌트가 처음 실행될 때 state, context, defalutProps 저장",
      props,
    );
  }
  plus = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };
  minus = () => {
    this.setState(state => ({ counter: state.counter - 1 }));
  };

  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount - DOM 접근 가능");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate - state or props 업데이트");
    return true;
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div>
        <p>Class형 컴포넌트</p>
        <span>{this.state.counter}</span>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
        <p>Props 받기</p>
        <div>props1 = {this.props.some1}</div>
        <div>props2 = {this.props.some2}</div>
        <div>props3 = {this.props.some3}</div>
      </div>
    );
  }
}
```

---

참조

https://ko.reactjs.org/docs/state-and-lifecycle.html

https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html
