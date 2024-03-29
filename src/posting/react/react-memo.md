---
title: react memo
description: React.memo() 를 통한 컴포넌트 최적화
category: react
keyword: react, memo()
date: "2023-03-16"
---

> 유저에게 UI를 빠르게 제공하기 위해서는 컴포넌트의 렌더링을 최소화해 성능을 향상시킬 필요가 있다. 이를 위해 React.memo()에 대한 간단한 사용법을 기록해본다.

# 1. React.memo()

컴포넌트가 React.memo()로 래핑될 때, React는 컴포넌트를 렌더링하고 결과를 Memoizing한다.

그리고 다음 렌더링이 일어날 때 props가 값다면, React는 Memoizing된 내용을 재사용한다.

## 사용법

```javascript
import React from "react";

export const MemoTest = ({ someProps }) => {
  console.log("Memo test, props 바뀔때만 콘솔 작동");
  return (
    <div style={{ border: "1px solid black" }}>
      <p>MemoTest 컴포넌트</p>
      <p>props가 바뀔때만 렌더링</p>
      <span>count와 연동된 props: {someProps}</span>
    </div>
  );
};

// 다른 컴포넌트에서 불러올 때, 해당 컴포넌트를 import 해주면 된다.
export const MemoTestComponent = React.memo(MemoTest);
```

## 사용 예시

```javascript
export const TestApp = () => {
  const values = useContextValue();
  const update = useContextUpdate();
  const [count, setCount] = useState(0);
  console.log("최상위 컴포넌트 : 렌더링 될때마다 콘솔 작동");

  const contextHandler = () => {
    values === "someData" ? update("dataSome") : update("someData");
  };

  return (
    <div style={{ border: "1px solid black" }}>
      <NormalComponent />
      <MemoTestComponent someProps={count} />
      <button
        onClick={() => {
          setCount(pre => pre + 1);
        }}
      >
        +count버튼
      </button>
      <button
        onClick={() => {
          setCount(pre => pre - 1);
        }}
      >
        -count버튼
      </button>
      <div>
        <p>context value</p>
        <span>value : {values}</span>
        <button onClick={contextHandler}>context 변경 버튼</button>
      </div>
    </div>
  );
};
```

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FVQkSV%2Fbtr37vCBXzm%2FVXiqfYdD4H2FTcw3tGVFzk%2Fimg.png)

위 이미지는 TestApp 코드의 초기 화면이다.

모든 컴포넌트가 첫 렌더링을 거쳐 각각 콘솔을 찍어내고 있다.

### TestApp의 count state는 MemoTest 컴포넌트에 props로 전달해주고 있기 때문에 React.memo()의 효과는 사용되지 않고, 일반 컴포넌트와 마찬가지로 TestApp count state가 변경될 때마다 렌더링되는 것을 볼 수 있다.

![image](https://blog.kakaocdn.net/dn/Hl6oT/btr4gSJ05tT/kipvw3VkehYfnxf2Pbq780/img.gif)

### 하지만 contextAPI처럼 MemoTest의 props와 연관되지 않은 다른 방식을 통해 통해 리렌더링을 발생시키는 경우라면, memoTest 컴포넌트의 props가 변경되지 않기 때문에 MemoTest는 렌더링을 발생시키지 않는다.

![image](https://blog.kakaocdn.net/dn/cmaheq/btr36GRW8J1/uhzNP5d6ymqDxVDGFK4Ay1/img.gif)

> contextAPI의 기본 사용법 : https://lee-yo-han.github.io/react/react-context-api

---

## 1-1 - props 동등 비교 커스터마이징

React.memo()는 props 혹은 props의 객체를 비교할 때 얕은 비교를 하기 때문에, 비교 방식을 수정하고 싶다면 React.memo() 두 번째 매개변수로 비교함수를 만들어 수동으로 연산 후 넘겨주면 된다.

```javascript
import React from "react";

export const MemoTest = ({ someProps }) => {
  console.log("Memo test, props 바뀔때만 콘솔 작동");
  return (
    <div style={{ border: "1px solid black" }}>
      <p>MemoTest 컴포넌트</p>
      <p>props가 바뀔때만 렌더링</p>
      <span>count와 연동된 props: {someProps}</span>
    </div>
  );
};

const propsAreEqual = (prev, next) => {
  return (
    prev.someProps === next.someProps
    // 다른 props들이 있는 경우 &&을 통해 연산 추가
  );
};

export const MemoTestComponent = React.memo(MemoTest, propsAreEqual);
```

# 2. React.memo()는 언제 사용해야 하는가?

### - 함수형 컴포넌트가 같은 props로 자주 렌더링 될거라 예상될 경우

props가 변경되지 않는 경우에도 상위 컴포넌트의 지속적인 렌더링에 의해 하위 컴포넌트의 불필요한 렌더링이 예상되는 경우라면 React.memo()를 통해 오직 props의 변화에만 반응시켜주는 것이 효율적이다.

### - 무겁고 비용이 큰 연산이 있는 경우

한 번 렌더링 될 때 큰 연산이 발생한다고 했을때 불필요한 렌더링이 일어난 경우 연산에 사용되는 비용이 낭비될 수 있기 때문에 이러한 경우 또한 React.memo()를 통한 memoization이 적절하다고 볼 수 있다.

# 3. React.memo()를 언제 사용하지 말아야 하는가?

### - 위에 언급한 상황과 맞지 않는 경우 React.memo()를 사용할 필요가 없을 가능성이 높다.

경험적으로 ㅅ어능적인 이점을 얻지 못한다면 memoization을 사용하지 않는 것이 좋다. 성능 관련 변경이 잘못 적용된다면 성능이 오히려 악화될 수 있다.

### - 기술적으로는 가능하지만 클래스 기반의 컴포넌트를 React.memo()로 래핑하는 것은 적절하지 않다.

클래스 기반의 컴포넌트에서 memoization이 필요하다면, pureComponent를 확장하여 사용하거나, shouldComponentUpdate() 메서드를 구현하는 것이 적절하다.

### - props가 자주 바뀌는 경우

props가 자주 바뀌는 경우도 React.memo()로 래핑하더라도 이전 props와 다음 props를 비교 함수를 통해 비교할때 거의 false를 반환할 것이기 때문에 props가 자주 바뀌는 경우도 React.memo()의 사용이 적절하지 않다.

## 결론

> React.memo는 memoization의 장점을 얻게 해주는 좋은 도구이지만, 렌더링 방지를 위해 memoization에만 의존하면 안된다.

---

## 참조

https://dmitripavlutin.com/use-react-memo-wisely/

https://ui.toast.com/weekly-pick/ko_20190731
