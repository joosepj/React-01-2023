
import { useState } from "react";

function Kontakt() {
  const [n2itaTelKristiine, muudaN2itaTelKristiine] = useState(false);
  const [n2itaTelYlemiste, muudaN2itaTelYlemiste] = useState(false);
  const [n2itaTelTasku, muudaN2itaTelTasku] = useState(false);


  return (
  <div>
    <div>Kontaktide leht, nähtav localhost:3000/kontakt aadressil</div>
    <div>Võta meiega ühendust</div>
    <br />
    <div onClick={() => muudaN2itaTelKristiine(!n2itaTelKristiine)}>Kristiine keskus</div>
    <br />
    {n2itaTelKristiine && <div>+123356</div>}
    <br />
    <div>Endla 45</div>
    <br />
    <div onClick={() => muudaN2itaTelYlemiste(!n2itaTelYlemiste)}>Ülemiste keskus</div>
    <br />
    {n2itaTelYlemiste && <div>+234566</div>}
    <br />
    <div>Suur-Sõjamäe 4</div>
    <br />
    <div onClick={() => muudaN2itaTelTasku(!n2itaTelTasku)}>Tasku Keskus</div>
    <br />
    {n2itaTelTasku && <div>+345678</div>}
    <br />
    <div>Turu 2</div>


  </div>)
}

export default Kontakt