import React, { useState } from "react";

import AddImage from "./components/Images/AddImage";
import ImagesList from "./components/Images/ImagesList";
import PickStyles from "./components/Styles/PickStyles";

import classes from "./App.module.css";

function App() {
  const [imagesList, setImagesList] = useState([]);
  const [style, setStyle] = useState(undefined);

  const addImageHandler = (newLabel, newImg) => {
    setImagesList((prevImagesList) => {
      return [
        ...prevImagesList,
        {
          label: newLabel,
          img: newImg,
          style: style,
          id: Math.random().toString(),
        },
      ];
    });
  };

  const changeStyleHandler = (styleImage) => {
    console.log(styleImage);
    setStyle(styleImage);
    console.log("handler ran", style);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.control}>
        <AddImage onAddImage={addImageHandler} id="AddImage-component" />
        <PickStyles
          onChangeStyle={changeStyleHandler}
          data-testid="PickStyles-component"
        />
      </div>
      <ImagesList images={imagesList} data-testid="ImagesList-component" />
    </div>
  );
}

export default App;
