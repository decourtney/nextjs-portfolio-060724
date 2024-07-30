import { useMotionValue, motion } from "framer-motion";
import React, { useRef } from "react";
import { useResponsiveCircleRadius } from "../utilities";

const AboutHeader = () => {
  const circleRadius = useResponsiveCircleRadius();
  const targetRef = useRef<HTMLDivElement>(null);

  const targetRadius = 15;

  return (
    <section id="about-header" ref={targetRef} className="relative">
      <motion.div
        className="absolute top-0 left-0 w-full text-center text-[hsl(var(--nextui-primary-100))] text-5xl font-bold"
        initial={{
          x: 0,
          scale: 0,
          transformOrigin: "center",
          translateY: "-20%",
        }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2, delay: 0.3 }}
      >
        <h1>ABOUT</h1>
      </motion.div>
    </section>
  );
};

export default AboutHeader;
