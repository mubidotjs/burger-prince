import React from "react";
import "./side-drawer.styles.css";
import Logo from "../../logo/logo.component";
import NavItems from "../nav-items/nav-items.component";
import Backdrop from "../../UI/backdrop/backdrop.component";

const SideDrawer = (props) => {
  let attachedClasses = ["sidedrawer", "close"];
  if (props.open) {
    attachedClasses = ["sidedrawer", "open"];
  }
  return (
    <>
      <div className="desktop">
        <Backdrop show={props.open} clicked={props.closed} />
      </div>
      <div className={attachedClasses.join(" ")}>
        <div className={"logo"}>
          <Logo />
        </div>
        <nav>
          <NavItems />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
