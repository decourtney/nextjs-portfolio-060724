import React from "react";

const Footer = () => {
  return (
      <footer className="h-[100px] bg-foreground">
        <p className="text-sm text-center font-medium text-[hsl(var(--nextui-primary-500))]">
          &copy; {new Date().getFullYear()} @ Donovan Courtney
        </p>
    </footer>
  );
};

export default Footer;
