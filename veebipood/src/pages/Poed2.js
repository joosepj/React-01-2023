import { useRef, useState } from 'react'
import poedFailist2 from "../poedFailist2.json"

function Poed2() {

// array - väärtuste kogumik
// pean panema array'sse kui tahab sorteerida, filtreerida
// kui nad tulevad andmebaasist ehk klient tahab ise hallata
  const [poed, muudaPoed] = useState(poedFailist2);
  const poodRef = useRef();
  const telRef = useRef();
  const aegRef = useRef();

  const tagasiOriginaali = () => {
    muudaPoed(poedFailist2);
  }


// .map - ükshaaval võrdleb
// .sort - kakshaaval võrdleb (a,b)
  const sorteeriAZ = () => {
    poed.sort((a, b) => a.nimi.localeCompare(b, "et"));   // .sort() -- default sorting mis teebki A-Z."et" et oleks eesti tähestiku järgi
    muudaPoed(poed.slice());
  }

  const sorteeriZA = () => {
    poed.sort((a, b) => b.nimi.localeCompare(a, "et"));   // .sort() -- default sorting mis teebki Z-A. "et" et oleks eesti tähestiku järgi
    muudaPoed(poed.slice());
  }

  const sorteeriTahtKasv = () => {
    poed.sort((a,b) => a.nimi.length - b.nimi.length);
    muudaPoed(poed.slice());
  }

  const sorteeriTahtKah = () => {
    poed.sort((a,b) => b.nimi.length - a.nimi.length);
    muudaPoed(poed.slice());
  }

  const sorteeriTeiseTaheJargi = () => {
    poed.sort((a,b) => a.nimi.charAt(1).localeCompare(b.nimi.charAt(1), "et"));
    muudaPoed(poed.slice());
  }

  const filtreeriELoppevad = () => {
    const tulem = poed.filter(e => e.nimi.endsWith("e"));
    muudaPoed(tulem);
  }

  const filtreeri9Tahega = () => {
    const tulem = poed.filter(e => e.length === 9);
    muudaPoed(tulem);
  }

  const filtreeriKellelIs = () => {
    const tulem = poed.filter(e => e.nimi.includes("is"));
    muudaPoed(tulem);
  }

  const filtreeriKellel4sTahtI = () => {
    const tulem = poed.filter(e => e.nimi.charAt(4) === "i");
    muudaPoed(tulem);
  }

  const filtreeriKellelTahtiRohkemKui8 = () => {
    const tulem = poed.filter(e => e.nimi.length > 8);
    muudaPoed(tulem);
  }

  const muudaK6ikSuureks = () => {
    const tulem = poed.map(e => {return{"nimi":e.nimi.toUpperCase(), "tel": e.tel}});
    muudaPoed(tulem);
  }

  const muudaK6ikV2ikseks = () => {
    const tulem = poed.map(e => {return{"nimi":e.nimi.toLowerCase(), "tel": e.tel}});
    muudaPoed(tulem);
  }

  const muudaK6igileT2htedeArvuNumberL6ppu = () => {
    const tulem = poed.map(e => {return{"nimi":e.nimi + e.nimi.length, "tel": e.tel}});
    muudaPoed(tulem);
  }

  const muudaK6igileKriipsudEtte = () => {
    const tulem = poed.map(e => {return{"nimi": "--" + e.nimi, "tel": e.tel}});
    muudaPoed(tulem);
  }

  const muudaK6igileIAsemelO = () => {
    const tulem = poed.map(e => {return{"nimi": e.nimi.replace("i", "o"), "tel": e.tel}});
    muudaPoed(tulem);
  }

  const kustuta = (i) => {
    poed.splice(i,1);  // splice ehk mitmendat ma kustutan, KOMA mitu tk kustutan
    muudaPoed(poed.slice()); // koopia tegemine
  }

  const lisa = () => {
    poed.push({
      "nimi": poodRef.current.value,
      "tel": telRef.current.value,
      "aeg": aegRef.current.value
  });
    muudaPoed(poed.slice());
  }

  return (
    <div>

      <label>Uue poe nimi</label><br />
      <input ref={poodRef} type="text" /><br />
      <label>Uue poe telefon</label><br />
      <input ref={telRef} type="text" /><br />
      <label>Uue poe lahtiolekuaeg</label><br />
      <input ref={aegRef} type="text" /><br />
      <button onClick={lisa}>Lisa uus pood</button><br /><br />

      <button onClick={tagasiOriginaali}>Tagasi originaali</button>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri A-Z</button>
      <button onClick={sorteeriTahtKasv}>Sorteeri tähtede arv kasvavalt</button>
      <button onClick={sorteeriTahtKah}>Sorteeri tähtede arv kahanevalt</button>
      <button onClick={sorteeriTeiseTaheJargi}>Sorteeri teise tähe järgi</button>
      <button onClick={filtreeriELoppevad}>Jätta alles "e" tähega lõppevad</button>
      <button onClick={filtreeri9Tahega}>Jätta alles 9 tähelised</button>
      <button onClick={filtreeriKellelIs}>Jätta alles kellel "is" keskuse nimes</button>
      <button onClick={filtreeriKellel4sTahtI}>Jätta alles kellel neljas täht on I</button>
      <button onClick={filtreeriKellelTahtiRohkemKui8}>Jätta alles kellel tähti rohkem kui 8</button>
      <button onClick={muudaK6ikSuureks}>Muuda kõik tähed suureks</button>
      <button onClick={muudaK6ikV2ikseks}>Muuda kõik tähed väikseks</button>
      <button onClick={muudaK6igileT2htedeArvuNumberL6ppu}>Muuda kõigile tähtede arvu number lõppu</button>
      <button onClick={muudaK6igileKriipsudEtte}>Muuda kõigile kriipsud ette</button>
      <button onClick={muudaK6igileIAsemelO}>Muuda kõigile i asemel 0</button>
      

      {poed.map((element,index) =>
        <div key={index}>
          {element.nimi} ({element.tel}). Lahtiolekuaeg: {element.aeg}
           <button onClick={() => kustuta(index)}>x</button>
           </div>
           )}

      <div>---------------------------</div>
      <div>Ülemiste. Lahtiolekuaeg:</div>
      <div>Viimsi. Lahtiolekuaeg:</div>
      <div>Rocca Al Mare. Lahtiolekuaeg:</div>
      <div>Magistral. Lahtiolekuaeg:</div>
      <div>Vesse. Lahtiolekuaeg:</div>
      <div>Kristiine. Lahtiolekuaeg:</div>
      <div>Järveotsa. Lahtiolekuaeg:</div>
      <div>-----------</div>
    </div>
  )
}

export default Poed2