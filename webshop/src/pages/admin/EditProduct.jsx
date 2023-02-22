import { useParams, useNavigate } from "react-router-dom"
import { useRef } from "react";
import productsFromFile from "../../data/products.json"

function EditProduct() {
  const { id } = useParams();
  const productFound = productsFromFile.find(element => element.id === Number(id));
  const index = productsFromFile.indexOf(productFound);
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();

const changeProduct = () => {
  const newProduct = {
    "id": Number(idRef.current.value),
    "image": imageRef.current.value,
    "name": nameRef.current.value,
    "price": Number(priceRef.current.value),
    "description": descriptionRef.current.value,
    "category": categoryRef.current.value,
    "active": activeRef.current.checked
  }
  productsFromFile[index] = newProduct;
  navigate("/admin/maintain-products");
}

  return (
    <div>
      {productFound !== undefined && <div>
        <label>ID</label><br />
        <input ref={idRef} type="number" defaultValue={productFound.id}/> <br />
        <label>Name</label><br />
        <input ref={nameRef} type="text" defaultValue={productFound.name}/> <br />
        <label>Price</label><br />
        <input ref={priceRef} type="number" defaultValue={productFound.price}/> <br />
        <label>Image</label><br />
        <input ref={imageRef} type="text" defaultValue={productFound.image}/> <br />
        <label>Category</label><br />
        <input ref={categoryRef} type="text" defaultValue={productFound.category}/> <br />
        <label>Description</label><br />
        <input ref={descriptionRef} type="text" defaultValue={productFound.description}/> <br />
        <label>Active</label><br />
        <input ref={activeRef} type="checkbox" defaultChecked={productFound.active}/> <br />       
        <button onClick={changeProduct}>Change</button>
      </div>} 
      {productFound === undefined && <div>Product not found!</div>}
    </div>
  )
}

export default EditProduct