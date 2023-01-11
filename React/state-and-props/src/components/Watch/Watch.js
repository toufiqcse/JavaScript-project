import React, { useState } from "react";
import Display from "./Display";

const Watch = () => {
  const [steps, setSteps] = useState(0);
  const increaseSteps = () => {
    const newSteps = steps + 1;
    setSteps(newSteps);
  };
  return (
    <div>
      <h3>This is my Smart Watch</h3>
      <h6>My Current Steps is: {steps}</h6>
      <button onClick={increaseSteps}>Boost Steps</button>
      <Display name={"Garmin"} steps={steps}></Display>
    </div>
  );
};

export default Watch;
