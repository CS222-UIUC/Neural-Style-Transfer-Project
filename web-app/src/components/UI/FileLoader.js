import React from "react";
import classes from "./FileLoader.module.css";

const FileLoader = (props) => {
  return (
    <div>
      <input
        type="file"
        id="file-loader"
        name="image"
        accept="image/*"
        onChange={props.onChange}
        hidden
      />
      <label class={classes.label} for="file-loader">
        {props.children}
      </label>
    </div>
  );
};

export default FileLoader;
