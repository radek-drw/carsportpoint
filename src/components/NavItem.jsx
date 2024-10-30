import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ label, href, isActive, onClick }) => {
  return (
    <li onClick={onClick}>
      <Link
        to={href}
        className={`py-6 px-5 block uppercase font-navigation ${
          isActive
            ? "text-primaryRed border-b-4 border-primaryRed"
            : "hover:text-primaryRed hover:border-b-4 hover:border-primaryRed"
        }`}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
