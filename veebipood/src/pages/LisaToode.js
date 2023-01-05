import { useRef, useState } from "react"

function LisaToode() {
  const [sonum, muudaSonum] = useState("Lisa toode!");
  const inputiLuger = useRef();

  // function lisa() {} // täpselt sama mis all

  const lisa = () => {
    if (inputiLuger.current.value === "") {
      muudaSonum("Ei saa tühja nimega toodet lisada!");
    } else {
      muudaSonum("Toode lisatud: " + inputiLuger.current.value);
    }
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Uue toote nimi</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
      <button onClick={lisa}>Lisa</button>
    </div>
  )
}

export default LisaToode