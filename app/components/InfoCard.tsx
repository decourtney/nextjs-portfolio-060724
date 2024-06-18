import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { motion } from "framer-motion";

interface InfoCardProps {
  children: React.ReactNode;
}

const InfoCard = React.forwardRef<HTMLDivElement, InfoCardProps>((props, ref) => {
  return (
    <Card
      ref={ref}
      fullWidth
      radius="sm"
    >
      <CardBody>
        {props.children}
      </CardBody>
    </Card>
  );
});

const MotionInfoCard = motion(InfoCard);

export default MotionInfoCard;
