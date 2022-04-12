import React from "react";
import headerClasses from "../css/header.module.css";
import Button from "./UI/Button";
import cartIcon from "../assets/cart-icon.png";

const Header = (props) => {
    return (
        <div className={headerClasses.header}>
            <h2>My-Shopping-Cart</h2>
            <Button onClick={() => props.openModal(props.cartItems)}>
                <img src={cartIcon} />
                <div className={headerClasses["cart-item-number"]}>
                    {props.cartItems.length}
                </div>
            </Button>
        </div>
    );
};

export default Header;
