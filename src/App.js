import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Button from "./component/UI/Button";
import Header from "./component/Header";
import Wrapper from "./component/Wrapper";
import Content from "./component/Content";
import ProductCard from "./component/ProductCard";
import ProductList from "./component/ProductList";
import products from "./fake-data/fakeProduct";
import ProductContext from "./store/context-api";
import Modal from "./component/modal/overlay-modal";

import ReactDOM from "react-dom";

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const onAddToCartButtonClick = (product) => {
        setCartItems([...cartItems, product]);
    };

    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState([]);

    const onRemoveItemFromCart = (id) => {
        const newCartItems = cartItems.filter((item) => item.id != id);
        setCartItems(newCartItems);
    };

    const onUpdateItemOfCart = (id, amount) => {
        cartItems.map((item) => {
            if (item.id == id) {
                item.amount = amount;
            }
            return item;
        });

        setCartItems(cartItems);
    };

    const onCartIconClicked = (data) => {
        setModalData(data);
        setShowModal(true);
    };
    return (
        <ProductContext.Provider
            value={{
                onAddToCartButtonClick: onAddToCartButtonClick,
                onRemoveItemFromCart: onRemoveItemFromCart,
                onUpdateItemOfCart: onUpdateItemOfCart,
            }}
        >
            <Wrapper>
                <Header
                    openModal={onCartIconClicked}
                    cartItems={cartItems}
                ></Header>
                <Content>
                    <ProductList products={products} />
                </Content>
            </Wrapper>

            {showModal && (
                <Modal
                    data={modalData}
                    hideModal={() => setShowModal(false)}
                ></Modal>
            )}
        </ProductContext.Provider>
    );
};

export default App;
