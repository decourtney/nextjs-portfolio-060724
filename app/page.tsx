"use client";

import { Flex } from "@radix-ui/themes";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HomeSection from "./components/HomeSection";
import LazySection from "./components/LazySection";

export default function Home() {
  return (
    <Flex justify={"center"} width={"100%"}>
      <LazySection name="home">
        <HomeSection />
      </LazySection>
    </Flex>
  );
}
