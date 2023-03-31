import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub, BsStar } from "react-icons/bs";
import { FaMicroblog } from "react-icons/fa";
import Link from "next/link";

export const Contact = () => {
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
    <ContactAndChannel>
      <h2>Contact & Channel</h2>
      <JohnInfo>
        {johnInfoArr.map((item, index) => {
          const { icon, name, content } = item;
          return (
            <LinksWrap key={index}>
              {icon} <strong>{name}</strong>
              {index === 0 ? (
                <span>{content}</span>
              ) : (
                <Link href={content} target={"_blank"}>
                  {content}
                </Link>
              )}
            </LinksWrap>
          );
        })}
      </JohnInfo>
    </ContactAndChannel>
  );
};

const JohnInfo = styled.div`
  font-size: 1.4rem;

  & a {
    margin-left: 10px;
    color: black;
    transition: 0.1s;
    &:hover {
      color: gold;
    }
  }
`;

const LinksWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  & svg {
    margin-right: 5px;
  }
  & span {
    margin-left: 10px;
  }
`;

const ContactAndChannel = styled.div`
  margin: 20px 70px 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1.2rem;
  width: 90%;
  animation: ContactFadeIn 2s ease-in-out;
  @keyframes ContactFadeIn {
    0% {
      opacity: 0;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  & h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
`;
