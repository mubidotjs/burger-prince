import React from "react";
import Button from "../../UI/button/button.component";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <div>
      <h3>You Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Payment: ${props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <div style={{ textAlign: "center" }}>
        <Button btnType="danger" clicked={props.purchaseCanceled}>
          CANCEL
        </Button>
        <Button btnType="success" clicked={props.purchaseContinued}>
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default OrderSummary;
