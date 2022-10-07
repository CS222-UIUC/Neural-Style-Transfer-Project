import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredLabel, setEnteredLabel] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="Label">Label</label>
        <input id="Label" type="text" />
        <label htmlFor="image">Image</label>
        <input type="file" id="image" name="image" accept="image/*" />
        <Button type="submit">Add Image</Button>
      </form>
    </Card>
  );
};

export default AddUser;
