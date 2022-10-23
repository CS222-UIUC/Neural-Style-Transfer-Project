import React, { useEffect, useRef, useState } from "react";

import AddImage from "./components/Images/AddImage.js";
import ImagesList from "./components/Images/ImagesList.js";
import PickStyles from "./components/Styles/PickStyles.js";
import SocialBar from "./components/Socials/SocialBar.js";
import loadModel from "./model/Main.js";
import Draw from "./model/Draw.js"
import { doStyleTransfer } from "./model/Main.js";

import classes from "./App.module.css";
import Button from "./components/UI/Button.js";

function App() {

  const ref = useRef(null)
  useEffect(() => {
    const el2 = ref.current
    console.log(el2);
  })

  const [imagesList, setImagesList] = useState([]);
  const [style, setStyle] = useState(undefined);

  const addImageHandler = (newLabel, newImg) => {
    // let stylizedImage = doStyleTransfer()
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

  async function modelHandler() {
    const model = await loadModel();
    console.log(model);
  }

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
      <div className={classes.bar}>
        <SocialBar/>
      </div> 
      <div>
        <Draw></Draw>
        <Button onClick={modelHandler}> 
          Load model
        </Button>
      </div>
    </div>
  );
}

export default App;
