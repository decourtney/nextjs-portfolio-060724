"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
// import { Button } from "@radix-ui/themes";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

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
      size="sm"
      radius="full"
      color="secondary"
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {currentTheme == "dark" ? <BsFillMoonStarsFill /> : <FaSun />}
    </Button>
  );
};

export default ThemeSwitcher;
