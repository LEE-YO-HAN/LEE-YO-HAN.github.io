---
title: nextjs loading
description: nextjs에서의 로딩처리
category: nextjs
date: "2023-03-04"
---

# Nextjs에서 로딩처리하기

### 모든 페이지를 미리 렌더링하는 NextJS 특성상, 다른 페이지로 라우팅이 진행될때, 사용자는 가만히 멈춰있는 화면을 보게될 수 있다. 때문에 페이지 전환을 정지화면으로 두지 않기 위해 로딩 처리를 구현해볼 수 있다.

## 로딩 스피너 세팅

```typescript
// _app.tsx

// 미리 만들어놓은 로딩 훅과 로딩 스피너
import { useLoading } from "src/hooks/useLoading";
import { LoadingSpinner } from "src/components/videos/video/LoadingSpinner";

<Layout>
  {isLoading ? <LoadingSpinner /> : null}
  <Component {...pageProps} />
</Layout>;
```

로딩스피너는 CSS로 만들어도 좋고, SVG나 GIF, 라이브러리 등 자유롭게 적용해도 좋다.

## 라우팅 시 적용될 이벤트 설정

```typescript
// useLoading.ts

import Router from "next/router";
import { useEffect, useState } from "react";

export const useLoading = () => {
  const [nowLoading, setNowLoading] = useState<boolean>(false);
  useEffect(() => {
    const start = () => {
      setNowLoading(true);
    };
    const end = () => {
      setNowLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return nowLoading ? true : false;
};
```

- routeChangeStart(url, { shallow }) - 라우트가 변경되기 시작할때 트리거됨.

- routeChangeComplete(url, { shallow }) - 라우트가 완전히 변경되었을 때 트리거됨.

- routeChangeError(err, url, { shallow }) - 라우트 변경 중에 에러가 발생했거나, 취소되었을 때 트리거됨.

\_app.tsx(jsx)에 로딩 스피너나 로딩 페이지를 적용해 놓으면,

라우팅으로 인한 페이지 이동이 일어날 때마다 원하는 로딩 창을 호출해줄 수 있다.

## 적용된 페이지

![image](https://blog.kakaocdn.net/dn/cWz72g/btrSmvngm4A/hgKg4FviDpAqQk5U6kGHXK/img.gif)
