import { createContext, useState } from "react";

const CartSumContext = createContext(null);


export const CartSumContextProvider = (props) => {
    const [cartSum, setCartSum] = useState(calculateSumOfCart());

    function calculateSumOfCart() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        let totalsum = 0;
        cart.forEach(element => totalsum = totalsum + element.product.price * element.quantity);
        return totalsum.toFixed(2);
      }

    return (
        <CartSumContext.Provider value ={{
            cartSum: cartSum,
            setCartSum: setCartSum
        }}>
            {props.children}
        </CartSumContext.Provider>
    )
}


export default CartSumContext;