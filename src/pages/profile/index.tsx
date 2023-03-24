import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { EclipsLoadingSpinner } from "@/util/EclipsLoadingSpinner";
import { scrollToSmoothly } from "@/components/profile/SmoothScroll";
import { useScroll } from "@/hooks/useScroll";
import Link from "next/link";

export default function MyProfile() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollCheck } = useScroll();
  const scrollRef = useRef({
    height: 0,
  });

  const smoothScrollHandler = () => {
    let maxHeight = window.innerHeight * 6;
    let currentHeight = scrollRef.current.height;
    if (scrollCheck === "UP" && currentHeight !== 0) {
      scrollRef.current.height -= window.innerHeight;
      scrollToSmoothly(scrollRef.current.height, 500);
    } else if (scrollCheck === "DOWN" && currentHeight !== maxHeight) {
      scrollRef.current.height += window.innerHeight;
      scrollToSmoothly(scrollRef.current.height, 500);
    }
  };

  useEffect(() => {
    smoothScrollHandler();
  }, [scrollCheck]);

  return (
    <ProfileContainer>
      {/* <EclipsLoadingSpinner /> */}
      <TestContainer1 id="box1" />
      <TestContainer2 id="box2" />
      <TestContainer3 id="box3" />
      <TestContainer4 id="box4" />
      <TestContainer5 id="box5" />
      <TestContainer6 id="box6" />
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div``;

const NavBtn = styled.div`
  position: fixed;
  top: 30%;
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  background-color: white;
`;

const TestContainer1 = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ff7c7c;
  scroll-behavior: smooth;
`;
const TestContainer2 = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: green;
  scroll-behavior: smooth;
`;
const TestContainer3 = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  scroll-behavior: smooth;
`;
const TestContainer4 = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #50b2ca;
  scroll-behavior: smooth;
`;
const TestContainer5 = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #3a2b7e;
  scroll-behavior: smooth;
`;
const TestContainer6 = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f1ff2b;
  scroll-behavior: smooth;
`;
