"use client";

import {
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
import { useState } from "react";
import ThemeSwitcher from "./components/themeSwitcher";
import { BrandIcon } from "./utilities/svgs";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Home", "About", "Projects", "Contact"];

  const clearStorageAndReload = () => {
    sessionStorage.removeItem("hasVisited"); // Clear the session storage item
    window.location.reload(); // Reload the page to display the landing page
  };

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
          <Link href="/" onClick={clearStorageAndReload}>
            <BrandIcon />
          </Link>
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
