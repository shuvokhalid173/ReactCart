import React from "react";

const Button = (props) => {
    console.log("button " + props.ID + " component is rendering ...");
    return <button onClick={props.handleClick}>{props.children}</button>;
};

export default React.memo(Button);
