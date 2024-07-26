import { useDisclosure } from "@nextui-org/react";
import { motion, useInView } from "framer-motion";
import { useContainerSize } from "../utilities";
import ProjectModal from "./ProjectModal";

const ProjectContainer = ({
  projectTitle,
  isLeft,
}: {
  projectTitle: string;
  isLeft: boolean;
}) => {
  const { containerSize, ref } = useContainerSize();
  const isInView = useInView(ref);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const skewAmount = 1;

  return (
    <div
      ref={ref}
      className="relative h-[300px] bg-foreground overflow-hidden z-10 rounded-md shadow-lg"
    >
      <motion.button
        className="absolute top-0 left-0 w-full h-full bg-background rounded-md"
        style={{
          transformPerspective: 500,
          transformOrigin: isLeft ? "0% 0%" : "100% 0%",
          skewX: isInView ? (isLeft ? -0.1 : 0.1) : 0,
          skewY: isInView ? (isLeft ? -0.1 : 0.1) : 0,
        }}
        whileHover={{
          skewX: isLeft ? -skewAmount : skewAmount,
          skewY: isLeft ? -skewAmount : skewAmount,
        }}
        transition={{ duration: 1, ease: "easeOut" }}
        onClick={() => onOpen()}
      />
      <ProjectModal isOpen={isOpen} onOpenChange={onOpenChange} />
      <div className="relative w-full h-full flex items-center justify-center pointer-events-none z-10">
        <h2 className="text-5xl font-black text-[hsl(var(--nextui-primary-100))]">
          {projectTitle}
        </h2>
      </div>
    </div>
  );
};

export default ProjectContainer;
