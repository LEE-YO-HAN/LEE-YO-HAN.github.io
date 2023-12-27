---
title: react context api
description: ContextAPI 사용하기
category: react
keyword: react, contextAPI
date: "2023-03-15"
---

# ContextAPI

> 간단한 데이터의 변화를 props drilling 없이 전역적으로 관리해주기 위해 ContextAPI를 사용해볼 수 있다.

## 사용법

## 1. context component 생성

```javascript
// context.jsx
import { createContext, useContext, useState } from "react";

// context 생성
const AnyContextValue = createContext();
const AnyContextUpdate = createContext();

// useContext 생성
export const useContextValue = () => {
  const context = useContext(AnyContextValue);
  return context;
};
export const useContextUpdate = () => {
  const update = useContext(AnyContextUpdate);
  return update;
};

// context Component 생성
// children props를 Contextname.provider로 감싸준다.
export const SomeContext = ({ children }) => {
  const [someData, setSomeData] = useState("someData");
  return (
    <AnyContextValue.Provider value={someData}>
      <AnyContextUpdate.Provider value={setSomeData}>
        {children}
      </AnyContextUpdate.Provider>
    </AnyContextValue.Provider>
  );
};
```

## 2. context import

```javascript
import { TestApp } from "./components/blogtest/TestApp";
import { SomeContext } from "./components/context/RenderingContext";

// import된 Context를 적용하고자 하는 컴포넌트들의 최상위에 감싸준다.
function App() {
  return (
    <SomeContext>
      <ChildrenComponent />
    </SomeContext>
  );
}

export default App;
```

## 3. context 사용

```javascript
import { useState } from "react";
// 생성한 useContext import
import { useContextUpdate, useContextValue } from "../context/RenderingContext";

export const ChildrenComponent = () => {
  const values = useContextValue();
  const update = useContextUpdate();

  const contextHandler = () => {
    values === "someData" ? update("dataSome") : update("someData");
  };

  return (
    <div>
      <p>context value</p>
      <span>value : {values}</span>
      <button onClick={contextHandler}>context 변경 버튼</button>
    </div>
  );
};
```

위와 같이 설정이 완료된 후 정상적으로 contextAPI를 사용할 수 있다.

![image](https://blog.kakaocdn.net/dn/d0hnZa/btr35w9FvGX/zDcTOjtXxg23vMKk6LxaM0/img.gif)

> contextAPI는 간단하게 상태를 관리해줄 수 있지만, provider를 전역으로 감쌌을 때 컴포넌트들이 전반적으로 렌더링이 일어날 수 있기 때문에 상황과 구조에 맞게 적절하게 사용해주는 것이 좋다.

---

## 참고 : typescript에서의 contextAPI 사용

### TypeScript에서는 context 초기값 등의 설정이 필요하다.

```typescript
// context component

import { createContext, useContext, useState } from "react";
import { PostType } from "@/types/pages";
import { ProviderProps, ContextType } from ".";

// context 초기화
const initialContext = {
  posts: [],
  setPosts: () => {},
};

// context 생성
const PostContextValue = createContext<PostType[]>(initialContext.posts);
const PostContextUpdate = createContext<ContextType>(initialContext.setPosts);

// useContext 생성
export const useMdContextValue = () => {
  const context = useContext(PostContextValue);
  return context;
};
export const useMdContextUpdate = () => {
  const update = useContext(PostContextUpdate);
  return update;
};

// context component 생성
export const MdContext = ({ children }: ProviderProps) => {
  const [posts, setPosts] = useState<PostType[]>([]);

  return (
    <PostContextValue.Provider value={posts}>
      <PostContextUpdate.Provider value={setPosts}>
        {children}
      </PostContextUpdate.Provider>
    </PostContextValue.Provider>
  );
};

// 다른 컴포넌트에서의 사용
import { useEffect } from "react";
import { useMdContextUpdate } from "@/context/mdContext";

export default function Home({ posts }: { posts: PostType[] }) {
  const update = useMdContextUpdate();

  useEffect(() => {
    if (posts) {
      update(posts);
    }
  }, [posts, update]);
```
