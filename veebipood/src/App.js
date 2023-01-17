//import logo from './logo.svg';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';
import Poed from './pages/Poed';
import HaldaTooteid from './pages/HaldaTooteid';
import MuudaToode from './pages/MuudaToode';
import YksikToode from './pages/YksikToode';
import Tooted from './pages/Tooted';
import Books from './pages/Books';

function App() {
  return (
    <div className="App">
      <Link to="/">
      <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt="" />
      </Link>
      <Link to="/ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>
      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>
      <Link to="/meist">
        <button className="nupp">Meist</button>
      </Link>
      <Link to="/seaded">
        <button className="nupp">Seaded</button>
      </Link>
      <Link to="/halda-tooteid">
        <button className="nupp">Halda tooteid</button>
      </Link>
      <Link to="/poed">
        <button className="nupp">Poed</button>
      </Link>
      <Link to="/tooted">
        <button className="nupp">Tooted</button>
      </Link>
      <Link to="/books">
        <button className="nupp">Books</button>
      </Link>

      <Routes>
        <Route path="" element={< Avaleht />} />
        <Route path="ostukorv" element={< Ostukorv />} />
        <Route path="lisa-toode" element={< LisaToode />} />
        <Route path="seaded" element={< Seaded />} />
        <Route path="meist" element={< Meist />} />
        <Route path="halda-tooteid" element={< HaldaTooteid />} />
        <Route path="muuda-toode/:jrkNr" element={< MuudaToode />} />
        <Route path="poed" element={< Poed />} />
        <Route path="tooted" element={< Tooted />} />
        <Route path="vaata-toodet/:index" element={< YksikToode />} />
        <Route path="books" element={< Books />} />
      </Routes>
    </div>
  );
}

export default App;
