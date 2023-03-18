---
title: javascript dynamic import
description: Dynamic import를 사용해 동적으로 모듈 가져오기
category: javascript
date: "2023-03-18"
---

# Dynamic import란?

> import() 표현식으로 사용하며, 표현식은 모듈을 읽고 해당 모듈이 내보내는 것들을 모두 포함하는 객체를 담은 이행된 Promise를 반환한다. 호출은 어디서나 가능하다.

# Dynamic import를 사용하는 이유

- 기존 import문은 정적인 방식으로, 정적으로 가져오는 경우 코드 로드 속도가 느려지고, 가져오는 코드가 필요할 가능성이 적거나 없을 수 있다.
- 정적으로 가져올 때 프로그램의 메모리 사용량이 크게 증가하고 가져오는 코드가 필요할 가능성이 낮다.
- import문에 동적 매개변수를 사용할 수 없다.

> 즉, 동적으로 import하는 것은 성능 향상과 필요한 경우에 맞춰 사용하는 것에 용이하다.

## 사용법

필요한 함수들을 정의하고, 필요한 곳에서 import하여 원하는 방식대로 적용해준다.

예시 코드

```javascript
// someFn.js

export const greeting = () => {
  console.log("어서오시고");
};

export const importMe = () => {
  console.log("다이나믹 임포트를 해주세요");
};

export const easy = () => {
  console.log("쉽죠?");
};

export const add = (a, b) => console.log(a + b);
```

```javascript
// use import()
export const DynamicImport = () => {
  // async / await 방식
  const loadGreeting = async () => {
    const DI = await import("./someFn.js");
    DI.greeting();
  };
  const loadImportMe = async () => {
    const DI = await import("./someFn.js");

    DI.importMe();
  };
  const loadEasy = async () => {
    const DI = await import("./someFn.js");
    DI.easy();
  };

  const loadAddAwait = async (a, b) => {
    const DI = await import("./someFn.js");
    return DI.add(a, b);
  };
  // 기본 방식
  const loadAdd = (a, b) => {
    const DI = import("./someFn.js")
      .then(module => {
        module.add(a, b);
      })
      .catch(err => err);
    return DI;
  };

  return (
    <div>
      <p>DynamicImport component</p>
      <button onClick={loadGreeting}>loadGreeting</button>
      <button onClick={loadImportMe}>loadImportMe</button>
      <button onClick={loadEasy}>loadEasy</button>
      <button onClick={() => loadAdd(1, 2)}>loadAdd</button>
      <button onClick={() => loadAddAwait(5, 5)}>loadAddAwait</button>
    </div>
  );
};
```

## Promise를 반환하기 때문에 async/await을 통한 사용도 가능하다.

위 코드를 통해 생성한 버튼들을 모두 한 번씩 클릭해주면 아래와 같이 사용되는 것을 볼 수 있다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FyOVoT%2Fbtr4v801voG%2FmX38iUM5zpLCGKZ5nkyWYK%2Fimg.png)

> 참고사항 : Dynamic import는 일반 스크립트에서도 동작하기 때문에 script type="module"이 없어도 된다.

### 주의사항 : import()는 함수 호출과 문법이 유사해 보이지만 함수 호출이 아니다. super()처럼 괄호를 사용하는 특별한 문법 중 하나이다. 따라서 import를 변수에 복사하거나 call/apply 등의 사용은 불가능하다.

---

참조

MDN : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import

Modern js : https://ko.javascript.info/modules-dynamic-imports
