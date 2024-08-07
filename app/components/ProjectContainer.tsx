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
  const [containerScope, animateContainer] = useAnimate();
  const skewAmount = 1;

  const handleHoverStart = () => {
    animateContainer(
      containerScope.current,
      {
        boxShadow: isLeft
          ? "0px 0px 14px 0px hsl(var(--nextui-primary-100))"
          : "0px 0px 14px 0px hsl(var(--nextui-primary-100))",
      },
      { type: "tween" }
    );
    animateCard(
      cardScope.current,
      {
        x: isLeft ? "-5%" : "5%",
        skewX: isLeft ? -skewAmount : skewAmount,
        skewY: isLeft ? -skewAmount : skewAmount,
      },
      { type: "tween" }
    );
    animateImg(
      imgScope.current,
      {
        x: isLeft ? "30%" : "-30%",
        y: 30,
        rotateZ: isLeft ? 2 : -2,
      },
      { type: "tween" }
    );
  };

  const handleHoverEnd = () => {
    animateContainer(
      containerScope.current,
      {
        boxShadow: isLeft
          ? "0px 0px 0px 0px hsl(var(--nextui-primary-100))"
          : "0px 0px 0px 0px hsl(var(--nextui-primary-100))",
      },
      { type: "tween" }
    );
    animateCard(
      cardScope.current,
      {
        x: 0,
        skewX: 0,
        skewY: 0,
      },
      { type: "tween" }
    );
    animateImg(
      imgScope.current,
      {
        x: isLeft ? 0 : 0,
        y: 0,
        rotateZ: 0,
      },
      { type: "tween" }
    );
  };

  return (
    <motion.div
      ref={containerScope}
      className="h-[300px] w-full sm:w-3/4 sm:mx-5 lg:w-[80%] border-large border-[hsl(var(--nextui-primary-100))] bg-[hsl(var(--nextui-primary-100))] rounded-md"
    >
      <div className="relative w-full h-full">
        <motion.button
          ref={cardScope}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            transformOrigin: isLeft ? "0% 0%" : "100% 0%",
          }}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          onClick={() => onOpen()}
        >
          <div className="absolute top-0 w-full h-full pt-10 px-10 text-left space-y-10 bg-background rounded-md z-20">
            <h2 className="text-4xl font-black text-[hsl(var(--nextui-primary-100))]">
              {projectTitle}
            </h2>
            <p className="">{projectDescription}</p>
          </div>

          <motion.div
            ref={imgScope}
            className="absolute top-0 left-0 w-full h-full shadow-md z-10"
          >
            <img
              src="/images/lake.jpg"
              className="w-full h-full object-fill rounded-md"
            />
          </motion.div>
        </motion.button>
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
    </motion.div>
  );
};

export default ProjectContainer;
