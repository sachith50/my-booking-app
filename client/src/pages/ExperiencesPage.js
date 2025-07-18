// client/src/pages/ExperiencesPage.js
import React from 'react';
import ExperienceSlider from '../components/ExperienceSlider';
import './ExperiencesPage.css';

// --- DATA FOR ON-SITE EXPERIENCES ---
const onSiteExperiences = [
    {
        title: "Nature & Farm Life",
        description: "Reconnect with the earth. Take a guided stroll through live farms under a vast, clear sky, perfect for stargazing. At night, witness the magic of fireflies. For a touch of rustic adventure, try our countryside cycling paths or a traditional bullock cart ride.",
        images: ["/images/jsk-nature1.webp", "/images/jsk-nature2.webp", "/images/jsk-cycle.webp"],
        type: "On-site & Arranged"
    },
    {
        title: "Backwater Serenity",
        description: "Our property sits just 100 meters from the tranquil KRS Backwaters. Enjoy breathtaking sunsets and the unique 'mini ocean' look of Meenakshipura. The calm waters are a haven for a variety of birds, making it a paradise for birdwatchers and photographers.",
        images: ["/images/jsk-backwater1.webp", "/images/jsk-backwater2.webp", "/images/jsk-backwater3.webp"],
        type: "At Your Doorstep"
    },
    {
        title: "Authentic Culinary Journey",
        description: "Taste the true flavors of Karnataka with simple, wholesome vegetarian meals prepared by our caretaker. We specialize in local dishes like Bassaru and Ragi Balls, made with fresh produce from our farm or nearby villages, organic turmeric, and pure ghee. (Note: Food is chargeable).",
        images: ["/images/jsk-food1.webp", "/images/idli.webp", "/images/poori.webp"],
        type: "A Taste of Tradition"
    }
];

// --- DATA FOR NEARBY PLACES WITH MEENAKSHIPURA ADDED ---
const nearbyAttractions = [
    { 
        title: "Meenakshipura", 
        description: "Experience the unique 'mini ocean' feel with vastness and waves at this stunningly scenic backwater spot.",
        image: "/images/attractions/meenakshipura.webp" // Replace with your image
    },
    { 
        title: "Brindavan Gardens", 
        description: "Iconic terraced gardens with musical fountains, just a short drive away.",
        image: "/images/attractions/brindavan.webp"
    },
    { 
        title: "Venugopalaswamy Temple", 
        description: "A stunning, rebuilt temple that was once submerged in the backwaters.",
        image: "/images/attractions/venugopalaswamy.webp"
    },
    { 
        title: "Balmuri & Edmuri Waterfalls", 
        description: "Enjoy these man-made scenic waterfalls, perfect for a refreshing visit.",
        image: "/images/attractions/balmuri.webp"
    },
    { 
        title: "GomataGiri", 
        description: "A famous Jain pilgrimage center with a monolithic statue and panoramic views.",
        image: "/images/attractions/gomatagiri.webp"
    },
    { 
        title: "Chunchankatte Falls", 
        description: "A powerful waterfall on the Kaveri river, surrounded by lush greenery.",
        image: "/images/attractions/chunchankatte.webp"
    }
];


const ExperiencesPage = () => {
    return (
        <div className="experiences-page-container">
            <div className="page-header">
                <h1>Curated Experiences</h1>
                <p>At JSK Farmstay, your stay is an opportunity to connect, explore, and rejuvenate. We offer a blend of on-site activities and local excursions designed to immerse you in the authentic charm of the KRS Backwaters region.</p>
            </div>

            {/* Section for On-Site Experiences */}
            <div className="experiences-list">
                {onSiteExperiences.map((exp, index) => (
                    <div key={index} className={`experience-card ${index % 2 !== 0 ? 'reverse' : ''}`}>
                        <div className="experience-image">
                            <ExperienceSlider images={exp.images} />
                        </div>
                        <div className="experience-text">
                            <span className="experience-type">{exp.type}</span>
                            <h2>{exp.title}</h2>
                            <p>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Section for Nearby Attractions */}
            <div className="nearby-attractions">
                <div className="container">
                    <h2 style={{ textAlign: 'center' }}>Explore the Surroundings</h2>
                    <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px auto' }}>
                        JSK Farmstay is the perfect base to explore the rich history and natural beauty of the region. All locations are a few minutes to an hour's drive away.
                    </p>
                    <div className="attractions-grid">
                        {nearbyAttractions.map((attraction, index) => (
                            <div key={index} className="attraction-card">
                                <div className="attraction-card-image">
                                    <img src={attraction.image} alt={attraction.title} />
                                </div>
                                <div className="attraction-card-content">
                                    <h3>{attraction.title}</h3>
                                    <p>{attraction.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperiencesPage;