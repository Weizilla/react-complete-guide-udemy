import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
      totalPrice: 4,
      purchaseable: false,
      purchasing: false,
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

    this.updatePurchaseable(updatedIngredients);
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

    this.updatePurchaseable(updatedIngredients);
  };

  updatePurchaseable = (ingredients) => {
    const purchaseable = Object.values(ingredients).some((v) => v > 0);
    this.setState({
      purchaseable,
    });
  };

  purchasingHandler = () => {
    this.setState({
      purchasing: true,
    });
  };

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false,
    });
  };

  purchaseContinueHandler = () => {
    alert("Purcahse continue");
  };

  render() {
    const {
      ingredients, totalPrice, purchaseable, purchasing,
    } = this.state;

    const disabledInfo = Object.fromEntries(
      Object.entries(ingredients).map(
        ([k, v]) => [k, v === 0],
      ),
    );

    return (
      <Aux>
        <Modal show={purchasing} modalClicked={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={ingredients}
            purchaseCancel={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler}
            totalPrice={totalPrice}
          />
        </Modal>

        <Burger ingredients={ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          price={totalPrice}
          purchaseable={purchaseable}
          purchasing={this.purchasingHandler}
        />
      </Aux>
    );
  }
}

BurgerBuilder.propTypes = {};

export default BurgerBuilder;
