import React from "react";
import { connect } from "react-redux";
import "./layout.styles.css";

import Toolbar from "../../components/navigation/toolbar/toolbar.component";
import SideDrawer from "../../components/navigation/side-drawer/side-drawer.component";

class Layout extends React.Component {
  state = {
    showSideDrawer: true,
  };

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => ({
      showSideDrawer: !prevState.showSideDrawer,
    }));
  };

  render() {
    return (
      <>
        <Toolbar
          isAuth={this.props.isAuthenticated}
          drawerToggleClicked={this.sideDrawerToggleHandler}
        />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
          isAuth={this.props.isAuthenticated}
          backdrop={() =>
            this.setState({
              showBackDrop: false,
            })
          }
        />
        <div className="content">{this.props.children}</div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.token !== null,
});

export default connect(mapStateToProps)(Layout);
