import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ label, href, isActive, onClick }) => {
  return (
    <li onClick={onClick} className="mr-4">
      <Link
        to={href}
        className={`py-6 px-4 block uppercase font-navigation ${
          isActive
            ? "text-primaryRed border-b-2 border-primaryRed"
            : "hover:text-primaryRed hover:border-b-2 hover:border-primaryRed"
        }`}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
