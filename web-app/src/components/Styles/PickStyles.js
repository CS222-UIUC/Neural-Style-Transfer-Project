import React, { useState } from "react";

import Card from "../UI/Card.js";
import classes from "./PickStyles.module.css";

import vangogh from "./AllStyles/vangogh.png";
import realism from "./AllStyles/realism.png";
import stickman from "./AllStyles/stickman.png";

const PickStyles = (props) => {
  const options = [
    { styleLabel: "Style 1", styleImage: vangogh },
    { styleLabel: "Style 2", styleImage: realism },
    { styleLabel: "Style 3", styleImage: stickman },
  ];

  const [styleImage, setStyleImage] = useState(undefined);

  const styleImageChangeHandler = (event) => {
    console.log("event.target.value", event.target.value);
    setStyleImage(event.target.value);
    props.onChangeStyle(event.target.value);
  };

  return (
    <Card className={classes.styles}>
      <label>
        Style
        <select value={styleImage} onChange={styleImageChangeHandler}>
          {options.map((option) => (
            <option value={option.styleImage}>{option.styleLabel}</option>
          ))}
        </select>
      </label>
      <img src={styleImage} alt="style" width="160" height="160" />
    </Card>
  );
};

export default PickStyles;
