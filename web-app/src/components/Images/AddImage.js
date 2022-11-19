import React, { useState } from "react";

import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import classes from "./AddImage.module.css";

const AddImage = (props) => {
  const [enteredLabel, setEnteredLabel] = useState("");
  const [enteredImage, setEnteredImage] = useState(undefined);

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredLabel.trim().length === 0) {
      console.log("Invalid label!");
      return;
    }

    if (enteredImage === null) {
      console.log("Invalid image! No image uploaded.");
      return;
    }
    props.onAddImage(enteredLabel, enteredImage);
    setEnteredLabel("");
    setEnteredImage(null);
  };

  const labelChangeHandler = (event) => {
    setEnteredLabel(event.target.value);
  };

  const imageChangeHandler = (event) => {
    setEnteredImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler} id="Form">
        <label htmlFor="Label">Label</label>
        <input
          id="Label"
          type="text"
          value={enteredLabel}
          onChange={labelChangeHandler}
        />
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="Image"
          name="image"
          accept="image/*"
          onChange={imageChangeHandler}
        />
        <Button type="submit" id="Submit-button">
          Add Image
        </Button>
      </form>
    </Card>
  );
};

export default AddImage;
