import React from "react";
// import classes from "./Snap.module.css";

const SnapchatButton = () => {
    (function (d, s, id) {
        var js,
            sjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://sdk.snapkit.com/js/v1/create.js";
        sjs.parentNode.insertBefore(js, sjs);
    })(document, "script", "snapkit-creative-kit-sdk");

    return (
        <div id="snap" className="snapchat-creative-kit-share" data-text="false"></div>
    );
};

export default SnapchatButton;