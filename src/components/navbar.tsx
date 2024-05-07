import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme-toggle";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  return (
    <header className="relative">
      <div className="h-20 flex-1 flex items-center justify-between">
        <div className="hidden space-x-3 md:block">
          <Button variant={"secondary"}>Home</Button>
          <Button variant={"secondary"}>About</Button>
          <Button variant={"secondary"}>Contact</Button>
          <Button variant={"secondary"}>Blog</Button>
        </div>
        <Button className="md:hidden">
          <HamburgerMenuIcon />
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
