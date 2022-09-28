import React, { useState } from "react";
import UpdatedComponent from "./UpdatedComponent";

const ClickeCounter = ({ props }: any) => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Clicked {count}</button>
    </div>
  );
};

export default UpdatedComponent(ClickeCounter);
