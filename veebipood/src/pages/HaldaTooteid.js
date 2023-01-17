import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function HaldaTooteid() {
  const [tooted, uuendaTooted] = useState(JSON.parse(localStorage.getItem("tooted")) || []);

  const kustuta = (index) => {
    tooted.splice(index,1);
    uuendaTooted(tooted.slice());
    localStorage.setItem("tooted", JSON.stringify(tooted));
  }

  return (
    <div>
      {tooted.map((element, index) =>
      <div key={element}>
        {element}
          <button onClick={() => kustuta(index)}>Kustuta</button>
          <Link to={"/muuda-toode/" + index}>
          <button>Muuda</button>
          </Link>
      </div>)}
    </div>
  )
}

export default HaldaTooteid