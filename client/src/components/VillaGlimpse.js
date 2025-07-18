// client/src/components/VillaGlimpse.js
import React from 'react';
import { Link } from 'react-router-dom';
import './VillaGlimpse.css'; // We will create this CSS file

const VillaGlimpse = () => {
    return (
        <div className="glimpse-section">
            <div className="container">
                <div className="glimpse-grid">
                    <div className="glimpse-image">
                        {/* This uses your new hall image */}
                        <img src="/images/jsk-hall.webp" alt="The spacious main hall of JSK Farmstay" />
                    </div>
                    <div className="glimpse-content">
                        <h2>A Nest Built from the Earth</h2>
                        <p>Our home is not merely built on the land; it is a part of it. Crafted from natural laterite stone and finished with traditional eco-friendly paint, every corner of the villa is designed to breathe with nature, offering a cool, serene, and authentic living experience.</p>
                        <Link to="/the-villa" className="btn">Explore The Villa</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VillaGlimpse;