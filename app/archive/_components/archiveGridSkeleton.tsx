import React from "react";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import Skeleton from "@/app/components/Skeleton";

const ArchiveGridSkeleton = () => {
  const cards = [1, 2, 3, 4];

  return (
    <section className="w-full min-h-dvh mb-12">
      <div className="h-[150px] content-center text-6xl text-center text-[hsl(var(--nextui-primary-100))]">
        <h1>The Archives</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4 w-full lg:w-[90%] mx-auto p-1 lg:p-4 border-large border-[hsl(var(--nextui-primary-100))] rounded-md">
        {cards.map((card) => (
          <Card
            key={card}
            className="h-fit py-4 bg-[hsl(var(--nextui-primary-300))] text-[hsl(var(--nextui-primary-500))]"
          >
            <CardHeader className="py-0 px-4 flex flex-col">
              <Skeleton height={50} />
            </CardHeader>
            <CardBody className="py-2 mb-12 h-[500px]">
              <Skeleton height={200} borderRadius={"0.5rem"} />
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ArchiveGridSkeleton;
