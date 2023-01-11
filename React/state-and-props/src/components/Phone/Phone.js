import React from "react";

const Phone = (props) => {
  return (
    <div>
      <h3> I have a : {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  );
};

export default Phone;
