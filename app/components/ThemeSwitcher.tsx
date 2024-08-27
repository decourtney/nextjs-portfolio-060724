"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // Determine the current theme
  const currentTheme = theme;

  // Ensure the component is mounted before accessing the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    // Toggle between light and dark themes
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null; // Avoid rendering anything before mounting

  return (
    <Button
      isIconOnly
      variant="light"
      size="sm"
      radius="full"
      className="text-lg text-[hsl(var(--nextui-secondary-100))]"
      onPress={handleThemeToggle}
    >
      {currentTheme === "dark" ? <BsMoonStarsFill /> : <FaSun />}
    </Button>
  );
};

export default ThemeSwitcher;
