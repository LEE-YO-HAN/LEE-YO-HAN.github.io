---
title: css a tag style fix
description: a 태그(Link 태그) 기본 스타일 제거하기
category: css
date: "2023-03-09"
---

# a태그 기본 스타일 제거와 스타일 적용

```css
/* 기본 밑줄 제거 */
a {
  text-decoration: none;
}

/* 아직 방문하지 않은 링크의 글자색 정의 */
a:link {
  color: pink;
}

/* 사용자가 방문한 적이 있는(클릭한 이후) 링크의 글자색 
정의 */
a:visited {
  color: black;
}

/* 마우스를 링크에 올려두었을 때, 글자색을 정의 */
a:hover {
  color: red;
}

/* 마우스로 링크를 클릭하고 뗄 때까지의 글자색을 정의 */
a:active {
  color: green;
}
```
