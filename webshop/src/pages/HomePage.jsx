import config from "../data/config.json";
import Button from "react-bootstrap/Button";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Spinner from "react-bootstrap/Spinner";
import CartSumContext from "../store/CartSumContext";


function HomePage() {

  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const CartSumCtx = useContext(CartSumContext);


  useEffect(() => {
    fetch(config.categoryDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []))

    fetch(config.productDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || [])
        setDbProducts(json || [])
        setLoading(false);
      })
  }, []);

  const addToCart = (productClicked) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];

    const index = cartLS.findIndex(el => el.product.id === productClicked.id)
    if (index >= 0) {
      cartLS[index].quantity = cartLS[index].quantity + 1;
    } else {
      cartLS.push({ product: productClicked, quantity: 1 })
    }

    let totalsum = 0;
    cartLS.forEach(element => totalsum = totalsum + element.product.price * element.quantity);

    CartSumCtx.setCartSum(totalsum.toFixed(2));

    localStorage.setItem("cart", JSON.stringify(cartLS));
  }

  const sortAZ = () => {
    products.sort((a, b) => a.name.localeCompare(b.name));
    setProducts(products.slice());
  }

  const sortZA = () => {
    products.sort((a, b) => b.name.localeCompare(a.name));
    setProducts(products.slice());
  }

  const sortPriceAsc = () => {
    products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    setProducts(products.slice());
  }

  const sortPriceDesc = () => {
    products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    setProducts(products.slice());
  }

  const filterByCategory = (categoryClicked) => {
    const result = dbProducts.filter(element => element.category === categoryClicked);
    setProducts(result);
  }
  if (isLoading === true) {
    return <Spinner />
  }

  return (
    <div>
      {/* <button onClick={() => filterByCategory("iphone")}>iphone</button> */}
      {/* <button onClick={() => filterByCategory("macbook")}>macbook</button> */}
      {categories.map(element =>
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
          <Link to={"/product/" + element.id}>
            <br />
            <div>{element.id}</div>
            <div>{element.name}</div>
            <div>{element.price}</div>
            <img src={element.image} alt="" />
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