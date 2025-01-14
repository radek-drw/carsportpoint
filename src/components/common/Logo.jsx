import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/carsportpoint_logo.png";

const Logo = ({ isClickable = false, className = "" }) => {
  const logoImage = <img src={logo} alt="Car Sport Point" />;

  return (
    <div className={className}>
      {isClickable ? <Link to="/">{logoImage}</Link> : logoImage}
    </div>
  );
};

export default Logo;
