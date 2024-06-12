"use client";

import { useRef } from "react";
import {
  NameSVG,
  LetterYSVG,
  FullNameSVG,
  ScrollLineSVG,
  ScrollLineSVGTEST,
} from "./components/SVGs";
import { Card, Flex, Text, Box, Container, Grid } from "@radix-ui/themes";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const targetRef = useRef(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  return (
    <motion.div className="flex justify-center">
      <motion.section
        ref={targetRef}
        className="flex-col items-center justify-center w-full md:w-3/4 lg:w-1/2 overflow-hidden"
        style={{ rotate, translateY }}
        // direction={"column"}
        // position={"relative"}
        // width={{ initial: "100%", md: "75%", lg: "50%" }}
      >
        <FullNameSVG />

        <ScrollLineSVGTEST />

        <ScrollLineSVGTEST />

        <ScrollLineSVGTEST />
      </motion.section>
    </motion.div>
  );
}
