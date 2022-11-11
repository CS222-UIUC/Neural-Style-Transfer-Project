import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
      id="Button"
    >
      {props.children}
    </button>
  );
};

export default Button;
