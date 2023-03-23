import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { EclipsLoadingSpinner } from "@/util/EclipsLoadingSpinner";
import { scrollToSmoothly } from "@/components/profile/SmoothScroll";
import { useScroll } from "@/hooks/useScroll";

export default function MyProfile() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollCheck } = useScroll();
  //   const [useInnerHeight, setUseInnerHeight] = useState(0);
  const useInnerHeight = useRef(0);

  const moveScroll = () => {
    scrollTo({ top: 0, behavior: "smooth" });
  };
  const moveScrollByUp = () => {
    window.scrollBy(0, -window.innerHeight);
  };
  const moveScrollByDown = () => {
    window.scrollBy(0, window.innerHeight);
  };
  useEffect(() => {
    console.log(scrollCheck);
    if (scrollCheck === "UP") {
      useInnerHeight.current -= window.innerHeight;
      //   scrollToSmoothly(useInnerHeight.current, 500);
    } else if (scrollCheck === "DOWN") {
      useInnerHeight.current += window.innerHeight;
      //   scrollToSmoothly(useInnerHeight.current, 500);
    }
  }, [scrollCheck]);

  return (
    <ProfileContainer>
      <NavBtn>
        <button onClick={moveScroll}>최상단</button>
        <button onClick={moveScrollByUp}>UP</button>
        <button onClick={moveScrollByDown}>Down</button>
        <button onClick={() => scrollToSmoothly(500, 500)}>Smooth</button>
      </NavBtn>
      {/* <EclipsLoadingSpinner /> */}
      <TestContainer1 />
      <TestContainer2 />
      <TestContainer3 />
      <TestContainer4 />
      <TestContainer5 />
      <TestContainer6 />
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div``;

const NavBtn = styled.div`
  position: fixed;
  top: 30%;
  display: flex;
  flex-direction: column;
`;

const TestContainer1 = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
`;
const TestContainer2 = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: green;
`;
const TestContainer3 = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;
const TestContainer4 = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #50b2ca;
`;
const TestContainer5 = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #3a2b7e;
`;
const TestContainer6 = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f1ff2b;
`;
