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

  const pay = () => {
    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff"

    const headers = {
      "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
      "Content-Type": "application/json"
    }; //metaandmed mis kulub tuleb body + sisselogimise tunnused

    const body = {
      "api_username": "e36eb40f5ec87fa2",
      "account_name": "EUR3D1",
      "amount": calculateSumOfCart(),
      "order_reference": Math.floor(Math.random()*999999),
      "nonce": "dasdsadas" + Math.floor(Math.random()*999999) + new Date(),
      "timestamp": new Date(),
      "customer_url": "https://joosepiveeb.web.app" // firebase.json failist site: "" jutumärkide sees
    }; // andmed mille alusel uut makset salvestada

    fetch(url,{"method": "POST", "body": JSON.stringify(body), "headers": headers})
      .then(res => res.json())
      .then(json => window.location.href = json.payment_link);
  }

  return (
    <div>
      <div className="cart-top">
      {cart.length > 0 && <Button onClick={emptyCart}>Empty cart</Button>} <br /><br /><br />
      {cart.length > 0 && <div>Cart total is : {calculateSumOfCart()} €</div>} <br /> <br />
      {cart.length === 1 && <div>There is one item in the cart - {calculateItems()} tk </div>}
      {cart.length >= 2 && <div>There is {cart.length} items in the cart</div>}
      {cart.length === 0 && <div>The cart is empty</div>}
      {cart.length > 0 && <select className="selection">
        {parcelmachines.map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}
      </select>}
      {cart.length > 0 && <Button onClick={pay}>Maksma</Button>}
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