import React from "react";

const InputComponent = (type, isHovered) => {
  return (
    <div>
      <h1>Input Component</h1>
      <input
        type={type}
        style={{ backgroundColor: isHovered ? "blue" : "white" }}
      />
    </div>
  );
};

export default InputComponent;
