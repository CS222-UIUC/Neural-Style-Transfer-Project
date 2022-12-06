import React from "react";
import classes from "./FileLoader.module.css";

const FileLoader = (props) => {
  return (
    <div>
      <input
        type="file"
        id={props.id}
        name="133"
        accept="image/*"
        class={classes.input}
        onChange={props.onChange}
        hidden
      />
      <label class={classes.label} htmlFor={props.id}>
        {props.children}
      </label>
    </div>
  );
};

export default FileLoader;
