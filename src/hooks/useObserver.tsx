import { useState, useRef } from "react";

export const useObserver = () => {
  const [isObserved, setIsObserved] = useState(false);
  const observerRef: any = useRef();
  const observer = (node: any) => {
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsObserved(true);
      }
    });
    node && observerRef.current.observe(node);
  };
  return {
    observer,
    isObserved,
  };
};
