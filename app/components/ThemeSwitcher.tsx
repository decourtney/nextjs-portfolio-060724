"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/button";
// import { Button } from "@radix-ui/themes";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

import { SunSVG, MoonSVG } from "./SVGs";
import { Box, Container } from "@radix-ui/themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      isIconOnly
      variant="light"
      size={"lg"}
      radius="full"
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {currentTheme == "dark" ? <BsFillMoonStarsFill /> : <FaSun />}
    </Button>
  );
};

export default ThemeSwitcher;
