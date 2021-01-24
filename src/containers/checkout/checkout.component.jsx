import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import CheckoutSummary from "../../components/order/checkout-summary/checkout-summary.component";
import ContactData from "./contact-data/contact-data.component";
class Checkout extends Component {
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  render() {
    let summary = <Redirect to="/" />;
    if (this.props.ings) {
      summary = (
        <div>
          <CheckoutSummary
            ingredients={this.props.ings}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
          />
          <Route
            path={this.props.match.path + "/contact-data"}
            component={ContactData}
          />
        </div>
      );
    }
    return summary;
  }
}

const mapStateToProps = (state) => ({
  ings: state.burgerBuilder.ingredients,
});

export default connect(mapStateToProps)(Checkout);
