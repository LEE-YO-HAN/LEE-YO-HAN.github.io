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
  border-bottom: 1px solid ${props => props.theme.layoutBorderColor};
  background-color: ${props => props.theme.componentBackground};
  & h1 {
    width: 500px;
    text-align: center;
    cursor: pointer;
  }
  & a {
    transition: 0.3s;
    color: ${props => props.theme.componentFontColor};
    &:hover {
      color: ${props => props.theme.componentHover};
    }
  }
`;
