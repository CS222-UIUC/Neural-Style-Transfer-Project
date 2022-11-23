import React, { useEffect, useRef, useState } from "react";

import AddImage from "./components/Images/AddImage.js";
import ImagesList from "./components/Images/ImagesList.js";
import PickStyles from "./components/Styles/PickStyles.js";
import SocialBar from "./components/Socials/SocialBar.js";
import SocialNav from "./components/Socials/SocialNav.js";
import NavBar from "./components/NavBar/Navbar.js";
import classes from "./App.module.css";

function App() {
  const [imagesList, setImagesList] = useState([]);
  const [style, setStyle] = useState(undefined);
  const [open, setOpen] = useState(false);
  const items = [<SocialBar />];

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

  return (
    <div className={classes.wrapper}>
      <NavBar />

      <div className={classes.control}>
        <AddImage onAddImage={addImageHandler} id="AddImage-component" />
        <PickStyles
          onChangeStyle={changeStyleHandler}
          data-testid="PickStyles-component"
        />
      </div>

      <ImagesList images={imagesList} data-testid="ImagesList-component" />

      <SocialNav
        id="SocialNav"
        className={classes.bar}
        open={open}
        setOpen={() => setOpen(!open)}
        items={items}
      />
    </div>
  );
}

export default App;

///test 1
