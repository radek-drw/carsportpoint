import React from "react";

const NavItem = ({ label, href }) => {
  return (
    <li>
      <a className="py-6 px-5 block uppercase font-navigation" href={href}>
        {label}
      </a>
    </li>
  );
};

export default NavItem;
