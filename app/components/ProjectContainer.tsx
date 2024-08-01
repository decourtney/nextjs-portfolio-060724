import { card, useDisclosure } from "@nextui-org/react";
import { animate, motion, useAnimate, useInView } from "framer-motion";
import ProjectModal from "./ProjectModal";

const ProjectContainer = ({
  projectTitle,
  isLeft,
}: {
  projectTitle: string;
  isLeft: boolean;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [imgScope, animateImg] = useAnimate();
  const [cardScope, animateCard] = useAnimate();
  const skewAmount = 2;

  const handleHoverStart = () => {
    animateCard(cardScope.current, {
      skewX: isLeft ? -skewAmount : skewAmount,
      skewY: isLeft ? -skewAmount : skewAmount,
      boxShadow: isLeft
        ? "8px 8px 14px 0px hsl(var(--nextui-primary-100))"
        : "-8px 8px 14px 0px hsl(var(--nextui-primary-100))",
    });
    animateImg(imgScope.current, { x: isLeft ? 20 : -20, y: 30 });
  };

  const handleHoverEnd = () => {
    animateCard(
      cardScope.current,
      {
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
      { x: isLeft ? 0 : 0, y: isLeft ? 0 : 0 },
      { type: "tween" }
    );
  };

  return (
    <div className="h-[300px] rounded-md ">
      <div className="relative w-full h-full">
        <motion.button
          ref={cardScope}
          className="absolute top-0 left-0 w-full h-full bg-background rounded-md z-10 "
          style={{
            transformOrigin: isLeft ? "0% 0%" : "100% 0%",
          }}
          initial={{
            boxShadow: isLeft
              ? "2px 2px 5px 0px hsl(var(--nextui-primary-100))"
              : "-2px 2px 5px 0px hsl(var(--nextui-primary-100))",
          }}
          // whileHover={{
          //   skewX: isLeft ? -skewAmount : skewAmount,
          //   skewY: isLeft ? -skewAmount : skewAmount,
          //   transition: { type: "tween" },
          //   boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.5)",
          // }}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          onClick={() => onOpen()}
        >
          <h2 className="text-5xl font-black text-[hsl(var(--nextui-primary-100))]">
            {projectTitle}
          </h2>
        </motion.button>

        <motion.div
          ref={imgScope}
          className="absolute top-0 left-0 w-full h-full rounded-md shadow-md shadow-[hsl(var(--nextui-primary-500))]"
        >
          <img
            src="/images/lake.jpg"
            className="w-full h-full object-fit rounded-md"
          />
        </motion.div>
      </div>

      <ProjectModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
};

export default ProjectContainer;
