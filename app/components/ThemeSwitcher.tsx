"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderIcon = () => {
    if (!mounted) return <BsFillMoonStarsFill />; // Render Sun by default before mounting
    return currentTheme === "dark" ? <BsFillMoonStarsFill />: <FaSun /> ;
  };

  return (
    <Button
      isIconOnly
      variant="light"
      size="sm"
      radius="full"
      className="text-lg text-[hsl(var(--nextui-secondary-100))]"
      onPress={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      {renderIcon()}
    </Button>
  );
};

export default ThemeSwitcher;
