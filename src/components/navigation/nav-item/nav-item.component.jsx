import React from "react";
import { NavLink } from "react-router-dom";
import "./nav-item.styles.css";

const NavItem = (props) => {
  return (
    <li className="nav-item">
      <NavLink to={props.link} exact={props.exact} activeClassName="active">
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavItem;
