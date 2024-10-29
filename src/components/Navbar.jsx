import React from "react";

import Logo from "./Logo";
import NavItem from "./NavItem";

const Navigation = () => {
  const menuItems = [
    { label: "home", href: "/" },
    { label: "about us", href: "/about" },
    { label: "our partners", href: "/partners" },
    { label: "tuning companies catalogue", href: "/catalogue" },
    { label: "contact", href: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between h-28">
      <div className="ml-5">
        <Logo />
      </div>
      <ul className="flex">
        {menuItems.map((item, index) => (
          <NavItem key={index} label={item.label} href={item.href} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
