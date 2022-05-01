import React from "react";

export default React.createContext({
    onAddToCartButtonClick: (id) => {},
    onRemoveItemFromCart: (id) => {},
    onUpdateItemOfCart: (id, amount) => {},
    onPlaceOrder: (data) => {},
});
