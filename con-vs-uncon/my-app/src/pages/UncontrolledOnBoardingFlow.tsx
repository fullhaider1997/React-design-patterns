import React, { useState } from "react";

const UncontrolledOnBoardingFlow = ({ children, onFinish }: any) => {
  const [onBoardingData, setOnBoardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentChild = React.Children.toArray(children)[currentIndex];

  const goToNext: any = () => {
    console.log(currentIndex);
    setCurrentIndex(currentIndex + 1);
  };

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, goToNext);
  }

  return <>{currentChild}</>;
};

export default UncontrolledOnBoardingFlow;
