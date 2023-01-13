import React from "react";
import { addToStorages, removeFromStorage } from "../../utilities/localStorage";

const Person = (props) => {
  const { user, addToStores } = props;
  const { name, email, username, id } = user;

  const setStyle = {
    border: "3px solid lightblue",
    margin: "10px",
    padding: "10px",
    borderRadius: "8px",
  };

  const removeFromCart = (id) => {
    removeFromStorage(id);
  };

  return (
    <div style={setStyle}>
      <h4>Name: {name}</h4>
      <h4>User Name: {username}</h4>
      <p>Email: {email}</p>
      <p>Id: {id}</p>
      <button onClick={() => addToStores(id)}>Add</button>
      <button onClick={() => removeFromCart(id)}>Remove</button>
    </div>
  );
};

export default Person;
