import React from "react";
import loaderClasses from "./loader.module.css";

export default function Loader() {
    return (
        <div className={loaderClasses["lds-ripple"]}>
            <div></div>
            <div></div>
        </div>
    );
}
