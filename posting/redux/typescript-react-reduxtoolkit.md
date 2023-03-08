---
title: typescript react reduxtoolkit
description: Typescript react에서 ReduxToolkit 사용해보기
category: redux
date: "2023-03-04"
---

javascript에서의 ReduxToolkit 사용 예제 : https://lee-yo-han.github.io/redux/redux-toolkit-사용해보기

## 1. 설치

```bash
yarn add @reduxjs/toolkit react-redux
```

## 2. store 설정

state와 dispatch type 생성

```typescript
// store.ts
import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./commentSlice";

const store = configureStore({
  reducer: {
    commentSlice,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>; // 1. state type 가져오기
export type AppDispatch = typeof store.dispatch; // 2. dispatch type 가져오기
```

## 3. Redux hook 설정

dispatch 함수와 useSelector 실행을 위해, Redux hook을 따로 설정해준다.

```typescript
// useRedux.ts

import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store"; // store에서 미리 설정해준 state와 dispatch type

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

위의 설정을 마치면 javascript에서 dispatch를 사용하는 것과 같이 사용할 수 있다.

```typescript

// Form.tsx
import { useAppDispatch, useAppSelector } from "../hook/useRedux";
import { FormEvent } from "../type"; // 별도로 지정한 eventType
import { addComments } from "../redux/commentSlice"; // Slice의 action함수

export const Form = () => {
	const dispatch = useAppDispatch();

    const formData = {...}

    const onSubmitHandler = async (e: FormEvent, dispatch: any) => {
        e.preventDefault();
        dispatch(addComments(formData)); // 정상작동
    };

    return ( ...
}

```

참고 : https://redux-toolkit.js.org/usage/usage-with-typescript
