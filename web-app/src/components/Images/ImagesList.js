import React from "react";
import Card from "../UI/Card.js";
import classes from "./ImagesList.module.css";
// import DownloadButton from "../Socials/Download.js";

const ImagesList = (props) => {
  console.log(props.images);

  const downloadImage = () => {
    // Get canvas element
    let canvas = document.getElementById("canvas");

    // Image URL in Base64 (error when trying to download)
    var image = canvas.toDataURL("image/png");

    var a = document.createElement("a"); //Create <a>
    a.href = image; //Image Base64 Goes here
    a.download = "Image.png"; //File name Here
    a.click(); //Downloaded file
    console.log("Downloaded Image");
  }

  return (
    <Card className={classes.images}>
      <ul>
        {props.images.map((image) => (
          <li key={image.id}>
            {/* <img src={image.img} alt="current" width="100" height="100" />
            <img src={image.style} alt="style" width="100" height="100" /> */}
            <canvas id="canvas" ref={image.canvasRef}></canvas>
            <button onClick={downloadImage}>Download</button>
            <button
              onClick={() => {
                console.log("hello");
              }}
            >
              Style
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ImagesList;
