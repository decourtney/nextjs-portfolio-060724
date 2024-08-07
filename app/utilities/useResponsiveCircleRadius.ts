"use client";

import { useState, useEffect } from "react";

const useResponsiveCircleRadius = () => {
  const [circleRadius, setCircleRadius] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 600px)").matches) {
        setCircleRadius(4); // Small radius for small screens
      } else if (window.matchMedia("(max-width: 1024px)").matches) {
        setCircleRadius(5); // Medium radius for medium screens
      } else {
        setCircleRadius(4); // Default radius for large screens
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return circleRadius;
};

export default useResponsiveCircleRadius;
