'use client';

import { usePresence } from "framer-motion";
import Lottie, { LottieOptions } from "lottie-react";
import { useTheme } from "next-themes";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { LoadingAnimation } from "../utilities/getLottieAnims";

// parse through lottie json and change color values
const changeLottieColors = (lottieData: any, theme: string) => {
  const targetColor =
    theme === "light"
      ? [0.1843137254901961, 0.1843137254901961, 0.1843137254901961] // rgb(47, 47, 47)
      : [0.9568627450980392, 0.9568627450980392, 0.9568627450980392]; // rgb(244, 244, 244)

  const traverseAndReplaceColors = (obj: any) => {
    // Base case: if the object has a 'c' property with a 'k' array, replace the color
    if (obj && obj.c && Array.isArray(obj.c.k)) {
      obj.c.k = targetColor;
    }

    // Recursive case: if the object has children, traverse them
    if (obj && typeof obj === "object") {
      for (const key in obj) {
        if (obj[key] !== null && typeof obj[key] === "object") {
          traverseAndReplaceColors(obj[key]);
        }
      }
    }
  };

  // Start traversal from the top level of the lottieData
  traverseAndReplaceColors(lottieData);

  return lottieData;
};

interface LoadingPageProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const LoadingPage = ({ setIsLoading }: LoadingPageProps) => {
  const [isPresent, safeToRemove] = usePresence();
  const { theme } = useTheme();
  const lottieRef = useRef(null);
  const [lottieData, setLottieData] = useState(LoadingAnimation());
  const [lottieOptions, setLottieOptions] = useState<LottieOptions>({
    animationData: lottieData,
    loop: true,
  });

  useEffect(() => {
    if (!theme) return;
    const updatedLottieData = changeLottieColors({ ...lottieData }, theme);
    setLottieData(updatedLottieData);
  }, [theme]);

  useEffect(() => {
    if (lottieRef.current) {

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
  }, [lottieData]);

  return (
    <Lottie
      lottieRef={lottieRef}
      id="lottie"
      className="w-full "
      {...lottieOptions}
    />
  );
};

export default LoadingPage;
