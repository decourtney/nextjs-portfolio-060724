import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const verbs = ["make", "develop", "design", "build", "create", "making"];
const nouns = ["stuff", "art", "products", "experiences", "solutions", "stuff"];

const HomeWordScroll = ({
  targetRef,
}: {
  targetRef: React.RefObject<HTMLDivElement>;
}) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["-161px", "end start"], // offset determined by hero viewport height
  });

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

    verbIndex.set(nearestVerbIndex);
    nounIndex.set(nearestNounIndex);
  });

  return (
    <motion.div className="sticky top-[10%] grid grid-cols-2 h-[85px] lg:mb-12 text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black overflow-hidden">
      <div className="col-span-1 text-end leading-[85px]">
        <p className="inline-block align-top">I</p>

        <motion.ul
          className="inline-block px-2 w-fit text-center"
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
  );
};

export default HomeWordScroll;
