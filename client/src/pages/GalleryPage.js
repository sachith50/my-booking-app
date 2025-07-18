// client/src/components/GalleryPage.js
import React from 'react';
// You would fetch these images from your property data in a real scenario
const images = [
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    'https://images.unsplash.com/photo-1613553424168-5613ac02d0b5',
    'https://images.unsplash.com/photo-1594563703937-fdc640497dcd',
    'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf',
    'https://images.unsplash.com/photo-1613647333400-652393f2a878',
];

const GalleryPage = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '40px' }}>Gallery</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px' }}>
                {images.map((src, index) => (
                    <div key={index}>
                        <img src={src} alt={`Gallery image ${index + 1}`} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;