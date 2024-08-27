import { Button } from "@nextui-org/react";
import React from "react";
import { TbSunMoon } from "react-icons/tb";

const themeSwitcherSkeleton = () => {
  return (
    <Button
      isIconOnly
      variant="light"
      size="sm"
      radius="full"
      className="text-lg text-[hsl(var(--nextui-secondary-100))]"
    >
      {/* <TbSunMoon /> */}
      {" "}
    </Button>
  );
};

export default themeSwitcherSkeleton;
