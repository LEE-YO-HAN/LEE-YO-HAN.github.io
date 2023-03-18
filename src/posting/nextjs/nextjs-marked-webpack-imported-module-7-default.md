---
title: nextjs marked webpack imported module 7 default
description: TypeError: (0 , marked__WEBPACK_IMPORTED_MODULE_7__.default) is not a function
category: nextjs
date: "2023-03-18"
---

# TypeError: (0 , marked\_\_WEBPACK_IMPORTED_MODULE\_\__7_.default) is not a function 에러 해결 방법

나의 경우 SSR 데이터를 contextAPI를 통해 패치하려 했으나, 정상적으로 받아오지 못할때 발생한 오류였다.

로컬 실행 종료 후 재실행하니 정상적으로 데이터를 받아올 수 있었다.

다소 허탈한 해결방안이었지만, SSR을 다루는 페이지의 데이터가 정상적으로 받아와지지 않는 경우, 코드 작성 후 프로그램을 다시 실행해보자.

---

참조 : https://github.com/vercel/next.js/issues/18090
