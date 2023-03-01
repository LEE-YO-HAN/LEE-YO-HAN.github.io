import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  return (
    <HeaderWrap>
      <h1 onClick={() => router.push("/")}>Rain Sugar BangBang</h1>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 99px;
  border-bottom: 1px solid lightgray;

  & h1 {
    width: 500px;
    text-align: center;
  }
`;
