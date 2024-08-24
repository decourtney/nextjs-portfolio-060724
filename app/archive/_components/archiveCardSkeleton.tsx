import { Card, CardBody } from "@nextui-org/react";

const ArchiveCardSkeleton = () => {
  const cards = [1, 2, 3, 4];

  return (
    <Card className="h-fit py-4 bg-[hsl(var(--nextui-primary-300))] text-[hsl(var(--nextui-primary-500))] hover:bg-[hsl(var(--nextui-primary-100))] hover:text-background cursor-pointer">
      <CardBody className="w-full h-[400px] py-2 overflow-scroll">
      </CardBody>
    </Card>
  );
};

export default ArchiveCardSkeleton;
