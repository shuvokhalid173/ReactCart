import React, { useMemo } from "react";

const Demolist = (props) => {
    console.log("demolist component is running ...");
    const { fetchApi, title } = props;

    const getSortedList = useMemo(() => {
        console.log("function is running ...");
        return fetchApi.sort((a, b) => a - b);
    }, [fetchApi]);
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {getSortedList.map((item) => {
                    return <li key={item}>{item}</li>;
                })}
            </ul>
        </div>
    );
};

export default React.memo(Demolist);
