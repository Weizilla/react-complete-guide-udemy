import React from 'react';
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

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
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button btnType="Success" clicked={props.purchaseContinued}>ORDER</Button>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
    </Aux>
  );
}

export default OrderSummary;
