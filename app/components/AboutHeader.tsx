import { useMotionValue, motion } from "framer-motion";
import React, { useRef } from "react";
import { useResponsiveCircleRadius } from "../utilities";

const AboutHeader = ({
  containerSize,
}: {
  containerSize: { width: number; height: number };
}) => {
  const circleRadius = useResponsiveCircleRadius();
  const targetRef = useRef<HTMLDivElement>(null);
  const progressX = useMotionValue(containerSize.width - 10);
  const progressY = useMotionValue(10);
  const targetRadius = 15;

  return (
    <section
      id="about-header"
      ref={targetRef}
      className="relative"
      style={{ transform: `translateX(${containerSize.width * 0.5 - targetRadius}px)` }}
    >
      <div className={`absolute top-0 w-full h-full`}>
        <svg
          viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <motion.circle
            id={"progress-circle"}
            initial={{ r: circleRadius, cx: targetRadius, cy: circleRadius }}
            animate={{ r: targetRadius, cy: targetRadius }}
            fill="hsl(var(--nextui-primary-100))"
          />
        </svg>
        <motion.div
          className="absolute top-0 left-0 text-[hsl(var(--nextui-primary-100))] text-3xl lg:text-5xl font-bold"
          initial={{
            x: 0,
            scale: 0,
            transformOrigin: "left",
            translateY: "-20%",
          }}
          animate={{ x: 50, scale: 1 }}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          <p>ABOUT</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHeader;
