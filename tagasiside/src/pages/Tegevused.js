import { useState } from "react";
import tegevusteFail from "../tegevused.json";

function Tegevused() {
    const [tegevused, uuendaTegevus] = useState(tegevusteFail);

    const n2itaKasutajaYks = () => {
        const vastus = tegevused.filter(element => element.userId === 1);
        uuendaTegevus(vastus);
    }

    const n2itaKasutajaKaks = () => {
        const vastus = tegevused.filter(element => element.userId === 2);
        uuendaTegevus(vastus);
    }

    const n2itaKasutajaKolm = () => {
        const vastus = tegevused.filter(element => element.userId === 3);
        uuendaTegevus(vastus);
    }

    const n2itaValmis = () => {
        const vastus = tegevused.filter(element => element.completed === true);
        uuendaTegevus(vastus);
    }

    const n2itaMitteValmis = () => {
        const vastus = tegevused.filter(element => element.completed === false);
        uuendaTegevus(vastus);
    }
    
    const n2itaTalgavad = () => {
        const vastus = tegevused.filter(element => element.title.startsWith('t'));
        uuendaTegevus(vastus);
    }

    const n2itaRohkemKui20 = () => {
        const vastus = tegevused.filter(element => element.title.length >20);
        uuendaTegevus(vastus);
    }
    const n2itaK6iki = () => {
        uuendaTegevus(tegevusteFail);
    }


  return (
    <div>
        <div>Näita kõik tegevuse arvu .length abil: {tegevused.length}</div><br />
        <button onClick={() => n2itaKasutajaYks()}>Kuva kõik kasutaja ID 1 tegevused</button>
        <button onClick={() => n2itaKasutajaKaks()}>Kuva kõik kasutaja ID 2 tegevused</button>
        <button onClick={() => n2itaKasutajaKolm()}>Kuva kõik kasutaja ID 3 tegevused</button>
        <button onClick={() => n2itaValmis()}>Kuva kõik valmis tegevused</button>
        <button onClick={() => n2itaMitteValmis()}>Kuva kõik mittevalmis tegevused</button>
        <button onClick={() => n2itaTalgavad()}>Kuva kõik "t" tähega algavad tegevused</button>
        <button onClick={() => n2itaRohkemKui20()}>Kuva kõik tegevused millel on tähemärke rohkem kui 20</button>
        <button onClick={() => n2itaK6iki()}>Kuva kõik tegevused tagasi</button>
        {tegevused.map(element =>
             <div>
                <div>{element.userId}</div>
                <div>{element.id}</div>
                <div>{element.title}</div>
                <div>{element.completed}</div>
                <br />
            </div>)}
    </div>
  )
}

export default Tegevused