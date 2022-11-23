import React from "react";
import SocialBar from "./SocialBar.js";

// import classes from "./SocialNav.module.css"

import "./SocialNav.css";

const SocialNav = ({open, setOpen, items}) => {

    // return (
    //     <div className={classes.wrapper}>
    //         <li className={classes.button} onClick={setOpen} id="SocialNavButton">
    //             {/* <img src={speech} alt="Socials" width="100px" height="100px"></img> */}
    //             Post to Social Media!
    //         </li>
    //         {open && (
    //             <SocialBar className={classes.dropdown}/>
    //         )}
    //     </div>
    // );

    return (
        <div>
            <li class="dropdown dropdown-6" onClick={setOpen}>
            Share To Social Media!
                <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-6" >
                    <SocialBar></SocialBar>
                </ul>
            </li>
        </div>
    );
}




export default SocialNav