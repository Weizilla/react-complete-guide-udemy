import React from "react";
import classes from "./Logo.module.css";
import burgerIcon from "../../assets/images/burger-logo.png";

const Logo = () => (
  <div className={classes.Logo}>
    <img src={burgerIcon} alt="My Burger" />
  </div>
);

export default Logo;
