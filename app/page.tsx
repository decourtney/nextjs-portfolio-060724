"use client";

import { useRef } from "react";
import {
  FullNameSVG,
  ScrollLineSVG,
  TestPictures,
} from "./components/SVGs";
import { Card, Flex, Text, Box, Container, Grid } from "@radix-ui/themes";
import { motion, useScroll, useTransform } from "framer-motion";
import { Image } from "@nextui-org/react";

export default function Home() {
  const targetRef = useRef(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <motion.div className="flex justify-center">
      <motion.section
        ref={targetRef}
        className="flex-col items-center justify-center w-full md:w-3/4 lg:w-1/2 "
      >
        <FullNameSVG />
        <TestPictures />
      </motion.section>
    </motion.div>
  );
}
