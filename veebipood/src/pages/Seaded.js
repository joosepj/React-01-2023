import { useRef, useState } from "react";


function Seaded() {
  // HTML uuendus käib läbi useState või URL muutuse
const [keel, uuendaKeel] = useState(localStorage.getItem("keel") || "ee");

// const muudaKeelEE = () => {
  // uuendaKeel("ee");
  // localStorage.setItem("keel","ee"); //salvestus ehk saatmine brauseri lokaalmällu
// }
// 
// const muudaKeelEN = () => {
  // uuendaKeel("en");
  // localStorage.setItem("keel","en");
// }
// 
// const muudaKeelRU = () => {
  // uuendaKeel("ru");
  // localStorage.setItem("keel","ru");
// }

const muudaKeel = (uusKeel) => {
  uuendaKeel(uusKeel);
  localStorage.setItem("keel", uusKeel);
}

const emailLuger = useRef();

const telefonLuger= useRef();

const salvestaEmail = () => {
  localStorage.setItem("email", emailLuger.current.value)
}

const salvestaTelefon = () => {
  localStorage.setItem("telefon", telefonLuger.current.value )
}

  return (
    <div>
      <label>Email</label>
      <input ref={emailLuger} defaultValue={localStorage.getItem("email")}type="text" />
      <button onClick={salvestaEmail}>Sisesta</button>
      <br />
      <label>Telefoninumber</label>
      <input ref={telefonLuger} defaultValue={localStorage.getItem("telefon")} type="text" />
      <button onClick={salvestaTelefon}>Sisesta</button>
      <br />
      <button onClick={() => muudaKeel("ee")}>Eesti</button>
      <button onClick={() => muudaKeel("en")}>English</button>
      <button onClick={() => muudaKeel("ru")}>Pycckuj</button>
      {keel === "ee" && <div>Leht on eesti keeles</div>}
      {keel === "en" && <div>Page is in English</div>}
      {keel === "ru" && <div>leht_on_eesti_keeles RU</div>}
    </div>
  )
}

export default Seaded