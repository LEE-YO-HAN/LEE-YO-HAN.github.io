import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { EclipsLoadingSpinner } from "@/util/EclipsLoadingSpinner";
import { scrollToSmoothly } from "@/components/profile/SmoothScroll";
import { useScroll } from "@/hooks/useScroll";

export default function MyProfile() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollCheck } = useScroll();
  const scrollRef = useRef({
    height: 0,
  });
  console.log(scrollRef.current.height);

  const moveScroll = () => {
    scrollTo({ top: 0, behavior: "smooth" });
  };
  const moveScrollByUp = () => {
    window.scrollBy(0, -window.innerHeight);
  };
  const moveScrollByDown = () => {
    window.scrollBy(0, window.innerHeight);
  };
  const moveScrollTo = () => {
    window.scrollTo(0, window.innerHeight);
  };

  useEffect(() => {
    console.log(scrollCheck);
    let maxHeight = window.innerHeight * 6;
    let currentHeight = scrollRef.current.height;
    if (scrollCheck === "UP" && currentHeight !== 0) {
      scrollRef.current.height -= window.innerHeight;
      scrollToSmoothly(scrollRef.current.height, 500);
    } else if (scrollCheck === "DOWN" && currentHeight !== maxHeight) {
      scrollRef.current.height += window.innerHeight;
      scrollToSmoothly(scrollRef.current.height, 500);
    }
  }, [scrollCheck]);

  return (
    <ProfileContainer>
      <NavBtn>
        <button onClick={moveScroll}>최상단</button>
        <button onClick={moveScrollByUp}>moveScrollByUp</button>
        <button onClick={moveScrollByDown}>moveScrollByDown</button>
        <button onClick={moveScrollTo}>moveScrollTo</button>
        <button onClick={() => scrollToSmoothly(1500, 500)}>
          SmoothScroll
        </button>
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
