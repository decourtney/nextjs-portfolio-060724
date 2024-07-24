import React, { use } from "react";
import VerticalLine from "./VerticalLine";
import { useContainerSize } from "../customHooks";
import ProjectContainer from "./ProjectContainer";
import { motion, useInView } from "framer-motion";

const skewAmount = 1;

const ProjectSection = () => {
  const { containerSize, ref } = useContainerSize();
  const projectTitles = [
    "Project Title 1",
    "Project Title 2",
    "Project Title 3",
    "Project Title 4",
    "Project Title 5",
    "Project Title 6",
  ];

  return (
    <section id="project-section" className="">
      <div ref={ref} className="relative grid grid-cols-1 lg:grid-cols-2">
        {projectTitles.map((title, index) => (
          <div
            key={title}
            className={`col-span-1 ${
              index % 2 !== 0 ? "lg:translate-y-10" : ""
            }`}
          >
            {index % 2 === 0 ? (
              <LeftContainer projectTitle={title} />
            ) : (
              <RightContainer projectTitle={title} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;

const LeftContainer = ({ projectTitle }: { projectTitle: string }) => {
  const { containerSize, ref } = useContainerSize();
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      id="project-container"
      className="relative h-[300px] bg-foreground overflow-hidden z-10"
    >
      <motion.div
        className="absolute top-0 w-full h-full bg-background -z-10"
        style={{
          transformPerspective: 500,
          transformOrigin: "0% 0%",
          skewX: isInView ? -0.1 : 0,
          skewY: isInView ? -0.1 : 0,
        }}
        whileHover={{ skewX: -skewAmount, skewY: -skewAmount }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <div
        id="project-card"
        className="w-full h-full z-10 text-center content-center pointer-events-none"
      >
        <h2 className="text-2xl font-black">{projectTitle}</h2>
      </div>
    </div>
  );
};

const RightContainer = ({ projectTitle }: { projectTitle: string }) => {
  const { containerSize, ref } = useContainerSize();
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      id="project-container"
      className="relative h-[300px] bg-foreground overflow-hidden z-10"
    >
      <motion.div
        className="absolute top-0 w-full h-full bg-background -z-10"
        style={{
          transformPerspective: 500,
          transformOrigin: "100% 0%",
          skewX: isInView ? 0.1 : 0,
          skewY: isInView ? 0.1 : 0,
        }}
        whileHover={{ skewX: skewAmount, skewY: skewAmount }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <div
        id="project-card"
        className="w-full h-full z-10 text-center content-center pointer-events-none"
      >
        <h2 className="text-2xl font-black">{projectTitle}</h2>
      </div>
    </div>
  );
};
