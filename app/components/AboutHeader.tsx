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
    <section id="about-header" ref={targetRef} className="relative mb-8">
      <div className="absolute top-0 w-full h-full">
        <div className="">
          <svg
            viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.circle
              id={"progress-circle"}
              initial={{ r: circleRadius, cx: targetRadius, cy: circleRadius }}
              animate={{ r: targetRadius, cy: targetRadius }}
              fill="hsl(var(--nextui-primary))"
            />
            <motion.path
              id={"progress-line"}
              d={`M${targetRadius} ${targetRadius} L${200} ${targetRadius}`}
              stroke={"hsl(var(--nextui-primary))"}
              strokeWidth={"2"}
              fill={"none"}
              initial={{
                d: `M${targetRadius} ${targetRadius} L${0} ${targetRadius}`,
              }}
              animate={{
                d: `M${targetRadius} ${targetRadius} L${150} ${targetRadius}`,
              }}
              transition={{ duration: 1 }}
            />
            <motion.text
              id={"progress-text"}
              y={"25"}
              fill={"hsl(var(--nextui-primary))"}
              fontSize={"25"}
              fontWeight={"bold"}
            >
              <motion.textPath
                href={"#progress-line"}
                textAnchor={"end"}
                dominantBaseline={"middle"}
                initial={{ startOffset: "0%" }}
                animate={{ startOffset: "100%" }}
                transition={{ duration: 2 }}
              >
                whoami
              </motion.textPath>
            </motion.text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
