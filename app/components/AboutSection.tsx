import React from "react";
import { motion, useMotionValue } from "framer-motion";
import { useStateContext } from "../customHooks/useStateContex";
import { useContainerSize } from "../customHooks";
import AboutHeader from "./AboutHeader";

const AboutSection = ({ toggleKey }: { toggleKey: string }) => {
  const { state } = useStateContext();
  const { ref, containerSize } = useContainerSize();

  if (!ref) return null;

  return (
    <section id="about" ref={ref} className="relative w-full h-[100dvh] ">
      {state.toggles[toggleKey] && containerSize && (
        <AboutHeader containerSize={containerSize} />
      )}

      {/* TODO Idea to try = once the header sticks to top then further scrolling will scroll left/right and eventually back around to the Home Section  */}
    </section>
  );
};

export default AboutSection;
