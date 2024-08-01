import React, { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useStateContext } from "../utilities/useStateContex";
import { useContainerSize } from "../utilities";
import VerticalLine from "./VerticalLine";
import AboutContent from "./AboutContent";
import { URLSearchParams } from "url";
import BouncingBallCanvas from "./old_BouncingIcons";
import AboutCircle from "./AboutCircle";
import { useIsMobile } from "../utilities";

const AboutSection = () => {
  const { state } = useStateContext();
  const { ref, containerSize } = useContainerSize();
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: "all", once: false });
  const { scrollYProgress } = useScroll({ target: ref });
  const [enableContent, setEnableContent] = useState(false);
  const isMobile = useIsMobile();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
    if (latest > 0) {
      setEnableContent(true);
    } else {
      setEnableContent(false);
    }
  });

  return (
    <section
      id="about-section"
      ref={ref}
      className="relative w-full h-full min-h-[120dvh] mb-24"
    >
      <div className="sticky top-12 ">
        {state.toggles["about-section"] && containerSize && (
          <AboutCircle containerSize={containerSize} />
        )}
        <motion.div
          className="w-full mb-12 text-center text-[hsl(var(--nextui-primary-100))] text-5xl font-bold"
          initial={{
            opacity: 0,
            x: 0,
            scaleX: 0,
            scaleY: 0.5,
            transformOrigin: "center",
            translateY: "-20%",
          }}
          animate={{
            opacity:
              (isMobile && state.toggles["about-section"]) || enableContent
                ? 1
                : 0,
            scaleX:
              (isMobile && state.toggles["about-section"]) || enableContent
                ? 1
                : 0,
            scaleY:
              (isMobile && state.toggles["about-section"]) || enableContent
                ? 1
                : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <h1>ABOUT</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity:
              (isMobile && state.toggles["about-section"]) || enableContent
                ? 1
                : 0,
            y:
              (isMobile && state.toggles["about-section"]) || enableContent
                ? 0
                : 20,
          }}
          transition={{ duration: 0.5 }}
        >
          <AboutContent />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
