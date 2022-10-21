import React from "react";
import classes from "./TwitterButton.module.css";


const TwitterSocialButton = () => {
    const defaultMessage = 'Check out my styled image!';
    const appApi = `https://twitter.com/intent/tweet?text=${Url}`;

    const handleClick = () => {
        console.log("Clicked Twitter");
        console.log(Url);
        console.log(defaultMessage);
        window.open(appApi);
    };

    return (
        <button className={classes.buttonTwitter} onClick={handleClick} type="button">
            Twitter
        </button>
    );
};

export default TwitterSocialButton;