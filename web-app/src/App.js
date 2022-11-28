import React, { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";

import AddImage from "./components/Images/AddImage.js";
import ImagesList from "./components/Images/ImagesList.js";
import PickStyles from "./components/Styles/PickStyles.js";
import SocialBar from "./components/Socials/SocialBar.js";
import doStyleTransfer from "./model/Main.js";
import NavBar from "./components/NavBar/Navbar.js";
import classes from "./App.module.css";
import Receive from "./model/Receive.js";

function App() {
  const [imagesList, setImagesList] = useState([]);
  const [style, setStyle] = useState(undefined);

  const addImageHandler = (newLabel, newImg) => {
    // let stylizedImage = doStyleTransfer()
    let styledImage = doStyleTransfer(newImg, style);

    setImagesList((prevImagesList) => {
      return [
        {
          label: newLabel,
          img: styledImage,
          id: Math.random().toString(),
        },
        ...prevImagesList,
      ];
    });
  };

  const changeStyleHandler = (styleImage) => {
    console.log(styleImage);
    setStyle(styleImage);
    console.log("handler ran", style);
  };

  // async function modelHandler() {
  //   const model = await loadModel();
  //   console.log(model);
  // }

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

      <div className={classes.bar}>
        <SocialBar />
      </div>

      <div>
        <Receive route="api" />
      </div>
    </div>
  );
}

// async function loadModel() {
//   return tf.loadGraphModel("style_transfer_tfjs/model.json");
// }

// function preprocess(imageData) {
//   // Convert image to 3D tensor
//   let tensor = tf.browser.fromPixels(imageData, 3);

//   // Normalize tensor
//   const offset = tf.scalar(255.0);
//   const normalized = tf.scalar(1.0).sub(tensor.div(offset));

//   // Add dimension to achieve desired tensor shape
//   const batched = normalized.expandDims(0);
//   return batched;
// }

// async function doStyleTransfer(contentImage, styleImage) {
//   const model = await loadModel();
//   console.log("StyleTransfer - model: ", model);

//   console.log("StyleTransfer - images: ", contentImage, styleImage);

//   // Process images as tensors
//   let contentImageTensor = preprocess(contentImage);
//   let styleImageTensor = preprocess(styleImage);

//   console.log("StyleTransfer - t1: ", contentImageTensor);
//   console.log("StyleTransfer - t2: ", styleImageTensor);

//   // Pass images through model to train
//   let result = model.execute([contentImageTensor, styleImageTensor]);

//   // Remove extra dimension from batched result
//   let outputImage = tf.squeeze(result);

//   return outputImage;
// }

export default App;

///test 1
