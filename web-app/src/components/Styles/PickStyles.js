import React, { useState } from "react";

import Card from "../UI/Card.js";
import classes from "./PickStyles.module.css";
import Button from "../UI/Button.js";

import vangogh from "./AllStyles/vangogh.png";
import realism from "./AllStyles/realism.png";
import stickman from "./AllStyles/stickman.png";

const PickStyles = (props) => {
  const options = [
    { styleLabel: "Style 1", styleImage: vangogh },
    { styleLabel: "Style 2", styleImage: realism },
    { styleLabel: "Style 3", styleImage: stickman },
  ];

  const [styleList, setStyleList] = useState(options);

  const [styleImage, setStyleImage] = useState(vangogh);

  const imageChangeHandler = (event) => {
    let url = URL.createObjectURL(event.target.files[0]);
    setStyleList((prevStyleList) => {
      return [
        ...prevStyleList,
        {
          styleLabel: event.target.files[0].name,
          styleImage: url,
        },
      ];
    });
    setStyleImage(url);
    props.onChangeStyle(url);
  };

  const styleImageChangeHandler = (event) => {
    console.log("event.target.value", event.target.value);
    setStyleImage(event.target.value);
    props.onChangeStyle(event.target.value);
  };

  return (
    <Card className={classes.styles}>
      <label htmlFor="selector"> Style</label>
      <select
        id="selector"
        name="selector"
        value={styleImage}
        onChange={styleImageChangeHandler}
      >
        {styleList.map((option) => (
          <option value={option.styleImage}>{option.styleLabel}</option>
        ))}
      </select>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/*"
        onChange={imageChangeHandler}
      />

      <img src={styleImage} alt="style" width="200" height="200" />
    </Card>
  );
};

export default PickStyles;
