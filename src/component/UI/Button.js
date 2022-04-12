import React from "react";
import btnClasses from "./button.module.css";

const Button = (props) => {
    const additionalClasses = props.additionalclasses
        ? props.additionalclasses
        : "";
    return (
        <button
            className={`${btnClasses["button-17"]} ${additionalClasses}`}
            {...props}
        >
            {props.children}
        </button>
    );
};

export default Button;
