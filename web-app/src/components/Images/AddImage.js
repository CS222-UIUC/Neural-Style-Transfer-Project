import React, { useState } from "react";

import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import classes from "./AddImage.module.css";

const AddImage = (props) => {
  const [enteredImage, setEnteredImage] = useState(undefined);

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredImage === null) {
      console.log("Invalid image! No image uploaded.");
      return;
    }
    props.onAddImage(enteredImage);
  };

  const imageChangeHandler = (event) => {
    setEnteredImage(URL.createObjectURL(event.target.files[0]));
    console.log("here: ", enteredImage);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={imageChangeHandler}
        />
        <Button type="submit">Add Image</Button>
        <div>
          <img src={enteredImage} alt=""></img>
        </div>
      </form>
    </Card>
  );
};

export default AddImage;
