

import React, { useState } from "react";

import AddImage from "./components/Images/AddImage.js";
import ImagesList from "./components/Images/ImagesList.js";
import PickStyles from "./components/Styles/PickStyles.js";
import SocialBar from "./components/Socials/SocialBar.js";
import classes from "./App.module.css";
//import tech from "./components/Styling/GIF/tech.gif";
//import BlueDot from "./components/Styling/PNG/Blue Dot .jpg"
//import BlackLines from "./components/Styling/PNG/Black lines.jpg"
//import { Parallax, ParallaxLayer } from '@react-spring/parallax';

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
      <div className={classes.bar}>
        <SocialBar/>
      </div> 
    </div>
  );
}

export default App;

// <Parallax pages={4}>
// <ParallaxLayer 
// offset={0}
// speed={1}
// factor={1} 

// style={{
//   backgroundImage: `url(${BlueDot})`,
//   backgroundSize: `cover`,
// }}


// >
// <h2> Welcome to Neural Style Transfer Site</h2>
// </ParallaxLayer>

// <ParallaxLayer offset={1} speed={0.5}>
// <h2> What yall know about thus saan!</h2>
// </ParallaxLayer>

// </Parallax>




