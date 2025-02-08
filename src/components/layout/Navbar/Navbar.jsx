import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../common/Logo";
import NavItem from "./NavItem";

const Navbar = () => {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const menuItems = [
    { label: "home", href: "/" },
    { label: "about us", href: "/about" },
    { label: "our partners", href: "/partners" },
    { label: "tuning companies catalogue", href: "/catalogue" },
    { label: "contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const navHeight = navbarRef.current.offsetHeight;
        const scrollPosition = window.scrollY;
        setIsSticky(scrollPosition > navHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Overlay z półprzezroczystym tłem */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          isMenuOpen ? "opacity-60" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <nav
        ref={navbarRef}
        className={`flex items-center justify-end font-navigation uppercase xl:justify-between ${
          isSticky
            ? "xl:sticky xl:top-0 xl:z-50 xl:h-14 xl:bg-[rgba(255,255,255,0.8)] xl:shadow-md"
            : "relative h-24"
        }`}
        aria-label="Main navigation"
      >
        <div className="absolute left-1/2 -translate-x-1/2 transform xl:static xl:ml-5 xl:translate-x-0">
          <Logo
            isClickable={true}
            className={`${isSticky ? "xl:max-w-[90px]" : "max-w-[225px]"}`}
          />
        </div>

        {/* Ikona burgera (widoczna tylko na mobile) */}
        <button
          className="z-50 p-5 focus:outline-none xl:hidden xl:p-0"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="text-3xl text-customRed">&#9776;</span>
        </button>

        {/* Menu dla desktop */}
        <ul className="hidden h-full xl:flex">
          {menuItems.map((item, index) => (
            <NavItem
              key={index}
              label={item.label}
              href={item.href}
              isActive={location.pathname === item.href}
              isMobile={false}
            />
          ))}
        </ul>

        {/* Menu dla mobile */}
        <div
          ref={mobileMenuRef}
          className={`fixed right-0 top-0 z-50 h-full w-64 transform bg-[#191919] shadow-lg transition-transform duration-300 xl:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="text-burgerItemColor absolute right-5 top-1 text-4xl"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <ul className="flex h-full flex-col justify-items-start pt-32">
            {menuItems.map((item, index) => (
              <NavItem
                key={index}
                label={item.label}
                href={item.href}
                isActive={location.pathname === item.href}
                onClick={() => setIsMenuOpen(false)}
                isMobile={true}
              />
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
