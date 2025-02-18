import React, { useRef, useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";

import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

import Logo from "../../common/Logo";
import NavItem from "./NavItem";

const menuItems = [
  { label: "home", href: "/" },
  { label: "about us", href: "/about" },
  { label: "our partners", href: "/partners" },
  { label: "tuning companies catalogue", href: "/catalogue" },
  { label: "contact", href: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (navbarRef.current) {
      const navHeight = navbarRef.current.offsetHeight;
      setIsSticky(window.scrollY > navHeight);
    }
  }, []);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const handleClickOutside = useCallback((event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      closeMenu();
    }
  }, []);

  // Toggle sticky navbar
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen, handleClickOutside]);

  const renderMenuItems = (isMobile = false) =>
    menuItems.map((item) => (
      <NavItem
        key={item.href}
        label={item.label}
        href={item.href}
        isActive={location.pathname === item.href}
        isMobile={isMobile}
        onClick={isMobile ? closeMenu : undefined}
      />
    ));

  return (
    <>
      {/* Mobile menu overlay | Darkens the background when menu is open */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          isMenuOpen
            ? "pointer-events-auto opacity-60"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      <nav
        ref={navbarRef}
        className={`flex items-center justify-end font-navigation uppercase xl:justify-between ${
          isSticky
            ? "xl:sticky xl:top-0 xl:z-50 xl:h-14 xl:bg-[rgba(255,255,255,0.8)] xl:shadow-md"
            : "relative h-24"
        }`}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Logo
          isClickable
          className={`${isSticky ? "max-w-[90px]" : "max-w-[225px]"} absolute left-1/2 -translate-x-1/2 transform xl:static xl:ml-5 xl:translate-x-0`}
        />
        {/* Open mobile menu button */}
        <button
          className="z-50 p-5 text-customRed focus:outline-none xl:hidden xl:p-0"
          onClick={openMenu}
          aria-label="Open menu"
        >
          <FiMenu size={30} />
        </button>

        {/* Desktop menu */}
        <ul className="hidden h-full xl:flex">{renderMenuItems()}</ul>
        {/* Mobile menu */}
        <div
          ref={mobileMenuRef}
          className={`fixed right-0 top-0 z-50 h-full w-64 transform bg-[#191919] shadow-lg transition-transform duration-300 xl:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close mobile menu button */}
          <button
            className="absolute right-5 top-3 text-4xl text-[#A6A6A6] hover:text-white"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <IoCloseOutline size={30} />
          </button>
          <ul className="flex h-full flex-col pt-20">
            {renderMenuItems(true)}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
