import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const getCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length+1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getCart());

    

    function add(itemId) {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItem);
    }

    function removeCart(itemId) {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
    const contextValue = { all_product, cartItem, add, removeCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;