import React from "react";
import Button from "./Button";
import buttonInputClasses from "./button-input.module.css";
import Input from "./Input";

const ButtonInput = (props) => {
    return (
        <div className={buttonInputClasses.wrapper}>
            <Button
                onClick={() => props.changeCartValue("dec")}
                additionalclasses={buttonInputClasses.btn}
            >
                -
            </Button>
            <Input disabled={true} value={props.value} />
            <Button
                onClick={() => props.changeCartValue("inc")}
                additionalclasses={buttonInputClasses.btn}
            >
                +
            </Button>
        </div>
    );
};

export default ButtonInput;
