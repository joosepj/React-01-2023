import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';
import Kasutajad from './pages/Kasutajad';
import Tegevused from './pages/Tegevused';

function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/tagasiside">
        <button>Tagasisided:</button>
      </Link>
      <Link to ="/tagasiside-andjad">
        <button>Tagasiside andjad</button>
      </Link>
      <Link to ="/kasutajad">
        <button>Vaata kasutajaid</button>
      </Link>
      <Link to ="/tegevused">
        <button>Tegevused</button>
      </Link>
      <Routes>
        <Route path="/" exact element={<div>Tere</div>} />
        <Route path="/tagasiside" exact element={ <Tagasiside />} />
        <Route path="/tagasiside-andjad" exact element={<TagasisideAndjad />} />
        <Route path="/kasutajad" exact element={<Kasutajad />} />
        <Route path="/tegevused" exact element={<Tegevused />} />
      </Routes>
      
    </div>
  );
}

export default App;
