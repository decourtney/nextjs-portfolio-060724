"use client";

import { useRef, useState } from "react";
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
import { motion } from "framer-motion";
import ThemeSwitcher from "./components/themeSwitcher";
import { useInView } from "framer-motion";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Home", "About", "Projects", "Contact"];

  const handleClose = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />

        <NavbarBrand>
          <p className="font-bold text-[hsl(var(--nextui-primary-100))]">=D</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden md:flex gap-4 font-montserrat font-bold"
        justify="center"
      >
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link href={`/#${item.toLowerCase()}`} size="sm">
              <p className=" text-[hsl(var(--nextui-primary-100))]">{item}</p>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/archive">
            <p className="text-[10px] text-[hsl(var(--nextui-primary-100))]">
              archives
            </p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      {/* TODO needs better styling */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              href={`/#${item.toLowerCase()}`}
              onPress={() => handleClose()}
            >
              <p className="text-5xl text-[hsl(var(--nextui-primary-100))]">
                {item}
              </p>
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarItem>
          <Link href="/archive" onPress={() => handleClose()}>
            <motion.p className="text-5xl text-[hsl(var(--nextui-primary-100))]">
              Archives
            </motion.p>
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
