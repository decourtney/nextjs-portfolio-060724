"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import ArchiveCardSkeleton from "./archiveCardSkeleton";

interface Archive {
  year: string;
  title: string;
  description: string[];
  image: string;
  link: string;
}

const ArchiveCard = dynamic(
  () => import("@/app/archive/_components/archiveCard"),
  {
    ssr: false,
    loading: () => <ArchiveCardSkeleton />,
  }
);

const CardContainer = ({ archives }: { archives: Archive[] }) => {
  return (
    <motion.div
      className="flex flex-wrap gap-2 w-[90%] mx-auto mt-12 rounded-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {archives.map((archive, index) => (
        <div
          key={index}
          className="flex-grow md:flex-basis-[calc(50%-1rem)] md:max-w-[calc(50%-1rem)] lg:flex-basis-[calc(33.333%-1rem)] lg:max-w-[calc(33.333%-1rem)] h-full"
        >
          <ArchiveCard {...archive} />
        </div>
      ))}
    </motion.div>
  );
};

export default CardContainer;
