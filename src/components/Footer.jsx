import React from "react";

import Logo from "../components/Logo";

import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { LuDot } from "react-icons/lu";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <div>
            <FaFacebook size={35} />
            <LuDot />
            <FaYoutube size={35} />
            <LuDot />
            <MdEmail size={35} />
          </div>
        </div>
        <div>
          <Logo />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
