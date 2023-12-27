---
title: github git blog utterances comment
description: utterances를 이용한 Nextjs Github 블로그 댓글 기능 구현
category: github
keyword: github, utterances, 댓글
date: "2023-03-14"
---

# utterances란?

> Github repository의 이슈 기능을 활용해 내 웹사이트에 댓글 기능을 추가할 수 있는 도구로, 별도의 백엔드 구성을 하지 않고 댓글들을 관리할 수 있다는 장점이 있다.

많이 비교되는 disqus라는 툴도 있다. 하지만, disqus는 댓글 작성을 누구나 할 수 있다는 장점이 있는 반면에 광고가 많다는 단점이 있다.
그에 비해 utterances는 Github 계정 소유자만 댓글을 작성할 수 있지만, 별도의 광고도 없고 댓글 작성 시 Markdown을 지원한다는 특징이 있다.

나는 utterances를 Github blog에 사용할 생각이기에 굳이 utterances의 장점을 버리고 disqus를 사용할 이유가 없었다.

# 사용방법

## 1. repository 생성

public으로 설정된 새 레포가 필요하다.

Github blog repo에 연동해도 상관은 없지만 댓글만을 위한 저장소를 만들어 놓는게 관리가 훨씬 쉬울 것 같아 새 repo를 생성해줬다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbq4F8z%2Fbtr34VuvScp%2FwmTQX2iIjKtMjlowowHw80%2Fimg.png)

저장소 이름은 상관 없다.

## 2. utterances 설치

Github app에서 설치할 수 있다.

https://github.com/apps/utterances

## 3. utterances access 설정

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FPS87y%2Fbtr35bYlHCH%2FhE9akcKFM7qYE6yAfvKD4k%2Fimg.png)

app이 설치되면 Configure를 통해 어떤 저장소에 연동해줄지 설정할 수 있다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F55bSC%2Fbtr37BBZd9Y%2FfSwpH2VCQKwXKpQkXAbO00%2Fimg.png)

나는 선택한 저장소에만 연동되게 설정했다.

## 4. utterances.json 생성

```javascript
{
  "origins": ["https://{my url}"]
}
```

위와 같이 자신이 댓글 기능을 사용할 사이트를 utterances.json에 입력해준다.

## 5. script를 블로그 repo code에 복사

https://utteranc.es/?installation_id=35005881&setup_action=install

해당 사이트에 들어가면 어떤 방식으로 script를 구성할지 설정할 수 있다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fo9X4N%2Fbtr34VVyI7q%2F2PbuKqgkmKDtfogCNj7Nx0%2Fimg.png)

> Issue mapping같은 경우, 댓글과 포스팅을 어떻게 연동할지 설정하는 것인데, 통상적으로 pathname이나 URL을 많이 사용하지만 본인 프로젝트의 상황에 맞춰 설정해주는 것이 가장 좋다.

> 또한 한글 파일명을 사용해 URL이나 pathname을 생성하는 경우, 유니코드 인식 문제로 비정상적인 URL이 생성될 수 있기 때문에 설정에 유의해야 한다.

```javascript
// 복사할 스크립트
<script
  src="https://utteranc.es/client.js"
  repo="name/repositoey" // utterances를 연동한 repo 이름
  issue-term="pathname" // issue mapping
  theme="github-light" // 테마 색상
  crossorigin="anonymous"
  async
></script>
```

테마 색상도 다양하기 때문에 utterances 사이트에서 원하는 색상을 골라가며 설정해줘도 괜찮다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FxYtiI%2Fbtr35FEVVmk%2FcS0dxRjlWfFukRPCaL9y61%2Fimg.png)

위에 생성한 script는 통상적으로 댓글 부분에 해당되는 곳에 그대로 복사해 넣지만, 나는 Nextjs를 통해 댓글 컴포넌트를 생성할 것이기 때문에 다른 방식을 사용했다.

```javascript
export const Comment = () => {
  return (
    <section
      ref={elem => {
        if (!elem) {
          return;
        }
        const scriptElem = document.createElement("script");
        scriptElem.src = "https://utteranc.es/client.js";
        scriptElem.async = true;
        scriptElem.setAttribute("repo", "{utterances repo name}");
        scriptElem.setAttribute("issue-term", "pathname");
        scriptElem.setAttribute("theme", "github-dark");
        scriptElem.setAttribute("label", "blog-comment");
        scriptElem.crossOrigin = "anonymous";
        elem.appendChild(scriptElem);
      }}
    />
  );
};
```

해당 컴포넌트에 사용하기 위해 기존의 script와 같은 속성들을 넣어줬다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fckai9y%2Fbtr4aKSLFRA%2F9p3HEGqDCEkfa8sg7Nnd0k%2Fimg.png)

하지만 strict 모드를 false로 해도 종종 댓글찾이 2개가 되어버려 useEffect를 통해 1번만 script를 붙일 수 있도록 코드를 수정했다.

```javascript
import { useEffect } from "react";

export const Comment = () => {
  const makeRef = (el: HTMLElement | null) => {
    if (!el) {
      return;
    } else {
      const scriptElem = document.createElement("script");
      scriptElem.src = "https://utteranc.es/client.js";
      scriptElem.async = true;
      scriptElem.setAttribute("repo", "{utterances repo name}");
      scriptElem.setAttribute("issue-term", "pathname");
      scriptElem.setAttribute("theme", "github-dark");
      scriptElem.setAttribute("label", "blog-comment");
      scriptElem.crossOrigin = "anonymous";
      el.appendChild(scriptElem);
    }
  };

  useEffect(() => {
    const newEl = document.getElementById("comment-box");
    makeRef(newEl);
  }, []);

  return <section id="comment-box" />;
};
```

코드 수정 후 원하는대로 동작하는 모습을 볼 수 있었다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcNZNaQ%2Fbtr38NhUPkk%2FSH2Dgj2Si71gH3Gykm9kYK%2Fimg.png)
