import React from "react";
import Button from "./Button";
import buttonInputClasses from "./button-input.module.css";
import Input from "./Input";

const ButtonInput = (props) => {
    const { value, minValue, changeCartValue } = props;
    const disabledClass =
        value <= minValue ? buttonInputClasses["disabled-btn"] : "";
    return (
        <div className={buttonInputClasses.wrapper}>
            <Button
                onClick={() => changeCartValue("dec")}
                additionalclasses={`${buttonInputClasses.btn} ${disabledClass}`}
                disabled={value <= minValue}
            >
                -
            </Button>
            <Input disabled={true} value={value} />
            <Button
                onClick={() => changeCartValue("inc")}
                additionalclasses={buttonInputClasses.btn}
            >
                +
            </Button>
        </div>
    );
};

export default ButtonInput;
