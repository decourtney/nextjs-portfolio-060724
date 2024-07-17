import React, { useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useStateContext } from "../customHooks/useStateContex";
import { useContainerSize } from "../customHooks";
import AboutHeader from "./AboutHeader";
import VerticalLine from "./VerticalLine";
import AboutContent from "./AboutContent";
import { URLSearchParams } from "url";

const content = [
  "Im just a dude who likes art and programming.",
  "Web development has provided me with an outlet to combine the two while still solving problems and providing services.", 
  "On the backend I primarily use NodeJs, MySQL, Mongo, and AWS. While exploring the front end I utilize React coupled with libraries such as Framer Motion and frameworks like Next.js.",
  "The possibilities truly are limitless and I always look forward to chasing that end of line.",
];

const AboutSection = () => {
  const { state } = useStateContext();
  const { ref, containerSize } = useContainerSize();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const stuff = useTransform(scrollYProgress, [0, 1], [-125, 5]);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef);

  // if (!ref) return null;

  return (
    <section id="about-section" ref={ref} className="relative w-full min-h-dvh">
      {state.toggles["about-section"] && containerSize && (
        <AboutHeader containerSize={containerSize} />
      )}
      {/* {content.map((content, index) => ( */}
        <AboutContent  />
      {/* ))} */}
    </section>
  );
};

export default AboutSection;
