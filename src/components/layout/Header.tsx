import styled from "styled-components";
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
  justify-content: center;
  align-items: center;
  height: 99px;
  border-bottom: 1px solid #3c2a213b;
  background-color: #2c2c2c;
  & h1 {
    width: 500px;
    text-align: center;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color: white;
    }
  }
`;
