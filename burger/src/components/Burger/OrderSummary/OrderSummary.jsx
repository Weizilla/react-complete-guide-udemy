import React from "react";
import PropTypes from "prop-types";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const {
    ingredients, purchaseCancel, purchaseContinue, totalPrice,
  } = props;

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
      <p><strong> Total price: {totalPrice.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button clicked={purchaseCancel} btnType="Danger">Cancel Order</Button>
      <Button clicked={purchaseContinue} btnType="Success">Purchase Order</Button>
    </Aux>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.shape({}).isRequired,
  purchaseCancel: PropTypes.func.isRequired,
  purchaseContinue: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default OrderSummary;
