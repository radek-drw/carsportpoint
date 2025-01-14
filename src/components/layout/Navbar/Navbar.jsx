import React, { useState } from "react";

import Logo from "../../common/Logo";
import NavItem from "./NavItem";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const menuItems = [
    { label: "home", href: "/" },
    { label: "about us", href: "/about" },
    { label: "our partners", href: "/partners" },
    { label: "tuning companies catalogue", href: "/catalogue" },
    { label: "contact", href: "/contact" },
  ];

  const handleLogoClick = () => {
    setActive("home");
  };

  return (
    <nav
      className="flex items-center justify-between bg-white"
      aria-label="Main navigation"
    >
      <Logo
        isClickable="true"
        className="ml-5 max-w-[225px]"
        onClick={handleLogoClick}
      />
      <ul className="flex">
        {menuItems.map((item, index) => (
          <NavItem
            key={index}
            label={item.label}
            href={item.href}
            isActive={active === item.label}
            onClick={() => setActive(item.label)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
