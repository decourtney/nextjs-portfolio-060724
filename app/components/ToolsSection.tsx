"use client";

import React, { useState } from "react";
import { useIsMobile } from "../utilities";
import BoringIcons from "./BoringIcons";
import BouncingIcons from "./BouncingIcons";

const ToolsSection = () => {
  const isMobile = useIsMobile();

  // State to keep track of the active tool
  const [activeTool, setActiveTool] = useState<string | null>(null);

  // Mapping of SVG IDs to display names
  const toolDisplayNames: { [key: string]: string } = {
    framermotion: "Framer Motion",
    tailwindcss: "Tailwind CSS",
    react: "React",
    expressjs: "Express.js",
    mongodb: "MongoDB",
    nodejs: "Node.js",
    mysql: "MySQL",
    aws: "AWS",
    nextjs: "Next.js",
  };

  return (
    <section id="tools" className="w-full pt-24 min-h-dvh">
      <div className="w-full text-center text-[hsl(var(--nextui-primary-100))] text-5xl font-bold">
        <h1>Toolbox</h1>
      </div>
      <div className="w-full h-fit md:h-[300px] mt-6 md:mt-12 border-large rounded-md shadow-md shadow-[hsl(var(--nextui-primary-100))]">
        {isMobile ? (
          <BoringIcons activeTool={activeTool} onHover={setActiveTool} /> // Pass activeTool and onHover to BoringIcons
        ) : (
          <BouncingIcons activeTool={activeTool} onHover={setActiveTool} /> // Pass activeTool and onHover to BouncingIcons
        )}
      </div>

      <ul className="flex justify-center flex-wrap items-center mt-4 font-bold text-lg lg:text-2xl list-none">
        {Object.keys(toolDisplayNames).map((toolId, index, array) => (
          <li
            key={toolId}
            className={`flex items-center`}
            onMouseEnter={() => setActiveTool(toolId)} // Update active tool on mouse enter
            onMouseLeave={() => setActiveTool(null)} // Reset active tool on mouse leave
          >
            <span
              className={`transition-transform duration-200 ${
                activeTool === toolId ? "scale-105 text-[hsl(var(--nextui-secondary-500))]" : ""
              }`}
            >
              {toolDisplayNames[toolId]} {/* Display the friendly name */}
            </span>
            {index < array.length - 1 && ( // Add a bullet for all but the last item
              <span className="mx-2 text-[hsl(var(--nextui-primary-300))]">•</span> // Bullet separator
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ToolsSection;
