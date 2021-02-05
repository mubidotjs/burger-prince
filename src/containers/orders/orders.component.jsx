import React, { Component } from "react";
import { connect } from "react-redux";

import axois from "axios";
import Order from "../../components/order/order.component";
import withErrorHandler from "../../hoc/with-error-handler/with-error-handler.component";
import * as actions from "../../store/actions/index";
import Spinner from "../../components/UI/spinner/spinner.component";
class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId);
  }

  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.orders.map((order) => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
          name={order.orderData.name}
          country={order.orderData.country}
          deliveryMethod={order.orderData.deliveryMethod}
          email={order.orderData.email}
          address={order.orderData.street}
          zipCode={order.orderData.zipCode}
        />
      ));
    }

    return orders;
  }
}

const mapStateToProps = (state) => ({
  orders: state.order.orders,
  loading: state.order.loading,
  token: state.auth.token,
  userId: state.auth.userId,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchOrders: (token, userId) =>
    dispatch(actions.fetchOrders(token, userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axois));
