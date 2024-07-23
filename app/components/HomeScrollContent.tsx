import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React, { use, useEffect, useRef, useState } from "react";
import PopupBox from "./PopupBox";
import { DevelopSVG } from "./svgs";

const verbs = ["make", "develop", "design", "build", "create", "making"];
const nouns = ["stuff", "art", "products", "experiences", "solutions", "stuff"];

const HomeScrollContent = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isEnabled, setIsEnabled] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["-161px", "end start"], // offset determined by hero viewport height
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, targetRef.current?.clientHeight]
  );

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

  useEffect(() => {}, []);

  // This needs to adjust columns based on screen size SO i need to structure columns differently
  return (
    <div ref={targetRef} className="flex flex-col h-full">
      <motion.div
      // dont need to change grid cols here
        className="sticky top-[10%] grid grid-cols-2 h-[85px] text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black overflow-hidden"
        // style={{ y }}
      >
        {/* left column */}
        <div className="col-span-1 text-end leading-[85px]">
          <p className="inline-block align-top">I</p>

          {/* <p className="inline-block">love</p> */}

          <motion.ul
            className="inline-block pl-2 w-fit text-center"
            style={{ translateY: verbY }}
          >
            {verbs.map((verb, index) => (
              <li key={index}>{verb}</li>
            ))}
          </motion.ul>
        </div>

        {/* right column */}
        <div className="col-span-1 pl-1 leading-[85px]">
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

      <div className="grid grid-cols-2 h-full overflow-y-hidden">
        <div className="col-span-1">
          <div className="relative h-[100dvh]">
            <div className="absolute bottom-0 right-0">
              {/* <DevelopSVG /> */}
            </div>
          </div>
          <div className="relative h-[115dvh]">
            <div className="absolute bottom-0 right-0">
              {/* <DevelopSVG /> */}
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative h-[155dvh]">
            <div className="absolute bottom-0 left-0">
              {/* <DevelopSVG /> */}
            </div>
          </div>
          <div className="relative h-[115dvh]">
            <div className="absolute bottom-0 left-0">
              {/* <DevelopSVG /> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-grow bg-slate-400">stuff</div> */}
    </div>
  );
};

export default HomeScrollContent;
