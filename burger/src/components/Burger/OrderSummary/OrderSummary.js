import React from 'react';
import Aux from "../../../hoc/Aux";

function OrderSummary(props) {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey =>
      <li key={igKey}>
        <span
          style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
      </li>
    );
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A burger with:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout?</p>
    </Aux>
  );
}

export default OrderSummary;
