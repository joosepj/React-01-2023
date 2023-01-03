import { Link } from "react-router-dom"


function Ostukorv() {
  return (
    <div>
        <div>Ostukorv</div>
        <button>Lisa ostukorvi</button>
        <Link to="/">
            Ostukorv on tühi, mine lisa tooteid!
        </Link>
    </div>
  )
}

export default Ostukorv