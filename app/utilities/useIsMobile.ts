'use client'

import { useEffect, useState } from "react";

// Function to check if the device is mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      if (typeof window === "undefined") return

        const handleResize = () => {
          setIsMobile(window.innerWidth < 1024);
        };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
