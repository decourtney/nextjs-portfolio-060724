import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
  useInView,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import useWindowSize from "./useWindowSize";

const WordCycle = () => {
  const ref = useRef(null);
  const windowSize = useWindowSize();
  // const [newWindowSize, setNewWindowSize] = useState(windowSize);
  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset: [`end end`, "end start"],
  });
  const isInView = useInView(ref);

  const verbs = ["make", "create", "design", "build", "develop"];
  const nouns = ["stuff", "art", "products", "experiences", "solutions"];

  useEffect(() => {
    // setNewWindowSize(windowSize);
  }, [windowSize]);

  // TODO also try useSpring instead of useTransform
  const y = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [
      windowSize.height,
      windowSize.height * .75,
      windowSize.height * 0.8,
      0,
    ]
  );

  // console.log("Window size: ", windowSize);
  // console.log("New window size: ", newWindowSize);
  // console.log("Y: ", y);

  useEffect(() => {
    if (isInView) {
      // console.log("In view");
    }
  }, [isInView]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log("Page scroll: ", latest);
  });

  return (
    <div ref={ref} className="w-full h-[70%] bg-blue-300">
      <motion.div
        className="grid grid-cols-2 text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black bg-blue-300"
        style={{ y }}
      >
        <div className="col-span-1 inline-block text-end space-x-3">
          <p className="inline-block">I</p>
          <p className="inline-block">love</p>
          <p className="inline-block">make</p>
        </div>
        <div>
          <p className="col-span-1 pl-2">stuff</p>
        </div>
      </motion.div>
    </div>
  );
};

export default WordCycle;
