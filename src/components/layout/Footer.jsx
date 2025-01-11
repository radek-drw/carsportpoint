import React from "react";

import Logo from "../common/Logo";

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
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-blue-600"
            >
              <FaFacebook size={38} />
            </a>
            <LuDot size={46} className="mx-2 text-footerCustomGrey" />
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-red-600"
            >
              <FaYoutube size={38} />
            </a>
            <LuDot size={46} className="mx-2 text-footerCustomGrey" />
            <a
              href="mailto:example@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-green-600"
            >
              <MdEmail size={38} />
            </a>
          </div>

          <div className="my-9 h-[1px] w-[88px] bg-footerCustomGrey"></div>
          <p className="w-2/4 text-sm text-footerCustomGrey">
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
