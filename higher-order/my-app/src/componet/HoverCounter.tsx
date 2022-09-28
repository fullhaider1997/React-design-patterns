import React, { useState } from "react";
import UpdatedComponent from "./UpdatedComponent";

const HoverCounter = ({ props }: any) => {
  const [count, setCount] = useState(0);
  return (
    <div
      onMouseOver={() => {
        setCount(count + 1);
      }}
    >
      Hover{count} times
    </div>
  );
};

export default UpdatedComponent(HoverCounter);
