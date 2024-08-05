'use client'

import {
  motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useState } from "react";
import { HeartIcon } from "./svgs";
import { useContainerSize } from "../utilities";

const verbs = ["make", "develop", "design", "build", "create", "making"];
const nouns = ["stuff", "art", "products", "experiences", "solutions", "stuff"];

const HomeWordScroll = () => {
  const { ref } = useContainerSize();
   const { scrollYProgress } = useScroll({
     target: ref,
     offset: ["-161px", "end start"], // offset determined by hero viewport height
   });

  const [showHeart, setShowHeart] = useState(false);

  const verbIndex = useMotionValue(0);
  const nounIndex = useMotionValue(nouns.length - 1);

  const verbSpring = useSpring(verbIndex, { stiffness: 300, damping: 30 });
  const nounSpring = useSpring(nounIndex, { stiffness: 300, damping: 30 });

  const verbY = useTransform(verbSpring, (value) => value * -85);
  const nounY = useTransform(nounSpring, (value) => value * -85);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const latestOffset = latest * 1;
    const nearestVerbIndex = Math.round(latestOffset * (verbs.length - 1));
    const nearestNounIndex = Math.round(
      (1 - latestOffset) * (nouns.length - 1)
    );
    if (nearestVerbIndex === verbs.length - 1) {
      setShowHeart(true);
    } else {
      setShowHeart(false);
    }

    verbIndex.set(nearestVerbIndex);
    nounIndex.set(nearestNounIndex);
  });

  return (
    <div ref={ref} className="relative w-full min-h-[200dvh]">
      <motion.div className="sticky top-[20%] grid grid-cols-2 h-[85px] mb-6 text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black overflow-hidden">
        <div className="col-span-1 text-end leading-[85px]">
          <motion.p className="inline-block align-top mr-2">I</motion.p>

          {showHeart && (
            <motion.div
              className="inline-flex align-top mt-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <HeartIcon width={50} height={50} fill="red" />
            </motion.div>
          )}
          <motion.ul
            className="inline-block pr-2 w-fit text-center"
            style={{ translateY: verbY }}
          >
            {verbs.map((verb, index) => (
              <li key={index}>{verb}</li>
            ))}
          </motion.ul>
        </div>

        <div className="col-span-1 pl-0 leading-[85px]">
          <motion.ul
            className="inline-block px-2 w-fit"
            style={{ translateY: nounY }}
          >
            {nouns.map((noun, index) => (
              <li key={index}>{noun}</li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeWordScroll;
