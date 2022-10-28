import React from "react";

// import classes from "./Snap.module.css";

const SnapchatButton = () => {
    (function (d, s, id) {
        let js,
            sjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://sdk.snapkit.com/js/v1/create.js";
        if (sjs) {
            sjs.parentNode.insertBefore(js, sjs);
        }
    })(document, "script", "snapkit-creative-kit-sdk");

    // const url = window.location.href;

    return (
        <div id="snap" className="snapchat-creative-kit-share" data-text="false" data-share-url='https://courses.engr.illinois.edu/cs225/fa2022/'/>
    );
};

export default SnapchatButton;