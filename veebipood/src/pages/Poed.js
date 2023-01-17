import { useRef, useState } from 'react'

function Poed() {

// array - väärtuste kogumik
// pean panema array'sse kui tahab sorteerida, filtreerida
// kui nad tulevad andmebaasist ehk klient tahab ise hallata
  const [poed, muudaPoed] = useState(["Ülemiste", "Viimsi", "Rocca al Mare", "Magistral", "Vesse", "Kristiine", "Järveotsa"]);
  const poodRef = useRef();

  const tagasiOriginaali = () => {
    muudaPoed(["Ülemiste", "Viimsi", "Rocca al Mare", "Magistral", "Vesse", "Kristiine", "Järveotsa"]);
  }


// .map - ükshaaval võrdleb
// .sort - kakshaaval võrdleb (a,b)
  const sorteeriAZ = () => {
    poed.sort((a, b) => a.localeCompare(b, "et"));   // .sort() -- default sorting mis teebki A-Z."et" et oleks eesti tähestiku järgi
    muudaPoed(poed.slice());
  }

  const sorteeriZA = () => {
    poed.sort((a, b) => b.localeCompare(a, "et"));   // .sort() -- default sorting mis teebki Z-A. "et" et oleks eesti tähestiku järgi
    muudaPoed(poed.slice());
  }

  const sorteeriTahtKasv = () => {
    poed.sort((a,b) => a.length - b.length);
    muudaPoed(poed.slice());
  }

  const sorteeriTahtKah = () => {
    poed.sort((a,b) => b.length - a.length);
    muudaPoed(poed.slice());
  }

  const sorteeriTeiseTaheJargi = () => {
    poed.sort((a,b) => a.charAt(1).localeCompare(b.charAt(1), "et"));
    muudaPoed(poed.slice());
  }

  const filtreeriELoppevad = () => {
    const tulem = poed.filter(e => e.endsWith("e"));
    muudaPoed(tulem);
  }

  const filtreeri9Tahega = () => {
    const tulem = poed.filter(e => e.length === 9);
    muudaPoed(tulem);
  }

  const filtreeriKellelIs = () => {
    const tulem = poed.filter(e => e.includes("is"));
    muudaPoed(tulem);
  }

  const filtreeriKellel4sTahtI = () => {
    const tulem = poed.filter(e => e.charAt(4) === "i");
    muudaPoed(tulem);
  }

  const filtreeriKellelTahtiRohkemKui8 = () => {
    const tulem = poed.filter(e => e.length > 8);
    muudaPoed(tulem);
  }

  const muudaK6ikSuureks = () => {
    const tulem = poed.map(e => e.toUpperCase());
    muudaPoed(tulem);
  }

  const muudaK6ikV2ikseks = () => {
    const tulem = poed.map(e => e.toLowerCase());
    muudaPoed(tulem);
  }

  const muudaK6igileT2htedeArvuNumberL6ppu = () => {
    const tulem = poed.map(e => e + e.length);
    muudaPoed(tulem);
  }

  const muudaK6igileKriipsudEtte = () => {
    const tulem = poed.map(e => "--" + e);
    muudaPoed(tulem);
  }

  const muudaK6igileIAsemelO = () => {
    const tulem = poed.map(e => e.replace("i", "o"));
    muudaPoed(tulem);
  }

  const kustuta = (i) => {
    poed.splice(i,1);  // splice ehk mitmendat ma kustutan, KOMA mitu tk kustutan
    muudaPoed(poed.slice()); // koopia tegemine
  }

  const lisa = () => {
    poed.push(poodRef.current.value);
    muudaPoed(poed.slice());
  }

  return (
    <div>

      <label>Uue poe nimi</label>
      <input ref={poodRef} type="text" />
      <button onClick={lisa}>Lisa uus pood</button><br />

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
        <div key={index}>{element}. Lahtiolekuaeg <button onClick={() => kustuta(index)}>x</button></div>)}

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

export default Poed