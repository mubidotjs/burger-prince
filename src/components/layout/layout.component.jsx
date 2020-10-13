import React from "react";
import "./layout.styles.css";
import Toolbar from "../navigation/toolbar/toolbar.component";
import SideDrawer from "../navigation/side-drawer/side-drawer.component";

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
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
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

export default Layout;
