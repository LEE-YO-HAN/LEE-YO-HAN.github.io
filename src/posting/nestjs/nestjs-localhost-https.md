---
title: nestjs localhost https
description: Localhost 환경에서 HTTPS 적용하기
category: nestjs
date: "2023-04-30"
---

### Local 환경에서 https 설정이 필요한 이유

로컬 환경에서 내가 원하는대로 기능들이 작동한다고 해도, 배포 환경과 로컬 개발 환경의 차이로 인해 코드의 수정이 필요해질 수 있다. 이러한 이유로 개발 환경을 배포 환경과 최대한 동일하게 만들어주는 것이 좋다. 또한 최근의 배포 환경들은 대부분 https로 이뤄져 있기 때문에 그에 맞춰 설정해줄 필요가 있다.

### 자체 서명 인증서 생성 (openssl 사용)

```bash
# 개인 키 생성
$ openssl genrsa -out private-key.pem 2048

# 개인 키를 사용한 새로운 인증서 요청서 생성
$ openssl req -new -key private-key.pem -out cert-request.csr

# 요청서를 사용한 자체 서명 인증서 생성
$ openssl x509 -req -in cert-request.csr -signkey private-key.pem -out cert.pem
```

인증서 생성 시 입력사항은 모두 건너뛰어도 무관하다.

### HTTPS 구성 설정 - main.ts

```typescript
import * as fs from "fs";
import * as https from "https";

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync("./private-key.pem"),
    cert: fs.readFileSync("./cert.pem"),
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  // 필요에 따라 cors 설정도 가능
  // app.enableCors({
  //  origin: [url,...],
  //  credentials: true, 쿠키를 사용하는 경우 설정
  // });
  await app.listen(3000);
}
bootstrap();
```

설정이 완료되면 로컬에서 https 환경처럼 적용할 수 있다.

하지만 자체 인증서로 https를 만들어 SSR(ServerSideRendering)이나 API 요청 시 self certifi 에러가 발생할 수 있다. 이런 경우 프론트단 env에 다음과 같이 설정해주면 된다.

```bash
# .env
NODE_TLS_REJECT_UNAUTHORIZED=0
```

그럼에도 오류가 발생하는 경우 아래의 링크를 통해 크롬 환경설정을 해주면 된다.

chrome://flags/#allow-insecure-localhost

유효하지 않은 인증서 허용으로 설정

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F3WChm%2Fbtsdi3DwSL4%2F5cdQ9YFzgaKugT4u9ewDk0%2Fimg.png)
