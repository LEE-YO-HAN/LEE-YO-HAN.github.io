---
title: nextjs prop classname did not match
description: prop `classname` did not match. with styled-components
category: nextjs
keyword: prop 'classname' did not match. with styled-components
date: "2023-04-30"
---

## prop 'classname' did not match. with styled-components 에러 해결 방법

NextJS의 next.config를 수정해준다.

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true, // 컴파일러 옵션 추가
  },
};

module.exports = nextConfig;
```
