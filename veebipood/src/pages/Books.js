import React, { useState } from 'react'

function Books() {

    const [books, raamatuteNimekiri] = useState (["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Londiste", "Sipsik"]);
    
    const tagasiOriginaali = () => {
        raamatuteNimekiri(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Londiste", "Sipsik"]);
      }

    const sortEsimeseT2heJ2rgi = () => {
        books.sort((a,b) => a.charAt(0).localeCompare(b.charAt(0)));
        raamatuteNimekiri(books.slice());
    }
    const sortVastupidi = () => {
        books.sort = books.reverse();
        raamatuteNimekiri(books.slice());
    }
    const sortS6naPikkus = () => {
        books.sort((a,b) => a.length - b.length);
        raamatuteNimekiri(books.slice());
    }
    const sortS6naArv = () => {
        books.sort = books.length(); // ei tööta
        raamatuteNimekiri(books.slice());
    }

    const filtreeriThegaAlgavad = () => {
        const tulem = books.filter(e => e.startsWith("The"));
        raamatuteNimekiri(tulem);
    }
    const filtreeriKeskelAnd = () => {
        const tulem = books.filter(e => e.includes("and"));
        raamatuteNimekiri(tulem);
    }
    const filtreeriRohkemKui10 = () => {
        const tulem= books.filter (e => e.length > 10);
        raamatuteNimekiri(tulem);
    }
    const filtreeriVähemKui7 = () => {
        const tulem= books.filter (e => e.length <7);
        raamatuteNimekiri(tulem);
    }
    const muudaK6ikSuureks = () => {
        const tulem= books.map (e => e.toUpperCase());
        raamatuteNimekiri(tulem);
    }
    const muudaK6ikV2ikseks = () => {
        const tulem= books.map (e => e.toLowerCase());
        raamatuteNimekiri(tulem);
    }
    const muudaK6igilePunkt = () => {
        const tulem= books.map (e => e + ".");
        raamatuteNimekiri(tulem);
    }
    const muudaK6igileHyyumark = () => {
        const tulem= books.map (e => e + "!");
        raamatuteNimekiri(tulem);
    }



  return (
    <div>
        <button onClick={tagasiOriginaali}>Tagasi originaali</button>
        <button onClick={sortEsimeseT2heJ2rgi}>Sorteeri esimese tähe järgi</button>
        <button onClick={sortVastupidi}>Sorteeri vastupidises järjekorras</button>
        <button onClick={sortS6naPikkus}>Sorteeri sõnapikkuse järgi</button>
        <button onClick={sortS6naArv}>Sorteeri sõnapikkuse järgi</button>
        <button onClick={filtreeriThegaAlgavad}>Jäta alles "The" tähega algavad</button>
        <button onClick={filtreeriKeskelAnd}>Jäta alles kellel keskel on "and"</button>
        <button onClick={filtreeriRohkemKui10}>Jäta alles kellel rohkem tähemärkidega sõnad kui 10</button>
        <button onClick={filtreeriVähemKui7}>Jäta alles kellel vähem tähemärke kui 7</button>
        <button onClick={muudaK6ikSuureks}>Muuda kõik tähed suureks</button>
        <button onClick={muudaK6ikV2ikseks}>Muuda kõik tähed väikseks</button>
        <button onClick={muudaK6igilePunkt}>Pane igaühe lõppu punkt</button>
        <button onClick={muudaK6igileHyyumark}>Pane igaühe lõppu hüüumärk</button>
        {books.map(e => <div>{e}</div>)}
    </div>
  );
}

export default Books