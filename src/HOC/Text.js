import React from "react";
import Hoc from "./Hoc";

const Text = ({ text, isHovered }) => {
  return (
    <div>
      <h1>Text Component</h1>
      <p style={{ backgroundColor: isHovered ? "red" : "black" }}>{text}</p>
    </div>
  );
};

export default Text;
