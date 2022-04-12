import React from "react";
import wrapperClasses from "../css/wrapper.module.css";

const Wrapper = (props) => {
    return <div className={wrapperClasses.wrapper}>{props.children}</div>;
};

export default Wrapper;
