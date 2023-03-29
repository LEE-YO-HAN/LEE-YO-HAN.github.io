import styled from "styled-components";
import React, { useState } from "react";
import { VscClose } from "react-icons/vsc";
import { GrFormPrevious } from "react-icons/gr";
import { ImagesSlider } from "./ImagesSlider";
import { EggBody } from "./eggBody";
import { useEgg } from "./useEgg";

export const EasterEgg = () => {
  const eggs = useEgg();

  const [isOpen, setIsOpen] = useState(true);
  const openHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Content
      style={
        eggs === ""
          ? { opacity: "0" }
          : { display: "block", transform: `translateX(${isOpen ? 0 : 105}%)` }
      }
    >
      <ItemWrap>
        <CloseBtn>
          {isOpen ? (
            <VscClose onClick={openHandler} />
          ) : (
            <GrFormPrevious onClick={openHandler} />
          )}
        </CloseBtn>
        <ImagesSlider />
        <EggBody eggs={eggs} />
      </ItemWrap>
    </Content>
  );
};

export const EasterEggMemo = React.memo(EasterEgg);

const Content = styled.div`
  padding: 10px;
  position: fixed;
  top: 50px;
  right: 20px;
  width: 400px;
  height: 100px;
  border-radius: 0 10px 10px 10px;
  border: 3px solid gold;
  background-color: #fde77ca2;
  font-weight: bold;
  transform: translateX(105%);
  transition: 0.4s;
`;

const ItemWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const CloseBtn = styled.div`
  position: absolute;
  top: -3px;
  left: -31px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border: 3px solid gold;
  border-radius: 5px 0 0 5px;
  background-color: gold;
  transition: 0.3s;

  cursor: pointer;
  & svg {
    color: black;
    &:hover {
      color: white;
    }
  }
`;
