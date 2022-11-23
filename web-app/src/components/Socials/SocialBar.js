import React from "react";
// import Card from "../UI/Card.js";
import { FacebookIcon, FacebookShareButton, EmailShareButton, EmailIcon, TwitterIcon, TwitterShareButton } from "react-share";
import classes from "./SocialBar.module.css";
// import SnapchatButton from "./Snap.js";
// import DownloadButton from "./Download.js";

const SocialBar = () => {
    const Url = window.location.href;

    return (
        <div className={classes.back}>
            <div className={classes.bar}>
                <TwitterShareButton url={Url} title="Look at my cool picture!" id="button twitter">

                    <TwitterIcon size={30} round={true}/>
                </TwitterShareButton>
                <FacebookShareButton url={Url} quote="Look at my cool picture!" id="button facebook">

                    <FacebookIcon size={30} round={true}/>
                </FacebookShareButton>
                <EmailShareButton url={Url} id="button email">

                    <EmailIcon size={30} round={true}/>
                </EmailShareButton>
                
                {/* Fix Snapchat Button */}
                
                {/* <SnapchatButton>
                    Hello
                </SnapchatButton> */}
            </div>
        </div>
    );
};

export default SocialBar;