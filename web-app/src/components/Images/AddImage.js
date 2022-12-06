import React, { useState } from "react";

import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import FileLoader from "../UI/FileLoader.js";
import classes from "./AddImage.module.css";

import pikachu from "./Default/50pikachu.jpeg";

const AddImage = (props) => {
  const [imageList, setImageList] = useState([
    { imageLabel: "Image 1: Pikachu", image: pikachu },
  ]);
  const [enteredImage, setEnteredImage] = useState(pikachu);

  const addImageHandler = (event) => {
    event.preventDefault();

    if (enteredImage === null) {
      console.log("Invalid image! No image uploaded.");
      return;
    }
    props.onAddImage(enteredImage);
  };

  const imageListChangeHandler = (event) => {
    let url = URL.createObjectURL(event.target.files[0]);
    setImageList((prevImageList) => {
      return [
        ...prevImageList,
        {
          imageLabel: event.target.files[0].name,
          image: url,
        },
      ];
    });
    setEnteredImage(url);
  };

  const imageChangeHandler = (event) => {
    setEnteredImage(event.target.value);
    // console.log("AddImage.js - here: ", enteredImage);
  };

  return (
    <Card className={classes.styles}>
      <form onSubmit={addImageHandler}>
        <label>Content Image</label>
        <select
          id="selector"
          name="selector"
          value={enteredImage}
          onChange={imageChangeHandler}
        >
          {imageList.map((option) => (
            <option value={option.image}>{option.imageLabel}</option>
          ))}
        </select>

        <FileLoader id="fl2" onChange={imageListChangeHandler}>
          Upload Image
        </FileLoader>
        <img src={enteredImage} alt="" width="200" height="200"></img>

        <Button type="submit">Create Image</Button>
      </form>
    </Card>
  );
};

export default AddImage;
