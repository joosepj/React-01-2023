import { useState } from "react";
import kasutajadFail from "../kasutajad.json";

function Kasutajad() {
    const [kasutajad, uuendaKasutajad] = useState(kasutajadFail);

    const allBack = () => {
        uuendaKasutajad(kasutajadFail);
    }

    const filterName = () => {
        const tulem = kasutajad.filter(kasutaja => kasutaja.username.length >= 10);
        uuendaKasutajad(tulem)
    }

    const leiaIndexJaKustuta = (kasutaja) => {
        const index = kasutajad.indexOf(kasutaja);
        kasutajad.splice(index,1);
        uuendaKasutajad(kasutajad.slice());
    }

    const leiaIndexLucio = () => {
        const index = kasutajad.findIndex(user => user.email === "Lucio_Hettinger@annie.ca");
        console.log(index);
    }

    const esimeneT2htC = () => {
        const found = kasutajad.find(user => user.name.substring(0,1)=== "C");
        console.log(found);
    }

    const sortByLatitude = () => {
        kasutajad.sort((a,b) => a.address.geo.lat.localeCompare(b.address.geo.lat));
        uuendaKasutajad(kasutajad.slice()) 
    }
    
    const filterByLongtitude = () => {
        const result = kasutajad.filter(user => user.address.geo.lng > 0);
        uuendaKasutajad(result);
    }

    const sumIds = () => {
        let sum = 0;
        kasutajad.forEach(user => sum= sum + user.id);
        console.log(sum);
    }

    const lisaTelNr = () => {
        const result = kasutajad.map(user => ({...user, phone: "000-"+user.phone}));
        uuendaKasutajad(result);
    }

    const replaceAllWithEmails = () => {
        const result = kasutajad.map(user => user.email);
        console.log(result);
    }
    const replaceCatchphraseLetter = () => {
        const result = kasutajad.map(user => (
            {...user, company: {...user.company, catchPhrase: user.company.catchPhrase.replaceAll("a", "e")}}
        ));
        console.log(result);
    }

  return (
    <div>
        <div>{kasutajad.length}</div>
        <button onClick={() => allBack()}>Nulli</button>
        <button onClick={() => filterName()}>Tagasi</button>
        <button onClick={() => leiaIndexLucio()}>Leia Lucio</button>
        <button onClick={() => esimeneT2htC()}>Esimene täht C</button>
        <button onClick={() => sortByLatitude()}>Otsi latituudi järgi</button>
        <button onClick={() => filterByLongtitude()}>Otsi longituudi järgi</button>
        <button onClick={() => sumIds()}> Liida kõikide kasutajade "id"-d </button>
        <button onClick={() => lisaTelNr()}>Lisa tel numbrile 000 ette</button>
        <button onClick={() => replaceAllWithEmails()}>Asenda kõik emailid</button>
        <button onClick={() => replaceCatchphraseLetter()}>Asenda a ja e tähed</button>
        <div>{kasutajad.map(kasutaja =>
        <div>
            <div>{kasutaja.name}</div>
            <div>{kasutaja.id}</div>
            <div>{kasutaja.username}</div>
            <div>{kasutaja.email}</div>
            <div>{kasutaja.address.street}</div>
            <div>{kasutaja.address.suite}</div>
            <div>{kasutaja.address.city}</div>
            <div>{kasutaja.address.zipcode}</div>
            <div>{kasutaja.address.geo.lat}</div>
            <div>{kasutaja.address.geo.lng}</div>
            <div>{kasutaja.phone}</div>
            <div>{kasutaja.website}</div>
            <div>{kasutaja.company.name}</div>
            <div>{kasutaja.company.catchPhrase}</div>
            <div>{kasutaja.company.bs}</div>
            <button onClick={() => leiaIndexJaKustuta(kasutaja)}>X</button>
            <br />
        </div>)}

    </div>
    </div>  
  )
}

export default Kasutajad