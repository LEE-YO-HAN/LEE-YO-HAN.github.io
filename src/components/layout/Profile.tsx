import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { useMobile } from "@/hooks/useMediaQuery";

export const Profile = () => {
  const mobile = useMobile();
  return (
    <ProfileArea style={mobile ? { display: "none" } : {}}>
      <ProfileWrap>
        <Image
          src={`https://avatars.githubusercontent.com/u/85297720?v=4`}
          alt="profile"
          width={100}
          height={100}
        />
        <p>Hanbbi</p>
      </ProfileWrap>
      <LinkBox>
        <Link href={"https://github.com/LEE-YO-HAN"} target={"_blank"}>
          <AiOutlineMail />
          <span>yhl0078@gmail.com</span>
        </Link>
        <Link href={"https://github.com/LEE-YO-HAN"} target={"_blank"}>
          <BsGithub />
          <span>Github</span>
        </Link>
      </LinkBox>
    </ProfileArea>
  );
};

const ProfileArea = styled.aside`
  position: relative;
  top: 100px;
  left: 0;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 350px;
  color: ${props => props.theme.componentFontColor};
  background-color: ${props => props.theme.componentBackground};
  border-radius: 10px;
`;

const ProfileWrap = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    border-radius: 50px;
  }
  & p {
    margin: 10px 15px 0 15px;
    font-weight: bold;
    font-size: 1.4rem;
  }
`;

const LinkBox = styled.div`
  margin: 20px 0;
  & a {
    display: flex;
    align-items: center;
    color: ${props => props.theme.componentFontColor};
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: ${props => props.theme.componentHover};
    }
    & svg {
      font-size: 15px;
    }
    & span {
      margin-left: 10px;
    }
  }
`;
