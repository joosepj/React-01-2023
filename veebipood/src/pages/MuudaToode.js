import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useRef } from "react"

function MuudaToode() {
  const { jrkNr } = useParams();
  const tooted = JSON.parse(localStorage.getItem("tooted") || []);
  const leitudToode = tooted[jrkNr];
  const nimiRef = useRef();
  const hindRef = useRef();
  const aktiivneRef = useRef();
  const piltRef = useRef();
  const navigate = useNavigate();

  const muuda = () => {
    tooted[jrkNr] = {
      "nimi": nimiRef.current.value,
      "hind": Number(hindRef.current.value),
      "pilt": piltRef.current.value,
      "aktiivne": aktiivneRef.current.checked,
    
    
    }
    localStorage.setItem("tooted", JSON.stringify(tooted));
    navigate("/halda-tooteid")
  }

  return (
    <div>
      <label>Toote nimi</label><br />
      <input ref= {nimiRef} defaultValue={leitudToode.nimi} type="text" /> <br />
      <label>Toote hind</label><br />
      <input ref= {hindRef} defaultValue={leitudToode.hind} type="number" /> <br />
      <label>Toote pilt</label><br />
      <input ref= {piltRef} defaultValue={leitudToode.pilt} type="text" /> <br />
      <label>Toote aktiivsus</label><br />
      <input ref= {aktiivneRef} defaultValue={leitudToode.aktiivne} type="checkbox" /> <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaToode