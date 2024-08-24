"use client";

import { useEffect, useState } from "react";
import useWindowSize from "../../utilities/useWindowSize";
import DividerLine from "./dividerLine";

// Function to generate random values
const getRandomNegativeValue = (maxValue: number) =>
  -Math.floor(Math.random() * maxValue);
const getRandomMultiplier = () => Math.floor(Math.random() * 3000); // You can adjust this if needed

const DividerSection = () => {
  const [numberOfLines, setNumberOfLines] = useState(5);
  const { height: windowHeight, width: windowWidth } = useWindowSize();

  useEffect(() => {
    if (windowWidth < 640) {
      setNumberOfLines(3);
    } else {
      setNumberOfLines(5);
    }
  }, [windowWidth]);

  return (
    <div className="w-full h-[100px] flex items-center justify-center">
      <div
        className="w-full h-full -z-50"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numberOfLines}, 1fr)`,
        }}
      >
        {Array.from({ length: numberOfLines }).map((_, index) => (
          <DividerLine
            key={index}
            initialYPosition={getRandomNegativeValue(windowHeight)}
            randomMultiplier={getRandomMultiplier()}
          />
        ))}
      </div>
    </div>
  );
};

export default DividerSection;
