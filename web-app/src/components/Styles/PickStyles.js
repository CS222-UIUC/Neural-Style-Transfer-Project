import React, { useState } from "react";

import Card from "../UI/Card.js";
import classes from "./PickStyles.module.css";
import FileLoader from "../UI/FileLoader.js";

import vangogh from "./AllStyles/vangogh.png";
import realism from "./AllStyles/realism.png";
import stickman from "./AllStyles/stickman.png";
import seaport from "./AllStyles/seaport.jpg";

const PickStyles = (props) => {
  const options = [
    { styleLabel: "Style 1: Van Gogh", styleImage: vangogh },
    { styleLabel: "Style 2: Realism", styleImage: realism },
    { styleLabel: "Style 3: Seaport", styleImage: seaport },
  ];

  const [styleList, setStyleList] = useState(options);

  const [styleImage, setStyleImage] = useState(vangogh);

  const styleListChangeHandler = (event) => {
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

  const styleChangeHandler = (event) => {
    // console.log("event.target.value", event.target.value);
    setStyleImage(event.target.value);
    props.onChangeStyle(event.target.value);
  };

  return (
    <Card className={classes.styles}>
      <label htmlFor="selector"> Styles</label>
      <select
        id="selector"
        name="selector"
        value={styleImage}
        onChange={styleChangeHandler}
      >
        {styleList.map((option) => (
          <option value={option.styleImage}>{option.styleLabel}</option>
        ))}
      </select>

      <FileLoader id="fl1" onChange={styleListChangeHandler}>
        Upload Style
      </FileLoader>

      <img src={styleImage} alt="style" width="200" height="200" />
    </Card>
  );
};

export default PickStyles;
