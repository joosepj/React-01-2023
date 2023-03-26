import { useState } from "react";
import "./gallery.css";
import { Carousel, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Gallery() {
    const images = [
        {
            id: 1,
            src: "https://plus.unsplash.com/premium_photo-1671642958879-a928c473405e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            alt: "Image 1",
            
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1570654621852-9dd25b76b38d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            alt: "Image 2",
            
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1679612423147-bc5246818202?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
            alt: "Image 3",
            
        }
    ];

    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };



    return (
        <div>
            <div className="g">
                <div className="g-left">
                    <h1 className="g-title">Pildigalerii</h1>
                    <p className="g-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus natus dolor voluptates quae corporis, voluptatum in esse omnis maxime? Ducimus eius veritatis ipsa praesentium reprehenderit natus repellat itaque, similique quo.</p>
                </div>
                <div className="g-right">
                    <Carousel interval={null}>
                        {images.map((image, index) => (
                            <Carousel.Item key={index} onClick={() => handleImageClick(image)}>
                                <img className="carousel-image" src={image.src} alt={image.alt}/>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedImage?.caption}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img src={selectedImage?.src} alt={selectedImage?.alt} style={{ maxWidth: '100%' }} />
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Gallery