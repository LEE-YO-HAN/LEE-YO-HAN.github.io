---
title: github git custom blog
description: Nextjs를 이용한 Github pages 블로그 만들기
category: github
keyword: github, pages
date: "2023-03-11"
---

# Github pages와 Nextjs를 선택한 이유

### 1. Github pages

> vercel도 Nextjs로 쉽게 배포할 수 있지만, 백엔드는 별도로 만들지 않을 계획이었기에, 추후 댓글 기능이나 추천 글 목록 등을 Github 사이트 하나로 모두 관리하기 위해서 Github pages를 이용하기로 했다.

### 2. Nextjs

> 블로그는 검색엔진에 잘 노출되어야 그 의미가 있다. 또한 React 환경을 이용한 블로그 개발을 원했기에 SSR(Server Side Rendering) 등을 통한 SEO(검색엔진 최적화)에 유리한 React 프레임워크인 Nextjs를 사용하기로 결정했다.

# Github Pages 호스팅 방법

### 1. Repository 생성

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbkBnCf%2Fbtr3TGZh4t7%2F0VD4ycS4u8EvTAeIxvjsP1%2Fimg.png)

Repo 이름은 {username}.github.io 로 저장해준다.

- 생성된 repo의 settings => pages에서 배포를 확인할 수 있다. (배포되는데 5~10분 정도 소요될 수 있다.)

### 2. Repository 클론 후 Nextjs 설치

```bash
# 현재 디렉토리에 설치
yarn create next-app .

# typescript
yarn create next-app . --typescript
```

### 3. gh-pages 설치

Github pages를 이용하기 위해 아래 명령어를 통해 설치해준다.

```bash
yarn add gh-pages --save-dev
```

### 4. package.json 설정

홈페이지 도메인 추가 및 scripts를 수정해준다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbSbOFc%2Fbtr33yMA8BY%2FYBMjkb8aNMMR8jv7bhlrxk%2Fimg.png)

1번째 줄처럼 홈페이지를 입력하고, scripts를 위와 같이 수정해준다.

```javascript
"build": "next build && next export",
"predeploy": "npm run build",
"deploy": "touch out/.nojekyll && gh-pages -d out --dotfiles"
```

- next export : Nextjs를 정적 사이트로 배포하기 위해 설정
- -- touch out/.nojekyll : 본래 guthub pages는 jekyll 기반으로, \_\_{filename}을 특수 리소스로 간주하고 최종 사이트에 복사하지 않기 때문에 jekyll을 사용하지 않는다고 명시해 정상적으로 처리될 수 있도록 설정
- gh-pages -d out --dotfiles : 현재 repo의 임시 복제본 생성 후, gh-pages 브랜치가 없는 경우 브랜치 생성. 기본 경로의 모든 파일 또는 선택적 src 구성의 패턴과 일치하는 파일만 복사하고 모든 변경 사항 커밋 후 푸시. 이미 gh-pages 브랜치가 있는 경우 제공된 파일에서 커밋을 추가하기 전에 원격의 모든 커밋으로 업데이트됨. src 패턴과 일치하는 도트 파일도 포함시킴

참조 : https://github.com/tschaub/gh-pages

명령어 보기

```bash
yarn gh-pages --help
```

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbJQQKR%2Fbtr34cpsLGR%2FDtpXfGfLf2p8bph05dvvnk%2Fimg.png)

### next.config.js 수정

config는 본인이 적용하려는 방식에 맞게 설정해줘도 괜찮다.

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true, // 이미지 정상적으로 불러올 수 있도록함
  },
  compiler: {
    styledComponents: true, // styled-components 사용 시 컴파일러에 추가
  },
};

module.exports = nextConfig;
```

### 6. 배포

```bash
yarn deploy
```

> cmd(명령 프롬프트)에서 실행 시 tought를 사용할 수 없다는 에러가 발생하기 때문에 git bash로 실행

### 7. 배포 후 설정

```bash
Export successful. Files written to D:\0. CORDING\INDI-PROJECT\github-blog\out
$ gh-pages -d out --dotfiles
Published
```

터미널에 위와 같은 메세지가 뜨면, repository => setting => pages의 branch에 gh-pages가 생성돼있는 것을 볼 수 있음

gh-pages를 배포 브랜치로 설정해준 후 저장

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FXcGvE%2Fbtr35F5rS1r%2FgTSz4ck3EW2y6KOnmS9EiK%2Fimg.png)

설정을 완료하고 상단의 Visit site로 페이지를 접속하면 Nextjs 기본 화면이 잘 나오는 것을 볼 수 있다.
