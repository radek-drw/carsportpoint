import React, { useState, useRef, useEffect } from "react";
import Logo from "../../common/Logo";
import NavItem from "./NavItem";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isSticky, setIsSticky] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navRef = useRef(null);

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (navRef.current) {
        const navHeight = navRef.current.offsetHeight;

        setIsSticky(currentScroll > navHeight);

        setScrollPosition(Math.min(currentScroll, navHeight));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dynamically calculate translateY based on scroll position
  const translateY = isSticky ? 0 : -scrollPosition;

  return (
    <>
      <nav
        ref={navRef}
        className={`flex h-24 items-center justify-between bg-white transition-all duration-1000 ${
          isSticky
            ? "sticky top-0 z-50 bg-[rgba(255,255,255,0.7)] shadow-md"
            : "relative"
        }`}
        style={{
          transform: `translateY(${translateY}px)`,
        }}
        aria-label="Main navigation"
      >
        <Logo
          isClickable="true"
          className={`ml-5 ${isSticky ? "max-w-[90px]" : "max-w-[225px]"}`}
          onClick={handleLogoClick}
        />
        <ul className="flex h-full">
          {menuItems.map((item, index) => (
            <NavItem
              key={index}
              label={item.label}
              href={item.href}
              isActive={active === item.label}
              onClick={() => setActive(item.label)}
              isSticky={isSticky}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
