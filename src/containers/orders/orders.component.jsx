import React, { Component } from "react";
import { connect } from "react-redux";

import axois from "axios";
import Order from "../../components/order/order.component";
import withErrorHandler from "../../hoc/with-error-handler/with-error-handler.component";
import * as actions from "../../store/actions/index";
import Spinner from "../../components/UI/spinner/spinner.component";
class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders();
  }

  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.orders.map((order) => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
        />
      ));
    }

    return orders;
  }
}

const mapStateToProps = (state) => ({
  orders: state.order.orders,
  loading: state.order.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchOrders: () => dispatch(actions.fetchOrders()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axois));
