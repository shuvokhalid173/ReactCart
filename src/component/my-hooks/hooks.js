import React, { useState } from "react";

export function useTotalCost(value_) {
    const [value, setValue] = useState(value_);
    const setTotalCost = (type, incDecBy) =>
        setValue((prevState) =>
            type == "inc"
                ? prevState + incDecBy
                : type == "dec"
                ? prevState - incDecBy
                : prevState
        );

    return [value, setTotalCost];
}
