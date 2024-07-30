import { Button } from "@nextui-org/react";
import ThemeSwitcher from "./components/ThemeSwitcher";

const NavBar = () => {
  return (
    <nav className="sticky top-0 w-full z-50 bg-gradient-to-t from-transparent via-background via-40% to-background">
      <div className="flex justify-between items-center lg:w-3/4 mx-auto px-3 py-2">
        <Button
          variant="light"
          size="sm"
          radius="full"
          color="secondary"
          className="text-lg font-bold"
        >
          <p className="text-xs">archive</p>
        </Button>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default NavBar;
