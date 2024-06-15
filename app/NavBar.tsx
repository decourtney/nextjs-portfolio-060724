import React from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { Box, Container, Flex, Text } from "@radix-ui/themes";

const NavBar = () => {
  return (
    <nav>
      <Flex position={"sticky"} top={"0"} left={"0"} justify={"between"} align={"center"} height={"32px"} width={"100%"} px={"5"}>
        <Text align={"right"} size={"1"} style={{color: "hsl(var(--nextui-primary))"}}>archive</Text>
        <ThemeSwitcher />
      </Flex>
    </nav>
  );
};

export default NavBar;
