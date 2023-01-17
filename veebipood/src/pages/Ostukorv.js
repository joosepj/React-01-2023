import { Link } from "react-router-dom"
import { useState } from 'react'


function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(JSON.parse(localStorage.getItem("ostukorv")) || [])

  const tyhjenda = () => {
    uuendaOstukorv([]);
    localStorage.setItem("ostukorv", JSON.stringify([]))
  }

  const lisa = (klikitudToode) => {
    ostukorv.push(klikitudToode);
    uuendaOstukorv(ostukorv.slice());
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv))
  }

  const kustuta = (jrkNr) => {
    ostukorv.splice(jrkNr,1);
    uuendaOstukorv(ostukorv.slice());
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv))
  }

  return (
    <div>
        {ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
        {ostukorv.length === 1 && <div>Ostukorvis on 1 ese</div>}
        {ostukorv.length >= 2 && <div>Ostukorvis on {ostukorv.length} eset</div>}
        {ostukorv.map((element,index) =>
         <div key={index}>
          {element}
          <button onClick={() => lisa(element)}>+</button>
          <button onClick={() => kustuta(index)}>x</button>
          </div> )}
        <button>Lisa ostukorvi</button>
        <Link to="/tooted">
            Ostukorv on tühi, mine lisa tooteid!
        </Link>
    </div>
  )
}

export default Ostukorv