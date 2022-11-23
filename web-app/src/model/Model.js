import * as tf from "@tensorflow/tfjs";
import { useState, useEffect, useRef } from "react";

const Model = () => {
  const canvasRef = useRef(null);

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

  async function doStyleTransferNoParam() {
    console.log("here");
    doStyleTransfer({
      contentImageURL: "http://localhost:3001/api/content/content_image.jpg",
      styleImageURL: "http://localhost:3001/api/content/style_image.jpg",
      outputRef: canvasRef,
    });
  }

  async function doStyleTransfer({
    contentImageURL,
    styleImageURL,
    outputRef,
  }) {
    const model = await loadModel();

    // Retrieve images from backend
    let contentImage = await loadImage(contentImageURL);
    let styleImage = await loadImage(styleImageURL);

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
    if (canvasRef.current == null) {
      console.log("CANVAS DOES NOT EXIST");
      return;
    }
    tf.browser.toPixels(outputImage, canvas);
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
