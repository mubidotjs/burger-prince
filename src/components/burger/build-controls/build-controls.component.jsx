import React from "react";
import "./build-controls.styles.css";
import BuildControl from "./build-control/build-control.component";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className="build-controls">
      <p>
        Current Price: <strong>${props.price.toFixed(2)}</strong>
      </p>
      {controls.map((control) => {
        return (
          <BuildControl
            key={control.label}
            label={control.label}
            added={() => props.ingredientAdded(control.type)}
            removed={() => props.ingredientRemoved(control.type)}
            disabled={props.disabled[control.type]}
          />
        );
      })}
      <button
        className="order-button"
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        {props.isAuth ? "ORDER NOW" : "SIGN UP TO ORDER"}
      </button>
    </div>
  );
};

export default BuildControls;
