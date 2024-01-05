import React, { useState } from "react";
import Text from "./Text";
import InputComponent from "./InputComponent";

const Hoc = (WrappedComponent) => {
  return function WrappedComponentHover(props) {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    return (
      <div>
        <h1>Hoc Component</h1>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <WrappedComponent {...props} isHovered={isHovered} />
        </div>
      </div>
    );
  };
};

export const TextComponentWithHover = Hoc(Text);
export const InputComponentWithHover = Hoc(InputComponent);

export default Hoc;
