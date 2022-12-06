import React from "react";
import classes from "./TwitterButton.module.css";
// import real from "../Styles/AllStyles/realism.png";


const TwitterSocialButton = () => {
    const defaultMessage = 'Check out my styled image!';
    const appApi = `https://twitter.com/intent/tweet?text=${defaultMessage}image=${"https://static.wikia.nocookie.net/spongebob/images/d/d7/SpongeBob_stock_art.png/revision/latest?cb=20190921125147"}`;

    const handleClick = () => {
        console.log("Clicked Twitter");
        // console.log(Url);
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