---
title: javascript jest test code
description: jest를 통한 테스트코드 사용
category: javascript
keyword: javascript, 테스트코드
date: "2023-03-18"
---

# jest란?

> 단순성에 중점을 둔 javascript 테스트 프레임워크로, babel, Typescript, node, React, Angular, Vue 등을 사용하는 프로젝트에서 작동한다.

본 포스팅은 React 환경을 기준으로 작성되었다.

## 1. jest 설치

```bash
npm install --save-dev jest @babel/preset-env
# or
yarn add --dev jest @babel/preset-env
```

node.js 환경에서 import 등의 ES6 문법을 사용하기 위해 @babel/preset-env도 함께 설치해준다.

## 2. 루트 경로에 babel.config.js 파일 생성

```javascript
module.exports = {
  presets: [
    "@babel/preset-env",
    // typescript를 사용하는 경우 yarn add --dev @babel/preset-typescript 설치 후
    // 아래와 같이 preset을 추가해준다.
    // "@babel/preset-typescript"
  ],
};
```

babel config 파일까지 생성이 완료됐다면 test 파일을 사용할 준비가 다 된 것이다.

## 3. jest가 인식하는 test file 이름

- {filename}.test.js
- {filename}.spec.js

## 4. 테스트 실행

jest 커맨드만으로도 테스트 코드를 진행할 수 있지만, 다른 플래그와 함께 사용할 수 있다.

```bash
--coverage # 프로젝트의 테스트 커버리지를 함께 나타내준다.
--watch # 대상 코드나 테스트 코드에 변경이 생기면 테스트를 다시 실행한다.

# ex) yarn jest --watch --coverage
```

jest만 실행한 터미널

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbmEHBz%2Fbtr4t9fB6IJ%2Fl1JqzgbkjoBxDREUdoSgzK%2Fimg.png)

--coverage와 함께 실행한 터미널

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FPTj6f%2Fbtr4vjvmeEt%2Ft5NIYNk6kzRJ4PQ1IQA48k%2Fimg.png)

> 참고 : jest는 테스트 코드 내에서 오류가 발생할 때만 테스트를 fail시키기 때문에 test("",()=>{})와 같이 테스트 코드가 비어있더라도 테스트를 통과할 수 있다.

## 5. 테스트 코드 패턴

### AAA 패턴 (Arrange - Act - Assert)

- A 조건에서 B를 실행했을때 예상한 결과가 C가 나오는가? 라는 흐름의 패턴이다.

예제

```javascript
// 기존 함수
export const add = (a, b) => {
  return a + b;
};

// somefn.spec.js - 테스트코드 함수

import { add } from "./someFn";

test("add 함수 테스트: result = a+b", () => {
  // 조건
  const a = 2;
  const b = 3;
  const result = 5;

  // 실행
  const actResult = add(a, b);

  // 평가
  expect(actResult).toBe(result);
});
```

평가 부분의 코드는 .toBe()라는 matcher 함수를 통해 actResult를 실행했을 때 result가 나올 것이라는 기대를 갖고 코드를 평가하게 된다.

아래와 같이 여러 함수를 한 테스트 코드 안에 넣을 수도 있지만, 리팩토링 시 불편한 경험을 할 수 있기 때문에 상황에 맞게 사용해주는 것이 좋을 것 같다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FckHjWD%2Fbtr4t5Eptqn%2FccX4fWxWW6GZ9edDMtjdAK%2Fimg.png)

주요 matcher 함수

- toBe() : 원시형 데이터 비교
- toEqual() : 참조형 데이터를 깊은 비교를 통해 비교
- toBeTruthy() : 값이 참인지 검사
- toContain() : 특정 요소가 배열 안에 존재하는지 검사
- not : 다른 matcher 함수 앞에 체이닝해 사용하며, 해당 값의 반대값이 참인지 검사 (not은 함수가 아닌 property)

공식 문서에서 더 자세하게 확인해볼 수 있다. (https://jestjs.io/docs/using-matchers)

## 6. 테스트 코드를 통해 할 수 있는 것

- 내가 작성한 함수들이 내가 원하는대로 작동하는지 확인할 수 있다.
- 테스트 코드 작성을 통해 TDD 방식의 개발 방법론을 적용할 수 있다.

## TDD란?

> TDD는 테스트 주도 개발(Test Driven Development)을 뜻하며, 테스트 케이스를 우선적으로 설계해 개발을 진행하는 방법론이다.

### 1. 테스트 케이스를 우선적으로 설계하고,

### 2. 함수를 테스트 케이스에 맞춰 제작하며,

### 3. 로직을 개선하며 1~3을 반복한다.

즉, 실패-성공-리팩토링의 반복으로 볼 수 있다.

TDD의 예시

https://velog.io/@velopert/TDD%EC%9D%98-%EC%86%8C%EA%B0%9C

---

참조 : https://jestjs.io/
