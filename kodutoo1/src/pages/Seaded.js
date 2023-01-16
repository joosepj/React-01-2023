import { useState } from 'react';

function Seaded() {
  const [kujundus, muudaKujundus] = useState(localStorage.getItem("veebilehe_kujundus"));

  // const tumeLeht = () => {
    // localStorage.setItem("veebilehe_kujundus", "dark_mode");
    // muudaKujundus("dark_mode");
  // }
  // 
  // const heleLeht = () => {
    // localStorage.setItem("veebilehe_kujundus", "light_mode");
    // muudaKujundus("light_mode");
  // }

  // const punaneLeht = () => {
    // localStorage.setItem("veebilehe_kujundus", "red_mode");
    // muudaKujundus("red_mode");
  // }
  // 
  const muudaLeheMode = (vahetaMode) => {
    muudaKujundus(vahetaMode);
    localStorage.setItem("veebilehe_kujundus",vahetaMode)
  }



  return (
    <div>
      <button onClick={() => muudaLeheMode("dark_mode")}>Tume leht</button>
      <button onClick={() => muudaLeheMode("light_mode")}>Hele leht</button>
      <button onClick={() => muudaLeheMode("red_mode")}>Punane leht</button>
      { kujundus==="dark_mode" && <div>TUME LEHT</div>}
      { kujundus==="light_mode" && <div>HELE LEHT</div>}
      { kujundus==="red_mode" && <div>PUNANE LEHT</div>}
    </div>

  )
}

export default Seaded