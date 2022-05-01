/**
 * @author Shuvo
 * @Email shuvokhalid173@gmail.com
 * @param {function} validate
 *
 * @description
 *      simple form field validation hooks.
 *      hook takes a callback
 *      callback takes two arguments
 *          1. value => of that input field
 *          2. function => used to change the error msg.
 *          callback should return boolean value whether the field is valid or not.
 *
 *      it will return an array with the value given below
 *          [0] => value of that field
 *          [1] => valid or invalid state of that field
 *          [2] => is field has blurred or not
 *          [3] => is field focused or not
 *          [4] => error message
 *          [5] => function (change input value) that should be used in onChange method
 *          [6] => function (called in onBlur method)
 *          [7] => function (called in onFocus method)
 */

import { useState } from "react";

export default function useInputFieldValidation(validate) {
    const [value, setValue] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [blurred, setBlurred] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [focused, setFocused] = useState(false);

    const fieldChangeHandler = (event) => {
        /**
         * set the field valid state accroding to the user field validation logic
         * also error msg should be set by the user
         */
        setIsValid(validate(event.target.value, setErrorMessage));
        setValue(event.target.value);
    };

    const fieldBlurHandler = (event) => {
        /**
         * set the field valid state accroding to the user field validation logic
         * also error msg should be set by the user
         */
        setIsValid(validate(event.target.value, setErrorMessage));
        setBlurred(true);
    };

    const fieldFocusHandler = (event) => {
        // setIsValid(validate(event.target.value, setErrorMessage));
        setFocused(true);
    };

    return [
        value, // field value
        isValid, // input is valid or not !
        blurred, // blur effect
        focused, // focus
        errorMessage, // field error msg
        fieldChangeHandler, // change the value of input
        fieldBlurHandler, // trigger when blur effect occur
        fieldFocusHandler, // trigger when focus effect occur
    ];
}
