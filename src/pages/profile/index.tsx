import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { EclipsLoadingSpinner } from "@/util/EclipsLoadingSpinner";
import { scrollToSmoothly } from "@/components/profile/SmoothScroll";
import { useScroll } from "@/hooks/useScroll";
import { Intro } from "@/components/profile/intro/Intro";
import { TechStackMemo } from "@/components/profile/techStack/TechStack";
import { Portpolio } from "@/components/profile/Portpolio";
import { Etc } from "@/components/profile/etc/Etc";
import { ScrollProgress } from "@/components/profile/ScrollProgress";
import { Curtain } from "@/components/profile/Curtain";
import { EasterEggMemo } from "@/components/profile/easterEgg/EasterEgg";

export default function MyProfile() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollCheck } = useScroll();
  const scrollRef = useRef({
    height: 0,
  });

  const smoothScrollHandler = () => {
    let maxHeight = document.documentElement.scrollHeight;
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
      <Curtain />
      <EasterEggMemo />
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  background: linear-gradient(
    70deg,
    #ffff97 20%,
    #ffffae 40%,
    #fffec8 60%,
    #ffffae 80%,
    #ffffe4 100%
  );
`;
