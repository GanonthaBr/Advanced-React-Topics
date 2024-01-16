import React from "react";
import { useState } from "react";

const SimplyLearn = () => {
  const [msg, setMsg] = useState("Subscribe to my channel");
  const [flag, setFlag] = useState(0);

  //subscribe function
  const subscribe = () => {
    setMsg("Thanks for subcribing");
    setFlag(1);
  };
  //unsubscribe
  const unsubscribe = () => {
    setMsg("Subscribe to my channel");
    setFlag(0);
  };
  return (
    <div>
      <h1>SimplyLearn Component</h1>
      <p>{msg}</p>
      {flag ? (
        <button onClick={unsubscribe}>Click to unsubscribe</button>
      ) : (
        <button onClick={subscribe}>Click to subscribe</button>
      )}
    </div>
  );
};

export default SimplyLearn;
