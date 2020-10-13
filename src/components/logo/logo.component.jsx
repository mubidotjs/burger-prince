import React from "react";
import "./logo.styles.css";
import BurgerLogo from "../../assets/images/burger-logo.png";

const Logo = (props) => {
  return (
    <div className="logo">
      <img src={BurgerLogo} alt="logo" />
    </div>
  );
};

export default Logo;
