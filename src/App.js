import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import './App.css';

import Layout from './containers/layout/layout.component'
import BurgerBuilder from './containers/buger-builder/burger-builder.component';
import Checkout from './containers/checkout/checkout.component'
import Orders from './containers/orders/orders.component'
import Auth from './containers/auth/Auth.component'
import Logout from './containers/auth/logout/logout.component';
import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
 
    return (
      <div>
        <Layout>          
            <Route path="/auth" component={Auth} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/logout" component={Logout} />
            <Route exact path="/" component={BurgerBuilder} />
            <Redirect to="/" />
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onTryAutoSignup: () => dispatch(actions.authCheckState()),
})

export default withRouter(connect(null, mapDispatchToProps)(App));
