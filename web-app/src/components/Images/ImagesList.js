import React from "react";
import Card from "../UI/Card";
import classes from "./ImagesList.module.css";

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
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ImagesList;
