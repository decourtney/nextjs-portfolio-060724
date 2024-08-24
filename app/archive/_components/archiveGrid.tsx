"use client";

import axios from "axios";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
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

const ArchiveGrid = () => {
  const [archivesData, setArchiveData] = useState<Archive[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/archive");
        const data = response.data;
        setArchiveData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if(!archivesData) return 

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4 w-full lg:w-[90%] mx-auto mt-12 p-2 lg:p-4 border-large border-[hsl(var(--nextui-primary-100))] rounded-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      {archivesData.map((archive, index) => (
        <ArchiveCard key={index} {...archive} />
      ))}
    </motion.div>
  );
};

export default ArchiveGrid;
