import Gallery from "./components/gallery/Gallery";
import Intro from "./components/intro/Intro";
import Map from "./components/map/Map";
import Videos from "./components/videospage/Videos";

function App() {
  return (
    <div>
      <Intro />
      <Gallery />
      <Videos />
      <Map />
    </div>
  );
}

export default App;
