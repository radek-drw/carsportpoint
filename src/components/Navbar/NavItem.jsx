import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ label, href, isActive, onClick }) => {
  return (
    <li onClick={onClick} className="mr-4">
      <Link
        to={href}
        className={`py-6 px-4 block uppercase font-navigation text-navDesktop ${
          isActive
            ? "text-customRed border-b-2 border-customRed"
            : "hover:text-customRed hover:border-b-2 hover:border-customRed"
        }`}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
