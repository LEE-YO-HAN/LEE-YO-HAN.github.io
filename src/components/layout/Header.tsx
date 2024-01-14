import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useMobile } from "@/hooks/useMediaQuery";
import { TfiMenu } from "react-icons/tfi";
import { MobileCategoryNav } from "./MobileCategoryNav";

export const Header = () => {
  const mobile = useMobile();
  const mobileDisplayOn = mobile ? {} : { display: "none" };

  const [isNavOpen, setIsNavOpen] = useState(false);
  const openNav = () => {
    setIsNavOpen(true);
  };
  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <HeaderWrap>
      <ReactIcon style={mobileDisplayOn} onClick={openNav}>
        <TfiMenu />
      </ReactIcon>
      <h1 style={mobile ? { fontSize: "1.4rem" } : {}}>
        <Link href={"/"}>Hanbbi{"'"}s DevLog</Link>
      </h1>
      <MobileCategoryNav isOpen={isNavOpen} closeNav={closeNav} />
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
  position: absolute;
  left: 0;
  margin-left: 5vw;
  display: flex;
  font-size: 1.8rem;
  color: ${props => props.theme.componentFontColor};
  &:hover {
    color: ${props => props.theme.componentHover};
  }
`;
