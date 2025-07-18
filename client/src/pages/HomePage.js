// client/src/pages/HomePage.js
import React from 'react';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import VillaGlimpse from '../components/VillaGlimpse';
import Testimonials from '../components/Testimonials';
import PeacockHighlight from '../components/PeacockHighlight'; // <-- IMPORT THE NEW COMPONENT
import CallToAction from '../components/CallToAction';

const HomePage = () => {
    return (
        <>
            <Hero />

            <div className="container">
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px auto' }}>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', lineHeight: '1.7', fontWeight: '500' }}>
                        Get high with nature. Let the clean, cool breeze be your constant companion and the song of peacocks your morning alarm. At JSK Farmstay, you can star-gaze without pollution, watch the sunset over the backwaters, and truly destress amidst lush greenery.
                    </h2>
                </div>
                <Highlights />
            </div>

            {/* --- VVV --- THIS IS THE NEW HIGHLIGHT BANNER --- VVV --- */}
            <PeacockHighlight />
            {/* --- ^^^ --- END OF NEW BANNER --- ^^^ --- */}

            <VillaGlimpse />

            <Testimonials />
            
        </>
    );
};

export default HomePage;