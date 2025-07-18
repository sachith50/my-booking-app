// client/src/components/CallToAction.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.css'; // We will create this CSS file

const CallToAction = () => {
    return (
        <div className="cta-section">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2>Ready for Your Escape?</h2>
                <p>View our availability, see more photos of the homestay, and book your stay.</p>
                <Link to="/accommodations" className="btn btn-accent" style={{ marginTop: '20px', fontSize: '1.2rem' }}>
                    View Details & Book Now
                </Link>
            </div>
        </div>
    );
};

export default CallToAction;