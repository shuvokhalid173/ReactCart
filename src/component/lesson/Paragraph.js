import React from "react";

const Paragraph = (props) => {
    console.log("Paragraph component is rendering ...");
    return <p>{props.children}</p>;
};

export default React.memo(Paragraph);
