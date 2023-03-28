import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { VscClose } from "react-icons/vsc";
import { GrFormPrevious } from "react-icons/gr";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export const EasterEgg = () => {
  const [eggs, setEggs] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#easteregg") {
      !localStorage.getItem("egg")
        ? localStorage.setItem("egg", "1")
        : localStorage.setItem("egg", "2");
    }
    setTimeout(() => {
      const forHR = localStorage.getItem("egg");
      if (forHR) setEggs(forHR);
    }, 1500);
  }, []);

  const imageTransition = useRef(0.3);
  const [imageIndex, setImageIndex] = useState(-0);
  const imageArr = ["eatjs", "jseatme", "kindreact", "ts", "eatjs"];
  const imageHandler = () => {
    imageTransition.current = 0.3;
    setImageIndex(prev => prev - 100);
    if (imageIndex === -300) {
      setTimeout(() => {
        imageTransition.current = 0;
        setImageIndex(0);
      }, 300);
    }
  };

  const [isOpen, setIsOpen] = useState(true);
  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  const [isQuestion, setIsQuestion] = useState(false);
  const questionHandler = () => {
    setIsQuestion(!isQuestion);
  };
  return (
    <Content
      style={
        eggs === ""
          ? { opacity: "0" }
          : { display: "block", transform: `translateX(${isOpen ? 0 : 105}%)` }
      }
    >
      <ItemWrap>
        <ImageSlider>
          {imageArr.map((item, index) => {
            return (
              <Image
                key={index}
                src={`/images/eastereggs/${item}.png`}
                width={100}
                height={100}
                alt="eggs"
                style={{
                  transform: `translateX(${imageIndex}%)`,
                  transition: `${imageTransition.current}s`,
                }}
              />
            );
          })}
        </ImageSlider>
        <CloseBtn>
          {isOpen ? (
            <VscClose onClick={openHandler} />
          ) : (
            <GrFormPrevious onClick={openHandler} />
          )}
        </CloseBtn>
        <ClickMe onClick={imageHandler}>Click Me!</ClickMe>
        <EggBody>
          <p>
            {eggs === "1" ? "이력서를 통해서 와주셨군요!" : "또 와주셨네요!"}
          </p>
          <span>블로그를 먼저 보시려면 좌측 상단의 버튼을 눌러주세요!</span>
          <FeedbackBtnWrap>
            <button>Feedback</button>
            <Qwrap
              onMouseEnter={questionHandler}
              onMouseLeave={questionHandler}
            >
              <AiOutlineQuestionCircle />
            </Qwrap>
            <QBody>
              <RatingHelp style={isQuestion ? { opacity: "1" } : {}}>
                <p>아직 많이 부족하지만 점점 채워나가겠습니다!</p>
                <li>자유롭게 의견을 남겨주시면 감사드리겠습니다!!</li>
              </RatingHelp>
            </QBody>
          </FeedbackBtnWrap>
        </EggBody>
      </ItemWrap>
    </Content>
  );
};

export const EasterEggMemo = React.memo(EasterEgg);

const Content = styled.div`
  padding: 10px;
  position: fixed;
  top: 50px;
  right: 20px;
  width: 400px;
  height: 100px;
  border-radius: 0 10px 10px 10px;
  border: 3px solid gold;
  background-color: #fde77ca2;
  font-weight: bold;
  transform: translateX(105%);
  transition: 0.4s;
`;

const ItemWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageSlider = styled.div`
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 20px;
`;

const CloseBtn = styled.div`
  position: absolute;
  top: -3px;
  left: -31px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border: 3px solid gold;
  border-radius: 5px 0 0 5px;
  background-color: gold;
  transition: 0.3s;

  cursor: pointer;
  & svg {
    color: black;
    &:hover {
      color: white;
    }
  }
`;

const ClickMe = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  border-radius: 20px;
  color: transparent;
  transition: 0.3s;
  user-select: none;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #8080805c;
  }
`;

const EggBody = styled.div`
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
  width: 200px;
  border-radius: 10px;
  border: 3px solid gold;
  background-color: #fde77c;
  opacity: 0;
  transition: 0.4s;
  & li {
    list-style: none;
    text-align: left;
  }
`;
