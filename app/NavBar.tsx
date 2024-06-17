import React from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { Box, Container, Flex, Text } from "@radix-ui/themes";

const NavBar = () => {
  return (
    <nav className="sticky top-0 left-0">
      <Flex justify={"between"} align={"center"} height={"32px"} width={"100%"} px={"3"} pt={"3"}>
        <Text align={"right"} size={"1"} style={{color: "hsl(var(--nextui-primary))"}}>archive</Text>
        <ThemeSwitcher />
      </Flex>
    </nav>
  );
};

export default NavBar;
