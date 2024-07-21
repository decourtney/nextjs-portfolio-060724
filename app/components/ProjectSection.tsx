import React from "react";
import VerticalLine from "./VerticalLine";
import { useContainerSize } from "../customHooks";
import ProjectContainer from "./ProjectContainer";

const ProjectSection = () => {
  const { containerSize, ref } = useContainerSize();

  const projectTitlesLeft = [
    "Project Title 1",
    "Project Title 2",
    "Project Title 3",
  ];
  const projectTitlesRight = [
    "Project Title 4",
    "Project Title 5",
    "Project Title 6",
  ];

  return (
    <section id="project-section" className="min-h-dvh h-[200dvh]">
      <div className="grid grid-cols-2 grid-rows-3 mt-20">
        <div className="col-span-1 row-span-1">
          <div
            ref={ref}
            id="project-container"
            className="relative h-[300px] bg-foreground overflow-hidden"
          >
            {/* {containerSize && (
              <VerticalLine
                containerSize={containerSize}
                toggleKey={""}
                offset={["start end", "end start"]}
                inputRange={[0, 0.5]}
                outputRange={[0, 1]}
                xPosition={containerSize.width - 2}
                lineWidth={4}
              />
            )} */}
            <div className="absolute top-0 w-full h-full -translate-x-10 -translate-y-10 bg-background" />

            <div id="project-card" className="w-full h-full">
              <h2>Project Title 1</h2>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1 translate-y-10"></div>
      </div>
    </section>
  );
};

export default ProjectSection;
