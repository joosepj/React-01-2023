import productsFromFile from "../data/products.json";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import categoriesFromFile from "../data/categories.json"
import { Link } from "react-router-dom"

function HomePage() {

  const [products, setProducts] = useState(productsFromFile);

  const addToCart = (productClicked) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    
    const index = cartLS.findIndex(el => el.product.id === productClicked.id)
    if (index >= 0) {
      cartLS[index].quantity = cartLS[index].quantity + 1;
    } else {
      cartLS.push({product: productClicked, quantity: 1})
    }

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
      {/* <button onClick={() => filterByCategory("iphone")}>iphone</button> */}
      {/* <button onClick={() => filterByCategory("macbook")}>macbook</button> */}
      {categoriesFromFile.map(element => 
        <button key={element.name} onClick={() => filterByCategory(element.name)}>{element.name}</button>)}
      <br />
      <div>{products.length} products shown</div>
      <br />
      <button onClick={sortAZ}>Sort A-Z</button>
      <button onClick={sortZA}>Sort Z-A</button>
      <button onClick={sortPriceAsc}>Sort PRICE ASC</button>
      <button onClick={sortPriceDesc}>Sort PRICE desc</button>
      {products.map((element, index) =>
         <div key={index}>
          <Link to={"/product/" + index }>
            <br />
            <div>{element.id}</div>
            <div>{element.name}</div>
            <div>{element.price}</div>
            <img src={element.image} alt=""/>
            <div>{element.category}</div>
            <div>{element.description}</div>
            <div>{element.active}</div>
            <div>{element.date}</div>
          </Link>
            <Button onClick={() => addToCart(element)}>Lisa ostukorvi</Button>
         </div>)}
    </div>
  )
}

export default HomePage