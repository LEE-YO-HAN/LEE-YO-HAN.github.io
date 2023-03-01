import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export const Profile = () => {
  return (
    <>
      <ProfileWrap>
        <Image
          src={`https://avatars.githubusercontent.com/u/85297720?v=4`}
          alt="profile"
          width={50}
          height={50}
        />
        <p>Hanbbi</p>
      </ProfileWrap>
      <LinkBox>
        <Link href={"https://github.com/LEE-YO-HAN"} target={"_blank"}>
          <BsGithub />
          <span> Github</span>
        </Link>
      </LinkBox>
    </>
  );
};

const ProfileWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & img {
    border-radius: 30px;
  }
  & p {
    margin: 0 15px;
    font-weight: bold;
    font-size: 1.4rem;
  }
`;

const LinkBox = styled.div`
  margin: 20px 0;
  & a {
    color: white;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
  }
`;
