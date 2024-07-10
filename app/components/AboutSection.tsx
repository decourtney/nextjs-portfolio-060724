import React from "react";
import { motion, useMotionValue } from "framer-motion";
import { useStateContext } from "../customHooks/useStateContex";
import { useContainerSize } from "../customHooks";
import AboutHeader from "./AboutHeader";
import VerticalLine from "./VerticalLine";

const AboutSection = () => {
  const { state } = useStateContext();
  const { ref, containerSize } = useContainerSize();

  if (!ref) return null;

  return (
    <section
      id="about-section"
      ref={ref}
      className="relative w-full h-[100dvh]"
    >
      {state.toggles["about-section"] && containerSize && (
        <>
          <AboutHeader containerSize={containerSize} />
          <VerticalLine
            containerSize={containerSize}
            toggleKey="section"
            offset={["start end", "end start"]}
            inputRange={[0, 1]}
            outputRange={[0, 1]}
          />
        </>
      )}

      {/* {containerSize && (
        <VerticalLine
          containerSize={containerSize}
          toggleKey="section"
          offset={["start end", "end start"]}
          inputRange={[0, 1]}
          outputRange={[0, 1]}
        />
      )} */}
    </section>
  );
};

export default AboutSection;
