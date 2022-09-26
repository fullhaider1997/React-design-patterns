import React, { useEffect, useState } from "react";

const ControlledFormL = ({}) => {
  const [nameInputError, setNameInputError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [hairColor, setHairColor] = useState("");

  useEffect(() => {
    setNameInputError(name);
    console.log("Name must be two or more characters");
  }, [name]);

  return (
    <form>
      {nameInputError.length < 2 && nameInputError !== "" ? (
        <div>Name is too short</div>
      ) : null}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <input
        name="age"
        type="number"
        placeholder="age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      ></input>

      <input
        name="hairColor"
        type="text"
        placeholder="Hair color"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      ></input>

      <button> Submit </button>
    </form>
  );
};

export default ControlledFormL;
