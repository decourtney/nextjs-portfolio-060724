import { Card, CardBody } from "@nextui-org/react";

const ArchiveCardSkeleton = () => {
  return (
    <Card className="min-w-[300px] h-[500px] xl:h-[800px] py-4 bg-[hsl(var(--nextui-primary-300))] text-[hsl(var(--nextui-primary-500))] hover:bg-[hsl(var(--nextui-primary-100))] hover:text-background cursor-pointer">
      <CardBody className="w-full py-2 overflow-scroll"></CardBody>
    </Card>
  );
};

export default ArchiveCardSkeleton;
