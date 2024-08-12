import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../assets/css/Carousel.css';

function ImageSlide({ slides }) {
    return (
        <div style={{ margin: '1rem' }}>
            <Carousel autoPlay infiniteLoop interval={3000} className='carousel'>
                {slides.map((slide, index) => (
                    <div key={index}>
                        <img src={slide.img} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default ImageSlide;
