import "./map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Icon } from "leaflet";


const markers = [
  {
    geocode: [41.879040813959804, 12.476719858370313],
    popUp: "Ööbimiskoht Testaccio linnaosas"
  },
  {
    geocode: [41.885220982178744, 12.480155005741086],
    popUp: "Apelsini aed vaatega linnale"
  },
  {
    geocode: [41.876430263305245, 12.480852845997813],
    popUp: "Piramide di Caio Cestio - püramiid mis on 2000 aastat vana"
  },
  {
    geocode: [41.89023391943844, 12.492961891964574],
    popUp: "Colosseum"
  },
  {
    geocode: [41.891058035566694, 12.487535140972678],
    popUp: "Rooma foorum"
  },
  {
    geocode: [41.886678786834, 12.484083727345856],
    popUp: "Circo Massimo"
  },
  {
    geocode: [41.894304422073404, 12.482714596383154],
    popUp: "Valgest marmorist uhke mälestusmärk"
  },
  {
    geocode: [41.900881054643015, 12.483362310565953],
    popUp: "Trevi kaev"
  },
  {
    geocode: [41.8983822751506, 12.476784747002206],
    popUp: "Pantheon - kõikide jumalate koda"
  },
  {
    geocode: [41.89877370763909, 12.473150283370874],
    popUp: "Piazza Navona - suur väljak"
  },
  {
    geocode: [41.90337277299673, 12.466382254226195],
    popUp: "Castel Sant'Angelo - hauakamber mis muudetud kindluseks aja jooksul"
  },
  {
    geocode: [41.90221869731051, 12.455814679541241],
    popUp: "Vatikan"
  },
  {
    geocode: [41.8909460126045, 12.47808660964552],
    popUp: "Maailma üks vanimaid sildu mis tänaseni alles"
  },
  {
    geocode: [41.889018244652085, 12.464220578197926],
    popUp: "Vaatepunkt kogu Roomale, taustaks kaugel asetsevad mäed"
  },
  {
    geocode: [41.934306046006995, 12.454359489250654],
    popUp: "Stadio Olimpico - suur ja uhke staadion, seal toimus Lazio-Atalanta mäng"
  },
  {
    geocode: [41.91357548735222, 12.485616647157684],
    popUp: "Villa Borghese - suur park järvede ja erinevate staadionitega"
  },
  {
    geocode: [41.91052522283758, 12.476198620198089],
    popUp: "Piazza del Popolo - suur plats rahva kogunemisteks"
  },
  {
    geocode: [41.90107408393757, 12.50110832645074],
    popUp: "Roma Termini - suur rongi- ja metrooterminal"
  },
];

const customIcon = new Icon ({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/8369/8369817.png",
  iconSize: [35, 35]
})


function Map() {
  return (
    <div className="m">
      <div className="m-desc">
        <h1 className="m-title">Kaart</h1>
        <p className="m-text">see on siis kaart et</p>
      </div>
      <MapContainer center = {[41.89341798721719, 12.486616284814561]} zoom ={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map(marker => (
          <Marker position={marker.geocode} icon={customIcon}>
              <Popup>{marker.popUp}</Popup>
          </Marker>

        ))

      }

      </MapContainer>
    </div>
  )
}

export default Map