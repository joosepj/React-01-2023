import "./gallery.css";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import images from "./imagesGallery.js";

function Gallery() {
    return (
        <div className="g">
            <div className="g-desc">
                <h1 className="g-title">Pildigalerii</h1>
                <p className="g-text">Valik huvitavamatest piltidest.<br></br> Kliki pildi paremasse või vasakusse serva, et navigeerida erinevate piltide vahel. </p>
            </div>
            <div className="g-carousel">
                <Carousel interval={null}>
                    {images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <img className="carousel-image" src={image.src} alt=""/>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default Gallery;
