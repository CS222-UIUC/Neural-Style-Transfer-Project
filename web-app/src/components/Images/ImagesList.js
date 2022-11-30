import React from "react";
import Card from "../UI/Card.js";
import classes from "./ImagesList.module.css";
import DownloadButton from "../Socials/Download.js";

const ImagesList = (props) => {
  console.log(props.images);
  return (
    <Card className={classes.images}>
      <ul>
        {props.images.map((image) => (
          <li key={image.id}>
            <label>{image.label}</label>
            <img src={image.img} alt="current" width="100" height="100" />
            <img src={image.style} alt="style" width="100" height="100" />
            <canvas ref={image.canvasRef}></canvas>
            <DownloadButton img={image.style} />
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
