import React from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { Box, Container, Flex, Text } from "@radix-ui/themes";

const NavBar = () => {
  return (
    <nav className="sticky top-0 left-0 w-full h-8 px-5 bg-slate-600">
      <Flex justify={"between"} align={"center"}>
        <Text align={"right"} size={"1"} style={{color: "hsl(var(--nextui-primary))"}}>archive</Text>
        <ThemeSwitcher />
      </Flex>
    </nav>
  );
};

export default NavBar;
