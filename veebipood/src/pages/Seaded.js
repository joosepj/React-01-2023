import { useRef, useState } from "react";


function Seaded() {
  // HTML uuendus käib läbi useState või URL muutuse
const [keel, uuendaKeel] = useState(localStorage.getItem("keel") || "ee");

const muudaKeelEE = () => {
  uuendaKeel("ee");
  localStorage.setItem("keel","ee"); //salvestus ehk saatmine brauseri lokaalmällu
}

const muudaKeelEN = () => {
  uuendaKeel("en");
  localStorage.setItem("keel","en");
}

const muudaKeelRU = () => {
  uuendaKeel("ru");
  localStorage.setItem("keel","ru");
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
      <input ref={emailLuger} type="text" />
      <button onClick={salvestaEmail}>Sisesta</button>
      <br />
      <label>Telefoninumber</label>
      <input ref={telefonLuger} type="text" />
      <button onClick={salvestaTelefon}>Sisesta</button>
      <br />
      <button onClick={muudaKeelEE}>Eesti</button>
      <button onClick={muudaKeelEN}>English</button>
      <button onClick={muudaKeelRU}>Pycckuj</button>
      {keel === "ee" && <div>Leht on eesti keeles</div>}
      {keel === "en" && <div>Page is in English</div>}
      {keel === "ru" && <div>leht_on_eesti_keeles RU</div>}
    </div>
  )
}

export default Seaded