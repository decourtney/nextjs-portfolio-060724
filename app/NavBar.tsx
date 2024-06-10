import React from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { Box, Container, Flex } from "@radix-ui/themes";

const NavBar = () => {
  return (
    <nav className="p-3">
      <Flex justify={"end"}>
        <ThemeSwitcher />
      </Flex>
    </nav>
  );
};

export default NavBar;
