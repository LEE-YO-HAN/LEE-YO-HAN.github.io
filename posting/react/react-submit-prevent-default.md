---
title: react submit prevent default
description: form 태그에서 submit 이벤트 방지하기
category: react
date: "2023-03-03"
---

# react form에서 submit 이벤트 방지하기

### submit 이벤트가 발생하면 페이지가 새로고침이 된다.

단순히 페이지가 리프레시 되는 것도 좋은 사용자 경험이 아닌데, 임시로 저장돼있던 데이터(회원가입 정보 등)가 날아가면 React의 작동 방식을 거스를 뿐 아니라 사용자 경험에도 치명적이다.

떄문에 우리는 sumbit 이벤트를 멈춰줄 필요가 있다.

```javascript
const Header = () => {
  const onSubmit = e => {
    e.preventDefault(); // 해당 코드로 이벤트를 멈춰줄 수 있다.
  };

  return (
    <form>
      <input type="text" />
      // 버튼 타입도 submit으로 꼭 변경해준다.
      <button type="submit" onSubmit={e => onSubmit(e)}>
        입력
      </button>
    </form>
  );
};
```

위와 같이 작성하면 같은 폼 안에 있는 경우에 대해 submit 방지가 잘 되는 것을 확인할 수 있다.
