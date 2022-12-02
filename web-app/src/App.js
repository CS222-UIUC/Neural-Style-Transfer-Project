import * as tf from "@tensorflow/tfjs";
import React, { useEffect, useRef, useState } from "react";

import AddImage from "./components/Images/AddImage.js";
import ImagesList from "./components/Images/ImagesList.js";
import PickStyles from "./components/Styles/PickStyles.js";
import SocialBar from "./components/Socials/SocialBar.js";
import SocialNav from "./components/Socials/SocialNav.js";
import NavBar from "./components/NavBar/Navbar.js";
import classes from "./App.module.css";
import vangogh from "./components/Styles/AllStyles/vangogh.png";

function App() {
  const [imagesList, setImagesList] = useState([]);
  const [style, setStyle] = useState(vangogh);
  const [open, setOpen] = useState(false);
  const items = [<SocialBar />];

  const canvasRef = useRef(null);

  const HOST_URL = "localhost:3000";

  const addImageHandler = async (newImg) => {
    let contentImage = await loadImage(newImg);
    let styleImage = await loadImage("http://" + HOST_URL + style);

    doStyleTransfer({
      contentImage: contentImage,
      styleImage: styleImage,
      outputRef: canvasRef,
    });

    setImagesList((prevImagesList) => {
      return [
        ...prevImagesList,
        {
          img: newImg,
          style: style,
          id: Math.random().toString(),
          canvasRef: canvasRef,
        },
      ];
    });
  };

  const changeStyleHandler = (styleImage) => {
    console.log(styleImage);
    setStyle(styleImage);
    console.log("handler ran: ", style);
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

async function loadModel() {
  return tf.loadGraphModel("http://localhost:3001/api/model/model.json");
}

function preprocess(imageData) {
  return tf.tidy(() => {
    // Convert image to 3D tensor
    let numChannels = 3;
    let tensor = tf.browser.fromPixels(imageData, numChannels);

    // Normalize tensor
    const offset = tf.scalar(255.0);
    const normalized = tf.scalar(1.0).sub(tensor.div(offset));

    // Add dimension to achieve desired tensor shape
    const batched = normalized.expandDims(0);
    return batched;
  });
}

// resolves HTMLImageElement from source URL
export async function loadImage(url) {
  return new Promise((resolve, reject) => {
    const im = new Image();
    im.crossOrigin = "anonymous";
    im.src = url;
    im.onload = () => {
      resolve(im);
    };
  });
}

async function doStyleTransfer({ contentImage, styleImage, outputRef }) {
  const model = await loadModel();

  console.log("contentImage: ", contentImage);
  console.log("styleImage: ", styleImage);

  // Process images as tensors
  let contentImageTensor = preprocess(contentImage);
  let styleImageTensor = preprocess(styleImage);

  console.log("t1: ", contentImageTensor);
  console.log("t2: ", styleImageTensor);

  // Pass images through model to train
  let result = model.execute([contentImageTensor, styleImageTensor]);

  // Remove extra dimension from batched result
  let outputImage = tf.squeeze(result);

  console.log("outputImage: ", outputImage);

  // Draw output image to canvas

  let canvas = outputRef.current;
  if (canvas == null) {
    console.log("CANVAS DOES NOT EXIST");
    return;
  }
  tf.browser.toPixels(outputImage, canvas);
}
