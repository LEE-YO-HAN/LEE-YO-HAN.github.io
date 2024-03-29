---
title: github github api get repo data
description: GithubAPI를 이용한 repository 내 Markdown 파일 정보 불러오기
category: github
keyword: github, api
date: "2023-03-13"
---

# Github REST API 설명서

https://docs.github.com/ko/rest?apiVersion=2022-11-28

## GithubAPI 이용 시 토큰이 필요한 경우 아래와 같이 토큰 발급도 가능하다.

- 우측 상단의 프로필을 통해 Settings 접근

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc5d9NT%2Fbtr3XWt2ipS%2FlVrpZru5irR5mDft0cLaO0%2Fimg.png)

- 좌측 하단의 Developer settings 접속

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdnMYAN%2Fbtr37uQgb1j%2Fz3lG0JXTBq5gkIhvk1HEek%2Fimg.png)

- Tokens나 Fine-grained tokens를 통해 원하는 권한들을 설정해 토큰을 생성할 수 있다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcKOqYU%2Fbtr3V6YgATa%2Fc3QmI12TDR3vgoNL0ZTZR1%2Fimg.png)

> Github 홈페이지에 여러 api들이 많기 때문에 필요에 따라 사용하면 좋을 것 같다. 이 글에서는 repository 안의 파일들의 정보만을 가져올 것이다.

## 1. requestURL

```javascript
const BASE_URL =
  "https://api.github.com/repos/{유저명을 포함한/레포지토리 이름}/contents/{데이터를 가져올 디렉토리}";
const options = {
  headers: {
    "Content-Type": "application/json",
  },
};
```

예를 들어 src의 posting이라는 디렉토리의 데이터들을 가져오고 싶다면

https://api.github.com/repos/name/some-repo/contents/src/posting

정도가 될 수 있다.

요청이 정상적으로 작동했다면 아래와 같이 데이터를 받을 수 있다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FXHDFb%2Fbtr3WcDXFiZ%2FmFW3Q3uyQPHEOBpkOFVKA0%2Fimg.png)

하지만 하나의 파일에 대한 구체적인 정보는 들어있지 않다.

한 단계로 더 들어가 정보를 받아온다면 아래와 같은 base64로 인코딩된 content 데이터를 받아올 수 있다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcaVD0e%2Fbtr38M4cfZ6%2FMLUYZ4OarG3pXvjnSCW7VK%2Fimg.png)

## 2. decoding

해당 콘텐츠의 데이터를 정상적으로 받아오기 위해서는 디코딩이 필요하다.

```typescript
const eachMarkdown = async (name: string) => {
    const url = `${BASE_URL}/${categoryName}/${name}`;
    const response = await axios.get(url, options);
    const content = Buffer.from(response.data.content, "base64").toString();

    ...
};
```

content 데이터를 추출하고 콘솔을 확인하면 아래와 같이 string을 받아볼 수 있다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Flctvp%2Fbtr38LKZ6o1%2FnwU9EK44kJmKCfanQsdw0K%2Fimg.png)

## 3. 데이터 가공

캡쳐 이미지 아래로 마크다운 파일의 본문들이 함께 있지만, 내가 필요한 부분은 머리말 부분이기 때문에 이 데이터를 추출해야 했다.

```typescript
const eachMarkdown = async (name: string) => {
  const url = `${BASE_URL}/${categoryName}/${name}`;
  const response = await axios.get(url, options);
  const content = Buffer.from(response.data.content, "base64").toString();
  const frontmatter = content.match(/^---\n([\s\S]+?)\n---/);
  if (frontmatter) {
    const matters = JSON.stringify(frontmatter[0]).split("\\n");
    const dateRegex = /\d{4}-\d{2}-\d{2}/;
    const match = matters[4].match(dateRegex);
    if (match) {
      const result = {
        title: matters[1].split("title: ")[1].replaceAll(" ", "-"),
        description: matters[2].split("description: ")[1],
        category: matters[3].split("category: ")[1],
        date: match[0],
      };
    }
  }
};
```

상수 frontmatter는 머리말을 가져오지만 예쁘게 가져오진 않는다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FTC1yi%2Fbtr35bRukP2%2FnWJ0mgeFgu2LlEBk0KyupK%2Fimg.png)

때문에 if(frontmatter){...}와 같이 필요한 데이터를 정규식이나 string메서드를 통해 원하는대로 가공해 사용하여 사용해야 한다.
