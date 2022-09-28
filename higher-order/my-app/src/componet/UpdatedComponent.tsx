import { render } from "@testing-library/react";
import React from "react";

const UpdatedComponent = ({ OriginalComponent }: any) => {
  const NewComponent = ({ OriginalComponent }: any) => {
    return <OriginalComponent name="haider" />;
  };
  return NewComponent;
};

export default UpdatedComponent;
