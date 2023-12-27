---
title: css no selection
description: CSS로 글자 더블클릭 시 선택자(파란색 마스킹) 없애기
category: css
keyword: css, 마스킹 제거
date: "2023-03-09"
---

# 더블클릭시 파란색 선택자 생성 막는 방법

```css
div {
  user-select: none;
  -webkit-user-select: none;
  /* (safari, chrome) browsers */
  -moz-user-select: none;
  /* mozilla browsers */
  -khtml-user-select: none;
  /* konqueror browsers */

  -ms-user-select: none; /* IE10+ */
}
```
