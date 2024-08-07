import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useStateContext } from "../utilities";

interface VerticalLineProps {
  containerSize: { width: number; height: number };
  toggleKey: string;
  offset: any;
  inputRange: number[];
  outputRange: number[];
  xPosition?: number;
  lineWidth?: number;
}

const VerticalLine = ({
  containerSize,
  toggleKey,
  offset,
  inputRange,
  outputRange,
  xPosition = 15,
  lineWidth = 4,
}: VerticalLineProps) => {
  const { setToggle } = useStateContext();
  const targetRef = useRef<HTMLDivElement>(null); // targetRef is the element that will be watched for scroll
  const pathRef = useRef<SVGPathElement>(null); // pathRef is the path element that will be used to get the total length of the path
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset,
  }); // scrollYProgress is the progress of the scroll from 0 to 1
  const pathLength = useTransform(scrollYProgress, inputRange, outputRange); // pathLength is the length of the path that will be drawn relative to the scroll progress

  // console.log(scrollYProgress.get());
  return (
    <section
      ref={targetRef}
      className="absolute top-0 w-full h-full pointer-events-none"
    >
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
          d={`M${xPosition} -2 V${containerSize.height}`} // M120.65 0 V250 moves from 120.65, 0 to 120.65, 250
          strokeWidth={lineWidth} // strokeWidth is the width of the path
          stroke="hsl(var(--nextui-primary-100))"
          strokeLinecap={"round"}
          style={{ pathLength }}
          onUpdate={({ pathLength }) => {
            if (pathLength === 1 && toggleKey != "") {
              console.log("end of line");
              setToggle(toggleKey, true);
            } else {
              setToggle(toggleKey, false);
            }
          }}
        />
      </svg>
    </section>
  );
};

export default VerticalLine;
