import React, { Component } from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import './App.css';
import AsyncComponent from './hoc/async-component//async-component';

import Layout from './containers/layout/layout.component'
import BurgerBuilder from './containers/buger-builder/burger-builder.component';
import Logout from './containers/auth/logout/logout.component';
import * as actions from './store/actions/index';

const AsyncCheckout = AsyncComponent(() => {
  return import('./containers/checkout/checkout.component')
})

const AsyncOrders = AsyncComponent(() => {
  return import('./containers/orders/orders.component')
})

const AsyncContactData = AsyncComponent(() => {
  return import('./containers/checkout/contact-data/contact-data.component')
})

const AsyncAuth = AsyncComponent(() => {
  return import('./containers/auth/Auth.component')
})
class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={AsyncAuth} />
        <Route exact path="/" component={BurgerBuilder} /> 
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
         <Switch>
            <Route path="/checkout" component={AsyncCheckout} />
            <Route path="/orders" component={AsyncOrders} />
            <Route path="/auth" component={AsyncAuth} />
            <Route path="/logout" component={Logout} />
            <Route path="/checkout/contact-data" component={AsyncContactData} />
            <Route exact path="/" component={BurgerBuilder} />
            <Redirect to="/" />
         </Switch>
      )
    }
    return (
      <div>
        <Layout>          
            {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.token !== null,
})

const mapDispatchToProps = dispatch => ({
  onTryAutoSignup: () => dispatch(actions.authCheckState()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
