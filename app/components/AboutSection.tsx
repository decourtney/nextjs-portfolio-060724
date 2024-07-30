import React, { useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useStateContext } from "../utilities/useStateContex";
import { useContainerSize } from "../utilities";
import AboutHeader from "./AboutHeader";
import VerticalLine from "./VerticalLine";
import AboutContent from "./AboutContent";
import { URLSearchParams } from "url";
import BouncingBallCanvas from "./old_BouncingIcons";

const content = [
  "Im just a dude who likes art and programming.",
  "Web development has provided me with an outlet to combine the two while still solving problems and providing services.",
  "On the backend I primarily use NodeJs, MySQL, Mongo, and AWS. While exploring the front end I utilize React coupled with libraries such as Framer Motion and frameworks like Next.js.",
  "The possibilities truly are limitless and I always look forward to chasing that end of line.",
];

const AboutSection = () => {
  const { state } = useStateContext();
  const { ref, containerSize } = useContainerSize();
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef);

  // if (!ref) return null;

  return (
    <section id="about-section" ref={ref} className="w-full min-h-[150dvh] pb-24">
      <div className="sticky top-12">
        {state.toggles["about-section"] && containerSize && (
          <>
            <AboutHeader containerSize={containerSize} />
            <AboutContent />
          </>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
