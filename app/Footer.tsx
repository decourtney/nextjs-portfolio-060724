import React from "react";

const Footer = () => {
  return (
    <div className=" h-[100px] bg-foreground">
      <p className="text-sm text-center font-medium text-[hsl(var(--nextui-primary-500))]">
        &copy; {new Date().getFullYear()} @ Donovan Courtney
      </p>
    </div>
  );
};

export default Footer;
