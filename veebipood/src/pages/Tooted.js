import { Link } from 'react-router-dom'
import { useState } from 'react'

function Tooted() {
  // const tooted = JSON.parse(localStorage.getItem("tooted")) || [];

  const [tooted, uuendaTooted] = useState(JSON.parse(localStorage.getItem("tooted")) || []);

  const tootedLocalStoragest = JSON.parse(localStorage.getItem("tooted") || []);
  const lisaOstukorvi = (klikitudToode) => {
    let ostukorvLS = localStorage.getItem("ostukorv");
    ostukorvLS = JSON.parse(ostukorvLS) || [];
    ostukorvLS.push(klikitudToode);
    ostukorvLS = JSON.stringify(ostukorvLS);
    localStorage.setItem("ostukorv", ostukorvLS);
  }
  
  const sorteeriAZ = () => {
    tooted.sort((a,b) => a.nimi.localeCompare(b.nimi));
    uuendaTooted(tooted.slice());
  }

  const sorteeriZA = () => {
    tooted.sort((a,b) => b.nimi.localeCompare(a.nimi));
    uuendaTooted(tooted.slice());
  }

  const sorteeriHindKasvavalt = () => {
    tooted.sort((a,b) => a.hind - b.hind)
    uuendaTooted(tooted.slice());
  }

  const sorteeriHindKahanevalt = () => {
    tooted.sort((a,b) => b.hind - a.hind);
    uuendaTooted(tooted.slice());
  }

  const sorteeriVanusKasvavalt = () => {
    const sorteeritud = tootedLocalStoragest.reverse();
    uuendaTooted(sorteeritud);
  }

  const sorteeriVanusKahanevalt = () => {
    const sorteeritud = tootedLocalStoragest;
    uuendaTooted(sorteeritud);
  }

  const filtreeri = (esiT2ht) => {
    let tootedLS = tootedLocalStoragest;
    tootedLS = tootedLS.filter(e => e.nimi.startsWith(esiT2ht));
    uuendaTooted(tootedLS);
  }

  const esiT2hed = [...new Set(tootedLocalStoragest.map(e => e.nimi.charAt(0)))];

  
  return (
    <div>
      <button onClicK={sorteeriAZ}>Sort A-Z</button>
      <button onClick={sorteeriZA}>Sort Z-A</button>
      <button onClick={sorteeriHindKasvavalt}>Hinna järgi kasvavalt</button>
      <button onClick={sorteeriHindKahanevalt}>Hinna järgi kahanevalt</button>
      <button onClick={sorteeriVanusKasvavalt}>Vanuse järjekorras kasvavalt</button>
      <button onClick={sorteeriVanusKahanevalt}>Vanuse järjekorras kahanevalt</button>
      <div>{tooted.length} tk</div>
      {/* <button onClick={() => filtreeri("C")}>C</button> */}
      {/* <button onClick={() => filtreeri("H")}>H</button> */}
      {/* <button onClick={() => filtreeri("K")}>K</button> */}
      {esiT2hed.map(e => <button key={e} onClick={() => filtreeri(e)}>{e}</button>)}
      {tooted.map((element, index) => 
        <div key={index}>
          <Link to={"/vaata-toodet/" + index}>
            <img src={element.pilt} alt="" />
            <div>{element.pilt}</div>
            <div>{element.nimi}</div>
            <div>{element.hind}</div>
          </Link>
          <button onClick={() => lisaOstukorvi(element)}>Lisa ostukorvi</button>
        </div>)}
    </div>
  )
}

export default Tooted