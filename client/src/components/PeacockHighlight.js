// client/src/components/PeacockHighlight.js
import React from 'react';
import './PeacockHighlight.css'; // We will create this CSS file

const PeacockHighlight = () => {
    return (
        <div className="peacock-highlight-section">
            <div className="container">
                <div className="peacock-grid">
                    <div className="peacock-image-container">
                        {/* Make sure you place your image here */}
                        <img src="/images/peacock.webp" alt="A peacock at JSK Farmstay" />
                    </div>
                    <div className="peacock-content">
                        <span className="peacock-icon">🦚</span>
                        <h2>Our Daily Guests</h2>
                        <p>
                            Wake up to the majestic calls of peacocks, our most treasured daily visitors. Enjoy the rare delight of spotting these beautiful birds as they roam freely around the farmstay grounds. It is a truly magical part of the JSK Farmstay experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeacockHighlight;