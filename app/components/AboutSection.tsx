import React from "react";
import { motion, useMotionValue } from "framer-motion";
import { useStateContext } from "../customHooks/useStateContex";
import { useContainerSize } from "../customHooks";
import AboutScrollLine from "./AboutScrollLine";

const AboutSection = ({ toggleKey }: { toggleKey: string }) => {
  const { state } = useStateContext();
  const { ref, containerSize } = useContainerSize();

  if (!ref) return null;

  return (
    <section id="about" ref={ref} className="relative w-full h-[200dvh] ">
      {state.toggles[toggleKey] && containerSize && (
        <AboutScrollLine containerSize={containerSize} />
      )}
    </section>
  );
};

export default AboutSection;
