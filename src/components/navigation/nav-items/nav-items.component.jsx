import React from "react";
import "./nav-items.styles.css";
import NavItem from "../nav-item/nav-item.component";

const NavItems = (props) => {
  return (
    <ul className="nav-items">
      <div className="items">
        <NavItem link="/" exact>
          Burger Builder
        </NavItem>
      </div>
      <div className="items">
        {props.isAuthenticated ? (
          <NavItem link="/orders">Orders</NavItem>
        ) : null}
      </div>
      <div>
        {!props.isAuthenticated ? (
          <NavItem link="/auth">Authentication</NavItem>
        ) : (
          <NavItem link="/logout">Logout</NavItem>
        )}
      </div>
    </ul>
  );
};

export default NavItems;
