import { useState } from "react"

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(JSON.parse(localStorage.getItem("margidOstukorvisV6ti")) || [])  

  const kustuta = (index) => {
    ostukorv.splice(index,1);
    uuendaOstukorv(ostukorv.slice());
    localStorage.setItem("margidOstukorvisV6ti", JSON.stringify(ostukorv));
  }  

  return (
    <div>
        {ostukorv.map((element,index) =>
         <div key={index}>
            {element}
            <button onClick={() => kustuta(index)}>x</button></div>)}
    </div>)
}

export default Ostukorv