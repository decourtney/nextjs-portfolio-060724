"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { useWindowSize } from "../utilities";
import DividerLine from "./dividerLine";

// Function to generate random values
const getRandomNegativeValue = (maxValue: number) =>
  -Math.floor(Math.random() * maxValue);
const getRandomMultiplier = () => Math.floor(Math.random() * 500); // You can adjust this if needed

const Divider = () => {
  const { height: windowHeight } = useWindowSize();
  const numberOfLines = 5;

  return (
    <div className="w-full h-[100px] flex items-center justify-center">
      <div className={`grid grid-cols-[${numberOfLines}] w-full h-full -z-50`}>
        {Array.from({ length: numberOfLines }).map((_, index) => (
          <DividerLine
            key={index}
            initialYPosition={getRandomNegativeValue(windowHeight)}
            percentageMultiplier={getRandomMultiplier()}
          />
        ))}
      </div>
    </div>
  );
};

export default Divider;
