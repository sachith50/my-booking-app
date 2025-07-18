// client/src/components/Highlights.js
import React from 'react';
import './Highlights.css';

const highlightsData = [
    { icon: '🌿', title: 'Organic Farming', description: 'Engage with our farm-to-table journey, from planting to plating.' },
    { icon: '🚶‍♀️', title: 'Nature Trails', description: 'Explore lush landscapes and hidden paths with our guided nature walks.' },
    { icon: '🍲', title: 'Traditional Cuisine', description: 'Savor authentic, local dishes prepared with love and the freshest ingredients.' },
    { icon: '🧘', title: 'Peaceful Retreat', description: 'Find your inner calm in a serene environment designed for digital detox.' }
];

const Highlights = () => (
    <div className="highlights-grid">
        {highlightsData.map(item => (
            <div key={item.title} className="highlight-card">
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
        ))}
    </div>
);
export default Highlights;