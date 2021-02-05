import React from "react";
import "./order.styles.css";

const Order = (props) => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px 0px 0px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });
  return (
    <div className="order">
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Customer Name:</strong>
            </td>
            <td>
              <b>{props.name}</b>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Ingredients:</strong>
            </td>
            <td>{ingredientOutput}</td>
          </tr>
          <tr>
            <td>
              <strong>Address:</strong>
            </td>
            <td>{props.address}</td>
          </tr>
          <tr>
            <td>
              <strong>Email:</strong>
            </td>
            <td>{props.email}</td>
          </tr>
          <tr>
            <td>
              <strong>Zip Code:</strong>
            </td>
            <td>{props.zipCode}</td>
          </tr>
          <tr>
            <td>
              <strong>Delivery Method:</strong>
            </td>
            <td>{props.deliveryMethod}</td>
          </tr>
          <tr>
            <td>
              <strong>Price: </strong>
            </td>
            <td>
              <b>${Number.parseFloat(props.price).toFixed(2)}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Order;
