import { useMotionValue, motion, progress } from "framer-motion";
import React, { useRef } from "react";
import { useResponsiveCircleRadius } from "../customHooks";

const AboutHeader = ({
  containerSize,
}: {
  containerSize: { width: number; height: number };
}) => {
  // TODO check if this is the correct way to use useResponsiveCircleRadius
  const circleRadius = useResponsiveCircleRadius();
  const targetRef = useRef<HTMLDivElement>(null); // targetRef is the element that will be watched for scroll
  const progressX = useMotionValue(containerSize.width - 10); // TODO hardcoded value will need to change with screen size
  const progressY = useMotionValue(10); // TODO hardcoded value will need to change with screen size
  const conatinerWidth = containerSize.width;
  const targetRadius = 15; // TODO hardcoded value will need to change with screen size

  return (
    // TODO This section could be sticky and follow the user as they scroll down - test later
    <section
      id="about-header"
      ref={targetRef}
      className="relative"
    >
      <div className="absolute top-0 w-full h-full">
        <div className="">
          <svg
            viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            // fill="hsl(var(--nextui-primary))"
          >
            <motion.circle
              id={"progress-circle"}
              // cx={progressX}
              // cy={progressY}
              // r={circleRadius}
              initial={{ r: circleRadius, cx: targetRadius, cy: circleRadius }} // TODO hardcoded value will need to change with screen size
              animate={{ r: targetRadius, cy: targetRadius }} // TODO hardcoded value will need to change with screen size
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
              // initial={{ x:  10 }}
              // animate={{ x: 150 }}
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