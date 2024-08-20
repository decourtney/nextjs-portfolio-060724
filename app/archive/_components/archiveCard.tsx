import React from "react";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// Define the type for archive data
interface Archive {
  year: string;
  title: string;
  description: string[];
  image: string;
  link: string;
}

const ArchiveCard = (data: Archive) => {
  const handleCardClick = () => {
    if (data.link) {
      window.open(data.link, "_blank");
    }
  };

  return (
    <Card
      key={data.year}
      isPressable
      disableRipple
      onClick={handleCardClick}
      id={data.year}
      className="h-fit py-4 bg-[hsl(var(--nextui-primary-300))] text-[hsl(var(--nextui-primary-500))] hover:bg-[hsl(var(--nextui-primary-100))] hover:text-background cursor-pointer"
    >
      <CardHeader className="py-0 px-4 flex flex-col">
        <h1 className="font-bold text-large">{data.year}</h1>
        <h2>{data.title}</h2>
      </CardHeader>
      <CardBody className="max-h-[500px] 2xl:max-h-[800px] py-2 overflow-scroll">
        <Image
          alt="Card background"
          className="object-cover rounded-lg"
          src={data.image}
        />
        <div className="m-4 space-y-4">
          {data.description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default ArchiveCard;