import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { PageLayout } from "./PageLayout";
import Image from "next/image";
import { TfiControlBackward } from "react-icons/Tfi";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub, BsStar } from "react-icons/bs";
import { FaMicroblog } from "react-icons/fa";

export const Intro = () => {
  const johnInfoArr = [
    {
      icon: <AiOutlineMail />,
      name: "Connect : ",
      content: "yhl0078@gmail.com",
    },
    {
      icon: <BsGithub />,
      name: "Github : ",
      content: "https://github.com/LEE-YO-HAN",
    },
    {
      icon: <FaMicroblog />,
      name: "Blog : ",
      content: "https://lee-yo-han.github.io/",
    },
  ];

  return (
    <PageLayout>
      <Link href={"/"}>
        <BackToBlog>
          <TfiControlBackward />
          Back to Blog
        </BackToBlog>
      </Link>
      <IntroHeader>
        Welcome To My Profile{" "}
        <SpinningStar>
          <BsStar />
        </SpinningStar>
      </IntroHeader>
      <FirstProfile>
        <Image
          src={
            "https://user-images.githubusercontent.com/85297720/227774217-57222e9b-baca-493d-80a1-dfc5be3f93ed.png"
          }
          width={200}
          height={200}
          alt="profile"
          priority
        />
        <span>Yo Han</span>
      </FirstProfile>
      <Introduction>
        <h2>Introduction</h2>
        <IntroList>
          <li>안녕하세요! 프론트엔드 개발자 Yohan입니다.</li>
          <li>
            실질적인 문제 해결에 기여한다는 매력에 이끌려 개발자의 길을 걷고
            있습니다.
          </li>
          <li>
            작은 것이라도 새로이 배운 것은 메모나 블로그를 통해 꾸준히 기록하고
            있습니다.
          </li>
          <li>좋은 코드에 대한 고민을 끊임없이 생각하고 있습니다.</li>
          <li>음악과 달달한 음식, 그리고 개인의 성장에 관심이 많습니다.</li>
        </IntroList>
      </Introduction>
      <ContactAndChannel>
        <h2>Contact & Channel</h2>
        <JohnInfo>
          {johnInfoArr.map((item, index) => {
            const { icon, name, content } = item;
            return (
              <div key={index}>
                {icon} <strong>{name}</strong>{" "}
                {index === 0 ? (
                  content
                ) : (
                  <Link href={content} target={"_blank"}>
                    {content}
                  </Link>
                )}
              </div>
            );
          })}
        </JohnInfo>
      </ContactAndChannel>
    </PageLayout>
  );
};

const IntroHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
`;

const SpinningStar = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes spinningStar {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  & svg {
    animation: spinningStar 1.5s infinite ease-in-out;
  }
`;

const BackToBlog = styled.span`
  position: absolute;
  top: 2%;
  left: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 130px;
  font-weight: bold;
  font-size: 1.2rem;
  color: #838383;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: #333333;
  }
`;

const FirstProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25%;
  & img {
    border-radius: 50%;
  }
  & span {
    margin: 5px 0 5px 0;
    font-weight: bold;
    font-size: 1.6rem;
  }
`;

const Introduction = styled.div`
  margin: 20px 0 20px 50px;
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;

  & h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
`;

const IntroList = styled.ul`
  list-style: circle;
  & li {
    margin-left: 10px;
    list-style-type: circle;
    list-style-position: inside;
  }
`;

const JohnInfo = styled.div`
  font-size: 1.4rem;

  & a {
    color: black;
    transition: 0.1s;
    &:hover {
      color: gold;
    }
  }
`;

const ContactAndChannel = styled.div`
  margin: 20px 70px 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1.2rem;
  & h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
`;