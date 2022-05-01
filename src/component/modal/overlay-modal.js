import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ProductCard from "../ProductCard";
import Button from "../UI/Button";
import modalClasses from "./modal.module.css";
import ProductContext from "../../store/context-api";

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
            <h3>Total Items: {props.totalItems}</h3>
        </div>
    );
}
export function PopupBody(props) {
    return <div className={modalClasses.body}>{props.children}</div>;
}
export function PopupFooter(props) {
    const context = useContext(ProductContext);
    return (
        <div className={modalClasses.footer}>
            <Button onClick={props.hideModal}>Cancel</Button>
            <span>Total cost: {props.totalCost}</span>
            <Button
                onClick={() => context.onPlaceOrder()}
                style={{ background: "dodgerblue", color: "#ffffff" }}
            >
                Place order
            </Button>
        </div>
    );
}

const Modal = (props) => {
    const { data } = props;
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        let t_cost = 0;
        data.map((item) => (t_cost += item.amount * item.price));
        setTotalCost(t_cost);
    }, []);

    const changeTotalCost = (value, type) =>
        setTotalCost((prevState) =>
            type == "inc" ? prevState + value : prevState - value
        );

    return ReactDOM.createPortal(
        <Overlay handleClickOnOverlay={props.hideModal}>
            <Popup className={modalClasses.wrapper}>
                <PopupHeader totalItems={data.length} />
                <PopupBody>
                    {data.length > 0 ? (
                        data.map((item) => {
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
                                    changeTotalCost={changeTotalCost}
                                    minValue={1}
                                />
                            );
                        })
                    ) : (
                        <h4>No data in Your Cart!</h4>
                    )}
                </PopupBody>
                <PopupFooter
                    totalCost={totalCost}
                    hideModal={props.hideModal}
                />
            </Popup>
        </Overlay>,
        document.getElementById("modal-container")
    );
};

export default Modal;
