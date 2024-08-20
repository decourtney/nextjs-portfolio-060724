import { Dispatch, useEffect, useRef, useState, SetStateAction } from "react";
import { useTheme } from "next-themes";
import loadingAnim from "@/public/loadingAnim.json";
import nameAnim from "@/public/nameAnim.json";
import { usePresence } from "framer-motion";
import Lottie, { LottieOptions } from "lottie-react";

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
  setIsContentReady: Dispatch<SetStateAction<boolean>>;
}

const LoadingPage = ({ setIsContentReady }: LoadingPageProps) => {
  const [isPresent, safeToRemove] = usePresence();
  const { theme } = useTheme();
  const lottieRef = useRef(null);
  const [lottieData, setLottieData] = useState(loadingAnim);
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
    if (!lottieRef.current) return;
    setLottieOptions({ ...lottieOptions, animationData: lottieData });
  }, [lottieData]);

  useEffect(() => {
    if (!isPresent && lottieRef.current && theme) {
      const themedLottieData = changeLottieColors({ ...nameAnim }, theme);

      setLottieOptions({
        ...lottieOptions,
        animationData: themedLottieData,
        loop: false,
        onComplete: () => {
          setIsContentReady(true), safeToRemove();
        },
      });
    }
  }, [isPresent]);

  return (
    <Lottie
      lottieRef={lottieRef}
      id="lottie"
      className="w-full h-full"
      {...lottieOptions}
    />
  );
};

export default LoadingPage;