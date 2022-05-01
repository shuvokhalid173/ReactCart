import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Button from "./component/UI/Button";
import Header from "./component/Header";
import Wrapper from "./component/Wrapper";
import Content from "./component/Content";
import ProductCard from "./component/ProductCard";
import ProductList from "./component/ProductList";
import ProductContext from "./store/context-api";
import Modal from "./component/modal/overlay-modal";
import Main from "./component/lesson/Main";
import Loader from "./component/UI/Loader";
import ReactDOM from "react-dom";
import useHttp from "./component/hooks/use-http";
import LoginForm from "./forms/login-form";


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDy8k6T9UklVJgaLmYrG2iATTA0YyOO2KY",
//     authDomain: "oshop-ce425.firebaseapp.com",
//     databaseURL: "https://oshop-ce425.firebaseio.com",
//     projectId: "oshop-ce425",
//     storageBucket: "oshop-ce425.appspot.com",
//     messagingSenderId: "227346293673",
//     appId: "1:227346293673:web:22b8b21d7368cf654d5ab8",
//     measurementId: "G-PHSLDJ6QRB",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); **/

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState([]);
    const [products, setProducts] = useState([]);
    const [isLoading, error_, sendRequest] = useHttp(); 

    // reading data ..
    useEffect(() => {
        sendRequest(
            {
                url: "https://fakestoreapi.com/products/"
            }, 
            (data) => {
                setProducts(data);
            }
        );
    }, []);

    const onAddToCartButtonClick = (product) => {
        setCartItems([...cartItems, product]);
    };

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

    const onPlaceOrder = () => {
        console.log(modalData);
    };

    return (
        // <ProductContext.Provider
        //     value={{
        //         onAddToCartButtonClick: onAddToCartButtonClick,
        //         onRemoveItemFromCart: onRemoveItemFromCart,
        //         onUpdateItemOfCart: onUpdateItemOfCart,
        //         onPlaceOrder: onPlaceOrder,
        //     }}
        // >
        //     <Wrapper>
        //         <Header
        //             openModal={onCartIconClicked}
        //             cartItems={cartItems}
        //         ></Header>
        //         <Content>
        //             {!isLoading && (
        //                 <ProductList
        //                     modalData={modalData}
        //                     products={products}
        //                 />
        //             )}
        //             {isLoading && <Loader />}
        //         </Content>
        //     </Wrapper>

        //     {showModal && (
        //         <Modal
        //             data={modalData}
        //             hideModal={() => setShowModal(false)}
        //         ></Modal>
        //     )}
        // </ProductContext.Provider>
        // <Main title={"dd"} dataList={[9, 8, 7, 6, 5, 4, 3, 2, 1]} />

        <LoginForm />
    );
};

export default App;
