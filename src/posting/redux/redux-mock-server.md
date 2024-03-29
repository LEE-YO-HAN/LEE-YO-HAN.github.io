---
title: redux mock server
description: postman을 이용해 redux Mock server(json-server) 사용해보기
category: redux
keyword: redux, mock server
date: "2023-03-04"
---

### React를 사용하면서 서버와 연결 전, Post Man을 통해 임시로 서버를 연결해 React와 소통하는 데이터와 view가 어떻게 처리되는지 확인하고 싶을때 사용해볼 수 있다.

postman 링크 : https://www.postman.com/

## json-server 설치

```bash
yarn add json-server
```

위 명령어 입력 시 db.json 파일이 자동으로 생성된다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fle0HO%2FbtrMjcfRkOG%2FPMsBpdgzHf6545oXRlN8BK%2Fimg.png)

설치가 완료된 후 아래의 명령어를 입력하면 json server가 실행된다.

## json-server 실행

```bash
yarn json-server --watch db.json --port 3001
```

> json-server를 설치해줄때 생성된 db.json 파일을 실행하는데, 3001번 포트를 사용한다는 의미이다. 포트를 설정해주지 않으면 기본값은 3000이다.

> 보통 React를 로컬로 실행시킬때의 포트도 3000이기 때문에 3001번으로 열어줬다. 포트번호는 3001이든 4000이든 5000이든 사용하고 있는 포트번호만 아니면 된다.

## postman 사용

이제 임시 DB를 사용하고 있기 때문에 Post Man을 설치하거나, 웹에 로그인을 한 후, json-server가 실행된 상태로 post man에 적용하고자 하는 url을 입력해주면 GET, POST, PUT, DELETE 등 다양한 요청을 처리할 수 있게 된다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fl4yDj%2FbtrMkdzirLp%2FweLBKktEnHFX5QcT4NHTK1%2Fimg.png)

사용되는 url은 db.json에 있는 목록명을 기준으로 적용된다.

```javascript

// ex

{
  "comments": [
    {
      "id": 1,
      "profile_url": "https://picsum.photos/id/1/50/50",
      "author": "abc_1",
      "content": "UI 테스트는 어떻게 진행하나요",
      "createdAt": "2022-03-01"
    },
    {
      "id": 2,
      "profile_url": "https://picsum.photos/id/2/50/50",
      "author": "abc_2",
      "content": "막히면 대답은 빨리 해주나요",
      "createdAt": "2022-03-02"
    },
  ],
  "post": [
    {
      "id": 1,
      "author": "abc_1",
      "content": "UI 테스트는 어떻게 진행하나요",
      "createdAt": "2022-03-01"
    }
    {
      "id": 2,
      "author": "abc_2",
      "content": "막히면 대답은 빨리 해주나요",
      "createdAt": "2022-03-01"
    }
  ]
}

```

예를 들어 db.json이 위와 같이 돼있는 상태라면

### http://localhost:3001/post - post 데이터

1. GET : http://localhost:3001/post - 전체 post 목록 불러오기
2. GET : http://localhost:3001/post/1 - id가 1인 post 불러오기
3. POST : http://localhost:3001/post - 새 post 생성(저장)
4. PUT : http://localhost:3001/post/1 - id가 1인 post 수정하기
5. DELETE : http://localhost:3001/post/1 - id가 1인 post 삭제하기

### http://localhost:3001/comments - comments 데이터

1. GET : http://localhost:3001/comments - 전체 comments 목록 불러오기
2. GET : http://localhost:3001/comments/1 - id가 1인 comments 불러오기
3. POST : http://localhost:3001/comments - 새 comments 생성(저장)
4. PUT : http://localhost:3001/comments/1 - id가 1인 comments 수정하기
5. DELETE : http://localhost:3001/comments/1 - id가 1인 comments 삭제하기

위와 같은 방식으로 기본적인 동작을 사용해볼 수 있고, header 값이나 body 값 설정 등 다양한 작업을 진행해볼 수 있다.

Redux를 사용할때, 해당 데이터들을 추출하여 전역 상태로 관리해보는 등의 작업을 실행할 수 있다.
