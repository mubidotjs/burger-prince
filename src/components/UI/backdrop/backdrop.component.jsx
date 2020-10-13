import React from "react";
import "./backdrop.styles.css";

const Backdrop = (props) => {
  return props.show ? (
    <div className="backdrop" onClick={props.clicked}></div>
  ) : null;
};

export default Backdrop;
