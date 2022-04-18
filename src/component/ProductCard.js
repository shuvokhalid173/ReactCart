import React, { useState, useContext, useEffect } from "react";
import cardClasses from "../css/product-card.module.css";
import Button from "./UI/Button";
import ButtonInput from "./UI/ButtonInput";
import ProductContext from "../store/context-api";

const ProductCard = (props) => {
    const { id, title, category, description, price } = props.product;
    const { initialCartValue, showDescription, cartStyleClass } = props;

    const [cartValue, setCartValue] = useState(initialCartValue);
    // const [backgroundColor, setBackgroundColor] = useState(initialCartColor);

    console.log("product rendering ...", initialCartValue);
    useEffect(() => {
        setCartValue(initialCartValue);
    }, [initialCartValue]);

    const productContext = useContext(ProductContext);

    const handleAddToCart = (product) => {
        changeCartValue("inc");
        productContext.onAddToCartButtonClick({
            ...product,
            amount: 1,
        });
    };

    const changeCartValue = (option) => {
        if (option == "inc") {
            productContext.onUpdateItemOfCart(id, cartValue + 1);
            setCartValue(cartValue + 1);
        } else {
            cartValue == 1
                ? productContext.onRemoveItemFromCart(id)
                : productContext.onUpdateItemOfCart(id, cartValue - 1);
            setCartValue(cartValue - 1);
        }
    };
    // console.log(cartValue);

    return (
        <div
            style={{ backgroundColor: cartValue ? "#ff000012" : "#ffffff" }}
            className={`${cardClasses.wrapper} ${cartStyleClass}`}
        >
            <div
                className={`${cardClasses["section"]} ${cardClasses["left-section"]}`}
            >
                <h2>{title}</h2>
                <span>{category}</span>
                {showDescription && <p>{description}</p>}
            </div>

            <div className={cardClasses["separator"]}></div>

            <div
                className={`${cardClasses["section"]} ${cardClasses["right-section"]}`}
            >
                <h3>Total: {price * cartValue}$</h3>
                <span>{price}$</span>
                {cartValue ? (
                    <ButtonInput
                        changeCartValue={changeCartValue}
                        value={cartValue}
                    />
                ) : (
                    <Button
                        id={id}
                        onClick={() => handleAddToCart(props.product)}
                    >
                        Add to cart
                    </Button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
