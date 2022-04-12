import React from "react";
import ProductCard from "./ProductCard";

const ProductList = (props) => {
    return (
        <React.Fragment>
            {props.products.map((product) => (
                <ProductCard
                    initialCartValue={0}
                    key={product.id}
                    product={product}
                    showDescription={true}
                    initialCartColor={"#ffffff"}
                    cartStyleClass={""}
                />
            ))}
        </React.Fragment>
    );
};

export default ProductList;
