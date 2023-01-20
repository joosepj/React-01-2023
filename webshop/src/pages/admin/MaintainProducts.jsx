import productsFromFile from "../../data/products.json";
import { useState } from "react";

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);
  
  const deleteProduct = (i) => {
    products.splice(i,1); //mitmendat, mitu tk
    setProducts(products.slice());
  }
    

  return (
    <div>
        {products.map((element,index) =>
        <div key={element.id}>
          <div>{element.id}</div>
          <div>{element.name}</div>
          <div>{element.price}</div>
          <div>{element.image}</div>
          <div>{element.category}</div>
          <div>{element.description}</div>
          <div>{element.active}</div>
          <div>{element.date}</div>
          <button onClick={() => deleteProduct(index)}>X</button>
          <button>Lisa ostukorvi</button>
        </div>)}
    </div>
  )
}

export default MaintainProducts