import React from "react";

import Logo from "../common/Logo";

import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { LuDot } from "react-icons/lu";

const ICON_SIZE = 38;
const DOT_SIZE = 46;

const Footer = () => {
  return (
    <footer className="flex px-[2vw] pb-20 pt-16">
      <div className="basis-[65vw]">
        <nav
          className="flex items-center text-[#1E1E1E]"
          aria-label="Social media links"
        >
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
            className="transition-colors duration-200 hover:text-blue-600"
          >
            <FaFacebook size={ICON_SIZE} />
          </a>
          <LuDot size={DOT_SIZE} className="mx-2 text-footerCustomGrey" />
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our YouTube channel"
            className="transition-colors duration-200 hover:text-red-600"
          >
            <FaYoutube size={ICON_SIZE} />
          </a>
          <LuDot size={DOT_SIZE} className="mx-2 text-footerCustomGrey" />
          <a
            href="mailto:example@example.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send us an email"
            className="transition-colors duration-200 hover:text-green-600"
          >
            <MdEmail size={ICON_SIZE} />
          </a>
        </nav>
        <div className="my-9 h-[1px] w-[88px] bg-footerCustomGrey"></div>
        <p className="w-2/4 text-sm text-footerCustomGrey">
          Nulla facilisi. Proin ultrices dui in diam euismod, sed iaculis nunc
          interdum suspendisse vehicula porta. Ut felis erat, faucibus ac ipsum
          in
        </p>
      </div>

      <Logo className="flex-1" />
    </footer>
  );
};
export default Footer;
