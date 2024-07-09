import { useMotionValue, motion } from "framer-motion";
import React, { useRef } from "react";
import { useResponsiveCircleRadius } from "../customHooks";

const AboutScrollLine = ({
  containerSize,
}: {
  containerSize: { width: number; height: number };
}) => {
  // TODO check if this is the correct way to use useResponsiveCircleRadius
  const circleRadius = useResponsiveCircleRadius();
  const targetRef = useRef<HTMLDivElement>(null); // targetRef is the element that will be watched for scroll
  const progressX = useMotionValue(containerSize.width - 10); // TODO hardcoded value will need to change with screen size
  const progressY = useMotionValue(10); // TODO hardcoded value will need to change with screen size

  return (
    <section ref={targetRef} className="absolute top-0 w-full h-full">
      <svg
        viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        // fill="hsl(var(--nextui-primary))"
      >
        <motion.circle
          id="about-circle"
          cx={progressX}
          cy={progressY}
          // r={circleRadius}
          initial={{ r: circleRadius, cy: 0 }} // TODO hardcoded value will need to change with screen size
          animate={{ r: 10, cy: 10 }} // TODO hardcoded value will need to change with screen size
          fill="hsl(var(--nextui-primary))"
        />
      </svg>
    </section>
  );
};

export default AboutScrollLine;
