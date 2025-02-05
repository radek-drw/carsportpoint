import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ label, href, isActive }) => {
  const baseClasses = `flex items-center justify-center h-full px-4 font-navigation uppercase text-navDesktop transition-all duration-300`;
  const activeClasses =
    "shadow-[inset_0_-4px_0_0] shadow-customRed text-customRed";
  const hoverClasses =
    "hover:shadow-[inset_0_-4px_0_0] hover:shadow-customRed hover:text-customRed";

  return (
    <li className="h-full">
      <Link
        to={href}
        className={`${baseClasses} ${isActive ? activeClasses : hoverClasses}`}
        aria-current={isActive ? "page" : undefined}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
