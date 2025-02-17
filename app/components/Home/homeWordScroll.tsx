"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useState } from "react";
import { HeartIcon } from "../../utilities/svgs";
import useContainerSize from "../../utilities/useContainerSize";
import ArtSVG from "./homeArtSVG";
import SvgMorph from "./homeSVGMorph";

const verbs = ["make", "develop", "design", "build", "create", "making"];
const nouns = ["stuff", "art", "products", "experiences", "solutions", "stuff"];

const HomeWordScroll = () => {
  const { ref } = useContainerSize();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const [showHeart, setShowHeart] = useState(false);
  const [indexOfSvgs, setIndexOfSvgs] = useState<number | null>(null);

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

    if (nearestVerbIndex === indexOfSvgs) return;
    setIndexOfSvgs(nearestVerbIndex);
  });

  return (
    <motion.div
      ref={ref}
      className="relative w-full min-h-[400dvh] md:mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Adjust */}
      <motion.div className="sticky top-[20%] grid grid-cols-2 gap-y-5 h-[400px] lg:h-[600px] text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black">
        <div className="col-span-1 text-end leading-[85px] h-[85px] overflow-hidden">
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
            className="inline-block pr-2 w-fit font-playfairDisplay text-center"
            style={{ translateY: verbY }}
          >
            {verbs.map((verb, index) => (
              <li key={index}>{verb}</li>
            ))}
          </motion.ul>
        </div>

        <div className="col-span-1 pl-0 leading-[85px] h-[85px] overflow-hidden">
          <motion.ul
            className="inline-block px-2 w-fit"
            style={{ translateY: nounY }}
          >
            {nouns.map((noun, index) => (
              <li key={index}>{noun}</li>
            ))}
          </motion.ul>
        </div>

        <div className="relative col-span-2  h-[300px] lg:h-[400px]">
          <AnimatePresence mode="wait">
            {indexOfSvgs != null && indexOfSvgs >= 4 && <ArtSVG />}
          </AnimatePresence>

          <SvgMorph indexOfSvgs={indexOfSvgs} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HomeWordScroll;
