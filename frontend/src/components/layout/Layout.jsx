import React from "react";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="relative max-w-full bg-customLight font-main text-customGrey">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
