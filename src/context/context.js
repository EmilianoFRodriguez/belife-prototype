import { createContext } from "react";

const cartContext = createContext({
    cart: [],
});


function CartContextProvider(props) {
    let cart = [];
    return(
        <CartContext.Provider value={{ cart: []}}>
            {props.children}
        </CartContext.Provider>
    );
};


export { CartContextProvider };

export default cartContext;