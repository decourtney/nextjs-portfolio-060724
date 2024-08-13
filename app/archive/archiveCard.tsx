import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import React from "react";
import { motion } from "framer-motion";
import { set } from "snapsvg-cjs";

// Define the type for archive data
interface Archive {
  year: string;
  description: string;
  image: string;
  link: string;
}

const ArchiveCard = (data: Archive) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <Card
      key={data.year}
      isPressable
      disableRipple
      onClick={() => console.log("clicked")}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className="py-4 bg-foreground text-[hsl(var(--nextui-primary-500))] hover:scale-105 cursor-pointer"
    >
      <CardHeader className="py-0 px-4 flex justify-center">
        <h4 className="font-bold text-large">{data.year}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-lg"
          src={data.image}
          // width={270}
        />
        <p className="">
          {data.description}
        </p>
      </CardBody>
    </Card>
  );
};

export default ArchiveCard;
