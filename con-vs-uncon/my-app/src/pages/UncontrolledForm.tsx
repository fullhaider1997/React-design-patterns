import React from "react";

///uncontrolled componet manage its own state
const UncontrolledForm = ({}) => {
  const nameInput = React.createRef<HTMLInputElement>();
  const ageInput = React.createRef<HTMLInputElement>();
  const hairColorInput = React.createRef<HTMLInputElement>();
  const handleSubmit = () => {
    console.log(nameInput.current?.value)

  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" ref={nameInput}></input>
      <input name="age" type="text" placeholder="Age" ref={ageInput}></input>
      <input
        name="hairColor"
        type="text"
        placeholder="Hair Color"
        ref={hairColorInput}
      ></input>
      <button type="submit" value="submit"></button>
    </form>
  );
};

export default UncontrolledForm;
