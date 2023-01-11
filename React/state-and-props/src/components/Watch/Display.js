import React from "react";
import Dial from "./Dial";

const Display = (props) => {
  return (
    <div>
      <h6>Display name {props.name}</h6>
      <p>To day steps {props.steps}</p>
      <Dial steps={props.steps}></Dial>
    </div>
  );
};

export default Display;
