import React from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { Container, Flex } from "@radix-ui/themes";

const NavBar = () => {
  return (
    <nav className="p-3">
      <Container>
        <Flex justify={"end"}>
          <ThemeSwitcher />
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
