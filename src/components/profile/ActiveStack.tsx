import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ActiveStatus } from "./stackannotations";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsStarFill, BsStar } from "react-icons/bs";

interface Props {
  activeItem: string;
}

const stackInit = {
  callName: "",
  name: "",
  star: 0,
  comment: "",
};
export const ActiveStack = ({ activeItem }: Props) => {
  const [{ callName, name, star, comment }, setActiveStack] =
    useState<ActiveStatus>(stackInit);

  const [question, setQuestion] = useState(false);

  const getStatus = async (activeItem: string) => {
    if (activeItem !== "") {
      const { stackStatus } = await import("./stackannotations");
      const thisStacks = stackStatus.filter(
        stack => stack.callName === activeItem,
      )[0];
      setActiveStack(thisStacks);
    }
  };

  useEffect(() => {
    getStatus(activeItem);
  }, [activeItem]);

  const startCount = new Array(3).fill(0);
  return (
    <Container
      onClick={e => {
        e.stopPropagation();
      }}
      style={activeItem === "" ? { display: "none" } : {}}
    >
      {activeItem !== "" && (
        <>
          <CardHeader>
            <Image
              src={`/images/stack/${callName}.png`}
              alt="stackLogo"
              width={100}
              height={100}
            />
            <div>
              <h2>{name}</h2>
              <StarsWrap>
                {startCount.map((_, index: number) => {
                  return index < star ? (
                    <BsStarFill key={index} />
                  ) : (
                    <BsStar key={index} />
                  );
                })}
              </StarsWrap>
            </div>
            <QCircle>
              <AiOutlineQuestionCircle
                onMouseEnter={() => setQuestion(!question)}
                onMouseLeave={() => setQuestion(!question)}
              />
              <RatingHelp style={question ? { opacity: "1" } : {}}>
                <p>별점 기준</p>
                <li>1 : 사용 빈도가 많진 않지만 사용 방법은 아는 정도</li>
                <li>2 : 간간히 사용하며 어느정도 익숙함.</li>
                <li>3 : 주로 사용하는 스택</li>
              </RatingHelp>
            </QCircle>
          </CardHeader>
          <hr />
          <p>{comment}</p>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin: 20px 80px 20px 0;
  padding: 30px;
  width: 35vw;
  min-height: 15vh;
  border: 3px solid gold;
  border-radius: 20px;
  background-color: #f8f0ca7c;
  transition: 0.3s;

  animation: ActiveStack 0.3s ease-in-out;
  @keyframes ActiveStack {
    0% {
      opacity: 0;
      margin-right: 500px;
    }
    /* 50% {
      opacity: 0.5;
    } */
    100% {
      opacity: 1;
      margin-right: 80px;
    }
  }
  & h2 {
    font-size: 1.6rem;
    margin: 10px 0 10px 0;
  }
  & hr {
    margin: 10px 0 10px 0;
    border: none;
    box-shadow: 0 0 0 1px lightgray;
  }
  & p {
    margin: 10px 0 10px 0;
    font-size: 1.2rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & img {
    margin-right: 15px;
  }
`;

const StarsWrap = styled.span`
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100px;
  font-size: 1.6rem;
  color: gold;
`;

const QCircle = styled.div`
  margin-top: 45px;
  width: 50px;
  text-align: center;
  animation: QCircle 0.4s ease-in;
  @keyframes QCircle {
    0% {
      opacity: 0;
      margin-right: 230px;
    }
    100% {
      opacity: 1;
      margin-right: 0px;
    }
  }
  & svg {
    font-size: 1.4rem;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color: gold;
    }
  }
`;

const RatingHelp = styled.div`
  padding: 10px;
  position: absolute;
  width: 200px;
  border-radius: 10px;
  border: 3px solid gold;
  background-color: #fde87cc5;
  opacity: 0;
  transition: 0.4s;
  & li {
    list-style: none;
    text-align: left;
  }
`;
