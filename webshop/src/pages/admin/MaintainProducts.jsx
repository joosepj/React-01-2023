import productsFromFile from "../../data/products.json";
import { useRef, useState } from "react";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);
  const searchedProductRef = useRef();
  
  const deleteProduct = (i) => {
    products.splice(i,1); //mitmendat, mitu tk
    setProducts(products.slice());
  }
    
  const searchFromProducts = () => {
    const found = productsFromFile.filter(element =>
       element.name.toLowerCase().includes(searchedProductRef.current.value.toLowerCase()) );
    setProducts(found);
  }

  return (
    <div>
        <input ref={searchedProductRef} onChange={searchFromProducts} type="text" />
        <div>{products.length}</div>
        {products.map((element,index) =>
        <div key={element.id}>
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