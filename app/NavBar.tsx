"use client";

import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import ThemeSwitcher from "./components/ThemeSwitcher";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Home", "About", "Projects", "Tools", "Contact"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBlurred={false}>
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />

        <NavbarBrand>
          <p className="font-bold text-[hsl(var(--nextui-primary-100))]">=D</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4 font-bold" justify="center">
        <NavbarItem>
          <Link color="secondary" href="#home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="secondary" href="#about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="secondary" href="#projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="secondary" href="#tools">
            Tools
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="secondary" href="#contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="secondary"
              className="w-full"
              href={`#${item.toLowerCase()}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
