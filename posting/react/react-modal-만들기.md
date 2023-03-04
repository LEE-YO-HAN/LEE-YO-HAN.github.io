---
title: react modal 만들기
description: 라이브러리 없이 모달창을 만들어 커스텀하는 법
category: react
date: "2023-03-03"
---

# 라이브러리 없이 모달창 만들어보기

모달 버튼이 있는 페이지

```javascript
// ModalTest.jsx

import ModalPage from "./ModalPage";
import { useState } from "react";

export default function ModalTest() {
  // 모달을 보여줄지 말지 상태를 관리하는 state를 만들어준다.
  const [showModal, setShowModal] = useState(false);

  // 모달 버튼을 클릭하면 열리고
  const openModal = () => {
    setShowModal(true);
  };
  // 활성화된 모달창 밖을 클릭하면 닫힌다.
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={openModal}>모달이에옹</button>
      // 모달상태가 true면 ModalPage를 보여주고, 아니면 null // props로 showModal과
      closeModal을 전달한다.
      {showModal === true ? (
        <ModalPage showModal={showModal} closeModal={closeModal} />
      ) : null}
    </>
  );
}
```

모달 컴포넌트

```javascript
import styled from "styled-components";

export default function ModalPage({ showModal, closeModal }) {
  return (
    // 모달 밖을 클릭하면 모달창을 닫게 만든다.
    <StyledModalBackground onClick={closeModal}>
      // stopPropagation은 부모태그로부터의 이벤트 전파를 중지시킨다. // 이
      친구가 없으면 모달창 안쪽을 클릭해도 closeModal이 실행된다.
      <StyledModalContainer onClick={e => e.stopPropagation()}>
        <StyledModal>열린 모달창이에옹</StyledModal>
      </StyledModalContainer>
    </StyledModalBackground>
  );
}

// 위치를 대략 가운대로 정해주고
const StyledModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

// 모달 밖 배경색은 우리에게 익숙한 어두운 색으로 만들어주자
const StyledModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 0;
  cursor: auto;
`;

// 모달창 사이즈는 용도에 맞춰 설정해준다.
const StyledModal = styled.div`
  width: 400px;
  height: 400px;
  background-color: white;
`;
```

브라우저 화면

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FOLJGf%2FbtrNjUdVndT%2FvgVskBO2xWeRwi01YQPzkk%2Fimg.png)

스타일은 용도에 맞게 다양하게 변경시킬 수 있다.
