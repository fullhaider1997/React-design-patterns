import React, { useState } from "react";
import UncontrolledForm from "./pages/UncontrolledForm";
import ControlledFormL from "./pages/ControlledFormL";
import { ControlledModal } from "./pages/ControlledModal";
import UncontrolledOnBoardingFlow from "./pages/UncontrolledOnBoardingFlow";
import { JsxElement } from "typescript";

const StepOne = ({ goToNext }: any) => {
  return (
    <>
      {" "}
      <h1> Step 1</h1>
      <button onClick={goToNext}>Nextd</button>
    </>
  );
};

const StepTwo = ({ goToNext }: any) => {
  return (
    <>
      <h1>Step 2</h1>
      <button onClick={goToNext}>Next</button>
    </>
  );
};

const StepThree = ({ goToNext }: any) => {
  return (
    <>
      <h1>Step 3</h1>
      <button onClick={goToNext}>Next</button>
    </>
  );
};

function App() {
  return (
    <UncontrolledOnBoardingFlow>
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolledOnBoardingFlow>
  );
}

export default App;
