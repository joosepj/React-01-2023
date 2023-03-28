import "./videos.css";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import video1 from "./videofiles/video1.mp4";
import video2 from "./videofiles/video2.mp4";
import video3 from "./videofiles/video3.mp4";

function Videos() {
  return (
    <div className="v">
      <div className="v-desc">
        <h1 className="v-title">Videogalerii</h1>
        <p className="v-text">Mõned valitud klipid. <br></br>Kliki video paremasse või vasakusse serva, et navigeerida erinevate piltide vahel.<br></br>Videol on ka heli.</p>
      </div>
      <div className="v-carousel">
        <Carousel id="videospecific-carousel" interval={null}>
          <Carousel.Item>
            <video className="carousel-video" controls>
              <source src={video1} type="video/mp4" />
            </video>
          </Carousel.Item>
          <Carousel.Item>
            <video className="carousel-video" controls>
              <source src={video2} type="video/mp4" />
            </video>
          </Carousel.Item>
          <Carousel.Item>
            <video className="carousel-video" controls>
              <source src={video3} type="video/mp4" />
            </video>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default Videos;
