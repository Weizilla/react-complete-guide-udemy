import React from "react";
import PropTypes from "prop-types";
import Aux from "../../../hoc/Aux";

const OrderSummary = (props) => {
  const { ingredients } = props;
  const ingredientList = Object.entries(ingredients)
    .map(([k, v]) => (
      <li key={k}>
        <span style={{ textTransform: "capitalize" }}>{k}</span>: {v}
      </li>
    ));

  return (
    <Aux>
      <h1>Your Order</h1>
      <ul>
        {ingredientList}
      </ul>
    </Aux>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.shape({}).isRequired,
};

export default OrderSummary;
