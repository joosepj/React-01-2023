import { Link, Route, Routes } from "react-router-dom";
import Avaleht from "./pages/Avaleht";
import Kaart from "./pages/Kaart";
import Pildid from "./pages/Pildid";
import Videod from "./pages/Videod";


function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to ="/pildid">
        <button>Pildid</button>
      </Link>
      <Link to="/videod">
        <button>Videod</button>
      </Link>
      <Link to="/kaart">
        <button>Kaart</button>
      </Link>

      <Routes>
        <Route path="" exact element={<Avaleht /> } />
        <Route path="pildid" exact element={<Pildid /> } />
        <Route path="videod" exact element={<Videod /> } />
        <Route path="kaart" exact element={<Kaart /> } />
      </Routes>
    </div>
  );
}

export default App;
