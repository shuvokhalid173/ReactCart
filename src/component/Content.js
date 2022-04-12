import React from "react";
import contentClass from "../css/content.module.css";

const Content = (props) => {
    return <div className={contentClass.content}>{props.children}</div>;
};

export default Content;
