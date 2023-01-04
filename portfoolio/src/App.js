import { Link, Route, Routes } from 'react-router-dom'

import './App.css';
import Courses from './pages/Courses';
import Hobbies from './pages/Hobbies';
import Work from './pages/Work';

function App() {
  return (
    <div>
      <img className="main-picture" src="https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
      <div className="rectangle"></div>
      <div className="tekst">Portfoolio leht kodutööna</div>

      <div className="navigation-pictures">
        <Link className="main-link" to="work">
          <img src="https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
          <p>Tööde lehele</p>
        </Link>
        <Link className="main-link" to="hobbies">
          <img src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
          <p>Hobidel lehele</p>
        </Link>
        <Link className="main-link" to="courses">
          <img src="https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
          <p>Kursuste lehele</p>
        </Link>
      </div>
      <Routes>
        <Route path="work" element={<Work /> }/>
        <Route path="hobbies" element={<Hobbies /> }/>
        <Route path="courses" element={<Courses /> }/>
      </Routes>
      <div className="youtube">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/L_LUpnjgPso" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default App;
