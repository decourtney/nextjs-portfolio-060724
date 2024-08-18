import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimate,
  usePresence,
} from "framer-motion";

const LoadingPage = () => {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    console.log(isPresent);
    if (isPresent) {
      const enterAnimation = async () => {
        await animate(
          "div",
          { rotate: 360 },
          { duration: 2,  ease: "linear" }
        );
      };

      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate("div", {rotate: 360}, { duration: 1, ease: "linear" });
        await animate("div", { scale: 1.5 }, { duration: 1 });

        safeToRemove();
      };

      exitAnimation();
    }
  }, [isPresent]);

  return (
    <section
      ref={scope}
      className="fixed inset-0 flex items-center justify-center bg-background z-50"
    >
      <div className="your-svg-class">
        {/* Replace with your SVG animation */}
        <svg className="h-24 w-24" viewBox="0 0 100 100">
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            fill="hsl(var(--nextui-primary-100))"
          />
        </svg>
      </div>
    </section>
  );
};

export default LoadingPage;
