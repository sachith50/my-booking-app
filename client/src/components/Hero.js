// client/src/components/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <video autoPlay loop muted playsInline className="hero-video">
                {/* --- VVV THIS PATH IS NOW CORRECT VVV --- */}
                <source src="/videos/jsk-backwaters.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-headline">A Farmstay on the Backwaters</h1>
                <p className="hero-subheadline">An exclusive retreat for families and groups to destress, rejuvenate, and reconnect with nature.</p>
                <Link to="/contact-us" className="btn">Book Your Stay</Link>
            </div>
        </section>
    );
};
export default Hero;