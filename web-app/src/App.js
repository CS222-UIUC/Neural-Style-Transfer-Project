import * as tf from "@tensorflow/tfjs";
import React, { useEffect, useRef, useState } from "react";
import { Parallax } from "react-parallax";
import AddImage from "./components/Images/AddImage.js";
import ImagesList from "./components/Images/ImagesList.js";
import PickStyles from "./components/Styles/PickStyles.js";
import SocialBar from "./components/Socials/SocialBar.js";
import SocialNav from "./components/Socials/SocialNav.js";
import NavBar from "./components/NavBar/Navbar.js";
import classes from "./App.module.css";
import vangogh from "./components/Styles/AllStyles/vangogh.png";
import { abs, div } from "@tensorflow/tfjs";
//messing with Parallax
import abstract from "./PNG/abstract.png";
import galaxy from "./PNG/Galaxy.jpg";
import Neural from "./PNG/Neural.jpeg";
import butterfly from "./PNG/butterfly.mp4";
import Blender from "./PNG/Blender.mp4";
import Tunnel from "./PNG/Tunnel.mp4";
import node from "./PNG/Nodes.gif";
import wavey from "./PNG/wavey.gif";

function App() {
  const [imagesList, setImagesList] = useState([]);
  const [style, setStyle] = useState(vangogh);
  const [open, setOpen] = useState(false);
  const items = [<SocialBar />];

  const canvasRef = useRef(null);

  const HOST_URL = "localhost:3000";

  const addImageHandler = async (newImg) => {
    let contentImage = await loadImage(newImg);
    console.log("style: ", style);
    // let styleImage = await loadImage("http://" + HOST_URL + style);
    let styleImage = await loadImage(style);

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
    <div className={"App"}>
      <Parallax strength={600}>
        <video src={Tunnel} autoPlay loop muted />
        <div className={"overlay"}>
          <div className={"vid-content"}>
            <h1> WELCOME </h1>
            <p>TO NEURAL STYLE TRANSFER</p>
          </div>
        </div>
      </Parallax>

      {/* This is for Learn More Background */}
      <Parallax strength={-600} bgImage={wavey}>
        <div className={"neural"}>
          <div className={"text-content"}>What is a Neural Network?</div>
          <div className={"learn-content"}>
            <h3>
              Deep Neural Networks, a type of biologically inspired vision
              models, have lately shown near-human performance in other
              important visual perception domains including object and face
              recognition.
            </h3>
          </div>
        </div>
      </Parallax>

      {/* This is for the Transfer App Background */}

      <div>
        <Parallax strength={-600} bgImage={abstract}>
          <div className={"neural"}>
            <div className={"text-content"}>What is Neural Style Transfer?</div>
            <div className={"learn-content"}>
              <h3>
                Using an optimization approach called neural style transfer, two
                images—a content picture and a style reference image (such as a
                piece of art by a well-known painter)—are combined to create an
                output image that resembles the content image but is "painted"
                in the manner of the style reference image.
              </h3>

              <h2>Let's Experience It Below </h2>
            </div>
          </div>
        </Parallax>
      </div>


      <Parallax strength={600}>
        <video src={Blender} autoPlay loop muted />
        <div className={"overlay"}>
          <div className={"vid-content"}>
            <h1> WELCOME </h1>
            <p>TO NEURAL STYLE TRANSFER</p>
          </div>
        </div>
      </Parallax>

      {/* This is for About Us Background */}
      {/* <div>
        <Parallax strength={600}> bgImage = {galaxy}
          <div className={"neural"}>
            <div className={"text-content"}>Normal Parallax</div>
          </div>
        </Parallax>
      </div> */}

      <div className={classes.wrapper}>
        {/* This deals with the Nav Bar */}
        <div className={"nav"}>
          <NavBar />
        </div>

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
