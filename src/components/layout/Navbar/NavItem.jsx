import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ label, href, isActive, onClick }) => {
  return (
    <li onClick={onClick} className="mr-4">
      <Link
        to={href}
        className={`block px-4 py-10 font-navigation uppercase text-navDesktop ${
          isActive
            ? "border-b-4 border-customRed text-customRed"
            : "hover:border-b-4 hover:border-customRed hover:text-customRed"
        }`}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
