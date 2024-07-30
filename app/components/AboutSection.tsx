import React, { useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
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
import AboutCircle from "./AboutCircle";

const AboutSection = () => {
  const { state } = useStateContext();
  const { ref, containerSize } = useContainerSize();
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: "all", once: false });
  const { scrollYProgress } = useScroll({ target: ref });
  const [enableContent, setEnableContent] = useState(false);

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
      className="relative w-full min-h-[150dvh] pb-24"
    >
      <div className="sticky top-12">
        {state.toggles["about-section"] && containerSize && (
          <AboutCircle containerSize={containerSize} />
        )}
        {enableContent && <AboutHeader />}
        {enableContent && <AboutContent />}
      </div>
      {/* <div
        ref={contentRef}
        className="absolute top-12 left-0 w-full h-full bg-slate-500"
        style={{
          transform: isInView ? "scaleY(0)" : "scaleY(1)",
          transition: "all 1s ease",
          transformOrigin: "bottom",
        }}
      ></div> */}
    </section>
  );
};

export default AboutSection;
