"use client";

import React, { useEffect, useState } from "react";
import ArchiveCard from "./archiveCard";

// Define the type for archive data
interface Archive {
  year: string;
  description: string;
  image: string;
  link: string;
}

const ArchivePage = () => {
  const [archivesData, setArchiveData] = useState<Archive[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/archives.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data);
        setArchiveData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="w-full min-h-dvh">
      <div className="h-[150px] content-center text-6xl text-center text-[hsl(var(--nextui-primary-100))]">
        <h1>The Archives</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 lg:gap-4 w-full lg:w-[90%] mx-auto p-1 lg:p-4 border-large border-[hsl(var(--nextui-primary-100))] rounded-md">
        {archivesData.map((archive, index) => (
          <ArchiveCard key={index} {...archive} />
        ))}
      </div>
    </section>
  );
};

export default ArchivePage;
