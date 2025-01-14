import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ label, href, isActive, onClick }) => {
  const baseClasses =
    "block px-4 py-10 font-navigation uppercase text-navDesktop";
  const activeClasses = "border-b-4 border-customRed text-customRed";
  const hoverClasses =
    "hover:border-b-4 hover:border-customRed hover:text-customRed";

  return (
    <li onClick={onClick} className="mr-4">
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
