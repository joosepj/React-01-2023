import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import LisaTegelane from './pages/LisaTegelane';
import ValitudTegelased from './pages/ValitudTegelased';
import TegelaseLisamine from './pages/TegelaseLisamine';


function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="lisa-tegelane">
        <button>Lisa tegelane</button>
      </Link>
      <Link to="valitud-tegelased">
        <button>Tegelased</button>
      </Link>
      <Link to="tegelase-lisamine">
        <button>Tegelase lisamine</button>
      </Link>
    <Routes>
      <Route path="" element={ <Avaleht />} />
      <Route path="lisa-tegelane" element={ <LisaTegelane />} />
      <Route path="valitud-tegelased" element={ <ValitudTegelased />} />
      <Route path="tegelase-lisamine" element={<TegelaseLisamine />} />
    </Routes>
    </div>
  );
}

export default App;
