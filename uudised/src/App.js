import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Uudised from './pages/Uudised';
import Massiiv from './pages/Massiiv';
import LisaUudis from './pages/LisaUudis';
import HaldaUudiseid from './pages/HaldaUudiseid';
import YksUudis from "./pages/YksUudis";

function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/uudised">
        <button>Uudiste lehele</button>
      </Link>
      <Link to="/kontakt">
        <button>Võta meiega ühendust</button>
      </Link>
      <Link to="/meist">
        <button>Info meist</button>
      </Link>
      <Link to="/massiiv">
        <button>Massiiv</button>
      </Link>
      <Link to="/lisa-uudis">
        <button>Lisa uudis</button>
      </Link>
      <Link to="/halda">
        <button>Halda uudiseid</button>
      </Link>
      <Routes>
        <Route path='' element={ <Avaleht /> } />
        <Route path='uudised' element={<Uudised /> } />
        <Route path='kontakt' element={<Kontakt /> } />
        <Route path='meist' element={<Meist /> } />
        <Route path="massiiv" element={<Massiiv />} />
        <Route path="lisa-uudis" element={<LisaUudis />} />
        <Route path="halda" element={<HaldaUudiseid />} />
        <Route path="uudis/:index" element={<YksUudis />} />
      </Routes>
    </div>
  );
}

export default App;
