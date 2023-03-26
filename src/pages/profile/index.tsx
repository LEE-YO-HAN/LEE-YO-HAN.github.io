import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { EclipsLoadingSpinner } from "@/util/EclipsLoadingSpinner";
import { scrollToSmoothly } from "@/components/profile/SmoothScroll";
import { useScroll } from "@/hooks/useScroll";
import { Intro } from "@/components/profile/Intro";
import { TechStack } from "@/components/profile/TechStack";
import { Portpolio } from "@/components/profile/Portpolio";
import { Etc } from "@/components/profile/Etc";

export default function MyProfile() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollCheck } = useScroll();
  const scrollRef = useRef({
    height: 0,
  });

  const smoothScrollHandler = () => {
    let maxHeight = window.innerHeight * 4;
    let currentHeight = scrollRef.current.height;
    if (scrollCheck === "UP" && currentHeight !== 0) {
      // scrollRef.current.height -= window.innerHeight;
      scrollRef.current.height -= (window.innerHeight * 2) / 3;
      scrollToSmoothly(scrollRef.current.height, 500);
    } else if (scrollCheck === "DOWN" && currentHeight !== maxHeight) {
      // scrollRef.current.height += window.innerHeight;
      scrollRef.current.height += (window.innerHeight * 2) / 3;
      scrollToSmoothly(scrollRef.current.height, 500);
    }
  };

  useEffect(() => {
    smoothScrollHandler();
  }, [scrollCheck]);

  return (
    <ProfileContainer>
      {/* <EclipsLoadingSpinner /> */}
      <Intro />
      <TechStack />
      <Portpolio />
      <Etc />
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div``;
