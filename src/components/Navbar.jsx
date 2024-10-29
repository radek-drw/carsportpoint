import React from "react";

import Logo from "./Logo";
import NavItem from "./NavItem";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between h-28">
      <div className="ml-5">
        <Logo />
      </div>
      <ul className="flex">
        <NavItem label="home" href="#" />
        <NavItem label="about us" href="#" />
        <NavItem label="our partners" href="#" />
        <NavItem label="tuning companies catalogue" href="#" />
        <NavItem label="contact" href="#" />
      </ul>
    </nav>
  );
};

export default Navigation;
