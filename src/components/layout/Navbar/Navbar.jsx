import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../common/Logo";
import NavItem from "./NavItem";

const Navbar = () => {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);

  const menuItems = [
    { label: "home", href: "/" },
    { label: "about us", href: "/about" },
    { label: "our partners", href: "/partners" },
    { label: "tuning companies catalogue", href: "/catalogue" },
    { label: "contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const navHeight = navRef.current.offsetHeight;
        const scrollPosition = window.scrollY;

        setIsSticky(scrollPosition > navHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`flex h-24 items-center justify-between ${
        isSticky
          ? "sticky top-0 z-50 h-14 bg-[rgba(255,255,255,0.8)] shadow-md"
          : "relative"
      }`}
      aria-label="Main navigation"
    >
      <Logo
        isClickable="true"
        className={`ml-5 ${isSticky ? "max-w-[90px]" : "max-w-[225px]"}`}
      />
      <ul className="flex h-full">
        {menuItems.map((item, index) => (
          <NavItem
            key={index}
            label={item.label}
            href={item.href}
            isActive={location.pathname === item.href} // Sprawdzanie aktywnej zakładki na podstawie ścieżki
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
