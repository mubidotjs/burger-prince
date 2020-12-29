import React, { Component } from "react";
import { connect } from "react-redux";

import CheckoutSummary from "../../components/order/checkout-summary/checkout-summary.component";
import { Link } from "react-router-dom";

class Checkout extends Component {
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.props.ings}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Link to={this.props.match.path + "/contact-data"} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ings: state.ingredients,
});

export default connect(mapStateToProps)(Checkout);
