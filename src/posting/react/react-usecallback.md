---
title: react usecallback
description: useCallback을 이용한 컴포넌트 최적화하기
category: react
keyword: useCallback, 컴포넌트, 최적화
date: "2023-03-16"
---

# useCallback이란?

> 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용하는 함수 메모이제이션용 React hook이다.

```javascript
const memoFn = useCallback(() => {}, [dep]);
```

첫번째 인자의 함수를 두번째 인자의 종속성 배열 내의 값이 변경될 때까지 저장하여 재사용할 수 있도록 해준다.

javascript에서 함수(function () {} or () => {})는 객체 리터럴( {...} )이 항상 새 객체를 생성하는 것과 유사하게 항상 다른 함수를 생성한다. 그렇다면 함수를 props 로 내려준다고 하면 하위 컴포넌트는 props가 변경되었다고 인식하게 된다.

그렇게되면 React.memo를 이용한 최적화가 원하는대로 작동하지 않을 수 있기 때문에 이러한 점을 useCallback이 메꿔줄 수 있게 된다.

> 종속성 배열이 없는 경우 매번 새 함수를 반환하기 때문에 항상 dependencises 배열을 포함해줘야 한다. (특정 상황에서 빈 배열 [] 은 있을 수 있지만, 배열 자체가 없으면 의미가 없어진다.)

## 사용예

```javascript
const add = useCallback(() => x + y, [x, y]);
```

# useCallback과 React.memo를 통한 최적화

```javascript
// 최상단 (1번) 컴포넌트
import { useState } from "react";
import { UseCallbackChildren } from "./UseCallbackChildren";

export const UseCallbackTest = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <UseCallbackChildren
        productId={123}
        referrer="wizard_of_oz"
        theme={isDark ? "dark" : "light"}
      />
    </>
  );
};

// 중간 (2번) 컴포넌트
import React, { useCallback } from "react";
import { CallbackForm } from "./UseCallbackForn";

export const UseCallbackChildren = ({ referrer, productId, theme }) => {
  const post = (url, data) => {
    console.log("POST /" + url);
    console.log(data);
  };

  const handleSubmit = useCallback(
    orderDetails => {
      post("/product/" + productId + "/buy", {
        referrer,
        orderDetails,
      });
    },
    [productId, referrer],
  );

  return (
    <div
      style={
        theme === "dark" ? { backgroundColor: "black", color: "white" } : {}
      }
    >
      <CallbackForm onSubmit={handleSubmit} />
    </div>
  );
};

// 하위 (3번) 컴포넌트
import React, { useState } from "react";

export const UseCallbackForm = ({ onSubmit }) => {
  const [count, setCount] = useState(1);

  console.log("강제로 느리게");
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orderDetails = {
      ...Object.fromEntries(formData),
      count,
    };
    onSubmit(orderDetails);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", width: "200px" }}
    >
      <p>
        <b>
          Note: <code>ShippingForm</code> is artificially slowed down!
        </b>
      </p>
      <label>
        Number of items:
        <button type="button" onClick={() => setCount(count - 1)}>
          -
        </button>
        {count}
        <button type="button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </label>
      <label>
        Street:
        <input name="street" />
      </label>
      <label>
        City:
        <input name="city" />
      </label>
      <label>
        Postal code:
        <input name="zipCode" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export const CallbackForm = React.memo(UseCallbackForm);
```

위 코드를 보면, 최상단(1)에 있는 다크모드는 중간(2) 컴포넌트까지만 전달해주고, 중간(2) 컴포넌트는 하위(3) 컴포넌트에 useCallback 함수만 전달해주고 있다.

useCallback은 함수를 캐시해 재사용할 수 있도록 도와주기 때문에 종속성이 변하지 않으면 계속 재사용할 수 있다. 즉, 동일한 props로써 함수를 하위(3) 컴포넌트에 내려주고 있기 때문에 하위 컴포넌트의 렌더링에 영향이 없다.

이 상태로 코드를 작동시키면 하위(3) 컴포넌트에 있는 count를 동작할때마다 느려지겠지만, 다크모드와 submit 이벤트에는 영향을 주지 않는다.

![image](https://blog.kakaocdn.net/dn/bEYsKw/btr4gSLc8BG/hJKpnBKbFziku3fjI6hphK/img.gif)

만약 하위(3) 컴포넌트의 React.memo()를 없애게 되면 submit 이벤트에는 영향이 없지만, 최상위(1) 컴포넌트의 다크모드 state 변경에 의해 하위(3) 컴포넌트의 렌더링이 일어나게 되어 다크모드와 count의 동작이 느려지는걸 볼 수 있다.

![image](https://blog.kakaocdn.net/dn/mfxA0/btr4iTijPZD/XNzKmFrScoUZ6qSyiCMV2K/img.gif)

자세히 보면 콘솔이 먼저 찍히고 0.5초정도 뒤에 동작하는 것을 볼 수 있다.

# useMemo와의 차이점

> useMemo는 함수의 호출 결과를 캐시하고, useCallback은 함수 자체는 캐시한다. 그러므로 useCallback은 useMemo와 달리 제공한 함수를 호출하지 않는다. 대신 사용자가 제공한 함수를 캐시하기 때문에 불필요한 렌더링 없이 함수를 전달할 수 있다.

## useMemo와 useCallback의 동시 사용

```javascript
function useCallback(fn, dependencies) {
  return useMemo(() => fn, dependencies);
}
```

## useCallback이 유용한 경우

- useCallback을 통해 props로 하위 컴포넌트에 넘겨줄때
- useEffect 등 다른 hook의 종속성으로 이용할때
- 종속성 변화가 적고 재사용이 용이할때

## useCallback 남용 시 문제점

> 모든 함수를 useCallback으로 감싸게 되면 컴포넌트가 리렌더 될 때마다 모든 함수가 다시 재생성될 필요가 있는지 검사하는 연산이 수행된다. 따라서 보통은 특정 함수가 props로 전달되어 불필요한 컴포넌트 리렌더를 유발할 때에만 적용하는 것이 좋다.

### memo, useMemo, useCallback 등 어떤 Memoization이나 부적절하게 사용할 경우 오히려 성능이 떨어질 수 있기 때문에 상황에 맞게 적절하게 사용하는 것이 좋은 것 같다.

---

참조: https://beta.reactjs.org/reference/react/useCallback
