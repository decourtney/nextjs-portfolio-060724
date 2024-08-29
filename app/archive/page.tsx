import { Metadata } from "next";
import CardContainer from "./_components/archiveCardContainer";

interface Archive {
  year: string;
  title: string;
  description: string[];
  image: string;
  link: string;
}

const ArchivePage = async () => {
  const response = await fetch("http://localhost:3000/api/archive",{ cache: 'no-store' });
  const archives: Archive[] = await response.json();

  return (
    <section className="flex flex-col w-full min-h-dvh pb-12">
      <div className="content-center font-montserrat font-bold text-6xl text-center text-[hsl(var(--nextui-primary-100))]">
        <h1>The Archives</h1>
      </div>
      <CardContainer archives={archives} />
    </section>
  );
};

export const metadata: Metadata = {
  title: "💾 Portfolio Graveyard 💾",
  description: "Information and links to previous version of this portfolio",
};

export default ArchivePage;
