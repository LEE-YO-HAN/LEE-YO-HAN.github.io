---
title: react usememo
description: useMemo를 이용한 컴포넌트 최적화하기
category: react
date: "2023-03-16"
---

# useMemo란?

> useMemo는 React.memo(), useCallback과 같이 컴포넌트를 최적화하기 위한 훅 중 하나이다.

# useMemo를 사용하는 이유

React의 컴포넌트는 부모 컴포넌트가 렌더링되거나, 자신의 state변경, 상위 컴포넌트에서 내려받는 props가 변경될 때마다 다시 렌더링된다. 그런데 내려받는 props나 state가 여러 가지일때 한 개 props의 변경으로 모든 값이 다시 계산되는 경우 불필요한 비용이 누적되게 된다.

useMemo는 이러한 현상을 효율적으로 전환하기 위한 hook이다.

## useMemo를 적용하기 전

```javascript
// 상위 컴포넌트
import { useState } from "react";
import { UseMemoChildren } from "./UseMemoChildren";

export const UseMemoTest = () => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  const changeNumber = e => {
    setNumber(e.target.value);
  };
  const changeText = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <p>UseMemoText</p>
      <div>
        <p>number</p>
        <input type="number" onChange={changeNumber} value={number} />
      </div>
      <div>
        <p>text</p>
        <input type="text" onChange={changeText} value={text} />
      </div>
      <UseMemoChildren number={number} text={text} />
    </div>
  );
};

// 하위 컴포넌트
export const UseMemoChildren = ({ number, text }) => {
  const getNumber = number => {
    console.log("숫자 변경");
    return number;
  };

  const getText = text => {
    console.log("글자 변경");
    return text;
  };

  const showNumber = getNumber(number);

  const showText = getText(text);

  return (
    <div>
      <p>Memo Child Component</p>
      <p>number: {showNumber}</p>
      <p>text: {showText}</p>
    </div>
  );
};
```

상위 컴포넌트는 각 input 값이 변경될 때마다 그 값을 저장해 하위 컴포넌트로 내려준다.

하위 컴포넌트는 내려받은 props를 통해 화면에 노출시켜줄 값을 return해주는 역할을 한다.

![image](https://blog.kakaocdn.net/dn/9hqzj/btr4hQeyTmU/PzYhcCiwuZq08zOkhBqeWk/img.gif)

이 상태에서 input을 업데이트하면 숫자를 바꾸든 텍스트를 바꾸든 getNumber 함수와 getText 함수 둘 다 다시 연산되는 것을 볼 수 있다.

이런 경우 변경된 props에 대해서만 다시 연산될 수 있도록 useMemo를 적용해볼 수 있다.

## useMemo 사용법

```javascript
const cachedValue = useMemo(calculateValue, dependencies);
```

### 적용 예시

```javascript
// 하위 컴포넌트

import { useMemo } from "react";

export const UseMemoChildren = ({ number, text }) => {
  //   console.log("useMemoChildren start");
  const getNumber = number => {
    console.log("숫자 변경");
    return number;
  };

  const getText = text => {
    console.log("글자 변경");
    return text;
  };

  const showNumber = useMemo(() => {
    return getNumber(number);
  }, [number]);

  const showText = useMemo(() => {
    return getText(text);
  }, [text]);

  return (
    <div>
      <p>Memo Child Component</p>
      <p>number: {showNumber}</p>
      <p>text: {showText}</p>
    </div>
  );
};
```

위와 같이 useMemo를 적용하고 나면 다음과 같이 useMemo 적용 이후 변경된 props에 대한 연산만 처리해주는 것을 볼 수 있다.

![image](https://blog.kakaocdn.net/dn/4Vcyh/btr4hPz1xwm/0zNRNCdyJKwpsWk2LU73KK/img.gif)

> useMemo 마지막의 dependencies [ ] 배열은 필수적으로 어떤 값을 변경에 반응할 것인지 포함시켜줘야 한다.

# 연산 비용이 비싸다는 기준은?

React 공식 사이트에서 권장하는 useMemo 적용 기준은 연산에 소요된 시간이 1ms 이상일 경우로 안내하고 있다.

console.time/timeEnd 등을 통해 useMemo를 적용하고자 하는 함수의 총 연산시간을 도출해볼 수 있다.

```javascript
const getText = text => {
  console.time("memo");
  console.log("글자 변경");
  console.timeEnd("memo");
  return text;
};
```

위와 같이 코드 작성 후 text를 변경해보면 다음과 같은 콘솔을 볼 수 있다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F8mGtS%2Fbtr4iU19jHE%2FH0huW2SytbAtalR3urepr0%2Fimg.png)

> 입력하는 계산이 눈에 띄게 느리고, 종속성이 거의 변경되지 않는 경우에는 useMemo를 이용한 최적화가 적합하지만, 컴포넌트 구조 변경과 상태 관리의 최소화, state를 업데이트하는 Effect의 불필요한 종속성을 제거하거나 특정 함수들을 별도로 관리하는 방법이 useMemo보다 적합할 수 있다.

> 실제로 React의 성능 문제 대부분은 Effect에서 발생하는 업데이트 체인으로 인해 발생한다고 한다.

---

참조 : https://beta.reactjs.org/reference/react/useMemo
