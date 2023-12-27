---
title: nextjs pages api dir unsupported
description: NextJS에서 API 디렉토리가 사용되지 않는 이유
category: nextjs
keyword: nextjs api 디렉토리
date: "2023-04-30"
---

NextJS는 pages/api 디렉토리를 통해 백엔드에 대한 처리를 수행할 수 있다.

하지만 정적으로 배포된 사이트(ex. 블로그 등)에서는 pages/api 등과 같은 동적 로직은 지원되지 않기 때문에 api 디렉토리를 사용할 수 없다.

정적 배포 방법

```javascript
// package.json
// NextJS 13.3 이전 버전
"scripts": {
    "dev": "next dev",
    "start": "next start",
    "lint": "next lint",
    "build": "next build && next export", // ## 정적 배포
    "predeploy": "npm run build",
    "deploy": "touch out/.nojekyll && gh-pages -d out --dotfiles"
  },


// next.config.js
// NextJS v13.3 ~
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
}

module.exports = nextConfig
```

---

참조

https://nextjs.org/docs/advanced-features/static-html-export
