---
title: nestjs server client cookie
description: NestJS에서 클라이언트로 쿠키 보내기 (왜 내 쿠키는 안받아줘요?)
category: nestjs
keyword: nestjs, 쿠키
date: "2023-04-13"
---

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpD9qr%2Fbtr9Oa0APIT%2FFuzZyjjney7aKkIXy6BAfK%2Fimg.png)

## 쿠키(Cookie)란?

쿠키는 서버에서 클라이언트에게 보내는 작은 데이터 조각이다. 일반적으로 브라우저에서 웹 사이트를 방문할 때 쿠키를 사용하여 사용자의 활동을 기록하고, 이후에 그 사용자가 같은 웹 사이트를 방문할 때 이 정보를 사용해 그에 맞게 동작하게 해준다. 하지만 쿠키는 당사자뿐만 아닌 제 3자가 조회하는 것도 가능하기 때문에 개인 정보를 담는 등 보안상 민감한 정보를 저장하는 데에는 적합하지 않기 때문에 탈취되거나 사용자에 의해 조작되어도 크게 문제 되지 않을 정보를 주로 저장한다. (ex. 다크 모드, 장바구니 목록 등)

## 서버에서 클라이언트로 Cookie 전송 예제

### 모듈 설치

```bash
yarn add cookie-parser @types/cookie-parser # 쿠키 관리 모듈
```

### 모듈 적용

```typescript
// main.ts

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    // cors 설정
    origin: "http://localhost:3000",
    credentials: true, // 쿠키를 사용할 수 있게 해당 값을 true로 설정
  });
  app.use(cookieParser()); // 쿠키의 편리한 이용을 위해 cookieParser 적용
  await app.listen(3001);
}
bootstrap();
```

### 쿠키 사용 로직

```typescript
// controller.ts

import { Response } from "express";
import { Controller, Get, Res } from "@nestjs/common";

@Controller("myController")
export class MyController {
  @Get()
  getCookie(@Res() res: Response) {
    // express의 Response 객체를 불러와 사용해준다.
    // 쿠키 설정
    res.cookie("cookieName", "cookieValue", { maxAge: 900000, httpOnly: true });
    // maxAge : 유효기간을 밀리초 단위로 설정
    // httpOnly : 클라이언트에서 쿠키에 접근할 수 없도록 설정

    // HTTP 응답 반환
    return res.send("쿠키가 설정되었습니다.");
  }
}
```

쿠키를 요청하는 클라이언트에서도 withCredentials 값을 true로 설정해준다.

```typescript
axios.get(BASE_URL, {
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
```

## 문제상황

보통 예제는 위와 같지만 나는 쿠키가 브라우저에 저장되지 않았다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fd0P7QS%2Fbtr9SjoI9ke%2FIW9CJf8K5mS7kDuau67KDK%2Fimg.png)

로직이 잘못된 것처럼 보이지도 않았고 별도의 에러 메시지도 없어서 문제 파악이 어려웠다.

네트워크 탭을 통해 확인해 보니 response 헤더에 쿠키도 정상적으로 들어가 있었다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDRJgW%2Fbtr9NnsBfTs%2FlGo4A2uw6n2UXPJJQVwbb1%2Fimg.png)

그런데 노란 경고판이 눈에 띄었다.

경고 문구는 다음과 같다.

> **this set-cookie header didn't specify a samesite attribute, was defaulted to sameSite=Lax, and was blocked because it came from a cross-site reponse which was not the response to a top-level navigation. this response is considered cross-site because the URL has a different scheme than the current site**

요청 URL과 서버 URL의 체계가 달라서 차단됐다고 한다. 내 클라이언트는 http://localhost인데 서버가 https://localhost라서 그런 것 같았다.

sameSite를 none으로 설정해주고 난 후에는 다음과 같은 경고 문구가 생겼다.

> **this attempt to set a cookie via a set-cookie header was blocked because it had the "SameSite=None" attribute but did not have the "Secure" attibute, which is required in order to user "sameSite=None"**

sameSite=none을 적용하기 위해 필요한 Secure 속성이 없기 때문에 쿠키 설정이 차단되었단다.

쿠키 생성 옵션을 마저 추가해 줬다.

```typescript
res.cookie("cookieName", "cookieValue", {
  maxAge: 300000,
  // none, lax, strict 중 none은 쿠키가 항상 전송되도록 허용.
  sameSite: "none", // HTTPS 프로토콜을 사용하고 secure 옵션이 설정된 경우에만 사용 가능
  secure: true, // 쿠키가 HTTPS 프로토콜을 사용하는 경우에만 전송되도록 제한
  httpOnly: true, // 쿠키에 접근할 수 있는 영역을 HTTP(S) 프로토콜로 제한하여,
  // 브라우저의 자바스크립트 코드로부터 쿠키에 접근할 수 없게 함
});
```

secure 속성을 사용하기 위한 https 설정은 아래를 참고할 수 있다.

### [Localhost 환경에서 https 적용하기](https://lee-yo-han.github.io/nestjs-localhost-https)

그 결과 쿠키를 브라우저에서 잘 받는 것을 볼 수 있었다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FJwJs6%2Fbtr9SkupB08%2FbXf0Hf9swCaY3uL8cxMh7K%2Fimg.png)

마지막으로 서버에서 쿠키를 받아 사용하는 방법이다.

```typescript
import { Response, Request } from "express";
import { Controller, Get, Post, Res, Req } from "@nestjs/common";

@Controller("myController")
export class MyController {
  @Get()
  getCookie(@Res() res: Response) {
    // express의 Response 객체를 불러와 사용해준다.
    // 쿠키 설정
    res.cookie("cookieName", "cookieValue", { maxAge: 900000, httpOnly: true });
    // maxAge : 유효기간을 밀리초 단위로 설정
    // httpOnly : 클라이언트에서 쿠키에 접근할 수 없도록 설정

    // HTTP 응답 반환
    return res.send("쿠키가 설정되었습니다.");
  }

  @Get()
  postCookie(@Req() req: Request) {
    // express의 Request 객체를 불러와 사용해준다.
    // request 객체의 cookies를 통해 생성했던 쿠키의 이름을 통해 값을 가져온다.
    req.cookies["cookieName"];
  }
}
```

클라이언트 단에서는 withCredentials:true 옵션 설정 외에는 특별히 해줄 것이 없다.

---

참조 : https://docs.nestjs.com/techniques/cookies
