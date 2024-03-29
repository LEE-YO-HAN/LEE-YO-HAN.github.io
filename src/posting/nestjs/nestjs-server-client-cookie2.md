---
title: nestjs server client cookie2
description: NestJS에서 클라이언트로 쿠키 보내기 (왜 내 쿠키는 안받아줘요?) - 배포환경
category: nestjs
keyword: nestjs, 쿠키
date: "2023-04-30"
---

### **[서버에서 브라우저로 쿠키 저장](https://lee-yo-han.github.io/nestjs-server-client-cookie)**

분명 로컬에서는 쿠키가 정상적으로 브라우저에 저장되는 것을 볼 수 있었는데, 배포를 하고 나니 또다시 쿠키가 보이지 않았다. response headers에는 쿠키 값과 함께 다음과 같은 에러 문구를 볼 수 있었다.

> **this attempt to set a cookie via a set cookie header was blocked because its domain attribue was invalid with reqards to the current host url**
>
> > "설정된 쿠키 헤더를 통해 쿠키를 설정하려는 이 시도는 해당 도메인 속성이 현재 호스트 URL에 대해 유효하지 않기 때문에 차단되었습니다."

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcGZzIY%2FbtsdemcKoT1%2FcT16wBLzk5J48gv37fGyPK%2Fimg.png)

쿠키 전송 옵션은 다음과 같다.

```typescript
res.cookie("cookie", "cookie", {
  maxAge: 0,
  sameSite: process.env.COOKIE_PARSE_SAME_SITE as SameSite, // "none"
  secure: true,
  httpOnly: true,
  domain: process.env.COOKIE_PARSE_DOMAIN, // "www.backend.com"
});
```

프론트엔드의 URL이 https://www.frontend.com 이고,

백엔드의 URL이 https://www.backend.com 이라고 했을 때, domain 속성을 백엔드 URL로 설정했을 때 발생한 오류이며, domain을 프론트엔드 URL로 바꾸면 response headers에 쿠키 값 자체가 확인되지 않았다.

cors 설정도 credential: true나 origin 등을 정상적으로 해놓은 상태이기 때문에 쿠키 외 다른 데이터는 정상적으로 받아오는걸 확인할 수 있었다.

다른 자료를 찾아보니, secure 속성을 적용하면 쿠키가 정상적으로 저장된다고는 하지만 본인은 이런 문제가 해결되지 않았다.

결국 도메인을 구매해서 사용하게 되었다.

예를 들어 프론트엔드의 URL은 https://www.product.com 로,

백엔드의 URL은 https://api.product.com 으로 연동시켜주고, 쿠키 옵션은 아래처럼 바꿨다.

```typescript
res.cookie("cookie", "cookie", {
  maxAge: 0,
  sameSite: process.env.COOKIE_PARSE_SAME_SITE as SameSite, // "lax"
  secure: true,
  httpOnly: true,
  domain: process.env.COOKIE_PARSE_DOMAIN, // ".product.com"
});
```

같은 도메인을 사용하고 나서야 쿠키가 정상적으로 브라우저로 접속하는 것을 확인할 수 있었다.
