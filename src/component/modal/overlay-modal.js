import React, { useState } from "react";
import ReactDOM from "react-dom";
import ProductCard from "../ProductCard";
import Button from "../UI/Button";
import modalClasses from "./modal.module.css";

export function Overlay(props) {
    return (
        <div
            // onClick={props.handleClickOnOverlay}
            className={modalClasses.overlay}
        >
            {props.children}
        </div>
    );
}

export function Popup(props) {
    return <div className={modalClasses.wrapper}>{props.children}</div>;
}

export function PopupHeader(props) {
    return (
        <div className={modalClasses.header}>
            <h3>Your Cart</h3>
        </div>
    );
}
export function PopupBody(props) {
    return <div className={modalClasses.body}>{props.children}</div>;
}
export function PopupFooter(props) {
    return (
        <div className={modalClasses.footer}>
            <Button onClick={props.hideModal}>Cancel</Button>
            <span>Total cost: 100k</span>
            <Button>Place order</Button>
        </div>
    );
}

const Modal = (props) => {
    const { data } = props;
    return ReactDOM.createPortal(
        <Overlay handleClickOnOverlay={props.hideModal}>
            <Popup className={modalClasses.wrapper}>
                <PopupHeader />
                <PopupBody>
                    {data.map((item) => {
                        return (
                            <ProductCard
                                initialCartValue={item.amount}
                                product={item}
                                key={item.id}
                                showDescription={false}
                                initialCartColor={"#ff000012"}
                                cartStyleClass={
                                    modalClasses["cart-product-card"]
                                }
                            />
                        );
                    })}
                </PopupBody>
                <PopupFooter hideModal={props.hideModal} />
            </Popup>
        </Overlay>,
        document.getElementById("modal-container")
    );
};

export default Modal;
