import React from "react";
import styles from "./button.styles.css";

const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      className={[styles.button, [props.btnType]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default Button;
