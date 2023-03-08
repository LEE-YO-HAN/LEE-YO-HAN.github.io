---
title: react styled components hover
description: react에 styled-components를 이용해 hover 적용하기
category: react
date: "2023-03-03"
---

# 리액트 스타일 컴포넌트에 hover 적용하기

```typescript
// &:hover를 넣는다.

const ButtonStyle = styled.button`
  &:hover {
    background-color: skyblue;
    color: blue;
  }
`;
```

비슷한 상황에서 a 태그를 사용할때 자동으로 설정되는 스타일도 수정해줄 수 있다.

```typescript
const LinkTag = styled.a`
  /* 밑줄 제거 */
  text-decoration: none;

  /* 마우스를 링크에 올려뒀을 때의 스타일 */
  &:hover {
  }
  /* 아직 방문하지 않은 링크의 스타일 */
  &:link {
  }
  /* 사용자가 방문한 적이 있는(클릭한 이후) 링크의 스타일 */
  &:visited {
  }
  /* 마우스로 링크를 클릭하고 뗄 때까지의 스타일 */
  &:active {
  }
`;
```
