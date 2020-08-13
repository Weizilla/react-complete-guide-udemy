import React from "react";
import PropTypes from "prop-types";
import classes from "./Button.module.css";

const Button = (props) => {
  const { children, clicked, btnType } = props;

  return (
    <button
      type="button"
      className={[classes.Button, classes[btnType]].join(" ")}
      onClick={clicked}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  clicked: PropTypes.func.isRequired,
  btnType: PropTypes.string.isRequired,
};

export default Button;
