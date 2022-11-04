import React, { useEffect, useRef, useState } from "react";

import AddImage from "./components/Images/AddImage.js";
import ImagesList from "./components/Images/ImagesList.js";
import PickStyles from "./components/Styles/PickStyles.js";
import SocialBar from "./components/Socials/SocialBar.js";
import loadModel from "./model/Main.js";
import Draw from "./model/Draw.js"
import { doStyleTransfer } from "./model/Main.js";
import NavBar from "./components/NavBar/Navbar.js";
import classes from "./App.module.css";
import tech from "./components/Storage/GIF/tech.gif";
import BlueDot from "./components/Storage/PNG/Blue Dot .png";
import BlackLines from "./components/Storage/PNG/Black lines.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Button from "./components/UI/Button.js";
import Recieve from "./model/Recieve.js";
import tech from "./components/Storage/GIF/tech.gif";
import BlueDot from "./components/Storage/PNG/Blue Dot .png";
import BlackLines from "./components/Storage/PNG/Black lines.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {

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
        <NavBar />
        <NavBar />
      <div className={classes.control}>


        <AddImage onAddImage={addImageHandler} id="AddImage-component" />
        <PickStyles
          onChangeStyle={changeStyleHandler}
          data-testid="PickStyles-component"
        />
      </div>
  
     <ImagesList images={imagesList} data-testid="ImagesList-component" />
      
      <div className={classes.bar}>
        <SocialBar />
      </div>

      <div>
        <Recieve route="api" />
      </div>
    </div>
  );
}

export default App;
