import React from 'react'
import { useRef, useState } from 'react'

function Massiiv() {
    const [asjad, muudaAsjad] = useState(['shoes','shirts','socks','sweaters','pigs','goats','sheep','spray','limit','elite','exuberant','destruction','present','March','Jan','Feb','Dec'])
    const lisaRef = useRef();

    const sorteeriAZ = () => {
        asjad.sort((a, b) => a.localeCompare(b));
        muudaAsjad(asjad.slice());
    }

    const allesJ2ttaRohkemKui4 = () => {
        const tulem = asjad.filter(e => e.length > 4);
        muudaAsjad(tulem);
    }

    const kustuta = (e) => {
        asjad.splice(e,1);
        muudaAsjad(asjad.slice());
    }

    const lisa = () => {
        asjad.push(lisaRef.current.value);
        muudaAsjad(asjad.slice());
    }
    const tyhjenda = (e) => {
        asjad.splice(e,100000);
        muudaAsjad(asjad.slice())
    }

  return (
    <div>
        <div>Neid on {asjad.length} tükki</div>
        <div>{asjad.map((e,i) => <div key={i}>{e}<button onClick={() => kustuta(i)}>x</button></div>)}</div>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={allesJ2ttaRohkemKui4}>Alles jätta rohkem kui 4 tähte</button><br />
        <button onClick={tyhjenda}>Tühjenda</button><br />
        <label>Uue asja nimi</label><br />
        <input ref={lisaRef} type="text" /><br />
        <button onClick={lisa}>Lisa uus</button>
    </div>
  )
}

export default Massiiv