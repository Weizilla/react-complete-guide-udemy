import React from "react";
import PropTypes from "prop-types";
import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  const { link, active, children } = props;
  return (
    <li className={classes.NavigationItem}>
      <a href={link} className={active ? classes.active : null}>{children}</a>
    </li>
  );
};

NavigationItem.defaultProps = {
  active: false,
};

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default NavigationItem;
