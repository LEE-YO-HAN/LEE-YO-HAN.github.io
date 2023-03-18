import styled from "styled-components";
import Link from "next/link";

export const Header = () => {
  return (
    <HeaderWrap>
      <h1>
        <Link href={"/"}>Rain Sugar BangBang</Link>
      </h1>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 99px;
  border-bottom: 1px solid #3a3a3a;
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
