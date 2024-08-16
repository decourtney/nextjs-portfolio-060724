"use client";

import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useIsMobile } from "../../utilities";
import BoringIcons from "./BoringIcons";
import BouncingIcons from "./BouncingIcons";

const ToolsSection = () => {
  const isMobile = useIsMobile();
  const text1ref = React.useRef(null);
  const text2ref = React.useRef(null);
  const isInView1 = useInView(text1ref, { once: false, amount: "some" });
  const isInView2 = useInView(text2ref, { once: false, amount: "some" });

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
    <section
      id="tools"
      className="w-full sm:w-[80%] lg:w-full mx-auto pt-16 min-h-dvh space-y-12"
    >
      <div className="w-full text-center text-[hsl(var(--nextui-primary-100))] text-5xl font-bold">
        <h1>Toolbox</h1>
      </div>

      <div className="w-full lg:w-3/4 2xl:w-[50%] mx-auto mt-6 md:mt-12 2xl:mt-24">
        <div
          ref={text1ref}
          className="grid lg:grid-cols-2 gap-y-12 w-[90%] lg:h-[250px] mx-auto mb-12 text-xl lg:text-2xl xl:text-3xl"
        >
          <div
            className="w-full mr-auto text-start"
            style={{
              translate: isInView1 ? "0 0" : "5% 10%",
              transition: "all 0.5s ease-out",
            }}
          >
            <p>Limitations stifle creativity</p>
            <p>so I never limit my craft with</p>
            <p>a particular set of tools</p>
          </div>

          <div
            className="w-full ml-auto text-end content-end"
            style={{
              translate: isInView1 ? "0 0" : "-5% -10%",
              transition: "all 0.5s ease-out",
            }}
          >
            <p ref={text2ref}>...but I have a few</p>
            <p>dependable go-tos</p>
          </div>
        </div>
        <div className="h-fit lg:h-[300px] border-large rounded-md shadow-md shadow-[hsl(var(--nextui-primary-100))] bg-background">
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
                  activeTool === toolId
                    ? "scale-105 text-[hsl(var(--nextui-secondary-500))]"
                    : ""
                }`}
              >
                {toolDisplayNames[toolId]} {/* Display the friendly name */}
              </span>
              {index < array.length - 1 && ( // Add a bullet for all but the last item
                <span className="mx-2 text-[hsl(var(--nextui-primary-300))]">
                  •
                </span> // Bullet separator
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ToolsSection;
