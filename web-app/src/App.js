import React, { useState } from "react";

import AddImage from "./components/Images/AddImage";
import ImagesList from "./components/Images/ImagesList";
import PickStyles from "./components/Styles/PickStyles";

import classes from "./App.module.css";

function App() {
  const [imagesList, setImagesList] = useState([]);
  // const [style, setStyle] = useState("");

  const addImageHandler = (newLabel, newImg) => {
    // setStyle();
    setImagesList((prevImagesList) => {
      return [
        ...prevImagesList,
        { label: newLabel, img: newImg, id: Math.random().toString() },
      ];
    });
  };

  // const changeStyleHandler = ()

  return (
    <div className={classes.wrapper}>
      <div className={classes.control}>
        <AddImage onAddImage={addImageHandler} />
        <PickStyles />
      </div>
      <ImagesList images={imagesList} />
    </div>
  );
}

export default App;
