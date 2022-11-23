import React from "react";

import classes from "./Download.module.css"

const DownloadButton = (props) => {
    return (
        <div>
            <a href={props.img} download><button type='submit' className={classes.button}>Download Image</button></a>
        </div>
    );
};

export default DownloadButton;