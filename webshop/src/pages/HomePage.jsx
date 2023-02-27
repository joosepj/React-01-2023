import productsFromFile from "../data/products.json";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function HomePage() {

  const [products, setProducts] = useState(productsFromFile);

  const addToCart = (productClicked) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    cartLS.push(productClicked);
    localStorage.setItem("cart", JSON.stringify(cartLS));
  }

  const sortAZ = () => {
    products.sort((a,b) => a.name.localeCompare(b.name));
    setProducts(products.slice());
  }

  const sortZA = () => {
    products.sort((a,b) => b.name.localeCompare(a.name));
    setProducts(products.slice());
  } 
  
  const sortPriceAsc = () => {
    products.sort((a,b) => parseFloat(a.price) - parseFloat(b.price));
    setProducts(products.slice());
  } 

  const sortPriceDesc = () => {
    products.sort((a,b) => parseFloat(b.price) - parseFloat(a.price));
    setProducts(products.slice());
  } 

  const filterByCategory = (categoryClicked) => {
    const result = productsFromFile.filter(element => element.category === categoryClicked);
    setProducts(result);
  }


  return (
    <div>
      <button onClick={() => filterByCategory("iphone")}>iphone</button>
      <button onClick={() => filterByCategory("macbook")}>macbook</button>
      <br />
      <div>{products.length} products shown</div>
      <br />
      <button onClick={sortAZ}>Sort A-Z</button>
      <button onClick={sortZA}>Sort Z-A</button>
      <button onClick={sortPriceAsc}>Sort PRICE ASC</button>
      <button onClick={sortPriceDesc}>Sort PRICE desc</button>
      {products.map(element =>
         <div>
            <div>{element.id}</div>
            <div>{element.name}</div>
            <div>{element.price}</div>
            <img src={element.image} alt=""/>
            <div>{element.category}</div>
            <div>{element.description}</div>
            <div>{element.active}</div>
            <div>{element.date}</div>
            <Button onClick={() => addToCart(element)}>Lisa ostukorvi</Button>
         </div>)}
    </div>
  )
}

export default HomePage