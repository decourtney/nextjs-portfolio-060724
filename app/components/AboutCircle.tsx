import { useMotionValue, motion } from "framer-motion";
import React, { useRef } from "react";
import { useResponsiveCircleRadius } from "../utilities";

const AboutCircle = ({
  containerSize,
}: {
  containerSize: { width: number; height: number };
}) => {
  const circleRadius = useResponsiveCircleRadius();
  const targetRef = useRef<HTMLDivElement>(null);
  const targetRadius = 15;

  return (
    <div
      ref={targetRef}
      className="relative"
      style={{
        transform: `translateX(${containerSize.width * 0.5 - targetRadius}px)`,
      }}
    >
      <div className="absolute top-0 w-full h-full">
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
      </div>
    </div>
  );
};

export default AboutCircle;
