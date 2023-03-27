import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { EclipsLoadingSpinner } from "@/util/EclipsLoadingSpinner";
import { scrollToSmoothly } from "@/components/profile/SmoothScroll";
import { useScroll } from "@/hooks/useScroll";
import { Intro } from "@/components/profile/Intro";
import { TechStackMemo } from "@/components/profile/TechStack";
import { Portpolio } from "@/components/profile/Portpolio";
import { Etc } from "@/components/profile/Etc";
import { ScrollProgress } from "@/components/profile/ScrollProgress";

export default function MyProfile() {
  const easterEgg = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
  const { scrollCheck } = useScroll();
  const scrollRef = useRef({
    height: 0,
  });

  const smoothScrollHandler = () => {
    let maxHeight = window.innerHeight * 4;
    let currentHeight = scrollRef.current.height;
    if (scrollCheck === "UP" && currentHeight !== 0) {
      scrollRef.current.height -= window.innerHeight;
      // scrollRef.current.height -= (window.innerHeight * 2) / 3;
      scrollToSmoothly(scrollRef.current.height, 500);
    } else if (scrollCheck === "DOWN" && currentHeight !== maxHeight) {
      scrollRef.current.height += window.innerHeight;
      // scrollRef.current.height += (window.innerHeight * 2) / 3;
      scrollToSmoothly(scrollRef.current.height, 500);
    }
  };
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#easteregg") easterEgg.current = true;
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 1500);
  }, []);

  useEffect(() => {
    smoothScrollHandler();
  }, [scrollCheck]);

  return (
    <ProfileContainer>
      {isLoading && <EclipsLoadingSpinner />}
      <ScrollProgress />
      <Intro />
      <TechStackMemo />
      <Portpolio />
      <Etc />
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  background-image: radial-gradient(
    circle,
    #fffd95 31%,
    #ffffae 73%,
    #ffffe4 98%
  );
`;
