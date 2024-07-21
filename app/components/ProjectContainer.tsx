import React from "react";
import { useContainerSize } from "../customHooks";
import VerticalLine from "./VerticalLine";

interface ProjectContainerProps {
  projectTitle: string;
}

const ProjectContainer = ({ projectTitle }: ProjectContainerProps) => {
  const { containerSize, ref } = useContainerSize();

  return (
    <div
      ref={ref}
      id="project-container"
      className="relative h-[300px] bg-foreground overflow-hidden"
    >
      {containerSize && (
        <VerticalLine
          containerSize={containerSize}
          toggleKey={""}
          offset={["start end", "end start"]}
          inputRange={[0, 0.5]}
          outputRange={[0, 1]}
          xPosition={containerSize.width - 2}
          lineWidth={4}
        />
      )}
      <div className="absolute top-0 left-0  w-full h-full bg-background" />

      <div className="w-full h-full">
        <div id="project-card">
          <h2>{projectTitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
