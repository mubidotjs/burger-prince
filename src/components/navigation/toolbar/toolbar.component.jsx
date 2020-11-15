import React from "react";
import "./toolbar.styles.css";
import DrawerToggle from "../../navigation/side-drawer/drawer-toggle/drawer-toggle.component";
import Logo from "../../logo/logo.component";
import NavItems from "../nav-items/nav-items.component";
import { Link } from "react-router-dom";

const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <div className="mobile-only">
        <DrawerToggle clicked={props.drawerToggleClicked} />
      </div>
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <nav className="desktop-only">
        <NavItems />
      </nav>
    </header>
  );
};

export default Toolbar;
