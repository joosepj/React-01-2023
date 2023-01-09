
import { useState } from "react";

function Meist() {
  const [kontakt, n2itaKontakt] = useState("");

  return (
  <div>
    <div>Meist</div>
    <br />
    <br />
    <div className='mõte'>Lehe mõte</div>
    <div>On proovida</div>
    <div>Kõike kasulikku</div>
    <div>Et saada aru rohkem veebiarendusest</div>
    <div>Meie töötajad:</div>
    <br />
    <div>Arvo Pärt</div>
    <div>Uudisklippite taustamuusika</div>
    <button onClick={() => n2itaKontakt('+35453434')}>Võta ühendust</button>
    <br /><br />
    <div>Kelly Sildaru</div>
    <div>Püstolreporter</div>
    <button onClick={() => n2itaKontakt('+54353453')}>Võta ühendust</button>
    <br /><br />
    <div>Edward Von Lõngus</div>
    <div>Uudiste kujundamine</div>
    <button onClick={() => n2itaKontakt('+463463463')}>Võta ühendust</button>
    <div>Kerli Kõiv</div>
    <div>Välisturgude spetsialist</div>
    <button onClick={() => n2itaKontakt('+3525295')}>Võta ühendust</button>
    <br /><br />
    { kontakt !== "" && <div>Tema kontakt: {kontakt} </div>}
   
    
  </div> )
}

export default Meist