import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Counter Component</h1>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
    </div>
  );
};

export default Counter;
