import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Skeleton from "./Skeleton";

interface LazySectionProps {
  children: React.ReactNode;
  name: string;
}

const LazySection: React.FC<LazySectionProps> = ({ children, name }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Load only once when the section comes into view
    threshold: 0.1, // Trigger when 10% of the section is visible
  });
  const [loaded, setLoaded] = useState(false);

  React.useEffect(() => {
    if (inView) {
      setLoaded(true);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={"flex w-full "}
      id={name}
    >
      {loaded ? children : null}
    </motion.div>
  );
};

export default LazySection;
