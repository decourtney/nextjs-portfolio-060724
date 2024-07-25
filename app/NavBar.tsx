import { Button } from "@nextui-org/react";
import ThemeSwitcher from "./components/ThemeSwitcher";

const NavBar = () => {
  return (
    <nav className="sticky top-0 lg:max-w-[75%] mx-auto z-50">
      <div className="flex justify-between items-center w-full px-3 py-2">
        <Button
          // isIconOnly
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
