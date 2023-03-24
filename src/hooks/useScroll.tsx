import { useState, useEffect, useRef } from "react";

interface MutableRefObject<T> {
  current: T;
}

export const useScroll = () => {
  const [scrollCheck, setScrollCheck] = useState("");
  const prevScrollPos: MutableRefObject<number> = useRef(0);
  const scrollMove = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (!scrollMove.current) {
        if (currentScrollPos > prevScrollPos.current) {
          setScrollCheck("DOWN");
        } else {
          setScrollCheck("UP");
        }
        scrollMove.current = true;
        setTimeout(() => {
          scrollMove.current = false;
          setScrollCheck("");
        }, 550);
      }
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return {
    scrollCheck,
  };
};
