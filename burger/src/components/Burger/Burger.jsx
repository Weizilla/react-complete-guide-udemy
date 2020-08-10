import React from "react";
import PropTypes from "prop-types";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css";

const Burger = (props) => {
  const { ingredients } = props;
  const transformedIngredients = Object.keys(ingredients)
    .map((igKey) => [...Array(ingredients[igKey])]
      .map((_, i) => <BurgerIngredient key={igKey + i} type={igKey} />))
    .reduce((arr, el) => arr.concat(el), []);

  const displayIngredients = transformedIngredients.length !== 0
    ? transformedIngredients
    : <div>Please start adding ingredients</div>;

  return (

    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {displayIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.shape({}).isRequired,
};

export default Burger;
