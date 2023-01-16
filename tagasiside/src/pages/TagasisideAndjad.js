import React from 'react'
import andjateFail from '../nimed.json'
import { useState } from 'react'
import { useRef } from 'react'

function TagasisideAndjad() {
    const [andjad, uuendaAndjad] = useState(andjateFail);

    const filtreeriM = () => {
        const vastus = andjad.filter(element => element.startsWith('M'));
        uuendaAndjad(vastus);
    }

    const filtreeriKuuekohalised = () => {
        const vastus= andjad.filter(element => element.length === 6);
        uuendaAndjad(vastus);
    }
     
    const filtreeriYL6ppevad = () => {
        const vastus = andjad.filter(element => element.endsWith('y'))
        uuendaAndjad(vastus);
    }
    const sorteeriAZ = () => {
        andjad.sort();
        andjad.reverse();
        uuendaAndjad(andjad.slice());
    }

    const igaNimeEtteEst = () => {
        const vastus = andjad.map(element => "EST-" + element)
        uuendaAndjad(vastus);
    }

    const kustutaNimi = (index) => {
        andjad.splice(index,1)
        uuendaAndjad(andjad.slice());
    }

    const andjaRef = useRef();

    const lisaL6ppuNimi = () => {
        andjad.push(andjaRef.current.value);
        uuendaAndjad(andjad.slice());
    }

  return (
    <div>
        
        <div>Nimede arv: {andjad.length} tk</div>
        <button onClick={filtreeriM}>Jäta välja kõik M tähega algavad nimed</button>
        <button onClick={filtreeriKuuekohalised}>Jäta kõik täpselt 6 kohalsied nimed alles</button>
        <button onClick={filtreeriYL6ppevad}>Jäta kõik y tähega lõppevad nimed alles</button>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={igaNimeEtteEst}>iga nime ette "EST"-</button>
        <button onClick={kustutaNimi}>Võimalda kustutada igaüht</button><br />
        <label>Võimalda uut nime lisada lõppu</label>
        <input ref={andjaRef} type="text" /><br />
        <button onClick={lisaL6ppuNimi}>Lisa</button>
        <div>Nimed: {andjad} </div>
    </div>
  )
}

export default TagasisideAndjad