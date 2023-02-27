import React, { useRef, useState } from 'react'
import categoriesFromFile from "../../data/categories.json";

function MaintainCategories() {
  const [categories, setCategories] = useState(categoriesFromFile);
  const categoryRef = useRef();


  const addCategory = () => {
    categoriesFromFile.push({"name": categoryRef.current.value});
    setCategories(categoriesFromFile.slice());
    categoryRef.current.value = "";
  }

  const deleteCategory = (index) => {
    categoriesFromFile.splice(index, 1);
    setCategories(categoriesFromFile.slice());
  }


  return (
    <div>
      <label>New category name</label><br />
      <input ref={categoryRef}type="text" /><br />
      <button onClick={addCategory}>Enter</button><br />
      {categories.map((element, index) =>
       <div key={index}>
        {element.name} <button onClick={() => deleteCategory()}>Delete</button></div>)}
    </div>
  )
}

export default MaintainCategories