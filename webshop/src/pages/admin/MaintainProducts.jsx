//import productsFromFile from "../../data/products.json";
import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";
import config from "../../data/config.json";
import Spinner from "react-bootstrap/Spinner";


function MaintainProducts() {
  
  const searchedProductRef = useRef();
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    fetch(config.productDbUrl)
      .then( res => res.json())
      .then(json => {
        setProducts(json || [])
        setDbProducts(json || []);
        setLoading(false);
      })
  }, []);
  
  const deleteProduct = (i) => {
    dbProducts.splice(i,1); //mitmendat, mitu tk
    setProducts(dbProducts.slice());
    fetch(config.productDbUrl , {"method": "PUT", "body": JSON.stringify(dbProducts)})
      .then(() => setProducts(dbProducts.slice()));
      searchFromProducts();
  }
    
  const searchFromProducts = () => {
    const found = dbProducts.filter(element =>
       element.name.toLowerCase().includes(searchedProductRef.current.value.toLowerCase()) );
    setProducts(found);
  }
  if (isLoading === true) {
    return <Spinner />
    }

  return (
    <div>
        <input ref={searchedProductRef} onChange={searchFromProducts} type="text" />
        <div>{products.length}</div>
        {products.map((element,index) =>
        <div key={element.id} className={ element.active === true ? "active": undefined }>
          <div>{element.id}</div>
          <div>{element.name}</div>
          <div>{element.price}</div>
          <img src={element.image} alt="" />
          <div>{element.category}</div>
          <div>{element.description}</div>
          <div>{element.active}</div>
          <div>{element.date}</div>
          <Button variant="danger" onClick={() => deleteProduct(index)}>Kustuta</Button>
          <Button as={Link} to={"/admin/edit-product/" + element.id} variant="warning">Muuda</Button>
        </div>)}
    </div>
  )
}

export default MaintainProducts