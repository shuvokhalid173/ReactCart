import React from "react";

const Header = (props) => {
    console.log("header " + props.ID + " component is rendering ...");
    return <h2>{props.children}</h2>;
};

export default React.memo(Header);
