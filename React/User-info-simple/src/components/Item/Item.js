import React from "react";
import { addToLocalDb, removeFromDb } from "../../utilities/LocalDb";

const Item = (props) => {
  const setStyle = {
    border: "2px solid red",
    margin: "10px",
    padding: "10px",
  };
  const { name, price, id } = props.item;
  const addToCart = (id) => {
    addToLocalDb(id);
  };
  const removeFromCart = (id) => {
    removeFromDb(id);
  };
  return (
    <div style={setStyle}>
      <h4>Name:{name}</h4>
      <p>Id: {id}</p>
      <p>Price: ${price}</p>
      <button onClick={() => addToCart(id)}>Cart</button>
      <button onClick={() => removeFromCart(id)}>Remove </button>
    </div>
  );
};

export default Item;
