import React from "react";
import "./checkout-summary.styles.css";

import Burger from "../../burger/burger.component";
import Button from "../../UI/button/button.component";

const CheckoutSummary = (props) => {
  return (
    <div className="checkout-summary">
      <h1>We hope it tastes well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="danger" clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="success" clicked={props.checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
