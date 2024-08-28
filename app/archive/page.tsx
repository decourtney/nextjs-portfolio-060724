import { GetStaticProps, Metadata } from "next";
import CardContainer from "./_components/archiveCardContainer";
import axios from "axios";

interface Archive {
  year: string;
  title: string;
  description: string[];
  image: string;
  link: string;
}

interface ArchivePageProps {
  archives: Archive[];
}

export const getStaticProps: GetStaticProps<ArchivePageProps> = async () => {
  const response = await axios.get("http://localhost:3000/api/archive");
  const archives: Archive[] = await response.data;

  console.log("Projects from fetch:", archives);
  return {
    props: {
      archives,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
};

const ArchivePage = async () => {
  const response = await axios.get("http://localhost:3000/api/archive");
  const archives: Archive[] = await response.data;

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
