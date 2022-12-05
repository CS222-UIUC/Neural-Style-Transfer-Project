import React, { useState } from "react";

import Card from "../UI/Card.js";
import classes from "./PickStyles.module.css";
import FileLoader from "../UI/FileLoader.js";

import vangogh from "./AllStyles/vangogh.png";
import realism from "./AllStyles/realism.png";
import stickman from "./AllStyles/stickman.png";

const PickStyles = (props) => {
  const options = [
    { styleLabel: "Style 1: Van Gogh", styleImage: vangogh },
    { styleLabel: "Style 2: Realism", styleImage: realism },
    { styleLabel: "Style 3: Stickman", styleImage: stickman },
  ];

  const [styleList, setStyleList] = useState(options);

  const [styleImage, setStyleImage] = useState(vangogh);

  const imageChangeHandler = (file, filename) => {
    setStyleList((prevStyleList) => {
      return [
        ...prevStyleList,
        {
          styleLabel: filename,
          styleImage: file,
        },
      ];
    });
    setStyleImage(file);
    props.onChangeStyle(file);
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

      <FileLoader onChange={imageChangeHandler}>Upload Style</FileLoader>

      <img src={styleImage} alt="style" width="200" height="200" />
    </Card>
  );
};

export default PickStyles;
