import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const HomeScrollLine = ({
  containerSize,
}: {
  containerSize: { width: number; height: number };
}) => {
  const targetRef = useRef<HTMLDivElement>(null); // targetRef is the element that will be watched for scroll
  const pathRef = useRef<any>(null); // pathRef is the path element that will be used to get the total length of the path
  const progressX = useMotionValue(containerSize.width * 0.5); // progressX is the x position of the circle
  const progressY = useMotionValue(0); // progressY is the y position of the circle
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  }); // scrollYProgress is the progress of the scroll from 0 to 1
  const pathLength = useTransform(scrollYProgress, [0, 0.6], [0, 1]); // pathLength is the length of the path that will be drawn

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
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path
          ref={pathRef}
          id="scroll-line"
          d={`M${containerSize.width * 0.5} 0 V${containerSize.height}`} // M120.65 0 V250 moves from 120.65, 0 to 120.65, 250
          strokeWidth="5"
          stroke="hsl(var(--nextui-default-900))"
          style={{ pathLength }}
          strokeLinecap={"round"}
          onUpdate={({ pathLength }) => {
            if (pathLength === 1) {
              console.log("end of line");
            }
          }}
        />
        <motion.circle
          id="scroll-line-circle"
          cx={progressX}
          cy={progressY}
          r={5}
          fill="hsl(var(--nextui-default-900))"
        />
      </svg>
    </section>
  );
};

export default HomeScrollLine;
