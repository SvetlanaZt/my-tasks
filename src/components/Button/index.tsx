import React, { useState } from "react";
// import "./App.css";
import { Buttons } from "../Buttons";
var uniqid = require("uniqid");

function Button() {
  const [buttonsArray, setButtonsArray] = useState([
    {
      id: uniqid(),
    },
  ]);
  console.log(buttonsArray);
  return (
    <div>
      {buttonsArray.map((element, index) => (
        <div>
          <Buttons
            key={element?.id}
            setButtonsArray={setButtonsArray}
            index={index}
          />
        </div>
      ))}
    </div>
  );
}

export default Button;
