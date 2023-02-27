import React, { useState } from 'react'

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])

  const emptyCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  }

  const deleteFromCart = (lineNumber) => {
    cart.splice(lineNumber,1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  const calculateSumOfCart = () => {
    let totalsum = 0;
    cart.forEach(element => totalsum = totalsum + element.price);
    return totalsum.toFixed(2);
  }

  return (
    <div>
      {cart.length > 0 && <button onClick={emptyCart}>Empty cart</button>} <br /><br /><br />
      {cart.length > 0 && <div>Cart total is : {calculateSumOfCart()} €</div>} <br /> <br />
      {cart.length === 1 && <div>There is one item in the cart</div>}
      {cart.length >= 2 && <div>There is {cart.length} items in the cart</div>}
      {cart.length === 0 && <div>The cart is empty</div>}
      <div>
        {cart.map((element, index) =>
         <div key={index}>
          <div>{element.name}</div>
          <div>{element.description}</div>
          <img src={element.image} alt="" />
          <div>{element.price}</div>
          <button onClick={() => deleteFromCart(index)}>x</button>
        </div>)}
      </div>
    </div>
  )
}

export default Cart