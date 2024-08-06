"use client";

import { useDisclosure } from "@nextui-org/react";
import { motion, useAnimate } from "framer-motion";
import ProjectModal from "./ProjectModal";
import { transform } from "next/dist/build/swc";

interface ProjectContainerProps {
  projectTitle: string;
  projectDescription: string;
  projectImage: string;
  projectWriteup: string;
  projectToolIcons: string[];
  projectLink: string;
  isLeft: boolean;
}

const ProjectContainer = ({
  projectTitle,
  projectDescription,
  projectImage,
  projectWriteup,
  projectToolIcons,
  projectLink,
  isLeft,
}: ProjectContainerProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [imgScope, animateImg] = useAnimate();
  const [cardScope, animateCard] = useAnimate();
  const skewAmount = 1;

  const handleHoverStart = () => {
    animateCard(
      cardScope.current,
      {
        x: isLeft ? "-5%" : "5%",
        skewX: isLeft ? -skewAmount : skewAmount,
        skewY: isLeft ? -skewAmount : skewAmount,
        boxShadow: isLeft
          ? "8px 8px 14px 0px hsl(var(--nextui-primary-100))"
          : "-8px 8px 14px 0px hsl(var(--nextui-primary-100))",
      },
      { type: "tween" }
    );
    animateImg(
      imgScope.current,
      { x: isLeft ? "30%" : "-30%", y: 30, rotateZ: isLeft ? 2 : -2 },
      { type: "tween" }
    );
  };

  const handleHoverEnd = () => {
    animateCard(
      cardScope.current,
      {
        x: 0,
        skewX: 0,
        skewY: 0,
        boxShadow: isLeft
          ? "2px 2px 5px 0px hsl(var(--nextui-primary-100))"
          : "-2px 2px 5px 0px hsl(var(--nextui-primary-100))",
      },
      { type: "tween" }
    );
    animateImg(
      imgScope.current,
      { x: isLeft ? 0 : 0, y: 0, rotateZ: 0 },
      { type: "tween" }
    );
  };

  return (
    <div className="h-[300px] rounded-lg w-3/4 lg:w-[80%] border-large bg-[hsl(var(--nextui-primary-100))]">
      <div className="relative w-full h-full">
        <motion.button
          ref={cardScope}
          className="absolute top-0 left-0 w-full h-full bg-background rounded-md z-10"
          style={{
            transformOrigin: isLeft ? "0% 0%" : "100% 0%",
          }}
          initial={{
            boxShadow: isLeft
              ? "2px 2px 5px 0px hsl(var(--nextui-primary-100))"
              : "-2px 2px 5px 0px hsl(var(--nextui-primary-100))",
          }}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          onClick={() => onOpen()}
        >
          <div className="w-full h-full pt-10 px-10 text-left  space-y-10">
            <h2 className="text-4xl font-black text-[hsl(var(--nextui-primary-100))]">
              {projectTitle}
            </h2>
            <p className="">{projectDescription}</p>
          </div>
        </motion.button>

        <motion.div
          ref={imgScope}
          className={`absolute top-0 left-0 w-full h-full ${
            isLeft
              ? "translate-x-[30px] lg:translate-x-0"
              : "-translate-x-[30px] lg:translate-x-0"
          }  translate-y-[20px] lg:translate-y-0 rounded-md shadow-md shadow-[hsl(var(--nextui-primary-500))]`}
        >
          <img
            src="/images/lake.jpg"
            className="w-full h-full object-fill rounded-md"
          />
        </motion.div>
      </div>

      <ProjectModal
        projectTitle={projectTitle}
        projectImage={projectImage}
        projectWriteup={projectWriteup}
        projectToolIcons={projectToolIcons}
        projectLink={projectLink}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </div>
  );
};

export default ProjectContainer;
