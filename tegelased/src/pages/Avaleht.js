import { useState } from "react";

function Avaleht() {
    const tegelased = [
        {eesnimi:"Mickey", perenimi:"Mouse", elukoht:"Disneyland", vanus: 25},
        {eesnimi:"Minnie", perenimi:"Mouse", elukoht:"Disneyland", vanus: 29},
        {eesnimi:"Winnie", perenimi:"Pooh", elukoht:"Hunderd Acre Wood", vanus: 40},
        {eesnimi:"Roo", perenimi:"Kangaroo", elukoht:"Hundred Acre Wood", vanus: 12},
        {eesnimi:"Scooby", perenimi:"Doo", elukoht:"Crystal Cove", vanus: 50},
    ];
    const [klikitudNimi, uuendaKlikitudNimi] = useState("");

    const kuvaNimi = (tegelane) => {
        // console.log(tegelane.eesnimi);
        uuendaKlikitudNimi(tegelane.eesnimi);
    }

    const valiTegelane = (klikitudTegelane) => {
        let valitudLS = localStorage.getItem("valitudTegelased");
        valitudLS = JSON.parse(valitudLS) || [];
        valitudLS.push(klikitudTegelane);
        valitudLS = JSON.stringify(valitudLS);
        localStorage.setItem("valitudTegelased", valitudLS);
    }

    return (
        <div>
            { klikitudNimi !== "" && <div>Klikkisid tegelase {klikitudNimi} peal</div>}
            {tegelased.map(tegelane =>
                <div>
                    <div>{tegelane.eesnimi}</div>
                    <div>{tegelane.perenimi}</div>
                    <div>{tegelane.elukoht}</div>
                    <div>{tegelane.vanus}</div>
                    <button onClick={() => valiTegelane(tegelane)}>Vali tegelane</button>
                    <button onClick={() => kuvaNimi(tegelane)}>Kuva nimi</button>
                </div>)}
        </div>);
}

export default Avaleht;