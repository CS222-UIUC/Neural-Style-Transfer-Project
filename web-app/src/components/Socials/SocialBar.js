import React from "react";
// import Card from "../UI/Card.js";
import { FacebookIcon, FacebookShareButton, EmailShareButton, EmailIcon, TwitterIcon, TwitterShareButton } from "react-share";
import classes from "./SocialBar.module.css";
// import SnapchatButton from "./Snap.js";
// import DownloadButton from "./Download.js";

const SocialBar = () => {
    const Url = window.location.href;
    const shareURL = 'https://courses.engr.illinois.edu/cs225/fa2022/';

    return (
        <div className={classes.back}>
            <div className={classes.bar}>
                <TwitterShareButton url={Url} title="Checkout this Neural Style Transfer Website!" id="button twitter">

                    <TwitterIcon size={30} round={true}/>
                </TwitterShareButton>
                <FacebookShareButton url={shareURL} quote="Checkout this Neural Style Transfer Website" id="button facebook">

                    <FacebookIcon size={30} round={true}/>
                </FacebookShareButton>
                <EmailShareButton url={Url} subject="Look at this website!" body="Checkout this Neural Style Transfer Website" id="button email">

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