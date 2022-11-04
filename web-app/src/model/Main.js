import * as tf from '@tensorflow/tfjs';
import { createElement } from 'react';

async function loadModel() {
    return tf.loadGraphModel('style_transfer_tfjs/model.json');
}


// @param contentImage, styleImage - HTMLCanvasElement
export async function doStyleTransfer(contentImage, styleImage) {
    const model = await loadModel();
    console.log("model: ", model)

    // Process images as tensors
    let contentImageTensor = preprocess(contentImage);
    let styleImageTensor   = preprocess(styleImage);

    console.log("t1: ", contentImageTensor);
    console.log("t2: ", styleImageTensor);

    // Pass images through model to train
    let result = model.execute([contentImageTensor, styleImageTensor]);

    // Remove extra dimension from batched result
    let outputImage = tf.squeeze(result);

    // Draw output image to canvas
    let canvas;
    tf.browser.toPixels(outputImage, canvas);
    return canvas
}

function preprocess(imageData) {
    // return tf.tidy(() => {

        // Convert image to 3D tensor
        let tensor = tf.browser.fromPixels(imageData, 3)

        // Normalize tensor
        const offset = tf.scalar(255.0)
        const normalized = tf.scalar(1.0).sub(tensor.div(offset))

        // Add dimension to achieve desired tensor shape
        const batched = normalized.expandDims(0)
        return batched

    // })
}

export default loadModel;

// doStyleTransfer().then((model) => {
//     console.log(model);
// }).catch((reason) => {
//     console.log(reason);
// });