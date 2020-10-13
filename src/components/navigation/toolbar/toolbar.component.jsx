import React from "react";
import "./toolbar.styles.css";
import DrawerToggle from "../../navigation/side-drawer/drawer-toggle/drawer-toggle.component";
import Logo from "../../logo/logo.component";
import NavItems from "../nav-items/nav-items.component";

const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <div>
        <DrawerToggle clicked={props.drawerToggleClicked} />
      </div>
      <div>
        <Logo />
      </div>
      <nav className="desktop-only">
        <NavItems />
      </nav>
    </header>
  );
};

export default Toolbar;
