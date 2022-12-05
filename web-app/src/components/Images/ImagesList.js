import React from "react";
import Card from "../UI/Card.js";
import classes from "./ImagesList.module.css";
import Button from "../UI/Button.js";

const ImagesList = (props) => {
  console.log(props.images);

  const downloadImage = (canvasID, downloadName) => {
    // Get canvas element
    let canvas = document.getElementById(canvasID);

    // Image URL in Base64 (error when trying to download)
    var image = canvas.toDataURL("image/png");

    var a = document.createElement("a"); //Create <a>
    a.href = image; //Image Base64 Goes here
    a.download = downloadName; //File name Here
    a.click(); //Downloaded file
    console.log("Downloaded Image");
  };

  return (
    <Card className={classes.images}>
      <ul>
        {props.images.map((image, index) => (
          <li key={image.id}>
            <canvas
              id={index}
              ref={image.canvasRef}
              width="100"
              height="100"
            ></canvas>
            <div>
              <Button
                onClick={() => downloadImage(index, `stylized${index + 1}`)}
              >
                Download
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ImagesList;
