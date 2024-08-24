import { motion } from "framer-motion";

const ProjectContainerSkeleton = () => {
  return (
    <motion.div
      className="relative h-[300px] w-full sm:w-3/4 sm:mx-5 lg:w-[80%] border-large border-[hsl(var(--nextui-primary-100))] bg-[hsl(var(--nextui-primary-500))] rounded-md"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    ></motion.div>
  );
};

export default ProjectContainerSkeleton;
