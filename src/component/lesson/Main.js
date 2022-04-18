import React, { useState, useCallback, useMemo } from "react";
import Header from "./Header";
import Button from "./Button";
import Paragraph from "./Paragraph";

const Main = (props) => {
    console.log("Main component is rendering ....");
    const [clickOneValue, setClickOneValue] = useState(0);
    const [clickTwoValue, setClickTwoValue] = useState(0);

    const handleClick1 = useCallback(() => {
        setClickOneValue((prevState) => prevState + 1);
    }, []);

    const handleClick2 = useCallback(() => {
        setClickTwoValue((prevState) => prevState + 2);
    }, []);

    const fetchApi = useMemo(() => {
        let ans = 0;
        for (let i = 0; i < 1000000000; i++) ans++;

        return ans;
    }, [props.title]);

    return (
        <div>
            <Paragraph>Use Memo and Use Callback Tutorial</Paragraph>
            <div>
                <Header ID="1">{clickOneValue}</Header>
                <span>{fetchApi}</span>
                <br />
                <Button ID="1" handleClick={handleClick1}>
                    Click1
                </Button>
            </div>
            <hr />
            <div>
                <Header ID="2">{clickTwoValue}</Header>
                <Button ID="2" handleClick={handleClick2}>
                    Click2
                </Button>
            </div>
        </div>
    );
};

export default Main;
