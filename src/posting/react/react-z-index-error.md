---
title: react z index error
description: z-index가 올바르게 적용되지 않을때 적용해볼 수 있는 방법
category: react
keyword: z-index
date: "2023-03-03"
---

# z-index 미적용시 해결방법

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F2c0QV%2FbtrXD8G7Ar9%2FpCFQ6eujsGgA0bKCKx1kpk%2Fimg.png)

위와 같이 z-index를 999로 적용해도 원하는대로 작동하지 않는 경우를 볼 수 있다.

### MDN 공식 문서 : https://developer.mozilla.org/ko/docs/Web/CSS/z-index

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F8pPBj%2FbtrXCijsq0h%2FkdCdCRUKvZIGe7dk8KPJf0%2Fimg.png)

해당 사진의 마지막 줄의 "자손의 z-index를 자기 외의 바깥 요소와 비교하지 않습니다." 이 부분으로 인한 문제로 생각됐다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fct1Z18%2FbtrXH8zek29%2Fjwx0ckk9YgnPRLS2sM06k0%2Fimg.png)

부모 요소는 부모 요소끼리, 자식 요소는 자식 요소끼리 경쟁하기 때문에, 기존 코드는 이와 같이 HeaderNav 안에 SideMenu가 있어 HeaderNav 내에서만 z-index를 비교하고 있던 것이었다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbUIap4%2FbtrXCicOSRi%2FzWiWf6wrtlUx9aK2uYKK7K%2Fimg.png)

이처럼 SideMenu를 HeaderNav 밖으로 빼주니, 아래와 같이 정상적으로 작동하는 모습을 볼 수 있었다.

### 정상 적용된 화면

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FwMc3x%2FbtrXFupLVFz%2FWH6kLZ1IbRxHnXK2bqkHa0%2Fimg.png)

## z-index가 제대로 작동하지 않을때 참고할만한 사항

1. 부모 요소는 부모 요소끼리 경쟁되고 있는지 확인한다.
2. Element가 static(position 속성의 default 값)이 아닌 position 속성이 설정되어있는지 확인한다.(relative, absolute, fixed, sticky)
3. opacity나 transform과 같은 css 속성이 설정돼있는지 확인한다. 해당 css요소가 설정돼있다면 1번의 기준에 맞춰 코드를 다시 작성해준다.

이정도면 버그를 수정하는데 충분하지만 더 싶도 깊은 내용은 아래를 참고해보면 좋을 것 같다.

참조 : https://coder-coder.com/z-index-isnt-working/
