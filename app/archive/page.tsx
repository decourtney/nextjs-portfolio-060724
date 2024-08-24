import { Metadata } from "next";
import ArchiveGrid from "./_components/archiveGrid";

const ArchivePage = () => {
  return (
    <section className="flex flex-col w-full min-h-dvh pb-12">
      <div className="content-center font-montserrat font-bold text-6xl text-center text-[hsl(var(--nextui-primary-100))]">
        <h1>The Archives</h1>
      </div>
      <ArchiveGrid />
    </section>
  );
};

export const metadata: Metadata = {
  title: "Donovan's Archives",
  description: "Information and links to previous version of this portfolio",
};

export default ArchivePage;
