import React from "react";
import { useContainerSize } from "../customHooks";
import { motion, useInView } from "framer-motion";

const skewAmount = 1;

const ProjectSection: React.FC = () => {
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
    <section id="project-section" className="p-4 lg:p-12">
      <div ref={ref} className="relative grid grid-cols-1 lg:grid-cols-2 gap-8">
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

const LeftContainer: React.FC<{ projectTitle: string }> = ({
  projectTitle,
}) => {
  const { containerSize, ref } = useContainerSize();
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="relative h-[300px] bg-foreground overflow-hidden z-10 rounded-md shadow-lg"
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-background rounded-md"
        style={{
          transformPerspective: 500,
          transformOrigin: "0% 0%",
          skewX: isInView ? -0.1 : 0,
          skewY: isInView ? -0.1 : 0,
        }}
        whileHover={{ skewX: -skewAmount, skewY: -skewAmount }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <div className="relative w-full h-full flex items-center justify-center pointer-events-none z-10">
        <h2 className="text-5xl font-black text-white">{projectTitle}</h2>
      </div>
    </div>
  );
};

const RightContainer: React.FC<{ projectTitle: string }> = ({
  projectTitle,
}) => {
  const { containerSize, ref } = useContainerSize();
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      className="relative h-[300px] bg-foreground overflow-hidden z-10 rounded-md shadow-lg"
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-background rounded-md"
        style={{
          transformPerspective: 500,
          transformOrigin: "100% 0%",
          skewX: isInView ? 0.1 : 0,
          skewY: isInView ? 0.1 : 0,
        }}
        whileHover={{ skewX: skewAmount, skewY: skewAmount }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <div className="relative w-full h-full flex justify-center items-center p-4 pointer-events-none z-10">
        <h2 className="text-5xl font-black text-white">{projectTitle}</h2>
      </div>
    </section>
  );
};
