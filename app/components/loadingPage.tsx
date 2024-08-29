"use client";

import Lottie, { LottieOptions } from "lottie-react";
import { useTheme } from "next-themes";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { LoadingAnimation } from "../utilities/getLottieAnims";

// Function to parse through Lottie JSON and change color values
const changeLottieColors = (lottieData: any, theme: string) => {
  const targetColor =
    theme === "light"
      ? [0.1843137254901961, 0.1843137254901961, 0.1843137254901961] // rgb(47, 47, 47)
      : [0.9568627450980392, 0.9568627450980392, 0.9568627450980392]; // rgb(244, 244, 244)

  const traverseAndReplaceColors = (obj: any) => {
    if (obj && obj.c && Array.isArray(obj.c.k)) {
      obj.c.k = targetColor;
    }

    if (obj && typeof obj === "object") {
      for (const key in obj) {
        if (obj[key] !== null && typeof obj[key] === "object") {
          traverseAndReplaceColors(obj[key]);
        }
      }
    }
  };

  traverseAndReplaceColors(lottieData);

  return lottieData;
};

interface LoadingPageProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const LoadingPage = ({ setIsLoading }: LoadingPageProps) => {
  const { resolvedTheme } = useTheme();
  const [isReady, setIsReady] = useState(false); // Add a ready state
  const lottieRef = useRef(null);
  const [lottieData, setLottieData] = useState(LoadingAnimation());
  const [lottieOptions, setLottieOptions] = useState<LottieOptions>({
    animationData: lottieData,
    loop: true,
  });

  useEffect(() => {
    if (!resolvedTheme) return;

    // Apply the theme before rendering the animation
    const updatedLottieData = changeLottieColors(
      { ...lottieData },
      resolvedTheme
    );
    setLottieData(updatedLottieData);
    setIsReady(true); // Set ready state to true after theme is applied
  }, [resolvedTheme]);

  useEffect(() => {
    if (isReady && lottieRef.current) {
      setLottieOptions({
        ...lottieOptions,
        animationData: lottieData,
        loop: false,
        onComplete: () => {
          sessionStorage.setItem("hasVisited", "true");
          setIsLoading(false);
        },
      });
    }
  }, [isReady, lottieData]);

  if (!isReady) {
    return null; // Render nothing until the theme is resolved and applied
  }

  return (
    <Lottie
      lottieRef={lottieRef}
      id="lottie"
      className="w-full"
      {...lottieOptions}
    />
  );
};

export default LoadingPage;
