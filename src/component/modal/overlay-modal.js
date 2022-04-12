import React, { useState } from "react";
import ReactDOM from "react-dom";
import ProductCard from "../ProductCard";
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
    return (
        <div className={modalClasses.wrapper}>
            <div className={modalClasses.header}></div>
            <div className={modalClasses.body}></div>
            <div className={modalClasses.footer}></div>
        </div>
    );
}

const Modal = (props) => {
    const { data } = props;
    return ReactDOM.createPortal(
        <Overlay handleClickOnOverlay={props.hideModal}>
            <Popup>
                {data.map((item) => {
                    return (
                        <ProductCard
                            initialCartValue={1}
                            product={item}
                            key={item.id}
                            showDescription={false}
                            initialCartColor={"#ff000012"}
                            cartStyleClass={modalClasses["cart-product-card"]}
                        />
                    );
                })}
            </Popup>
        </Overlay>,
        document.getElementById("modal-container")
    );
};

export default Modal;
