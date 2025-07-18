// client/src/components/ExperienceSlider.js
import React from 'react';
import Slider from 'react-slick';
import './ExperienceSlider.css';

// Custom Arrow Components for a more elegant look
function NextArrow(props) {
    const { onClick } = props;
    return <div className="custom-arrow next-arrow" onClick={onClick}>→</div>;
}

function PrevArrow(props) {
    const { onClick } = props;
    return <div className="custom-arrow prev-arrow" onClick={onClick}>←</div>;
}

const ExperienceSlider = ({ images }) => {
    const settings = {
        dots: false, // We use arrows, so dots are not needed
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true, // Turn arrows on
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Experience view ${index + 1}`} className="slider-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ExperienceSlider;