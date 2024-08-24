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

const ArchiveGrid = ({ archives }: { archives: Archive[] }) => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4 w-full lg:w-[90%] mx-auto mt-12 p-2 lg:p-4 border-large border-[hsl(var(--nextui-primary-100))] rounded-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {archives.map((archive, index) => (
        <ArchiveCard key={index} {...archive} />
      ))}
    </motion.div>
  );
};

export default ArchiveGrid;
