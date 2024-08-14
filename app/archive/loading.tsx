import React from "react";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import Skeleton from "@/app/components/Skeleton";

const LoadingArchivePage = () => {
  const cards = [1, 2, 3, 4];

  return (
    <section className="w-full min-h-dvh mb-12">
      <div className="h-[150px] content-center text-6xl text-center text-[hsl(var(--nextui-primary-100))]">
        <h1>The Archives</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-4 w-full lg:w-[90%] mx-auto p-1 lg:p-4 border-large border-[hsl(var(--nextui-primary-100))] rounded-md">
        {cards.map((card) => (
          <Card
            key={card}
            isPressable
            disableRipple
            onClick={() => console.log("clicked")}
            id={card.toString()}
            className="h-fit py-4 bg-[hsl(var(--nextui-primary-300))] text-[hsl(var(--nextui-primary-500))] hover:bg-[hsl(var(--nextui-primary-100))] hover:text-background cursor-pointer"
          >
            <CardHeader className="py-0 px-4 flex flex-col">
              <Skeleton />
              <Skeleton />
            </CardHeader>
            <CardBody className="overflow-visible py-2 h-fit">
              <Skeleton />
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LoadingArchivePage;
