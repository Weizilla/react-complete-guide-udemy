import React from "react";
import PropTypes from "prop-types";
import classes from "./DrawerToggle.module.css";

const DrawerToggle = (props) => {
  const { clicked } = props;

  return (
    <div
      className={classes.DrawerToggle}
      onClick={clicked}
    >
      <div />
      <div />
      <div />
    </div>
  );
};

DrawerToggle.propTypes = {
  clicked: PropTypes.func.isRequired,
};

export default DrawerToggle;
