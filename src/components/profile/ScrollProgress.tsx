import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

export const ScrollProgress = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const percentage = Math.floor((position / maxScroll) * 100);
      setScrollPosition(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollProgressBar
      style={{
        width: `${scrollPosition}%`,
        height: "4px",
      }}
    />
  );
};

const ScrollProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: gold;
  z-index: 999;
  transition: 0.2s;
`;
