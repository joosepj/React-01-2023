import { useState } from 'react'

function Hinnad() {
    const [hinnad, uuendaHinnad] = useState([31, 12, 99, 121, 55,]);

 
    const suurendaIgayht = () => {
        const tulem = hinnad.map(hind => hind + 1);
        uuendaHinnad(tulem);
    }

    const sorteeriAZ = () => {
        hinnad.sort();
        uuendaHinnad(hinnad.slice());
    }

    const sorteeriZA = () => {
        hinnad.sort();
        hinnad.reverse();
        uuendaHinnad(hinnad.slice());
    }

    const suuremEnne = () => {
        hinnad.sort((a, b) => b - a);
        uuendaHinnad(hinnad.slice())
    }

    const v2iksemEnne = () => {
        hinnad.sort((a, b) => a - b);
        uuendaHinnad(hinnad.slice())

    }

    const filtreeriSuuremadKui30 = () => {
        const tulem = hinnad.filter(hind => hind > 30);
        uuendaHinnad(tulem);
    }

    const v2henda1V6rra = () => {
        const tulem = hinnad.map(hind => hind - 1);
        uuendaHinnad(tulem);

    }

    const suurenda1V6rra = () => {
        const tulem = hinnad.map(hind => hind + 1);
        uuendaHinnad(tulem);
    }

    const paaritud = () => {
        const tulem = hinnad.filter(e=> e % 2 !== 0);
        uuendaHinnad(tulem);
    }

    const kustuta = (index) => {
        hinnad.splice(index,1);
        uuendaHinnad(hinnad.slice())
    }

  return (
    <div>
        <button onClick={suurendaIgayht}>Suurenda igaüht</button>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={suuremEnne}>Sorteeri suurem enne</button>
        <button onClick={v2iksemEnne}>Sorteeri väiksem enne</button>
        <button onClick={filtreeriSuuremadKui30}>Filtreeri suuremad kui 30</button>
        <button onClick={v2henda1V6rra}>Vähenda igaüht 1 võrra</button>
        <button onClick={suurenda1V6rra}>Suurenda igaüht 1 võrra</button>
        <button onClick={paaritud}>Paaritud</button>

        <br />
        {hinnad.map((hind, index) => <button key={index} onClick={() => kustuta(index)}>{hind}</button>)}
    </div>
  )
}

export default Hinnad