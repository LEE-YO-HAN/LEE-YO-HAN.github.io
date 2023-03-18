---
title: nextjs link userouter
description: Nextjs Link와 useRouter의 차이
category: nextjs
date: "2023-03-18"
---

# Link / useRouter 사용법

```javascript
// Link
import Link from "next/link";

export const compo1 = () => {
  return (
    <Link href="url">
      <div>some element</div>
    </Link>
  );
};

// useRouter
import { useRouter } from "next/router";

export const compo2 = () => {
  const router = useRouter();

  const routeHandler = () => {
    router.push(url);
  };

  return (
    <div onClick={routeHandler}>
      <span>some element</span>
    </div>
  );
};
```

### Nextjs에서 페이지를 전환하기 위해 사용하는 방법으로, Link를 이용하거나 useRouter를 이용해 router.push()와 같이 사용하여 전환해줄 수 있는데, 비슷해 보이는 두 가지 방법의 차이를 간단히 정리해본다.

## Link의 특징

- Link는 Client-side navigation으로, javascript로 페이지 전환이 이뤄진다.
- 기본 navigation보다 빠르며 SPA(Single Page Application)의 특성을 유지한다.

## useRouter의 특징

- react-router-dom의 history.push()와 유사하다.
- 크롤러가 링크를 감지하지 못해 SEO가 좋지 않을 수 있다.
- 외부 URL을 사용할 경우 window.location 혹은 a 태그를 사용해야 한다.

또한 Link는 클릭 시 바로 페이지가 전환되지만, useRouter는 로직을 처리한 후 원하는 시점에 전환이 가능하다.

## 결론

> router.push()는 onClick에 사용되는 행동(action)이기 때문에 Link 태그보다 검색에 불리하지만, 로직의 처리에 따라 활용도가 높다.

> Nextjs의 장점인 SEO(Search Engine Optimization - 검색 엔진 최적화)를 원한다면 Link를 사용하는 것이 더 유리하다.

---

참조

https://stackoverflow.com/questions/65086108/next-js-link-vs-router-push-vs-a-tag

https://nextjs.org/docs/api-reference/next/link

https://nextjs.org/docs/api-reference/next/router
