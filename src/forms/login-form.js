import React from "react";
import useInputFieldValidation from "../component/hooks/use-input-field-validation";
import Button from "../component/UI/Button";
import formClasses from "../css/form.module.css";

const LoginForm = (props) => {
    const [
        userName,
        isUserNameValid,
        isUserNameBlurred,
        isUserNameFocused,
        userNameErrorMessage,
        userNameChangeHandler,
        userNameBlurHandler,
        userNameFocusHandler,
    ] = useInputFieldValidation(function (value, setErrorMessage) {
        if (!value) {
            setErrorMessage("user name is required");
            return false;
        }
        if (value === "admin") {
            setErrorMessage("user name can't be adming! chose another");
            return false;
        }
        setErrorMessage("");
        return true;
    });

    const [
        password,
        isPasswordValid,
        isPasswordBlurred,
        isPasswordFocused,
        passwordErrorMessage,
        passwordChangeHandler,
        passwordBlurHandler,
        passwordFocusHandler,
    ] = useInputFieldValidation(function (value, setErrorMessage) {
        if (!value) {
            setErrorMessage("password is required");
            return false;
        }

        if (value.trim().length < 5) {
            setErrorMessage("password should be at least 5 characters long");
            return false;
        }

        setErrorMessage("");
        return true;
    });

    const isFormValid = isUserNameValid && isPasswordValid;

    const onSubmitForm = (event) => {
        event.preventDefault();
        if (isFormValid) {
            console.log({ userName, password });
        }
        return;
    };

    return (
        <form className={formClasses.form}>
            <div className={formClasses["form-group"]}>
                <label>User name</label>
                <input
                    onChange={userNameChangeHandler}
                    onBlur={userNameBlurHandler}
                    onFocus={userNameFocusHandler}
                    type={"text"}
                    value={userName}
                />
                {!isUserNameValid &&
                    (isUserNameFocused || isUserNameBlurred) && (
                        <span>{userNameErrorMessage}</span>
                    )}
            </div>
            <div className={formClasses["form-group"]}>
                <label>Password</label>
                <input
                    onBlur={passwordBlurHandler}
                    onChange={passwordChangeHandler}
                    onFocus={passwordFocusHandler}
                    type={"password"}
                    value={password}
                />
                {!isPasswordValid &&
                    (isPasswordFocused || isPasswordBlurred) && (
                        <span>{passwordErrorMessage}</span>
                    )}
            </div>

            <Button disabled={!isFormValid} onClick={onSubmitForm}>
                Log in
            </Button>
        </form>
    );
};

export default LoginForm;
