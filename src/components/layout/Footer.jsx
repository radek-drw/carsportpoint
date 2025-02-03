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
    <footer className="px-mobile-padding flex flex-col pb-20 pt-16 md:flex-row md:px-[2vw]">
      <div className="mb-14 md:mb-0 md:basis-[65vw]">
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
          <LuDot
            size={DOT_SIZE}
            className="mx-2 text-footerCustomGrey"
            aria-hidden="true"
          />
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our YouTube channel"
            className="transition-colors duration-200 hover:text-red-600"
          >
            <FaYoutube size={ICON_SIZE} />
          </a>
          <LuDot
            size={DOT_SIZE}
            className="mx-2 text-footerCustomGrey"
            aria-hidden="true"
          />
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
        <p className="w-full text-sm text-footerCustomGrey md:w-1/2">
          Nulla facilisi. Proin ultrices dui in diam euismod, sed iaculis nunc
          interdum suspendisse vehicula porta. Ut felis erat, faucibus ac ipsum
          in
        </p>
      </div>
      <div className="flex flex-1 flex-col items-center">
        <Logo />
        <p className="mt-8 text-center text-sm text-footerCustomGrey">
          &copy; {new Date().getFullYear()} Car Sport Point. All rights
          reserved.
        </p>
        <p className="mt-2 text-center text-xs text-footerCustomGrey">
          Website developed by Radek Drweski.
          <a
            href="mailto:rdrweski@gmail.com"
            className="text-blue-600 hover:underline"
            aria-label="Send an email to Radek"
          >
            rdrweski@gmail.com
          </a>
          {" | "}
          <a
            href="https://radek-drweski.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
            aria-label="Visit Radek's portfolio website"
          >
            radek-drweski.com
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
