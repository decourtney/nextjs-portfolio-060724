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

const AboutSection = () => {
  const { state } = useStateContext();
  const { ref, containerSize } = useContainerSize();
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { amount: 'some', once: true });

  // if (!ref) return null;

  return (
    <section
      id="about-section"
      ref={ref}
      className="relative w-full min-h-[150dvh] pb-24"
    >
      <div className="sticky top-12">
        {state.toggles["about-section"] && containerSize && (
          <>
            <AboutHeader containerSize={containerSize} />
            <AboutContent />
          </>
        )}
      </div>
      <div
        ref={contentRef}
        className="absolute top-12 left-0 w-full h-full bg-slate-500"
        style={{
          transform: isInView ? 'scaleY(0)': 'scaleY(1)',
          transition: "all 1s ease",
          transformOrigin: "bottom"
        }}
      ></div>
    </section>
  );
};

export default AboutSection;
