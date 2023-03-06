import React from 'react'
import { useParams } from 'react-router-dom'
import productsFromFile from "../data/products.json";


// 1. Muudan URLi vastuvõtlikkuse muutuja osas+
// 2. Võimaldan kuskilt lehelt sinna URL-le sattuda, saates kaasa selle muutuja+
// 3. Võtame useParams abil muutuja kasutusele (useParams osas import!)+
// 4. Võtame kõik tooted import abil
// 5. Otsime sobiva toote üles (tooted on käes, ID on käes, ketrame kõiki tooteid kuni ID-d matchivad)+
// 6. Teisendame URL parameetri numbriks
// 7. Kuvame HTMLs <div>{productFound.id}</div>
// 8. Valideerimine kui toodet ei leitud (siis võiks teada anda)


function SingleProduct() {
  const { index } = useParams();
  const products = productsFromFile;
  const productFound = products[index];



  return (
    <div>
      <div>
        <div>{productFound.name}</div>
        <div>{productFound.id}</div>
        <img src={productFound.image} alt=""/>
        <div>{productFound.price}</div>
        <div>{productFound.description}</div>
        <div>{productFound.category}</div>
        <div>{productFound.date}</div>
      </div>
    </div>
  )
}

export default SingleProduct