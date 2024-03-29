---
title: nextjs react responsive
description: nextjs에 react responsive 적용하기
category: nextjs
keyword: responseive, UI
date: "2023-03-04"
---

### 이번에 새로 만들고 있는 토이 프로젝트를 작업하던 중, 모바일 화면일때만 화면을 보여주고 싶었다. 단, 모든 컴포넌트에 미디어쿼리를 통해 작성해줄 수는 없기에 react-responsive를 적용해 화면이 481px을 넘어가면 고정된 페이지를 보여줄 수 있도록 코드를 작성했다.

## react-responsive 설치

```bash
yarn add react-responsive
```

## hook 설정

```typescript
// hook
// useMideaQuery.tsx
export const Desktop = ({ children }: any) => {
  const isDesktop = useMediaQuery({
    minWidth: 481,
  });
  return isDesktop ? children : null;
};

export const Mobile = ({ children }: any) => {
  const isMobile = useMediaQuery({
    minWidth: 481,
  });
  return Mobile ? children : null;
};
```

## \_app.ts 적용

```typescript
// _app.tsx

// ...
import { Mobile } from "src/hooks/useMideaQuery";
import { CannotDesktop } from "src/desktop/CannotDesktop";

<>
  <Mobile>
    <Layout>
      {isLoading ? <LoadingSpinner /> : null}
      <Component {...pageProps} />
    </Layout>
  </Mobile>
  <Desktop>
    <CannotDesktop />
  </Desktop>
</>;
```

똑같은 코드로 리액트 코드에 적용할 때는 문제가 없었지만, Nextjs를 이용한 이번 상황의 경우 Hydration 에러가 발생했다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbjYUXg%2FbtrTRCeaovE%2FwQr4OZdJectnkkG06XmTEk%2Fimg.png)

vercel로 배포할 때는 정상적으로 빌드되기는 했지만

로컬에서 작업할때 지속적으로 발생하는 오류 메세지 창이 불편하기도 하여 바로 처리해봤다.

> Hydration failed because the initial UI does not match what was rendered on the server

초기 UI가 서버에서 렌더링된 것과 일치하지 않는다고 한다.

https://nextjs.org/docs/messages/react-hydration-error

공식 페이지를 보면 "애플리케이션을 렌더링하는 동안 미리 렌더링된 React 트리(SSR/SSG)와 브라우저에서 첫 번째 렌더링 중에 렌더링된 React 트리 간에 차이가 있었기 때문에 발생한 오류"라고 한다.

일반적으로 이 문제는 사전 렌더링과 브라우저 간에 다를 수 있는 항목에 의존하는 특정 라리브러리 또는 애플리케이션 코드를 사용하여 발생한다고 하는데,

나의 경우, react-responsive에 의한 경우였다.

## 코드 수정

```typescript
// useMideaQuery.tsx

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const Mobile = () => {
  const [mobile, setMobile] = useState<boolean>(false);
  const isMobile = useMediaQuery({ maxWidth: 480 });

  const checkResize = () => {
    if (isMobile) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    checkResize();
  }, [isMobile]);

  return mobile;
};
//_app.tsx

<RecoilRoot>
  {isMobile ? (
    <Layout>
      {isLoading ? <LoadingSpinner /> : null}
      <Component {...pageProps} />
    </Layout>
  ) : (
    <CannotDesktop />
  )}
</RecoilRoot>;
```

useMideaQuery가 window 화면을 기준으로 동작하기 때문에,

공식문서의 예제와 비슷하게 useState를 통한 boolean 값으로 화면을 노출시켜줬다.

위의 방식을 적용하니 hydration 에러 없이 잘 작동하는 모습을 볼 수 있었다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdH0CZg%2FbtrTRp0izJZ%2FiolwpQXLvGOommEBhpCkaK%2Fimg.png)
