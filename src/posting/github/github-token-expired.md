---
title: github token expired
description: Github Token을 이용한 GithubAPI 사용
category: github
keyword: github, api
date: "2023-03-31"
---

### **본 포스팅은 NextJS 13 환경에서 진행한 내용을 바탕으로 한다. GithubAPI 사용법은 공식 문서에 상세히 나와있기 때문에 사용법보다 토큰 만료 문제를 주로 다룬다.**

## GithubAPI란?

> Github의 기능을 REST API 형식으로 사용할 수 있도록 도와주는 기능이다.

**[GithubAPI docs](https://docs.github.com/en/rest?apiVersion=2022-11-28)**

아래와 같이 사용할 수 있는 기능이 많다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F6rpoI%2Fbtr65pd5Q0W%2F7NUKUqiXklINKYLwJWPow1%2Fimg.png)

## 1. 토큰 발급

간단한 조회 정도는 토큰이 필요하지 않지만, 요청의 종류에 따라 토큰이 필요한 경우가 있다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbS8fhz%2Fbtr60iAL28F%2FxJ66qxT7PKF4U6JjLkCA91%2Fimg.png)

우선 우측 상단의 Settings로 들어가서

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdU186G%2Fbtr61k5X0vE%2FdrgRV6uJMfho9JCIhoUghk%2Fimg.png)

Settings의 좌측 하단 Developer settings에 들어간다.

그 안에 Pat(personal access tokens)를 발급받을 수 있는 창을 볼 수 있다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FE3TPa%2Fbtr60DxUYrw%2FtWMeaxCI78Cyx9838COCVK%2Fimg.png)

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnE2jt%2Fbtr60gbWaov%2FQ897sC2Gk2RxKlsBVZ5jLK%2Fimg.png)

Generate new token을 통해 원하는 종류의 토큰을 받을 수 있다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHPjvr%2Fbtr61gW4V3n%2Fvqk7jPvdQAcdlAfXomGiQ0%2Fimg.png)

토큰명, 유효기간, access할 repo를 설정하고

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbX6MQh%2Fbtr61lcFYwt%2F1fkFl327Q0I91UIwAgfCfK%2Fimg.png)

원하는 기능에 대한 권한을 설정해준다.

이번엔 간단하게 issue에 대한 작업만 진행해본다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FVESxa%2Fbtr63YA3qrw%2FCedCRRISe4SG6PLHK4H0dK%2Fimg.png)

생성된 토큰은 잘 복사해 안전한 공간에 저장해준다.

## 2. Token 사용

기본적인 사용법은 아래와 같다.

https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api?apiVersion=2022-11-28

```typescript
// issues 등록하기
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: `api token`,
});

const issueUpdate = async (name: string, feed: string) => {
  await octokit.request(
    "POST /repos/{owner}/{repository name}/issues/1/comments",
    {
      owner: "user name",
      repo: "repository name",
      title: `title`,
      body: `body`,
      // headers: {
      //   "X-GitHub-Api-Version": "2022-11-28",
      // },
    },
  );
};
```

위 요청을 실행하면 정상적으로 issue 등록이 되는 것을 볼 수 있다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbjcLkP%2Fbtr65o7kXPZ%2Fh739Lzn25eBdRhDzcPPU8K%2Fimg.png)

## 유의할 점

### 1. headers 설정

우선 headers를 주석처리한 이유는 공식 문서에서는 github API version을 headers에 담으라고 돼있지만, 버전과 함께 요청을 실행하면 cors에러가 발생하는 것을 볼 수 있다.

**[Github CORS ISSUE](https://github.com/orgs/community/discussions/40619)**

headers는 별도로 추가하지 말고 auth만 설정해준 후 사용해 주도록 한다.

### 2. auth Token 설정

API key와 같은 토큰은 대부분 .env를 통해 변수를 설정해 사용해줘야 한다.

하지만 .env에 토큰을 설정하고 commit을 하게되면 gitignore를 설정해줘도 github가 자동으로 감지해 토큰을 만료시키기 때문에 .env.local서 테스트하고 .env의 토큰은 지운 뒤에 사용해주자.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FuJQsS%2Fbtr62Xh6jLO%2FHkR7hA4k0cMffBKY55DHu1%2Fimg.png)

---

참조 : https://docs.github.com/en
