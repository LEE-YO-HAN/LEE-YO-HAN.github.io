import { useState, useEffect, useRef } from "react";

interface MutableRefObject<T> {
  current: T;
}

export const useScroll = () => {
  const [scrollCheck, setScrollCheck] = useState("");
  const prevScrollPos: MutableRefObject<number> = useRef(0);

  useEffect(() => {
    // let mounted = true;
    const handleScroll = () => {
      //   if (mounted) {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > prevScrollPos.current) {
        setScrollCheck("DOWN");
      } else {
        setScrollCheck("UP");
      }
      //   setPrevScrollPos(currentScrollPos);
      prevScrollPos.current = currentScrollPos;
      //   }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      //   mounted = false;
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return {
    scrollCheck,
  };
};
