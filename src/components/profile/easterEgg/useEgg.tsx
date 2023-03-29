import { useState, useEffect } from "react";

export const useEgg = () => {
  const [eggs, setEggs] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#easteregg") {
      !localStorage.getItem("egg")
        ? localStorage.setItem("egg", "1")
        : localStorage.setItem("egg", "2");
    }
    setTimeout(() => {
      const forHR = localStorage.getItem("egg");
      if (forHR) setEggs(forHR);
    }, 1500);
  }, []);

  return eggs;
};
