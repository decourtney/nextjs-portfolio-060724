import React from "react";
import dynamic from "next/dynamic";
import ArchiveCardSkeleton from "./loading";

// Define the type for archive data

const ArchiveGrid = dynamic(
  () => import("@/app/archive/_components/archiveGrid"),
  {
    ssr: false,
    loading: () => <ArchiveCardSkeleton />,
  }
);

const ArchivePage = () => {
  return <ArchiveGrid />;
};

export default ArchivePage;
