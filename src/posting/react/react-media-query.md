---
title: react media query
description: React mediaQuery 사용법
category: react
date: "2023-03-03"
---

# react-responsive 사용해보기

공식 사이트 : https://yarnpkg.com/package/react-responsive

CSS의 mediaQuery를 사용해볼 수도 있지만, 간편하게 적용할 수 있는 패키지가 있어서 사용해봤다.

### 패키지 설치

```bash
yarn add react-responsive
```

### useMediaQuery 세팅

```javascript
// useMideaQuery.js

import { useMediaQuery } from "react-responsive";

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({
    minWidth: 481,
  });
  return isDesktop ? children : null;
};

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  return isMobile ? children : null;
};
```

위의 경우 모바일과 PC만 나눴지만 대략적인 분기점은 아래와 같이 설정해도 괜찮다

1. 낮은 해상도의 PC, 태블릿 가로 : ~1024px
2. 태블릿 가로 : 768px ~ 1023px
3. 모바일 가로, 태블릿 : 480px ~ 767px
4. 모바일 : ~480

### useMediaQuery 사용

```javascript
// Responsive.jsx

import { Desktop, Mobile } from "../../hooks/useMideaQuery";

export const Responsive = () => {
  return (
    <>
      <Desktop>
        <div>PC화면</div>
      </Desktop>
      <Mobile>
        <div>모바일화면</div>
      </Mobile>
    </>
  );
};
```

편의상 한 컴포넌트에 다 집어넣을 수도 있지만, 모바일과 데스크탑 환경의 view는 아예 다른 경우가 많기 때문에, 코드 관리를 편하게 하기 위해서는 모바일 컴포넌트를 따로 만드는게 더 나을 것 같다는 생각이 든다.
