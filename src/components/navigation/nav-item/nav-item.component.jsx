import React from "react";
import "./nav-item.styles.css";

const NavItem = (props) => {
  return (
    <li className="nav-item">
      <a href={props.link} className={props.active ? "active" : null}>
        {props.children}
      </a>
    </li>
  );
};

export default NavItem;
