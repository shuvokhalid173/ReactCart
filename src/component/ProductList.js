import React from "react";
import ProductCard from "./ProductCard";

const ProductList = (props) => {
    const { modalData, products } = props;
    const goo = (product) => {
        const data = modalData.find((item) => item.id == product.id);
        if (!data) return 0;
        return data.amount;
    };
    return (
        <React.Fragment>
            {products.map((product) => {
                console.log(goo(product));

                return (
                    <ProductCard
                        initialCartValue={goo(product)}
                        key={product.id}
                        product={product}
                        showDescription={true}
                        // initialCartColor={"#ffffff"}
                        cartStyleClass={""}
                        minValue={0}
                    />
                );
            })}
        </React.Fragment>
    );
};

export default ProductList;
