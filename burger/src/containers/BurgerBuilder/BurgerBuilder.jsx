import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 1,
        bacon: 2,
        cheese: 2,
        meat: 1,
      },
      totalPrice: 4,
    };
  }

  addIngredientHandler = (type) => {
    const { ingredients } = this.state;
    const oldCount = ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const { totalPrice } = this.state;
    const newPrice = totalPrice + priceAddition;

    this.setState(
      {
        ingredients: updatedIngredients,
        totalPrice: newPrice,
      },
    );
  };

  removeIngredientHandler = (type) => {
    const { ingredients } = this.state;
    const oldCount = ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[type] = updatedCount;

    const priceDeduction = INGREDIENT_PRICES[type];
    const { totalPrice } = this.state;
    const newPrice = totalPrice - priceDeduction;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
  };

  render() {
    const { ingredients, totalPrice } = this.state;
    const disabledInfo = Object.fromEntries(
      Object.entries(ingredients).map(
        ([k, v]) => [k, v === 0],
      ),
    );

    return (
      <Aux>
        <Burger ingredients={ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          price={totalPrice}
        />
      </Aux>
    );
  }
}

BurgerBuilder.propTypes = {};

export default BurgerBuilder;
