import React from "react";
import "./nav-items.styles.css";
import NavItem from "../nav-item/nav-item.component";

const NavItems = (props) => {
  return (
    <ul className="nav-items">
      <NavItem link="/ active">Burger Builder</NavItem>
      <NavItem link="/">Checkout</NavItem>
    </ul>
  );
};

export default NavItems;
