// import * as tf from '@tensorflow/tfjs';

const content_image_url = 'content_image.jpg';
const style_image_url = 'style_image.jpg';

// const model = tf.loadGraphModel('https://tfhub.dev/google/magenta/arbitrary-image-stylization-v1-256/2');
const model = await tf.loadGraphModel('style_transfer_tfjs/model.json');

function preprocess(imgData) {
    return tf.tidy(() => {

        // Convert image to 3D tensor
        let tensor = tf.browser.fromPixels(imgData, numChannels=3)

        // Normalize tensor
        const offset = tf.scalar(255.0)
        const normalized = tensor.div(offset)

        // Add dimension to achieve desired tensor shape
        const batched = normalized.expandDims(0)
        return batched

    })
}

// Retrieve images
let contentImage = document.getElementById('contentImage');
let styleImage   = document.getElementById('styleImage');

// Process images as tensors
let contentImageTensor = preprocess(contentImage);
let styleImageTensor   = preprocess(styleImage);

// Pass images through model to train
let result = model.execute([contentImageTensor, styleImageTensor]);

// Remove extra dimension from batched result
let outputImage = tf.squeeze(result);

let canvas = document.getElementById('stylizedImage');

// Draw output image to canvas
tf.browser.toPixels(outputImage, canvas);

// const TestComponent = () => {
//     return 384;
// }

// export default TestComponent;