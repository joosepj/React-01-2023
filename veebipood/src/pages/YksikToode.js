import { useParams } from 'react-router-dom'

function YksikToode() {
  const { index } = useParams();
  const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
  const leitudToode = tooted[index];


  return (
    <div>
      {leitudToode === undefined && <div>Toodet ei leitud</div>}
      {leitudToode !== undefined &&
       <div>
          <img src={leitudToode.pilt} alt="" />
          <div>{leitudToode.nimi}</div>
          <div>{leitudToode.hind}</div>
          <div>{leitudToode.pilt}</div>
        </div>}
    </div>
  )
}

export default YksikToode