import React, { useEffect, useState } from 'react';
import "../css/Cart.css";
import { Button } from "@mui/material";

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
  const [parcelmachines, setParcelmachines] = useState([]);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(json => setParcelmachines(json.filter(pm => pm.A0_NAME === "EE")));
  }, []);

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
    cart.forEach(element => totalsum = totalsum + element.product.price * element.quantity);
    return totalsum.toFixed(2);
  }

  const calculateItems = () => {
    let totalitems = 0;
    cart.forEach(element => totalitems = totalitems + element.quantity);
    return totalitems;
  }

  const decreaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity -1;
    if (cart[index].quantity === 0) {
      deleteFromCart(index);
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const increaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity +1;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <div>
      <div className="cart-top">
      {cart.length > 0 && <Button onClick={emptyCart}>Empty cart</Button>} <br /><br /><br />
      {cart.length > 0 && <div>Cart total is : {calculateSumOfCart()} €</div>} <br /> <br />
      {cart.length === 1 && <div>There is one item in the cart - {calculateItems()} tk </div>}
      {cart.length >= 2 && <div>There is {cart.length} items in the cart</div>}
      {cart.length === 0 && <div>The cart is empty</div>}
      <select className="selection">
        {parcelmachines.map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}
      </select>
      </div>
      <div>
        {cart.map((element, index) =>
         <div className="product" key={index}>
          <img className="picture" src={element.product.image} alt="" />
          <div className="name">{element.product.name}</div>
          <div className="price">{element.product.price}</div>
          <div className="quantity">
            <img src="/minus.png" alt="" className="button" onClick={() => decreaseQuantity(index)} />
            <div>{element.quantity}</div>
            <img src="/plus.png" alt="" className="button" onClick={() => increaseQuantity(index)}/>
          </div>
          <div className="total">{(element.product.price * element.quantity).toFixed(2)}€</div>
          <img src="trash.png" alt="" className="button" onClick={() => deleteFromCart(index)} />
        </div>)}
      </div>
    </div>
  )
}

export default Cart