import React from "react";
import Card from "../UI/Card";
import classes from "./ImagesList.module.css";

const ImagesList = (props) => {
  return (
    <Card className={classes.images}>
      <ul>
        {props.images.map((image) => (
          <li key={image.id}>
            <label>{image.label}</label>
            <img src={image.img} alt="amazing" width="100" height="100" />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ImagesList;