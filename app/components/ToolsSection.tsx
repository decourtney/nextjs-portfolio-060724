"use client";

import React from "react";
import { useIsMobile } from "../utilities";
import BoringIcons from "./BoringIcons";
import BouncingIcons from "./BouncingIcons";

const ToolsSection = () => {
  const isMobile = useIsMobile();

  return (
    <section id="tools" className="w-full pt-24 min-h-dvh">
      <div className="w-full text-center text-[hsl(var(--nextui-primary-100))] text-5xl font-bold">
        <h1>TOOLS</h1>
      </div>
      <div className="w-full h-fit md:h-[300px] mt-6 md:mt-12 border-large rounded-md shadow-md shadow-[hsl(var(--nextui-primary-100))]">
        {isMobile ? <BoringIcons /> : <BouncingIcons />}
      </div>
      <div className="mt-12">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </section>
  );
};

export default ToolsSection;
