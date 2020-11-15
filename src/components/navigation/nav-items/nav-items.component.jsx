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
        <NavItem link="/orders">Orders</NavItem>
      </div>
    </ul>
  );
};

export default NavItems;
