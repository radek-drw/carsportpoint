import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/carsportpoint_logo.png";

const Logo = ({ isClickable = false, className = "", onClick }) => {
  const logoImage = (
    <img src={logo} alt={isClickable ? "Car Sport Point" : ""} />
  );

  return (
    <div className={className}>
      {isClickable ? (
        <Link to="/" onClick={onClick} aria-label="Go to homepage">
          {logoImage}
        </Link>
      ) : (
        <div aria-hidden="true">{logoImage}</div>
      )}
    </div>
  );
};

export default Logo;
