import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useReducer, useRef } from "react";
import { useStateContext } from "../customHooks";
import useResponsiveCircleRadius from "../customHooks/useResponsiveCircleRadius";

const HomeScrollLine = ({
  containerSize,
  toggleKey,
}: {
  containerSize: { width: number; height: number };
  toggleKey: string;
}) => {
  const { setToggle } = useStateContext();
  const targetRef = useRef<HTMLDivElement>(null); // targetRef is the element that will be watched for scroll
  const pathRef = useRef<any>(null); // pathRef is the path element that will be used to get the total length of the path
  const circleRadius = useResponsiveCircleRadius(); // circleRadius is the radius of the circle and the width of the path divided by 2
  const progressX = useMotionValue(containerSize.width - 10); // progressX is the x position of the circle
  const progressY = useMotionValue(-5); // progressY is the y position of the circle
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  }); // scrollYProgress is the progress of the scroll from 0 to 1
  const pathLength = useTransform(scrollYProgress, [0, 0.6], [0, 1]); // pathLength is the length of the path that will be drawn

  // useMotionValueEvent is used to update the position of the circle based on the progress of the path
  useMotionValueEvent(pathLength, "change", (latest) => {
    const totalPathLength = pathRef.current.getTotalLength();
    const latestPathProgress = pathRef.current.getPointAtLength(
      latest * totalPathLength
    );

    progressX.set(latestPathProgress.x);
    progressY.set(latestPathProgress.y);
  });

  return (
    <section ref={targetRef} className="absolute top-0 w-full h-full">
      <svg
        viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        <motion.path
          ref={pathRef}
          id="scroll-line"
          // TODO hardcoded values will need to change with screen size
          d={`M${containerSize.width - 10} 0 V${
            containerSize.height + circleRadius
          }`} // M120.65 0 V250 moves from 120.65, 0 to 120.65, 250
          strokeWidth={circleRadius * 0.5} // strokeWidth is the width of the path
          stroke="hsl(var(--nextui-primary))"
          style={{ pathLength }}
          strokeLinecap={"square"}
          onUpdate={({ pathLength }) => {
            if (pathLength === 1) {
              console.log("end of line");
              setToggle(toggleKey, true);
            } else {
              setToggle(toggleKey, false);
            }
          }}
        />
        <motion.circle
          id="scroll-line-circle"
          cx={progressX}
          cy={progressY}
          r={circleRadius}
          fill="hsl(var(--nextui-primary))"
        />
      </svg>
    </section>
  );
};

export default HomeScrollLine;
