import * as tf from "@tensorflow/tfjs";
import { useState, useEffect, useRef } from "react";

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
async function loadImage(url) {
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

const Model = () => {
  const canvasRef = useRef(null);

  async function doStyleTransferNoParam() {
    let contentImageURL = "http://localhost:3001/api/content/content_image.jpg";
    let styleImageURL = "http://localhost:3001/api/content/style_image.jpg";

    let contentImage = await loadImage(contentImageURL);
    let styleImage = await loadImage(styleImageURL);

    doStyleTransfer({
      contentImage: contentImage,
      styleImage: styleImage,
      outputRef: canvasRef,
    });
  }

  return (
    <center>
      <button
        onClick={() => doStyleTransferNoParam()}
        data-testid="styleButton"
      >
        Test
      </button>
      <canvas
        className="styleCanvas"
        ref={canvasRef}
        data-testid="styleCanvas"
      />
    </center>
  );
};

export default Model;
