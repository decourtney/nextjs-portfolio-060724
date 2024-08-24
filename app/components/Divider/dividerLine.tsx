import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

interface DividerLineProps {
  initialYPosition: number;
  randomMultiplier: number;
}

const DividerLine = ({
  initialYPosition,
  randomMultiplier,
}: DividerLineProps) => {
  const { scrollYProgress } = useScroll();
  const yPos = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  const [lineWidth, setLineWidth] = useState<null | number>(null); // Initially null
  const [lineLength, setLineLength] = useState<null | number>(null); // Initially null
  const [leftPosition, setLeftPosition] = useState<null | string>(null); // Initially null
  const [yPosition, setYPosition] = useState(initialYPosition);

  useEffect(() => {
    // Generate random values on the client side after mount
    const generatedLineWidth = Math.floor(Math.random() * 4) + 2;
    const generatedLineLength =
      Math.floor(Math.random() * (window.innerHeight / 2 - 150 + 1)) + 150;
    const generatedLeftPosition = `${Math.floor(Math.random() * 101)}%`;

    // Set the state with the generated values
    setLineWidth(generatedLineWidth);
    setLineLength(generatedLineLength);
    setLeftPosition(generatedLeftPosition);
  }, []);

  useMotionValueEvent(yPos, "change", (latest) => {
    const newYPosition =
      initialYPosition + Math.floor(latest * randomMultiplier);
    setYPosition(newYPosition);
  });

  // Render nothing until the positions are calculated
  if (lineWidth === null || lineLength === null || leftPosition === null) {
    return null;
  }

  return (
    <div className="relative">
      <motion.svg
        width={lineWidth}
        height={lineLength}
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0"
        style={{ left: leftPosition, y: yPosition }}
        initial={{ y: `${initialYPosition}px` }}
      >
        <line
          x1="1"
          y1="0"
          x2="1"
          y2={lineLength}
          stroke="hsl(var(--nextui-primary-400))"
          strokeWidth={lineWidth}
        />
      </motion.svg>
    </div>
  );
};

export default DividerLine;
