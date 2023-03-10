import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const useMobile = () => {
  const [mobile, setMobile] = useState<boolean>(false);
  const isMobile = useMediaQuery({ maxWidth: 480 });

  const checkResize = () => {
    if (isMobile) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    checkResize();
  }, [isMobile]);

  return mobile;
};
