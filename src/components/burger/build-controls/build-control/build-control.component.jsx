import React from "react";
import "./build-control.style.css";

const BuildControl = (props) => {
  return (
    <div className="build-control">
      <div className="label">{props.label}</div>
      <button
        className="less"
        onClick={props.removed}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className="more" onClick={props.added}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
