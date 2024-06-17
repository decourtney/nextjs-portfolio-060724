import { Box } from "@radix-ui/themes";
import {
  useMotionValue,
  useScroll,
  useTransform,
  useMotionValueEvent,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const HomeScrollLine = ({
  startX,
  startY,
}: {
  startX: number;
  startY: number;
}) => {
  const targetRef = useRef<HTMLDivElement>(null); // targetRef is the element that will be watched for scroll
  const pathRef = useRef<any>(null); // pathRef is the path element that will be used to get the total length of the path
  const progressX = useMotionValue(startX); // progressX is the x position of the circle
  const progressY = useMotionValue(startY); // progressY is the y position of the circle
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["-100px", "end start"],
  }); // scrollYProgress is the progress of the scroll from 0 to 1
  const pathLength = useTransform(scrollYProgress, [0, 0.4, 0.7], [0, 0.4, 1]); // pathLength is the length of the path that will be drawn

  useMotionValueEvent(pathLength, "change", (latest) => {
    const totalPathLength = pathRef.current.getTotalLength();
    const latestPathProgress = pathRef.current.getPointAtLength(
      latest * totalPathLength
    );

    progressX.set(latestPathProgress.x);
    progressY.set(latestPathProgress.y);
  });
  return (
    <section ref={targetRef}>
      <svg
        viewBox={`0 0 127 250`}
        // height={"100%"}
        // width={"100%"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMax meet"
      >
        <motion.path
          ref={pathRef}
          id="scroll-line"
          d={`M${startX} ${startY} L120.65 100 L63.5 150 V250`} // M120.65 0 V250 moves from 120.65, 0 to 120.65, 250
          strokeWidth="1"
          stroke="hsl(var(--nextui-default-900))"
          style={{ pathLength }}
          strokeLinecap={"round"}
          onUpdate={({ pathLength }) => {
            if (pathLength === 1) {
              console.log("end of line");
              console.log(`${progressX.get()}, ${progressY.get()}`);
            }
          }}
        />
        <motion.circle
          id="scroll-line-circle"
          cx={progressX}
          cy={progressY}
          r={1}
          fill="hsl(var(--nextui-default-900))"
        />
      </svg>
    </section>
  );
};

export default HomeScrollLine;
