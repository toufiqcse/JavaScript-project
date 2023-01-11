import React, { useState } from "react";

function Counter() {
  //initial state set
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count:{count} </h1>
      <button onClick={increaseCount}>Increase </button>
      <button onClick={decreaseCount}>Decrease </button>
    </div>
  );
}
export default Counter;
