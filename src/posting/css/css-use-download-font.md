---
title: css use download font
description: CSS - 배포 사이트에 다운로드 폰트 적용하기
category: css
keyword: css, 폰트 적용
date: "2023-03-31"
---

> 기본적으로 CSS에서 제공하는 폰트가 마음에 들지 않거나 내 프로젝트에 어울리지 않는 경우 간단하게 다운로드한 폰트를 프로젝트에 적용해볼 수 있다.

## 1. 폰트 다운로드

우선 마음에 드는 폰트를 다운받는다.

카페24무료폰트: https://fonts.cafe24.com/

무료 폰트 사이트는 찾아보면 사용할 수 있는게 많다.

## 2. 프로젝트에 파일 복사

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbHA9Qr%2Fbtr60vtCf7O%2FMaaAsK1Lg4t5QDXd3bC1Uk%2Fimg.png)

위와 같이 다운로드한 폰트를 작업중인 프로젝트에 넣어준다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FA7Inw%2Fbtr61haATVa%2F9mFQHIOUCbjYI7SnPm8wI0%2Fimg.png)

필자는 styles/fonts/\*\*.ttf 와 같이 저장해줬다.

## 3. CSS 설정

@font -face{}를 이용해 불러올 폰트를 설정해준다.

```css
/* global.css */

@font-face {
  font-family: maplestory;
  src: url("./fonts/Maplestory\ Light.ttf");
}
@font-face {
  font-family: maplestoryBold;
  src: url("./fonts/Maplestory\ Bold.ttf");
}
```

## 4. CSS 사용

평소에 폰트를 적용하는 것처럼 CSS를 적용해주면 된다.

```css
body {
  font-family: maplestory;
}
```
