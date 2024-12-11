import React from "react";

import Logo from "../components/Logo";

import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { LuDot } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="px-[2vw] pb-20 pt-16">
      <div className="flex">
        <div className="basis-[65vw]">
          <div className="flex items-center text-[#1E1E1E]">
            <FaFacebook size={38} />
            <LuDot size={46} className="mx-2 text-footerCustomGrey" />
            <FaYoutube size={38} />
            <LuDot size={46} className="mx-2 text-footerCustomGrey" />
            <MdEmail size={38} />
          </div>
          <div className="w-[88px] h-[1px] my-9 bg-footerCustomGrey"></div>
          <p className="text-sm w-2/4 text-footerCustomGrey">
            Nulla facilisi. Proin ultrices dui in diam euismod, sed iaculis nunc
            interdum suspendisse vehicula porta. Ut felis erat, faucibus ac
            ipsum in
          </p>
        </div>
        <div className="flex-1">
          <Logo />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
