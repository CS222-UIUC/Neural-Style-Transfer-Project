import React, { useState } from "react";

import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import classes from "./AddImage.module.css";

const AddImage = (props) => {
  const [enteredImage, setEnteredImage] = useState(undefined);

  const addImageHandler = (event) => {
    event.preventDefault();

    if (enteredImage === null) {
      console.log("Invalid image! No image uploaded.");
      return;
    }
    props.onAddImage(enteredImage);
  };
  // const addUserHandler = (event) => {
  //   event.preventDefault();

  //   if (enteredLabel.trim().length === 0) {
  //     console.log("Invalid label!");
  //     return;
  //   }

  //   if (enteredImage === null) {
  //     console.log("Invalid image! No image uploaded.");
  //     return;
  //   }
  //   props.onAddImage(enteredLabel, enteredImage);
  //   setEnteredLabel("");
  //   setEnteredImage(null);
  // };

  const imageChangeHandler = (event) => {
    setEnteredImage(URL.createObjectURL(event.target.files[0]));
    console.log("AddImage.js - here: ", enteredImage);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addImageHandler}>
        <label htmlFor="image">Content Image</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={imageChangeHandler}
        />
        <div>
          <img src={enteredImage} alt="" width="200" height="200"></img>
        </div>
        <Button type="submit">Add Image</Button>
      </form>
    </Card>
  );
};

export default AddImage;
