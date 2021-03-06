import React from "react";
import PropTypes from "prop-types";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  const {
    ingredientAdded, ingredientRemoved, disabledInfo, price, purchaseable, purchasing,
  } = props;
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price:
        <strong>{price.toFixed(2)}</strong>
      </p>
      {
        controls.map((ctrl) => (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => ingredientAdded(ctrl.type)}
            removed={() => ingredientRemoved(ctrl.type)}
            disabled={disabledInfo[ctrl.type]}
          />
        ))
      }

      <button
        disabled={!purchaseable}
        className={classes.OrderButton}
        onClick={purchasing}
      >ORDER NOW
      </button>
    </div>
  );
};

BuildControls.propTypes = {
  ingredientAdded: PropTypes.func.isRequired,
  ingredientRemoved: PropTypes.func.isRequired,
  disabledInfo: PropTypes.shape({}).isRequired,
  price: PropTypes.number.isRequired,
  purchaseable: PropTypes.bool.isRequired,
  purchasing: PropTypes.func.isRequired,
};

export default BuildControls;
