import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';

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
      <Routes>
        <Route path="/" exact element={<div>Tere</div>} />
        <Route path="/tagasiside" exact element={ <Tagasiside />} />
        <Route path="/tagasiside-andjad" exact element={<TagasisideAndjad />} />
      </Routes>
      
    </div>
  );
}

export default App;
