const Footer = () => {
  return (
    <footer className="h-[50px] content-center bg-foreground font-montserrat font-semibold">
      <p className="text-sm text-center text-[hsl(var(--nextui-primary-500))]">
        &copy; {new Date().getFullYear()} @ Donovan Courtney
      </p>
    </footer>
  );
};

export default Footer;
