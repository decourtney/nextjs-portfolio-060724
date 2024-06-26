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

const verbs = ["make", "develop", "design", "build", "create", "making"];
const nouns = ["stuff", "art", "products", "experiences", "solutions", "stuff"];

const WordCycle = () => {
  const targetRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {}, []);

  return (
    // <section ref={targetRef} className="">
    <motion.div ref={targetRef} className="flex flex-col h-full">
      <motion.div
        className="grid grid-cols-2 h-[80px] text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black overflow-hidden"
        style={{ y }}
      >
        {/* left column */}
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

        {/* right column */}
        <div className="col-span-1 pl-1 leading-[80px]">
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

      {/* Need to add animations here to move the popupbox div down the Y while scrolling. progressively getting slower and then fading out*/}
      <div className="grid grid-cols-2 h-full">
        <div className="relative col-span-1 ">
          <div className="absolute top-0 h-full translate-y-[30%]">
            <PopupBox />
          </div>
          <div className="absolute top-0 h-full translate-y-[70%]">
            <PopupBox />
          </div>
        </div>
        <div className="relative col-span-1">
          <div className="absolute top-0 h-full translate-y-[50%]">
            <PopupBox />
          </div>
          <div className="absolute top-0 h-full translate-y-[90%]">
            <PopupBox />
          </div>
        </div>
      </div>

      {/* <div className="flex flex-grow bg-slate-400">stuff</div> */}
    </motion.div>
    // </section>
  );
};

export default WordCycle;
