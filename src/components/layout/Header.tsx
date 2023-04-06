import styled from "styled-components";
import Link from "next/link";
import { useMobile } from "@/hooks/useMediaQuery";
import { TfiMenu } from "react-icons/tfi";
import { FaSearch } from "react-icons/fa";

export const Header = () => {
  const mobile = useMobile();
  const mobileDisplayOn = mobile ? {} : { display: "none" };
  return (
    <HeaderWrap>
      <ReactIcon style={mobileDisplayOn}>
        <TfiMenu />
      </ReactIcon>
      <h1 style={mobile ? { fontSize: "1.4rem" } : {}}>
        <Link href={"/"}>Rain Sugar BangBang</Link>
      </h1>
      <ReactIcon style={mobileDisplayOn}>
        <FaSearch />
      </ReactIcon>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  height: 79px;
  border-bottom: 1px solid ${props => props.theme.layoutBorderColor};
  background-color: ${props => props.theme.componentBackground};
  & h1 {
    width: 50vw;
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

const ReactIcon = styled.span`
  display: flex;
  font-size: 1.8rem;
  color: ${props => props.theme.componentFontColor};
  &:hover {
    color: ${props => props.theme.componentHover};
  }
`;
