import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="text-customGrey relative bg-customLight max-w-full">
      {children}
    </div>
  );
};

export default Layout;
