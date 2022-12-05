import React, { useState } from "react";
import classes from "./FileLoader.module.css";

const FileLoader = (props) => {
  const [filename, setFilename] = useState("");

  const addFileHandler = (event) => {
    event.preventDefault();
    var file = URL.createObjectURL(event.target.files[0]);

    if (filename.trim().length === 0) {
      console.log("Invalid filename!");
      return;
    }

    if (file === null) {
      console.log("Invalid image! No image uploaded.");
      return;
    }

    props.onChange(file, filename);
    setFilename("");
  };

  const filenameChangeHandler = (event) => {
    setFilename(event.target.value);
  };

  return (
    <div class={classes.wrapper}>
      <div class={classes.button}>
        <input
          type="file"
          id="file-loader"
          name="image"
          accept="image/*"
          onChange={addFileHandler}
          hidden
        />
        <label class={classes.label} for="file-loader">
          {props.children}
        </label>
      </div>

      <input
        id="Label"
        type="text"
        value={filename}
        onChange={filenameChangeHandler}
      />
    </div>
  );
};

export default FileLoader;
