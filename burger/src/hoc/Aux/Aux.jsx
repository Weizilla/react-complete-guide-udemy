import React from "react";
import PropTypes from "prop-types";

const Aux = (props) => {
  const { children } = props;
  return (
    <div>
      {children}
    </div>
  );
};

Aux.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Aux;
