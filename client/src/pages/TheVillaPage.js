// client/src/pages/TheVillaPage.js
import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import './TheVillaPage.css';

// --- All three of your curated photo galleries ---
const livingAndDiningImages = [
    { src: "/images/jsk-hall.webp" }, { src: "/images/heartofhome/dining.webp" },
    { src: "/images/heartofhome/patio.webp" }, { src: "/images/heartofhome/hall.webp" },
    { src: "/images/heartofhome/corridor.webp" }, { src: "/images/heartofhome/workspace.webp" },
    { src: "/images/heartofhome/hall2.webp" },
];
const privateComfortsImages = [
    { src: "/images/private/bed.webp" }, { src: "/images/private/room.webp" },
    { src: "/images/private/balc1.webp" }, { src: "/images/private/bed2.webp" },
    { src: "/images/private/balcview.webp" }, { src: "/images/private/bedview.webp" },
    { src: "/images/private/bathroom1.webp" },
];
const outdoorOasisImages = [
    { src: "/images/jsk-exterior.webp" }, { src: "/images/exterior/outfence.webp" },
    { src: "/images/exterior/view.webp" }, { src: "/images/exterior/view2.webp" },
    { src: "/images/exterior/1st.webp" }, { src: "/images/exterior/outfence2.webp" },
];

const TheVillaPage = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxSlides, setLightboxSlides] = useState([]);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const openLightbox = (slides, index) => {
        setLightboxSlides(slides); setLightboxIndex(index); setLightboxOpen(true);
    };

    return (
        <div className="villa-page-container">
            <Lightbox open={lightboxOpen} close={() => setLightboxOpen(false)} slides={lightboxSlides} index={lightboxIndex} plugins={[Thumbnails]} />

            <div className="page-header">
                <h1>A Home Built From the Earth</h1>
                <p>An exclusive 2000 sq ft sanctuary, designed for the soul. At JSK Farmstay, the entire property is yours to experience, ensuring unparalleled privacy and a deep connection with the natural world.</p>
            </div>

            <div className="container">
                {/* Section 1: The Heart of the Home (UNCHANGED) */}
                <div className="villa-section">
                    <div className="villa-text-container">
                        <h2>The Heart of the Home</h2>
                        <p>Step into our expansive main hall, where a soaring, traditional tiled roof and a central wooden swing (jhoola) create an immediate sense of peace and space. This is not just design; it is a living structure.</p>
                        <button className="text-button" onClick={() => openLightbox(livingAndDiningImages, 0)}>View Gallery</button>
                    </div>
                    <div className="villa-image-container">
                        <img src="/images/jsk-hall.webp" alt="Main hall" onClick={() => openLightbox(livingAndDiningImages, 0)} />
                    </div>
                </div>

                {/* --- VVV --- THIS IS THE ONLY CHANGE --- VVV --- */}
                {/* Section 2: Rest & Rejuvenate (with the correct class) */}
                <div className="villa-section reverse">
                {/* --- ^^^ --- END OF THE CHANGE --- ^^^ --- */}
                    <div className="villa-text-container">
                        <h2>Rest & Rejuvenate</h2>
                        <p>Designed to comfortably host large families, the villa offers a variety of flexible sleeping arrangements across three spacious bedrooms, ensuring a restful night for everyone in your group.</p>
                        <button className="text-button" onClick={() => openLightbox(privateComfortsImages, 0)}>View Gallery</button>
                    </div>
                    <div className="villa-image-container">
                        <img src="/images/private/bed.webp" alt="Bedroom" onClick={() => openLightbox(privateComfortsImages, 0)} />
                    </div>
                </div>

                {/* Section 3: An Estate of Your Own (UNCHANGED) */}
                <div className="villa-section">
                     <div className="villa-text-container">
                        <h2>An Estate of Your Own</h2>
                        <p>The villa is nestled within your own secure, 2-acre private property, free from the noise, air, and light pollution of city life. Step outside to find solitude, connect with nature, and create unforgettable family memories.</p>
                        <button className="text-button" onClick={() => openLightbox(outdoorOasisImages, 0)}>View Gallery</button>
                    </div>
                    <div className="villa-image-container">
                        <img src="/images/jsk-exterior.webp" alt="Exterior" onClick={() => openLightbox(outdoorOasisImages, 0)} />
                    </div>
                </div>

                {/* The "About The Villa" section (UNCHANGED) */}
                <div className="villa-summary-section">
                    <h2 className="section-title">About the villa</h2>
                    <p className="summary-text">
                        Our home is a testament to sustainable living, built with <strong>natural laterite stone</strong>, minimal cement, and finished with <strong>eco-friendly cow dung paint</strong>. The entire structure is designed for <strong>natural cross-ventilation</strong>, allowing the cool backwater breeze to flow through freely, often eliminating the need for air conditioning. It's a space that truly breathes with its surroundings, offering a unique and authentic connection to the land.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default TheVillaPage;