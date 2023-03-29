import styled from "styled-components";
import React, { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { feedbackAlert } from "./swal";

export const EggBody = ({ eggs }: { eggs: string }) => {
  const [isQuestion, setIsQuestion] = useState(false);
  const questionHandler = () => {
    setIsQuestion(!isQuestion);
  };
  return (
    <EggBodyWrap>
      <p>{eggs === "1" ? "이력서를 통해서 와주셨군요!" : "또 와주셨네요!"}</p>
      <span>블로그를 먼저 보시려면 좌측 상단의 버튼을 눌러주세요!</span>
      <FeedbackBtnWrap>
        <button onClick={feedbackAlert}>Feedback</button>
        <Qwrap onMouseEnter={questionHandler} onMouseLeave={questionHandler}>
          <AiOutlineQuestionCircle />
        </Qwrap>
        <QBody>
          <RatingHelp style={isQuestion ? { opacity: "1" } : {}}>
            <p>아직 많이 부족하지만 점점 채우고 있습니다!</p>
            <li>자유롭게 의견을 남겨주신다면 미리 감사드립니다!!</li>
          </RatingHelp>
        </QBody>
      </FeedbackBtnWrap>
    </EggBodyWrap>
  );
};

const EggBodyWrap = styled.div`
  width: 70%;
`;

const FeedbackBtnWrap = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-radius: 10px;

  & button {
    margin: 0 5px;
    width: 90px;
    height: 30px;
    border: none;
    background: none;
    border: 2px solid #ffd900;
    border-radius: 10px;
    color: black;
    font-weight: bold;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      color: white;
      background-color: #ffd90094;
    }
  }
`;

const Qwrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    width: 25px;
    height: 25px;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      color: gold;
    }
  }
`;
const QBody = styled.div`
  position: absolute;
`;
const RatingHelp = styled.div`
  padding: 10px;
  position: absolute;
  transform: translate(-103%, 5%);
  width: 350px;
  border-radius: 10px;
  border: 3px solid gold;
  background-color: #fde77c;
  opacity: 0;
  font-size: 0.9rem;
  transition: 0.4s;
  & li {
    list-style: none;
    text-align: left;
  }
`;
