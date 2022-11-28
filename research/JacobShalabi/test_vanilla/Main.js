import * as tf from "@tensorflow/tfjs";
// import { loadGraphModel, squeeze, browser, scalar } from "@tensorflow/tfjs";

async function loadModel() {
  return loadGraphModel("style_transfer_tfjs/model.json");
}

async function doStyleTransfer() {
  const model = await loadModel();
  console.log("model: ", model);

  // Retrieve images
  let contentImage = document.getElementById("contentImage");
  let styleImage = document.getElementById("styleImage");

  console.log("Images successfully grabbed.");

  // Process images as tensors
  let contentImageTensor = preprocess(contentImage);
  let styleImageTensor = preprocess(styleImage);

  console.log("t1: ", contentImageTensor);
  console.log("t2: ", styleImageTensor);

  // Pass images through model to train
  let result = model.execute([contentImageTensor, styleImageTensor]);

  // Remove extra dimension from batched result
  let outputImage = squeeze(result);

  // Draw output image to canvas
  let canvas = document.getElementById("stylizedImage");
  browser.toPixels(outputImage, canvas);
}

function preprocess(imageData) {
  // return tf.tidy(() => {

  // Convert image to 3D tensor
  let tensor = browser.fromPixels(imageData, (numChannels = 3));

  // Normalize tensor
  const offset = scalar(255.0);
  const normalized = scalar(1.0).sub(tensor.div(offset));

  // Add dimension to achieve desired tensor shape
  const batched = normalized.expandDims(0);
  return batched;

  // })
}

doStyleTransfer()
  .then((model) => {
    console.log(model);
  })
  .catch((reason) => {
    console.log(reason);
  });
