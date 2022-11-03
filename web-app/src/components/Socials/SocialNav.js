import React from "react";
import SocialBar from "./SocialBar.js";

import classes from "./SocialNav.module.css"

const SocialNav = ({open, setOpen, items}) => {

    return (
        <div className={classes.wrapper}>
            <button className={classes.button} onClick={setOpen}>
                {/* <img src={speech} alt="Socials" width="100px" height="100px"></img> */}
                Post to Social Media!
            </button>
            {open && (
                <SocialBar/>
            )}
        </div>
    );
}


export default SocialNav