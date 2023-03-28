import styled from "styled-components";
import { useState } from "react";

export const Curtain = () => {
  const [curtainEnd, setCurtainEnd] = useState(false);
  setTimeout(() => {
    setCurtainEnd(true);
  }, 2000);
  return (
    <Container style={curtainEnd ? { display: "none" } : {}}>
      <Box1></Box1>
      <Box2></Box2>
    </Container>
  );
};
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
`;

const Box1 = styled.div`
  margin: 0;
  background-color: #ffd90081;
  animation: CurtainBox1 2s;
  @keyframes CurtainBox1 {
    0% {
      border-radius: 0 0 0 0;
      width: 50%;
      height: 100%;
    }
    100% {
      border-radius: 0 0 100% 0;
      width: 0%;
      height: 98%;
    }
  }
`;
const Box2 = styled.div`
  margin: 0;

  height: 100%;
  background-color: #ffd90081;
  animation: CurtainBox2 2s;
  @keyframes CurtainBox2 {
    0% {
      border-radius: 0 0 0 0;
      width: 50%;
    }
    100% {
      border-radius: 0 0 0 100%;
      width: 0%;
      height: 98%;
    }
  }
`;
