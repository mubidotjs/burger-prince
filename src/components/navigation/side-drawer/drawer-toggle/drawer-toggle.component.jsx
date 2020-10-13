import React from "react";
import "./drawer-toggle.styles.css";

const DrawerToggle = (props) => {
  return (
    <div onClick={props.clicked} className="drawer-toggle">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggle;
