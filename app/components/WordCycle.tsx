import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import useWindowSize from "./useWindowSize";

const WordCycle = ({
  containerSize,
}: {
  containerSize: { width: number; height: number };
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [targetSize, setTargetSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const verbs = ["make", "develop", "design", "build", "create", "making"];
  const nouns = [
    "stuff",
    "art",
    "products",
    "experiences",
    "solutions",
    "stuff",
  ];

  useEffect(() => {
    const handleResize = () => {
      setTargetSize({
        width: targetRef.current!.clientWidth,
        height: targetRef.current!.clientHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // offset determined by hero viewport height
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["-161px", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, targetSize.height]);

  const verbIndex = useMotionValue(0);
  const nounIndex = useMotionValue(nouns.length - 1);

  const verbSpring = useSpring(verbIndex, { stiffness: 300, damping: 30 });
  const nounSpring = useSpring(nounIndex, { stiffness: 300, damping: 30 });

  const verbY = useTransform(verbSpring, (value) => value * -80);
  const nounY = useTransform(nounSpring, (value) => value * -80);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const latestOffset = latest * 1.11;
    const nearestVerbIndex = Math.round(latestOffset * (verbs.length - 1));
    const nearestNounIndex = Math.round(
      (1 - latestOffset) * (nouns.length - 1)
    );
    verbIndex.set(nearestVerbIndex);
    nounIndex.set(nearestNounIndex);
  });

  return (
    <section ref={targetRef} className="h-[200dvh] bg-green-300">
      <motion.div
        className="grid grid-cols-2 h-[80px] text-xl sm:text-3xl md:text-5xl lg:text-6xl leading-[80px] font-black overflow-hidden"
        style={{ y }}
      >
        <div className="col-span-1 text-end leading-[80px]">
          <p className="inline-block align-top">I</p>

          {/* <p className="inline-block">love</p> */}

          <motion.ul
            className="inline-block px-2 w-fit text-center"
            style={{ translateY: verbY }}
          >
            {verbs.map((verb, index) => (
              <li key={index}>{verb}</li>
            ))}
          </motion.ul>
        </div>
        <motion.ul
          className="col-span-1 pl-1 leading-[80px]"
          style={{ translateY: nounY }}
        >
          {nouns.map((noun, index) => (
            <li key={index}>{noun}</li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default WordCycle;
