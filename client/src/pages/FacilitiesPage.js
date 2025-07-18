// client/src/pages/FacilitiesPage.js
import React from 'react';
import './FacilitiesPage.css';

const coreComforts = [
    { name: "2 Spacious Bedrooms", description: "With flexible sleeping arrangements for large groups." },
    { name: "Air Conditioning", description: "Available for use when needed, though our natural design often keeps the house cool." },
    { name: "24/7 Hot Water", description: "Supplied by both a modern boiler and a traditional 'Handeole'." },
    { name: "Power Backup", description: "A high-priority line and UPS are in place to minimize disruptions." },
];

const workAndLeisure = [
    { name: "High-Speed Fiber Internet", description: "Perfect for workations, with UPS backup to stay connected." },
    { name: "Indoor Entertainment", description: "A selection of board games, books, and a dart board." },
    { name: "Child-Friendly Toys", description: "Available to keep younger guests entertained." },
    { name: "No Televisions", description: "To encourage a digital detox and connection with nature." },
];

const propertyAndPracticalities = [
    { name: "Ample & Secure Car Parking", description: "Your vehicle will be safe within our 2-acre compounded property." },
    { name: "Pet-Friendly Policy", description: "Well-behaved pets are welcome (conditions apply)." },
    { name: "Friendly Desi Dog On-site", description: "Can be untied if guests are comfortable." },
    { name: "Doctor on Call", description: "Available for any medical needs." },
];

const kitchenAndDining = [
    { name: "Chargeable Vegetarian Meals", description: "Authentic, local cuisine prepared by our caretaker." },
    { name: "Farm-to-Table Ingredients", description: "We use fresh produce from our farm or nearby villages." },
    { name: "Advance Notice for Meals", description: "Please inform us one day in advance for meal planning." },
    { name: "Guest Cooking Not Permitted", description: "Our staff uses the kitchen to prepare your meals." },
];

const chargeableActivities = [
    { 
        name: "Countryside Cycling", 
        description: "Three adult cycles are available for rent at a nominal charge to explore the beautiful village loops." 
    },
    { 
        name: "Bullock Cart Ride", 
        description: "Experience a traditional bullock cart ride. This can be arranged with advance notice, and payment is made directly to the local vendor." 
    },
];


const FacilitiesPage = () => {
    return (
        <div className="facilities-page-container">
            <div className="page-header">
                <h1>Comforts & Conveniences</h1>
                <p>We've thoughtfully blended rustic charm with essential modern amenities to ensure your stay is seamless, comfortable, and connected to nature.</p>
            </div>

            <div className="container" style={{ paddingBottom: 0 }}>
                <div className="facilities-main-grid">
                    <div className="facility-category-card">
                        <h3>Core Comforts</h3>
                        <ul>{coreComforts.map(f => <li key={f.name}><strong>{f.name}:</strong> {f.description}</li>)}</ul>
                    </div>
                    <div className="facility-category-card">
                        <h3>Work & Leisure</h3>
                        <ul>{workAndLeisure.map(l => <li key={l.name}><strong>{l.name}:</strong> {l.description}</li>)}</ul>
                    </div>
                    <div className="facility-category-card">
                        <h3>Property & Practicalities</h3>
                        <ul>{propertyAndPracticalities.map(p => <li key={p.name}><strong>{p.name}:</strong> {p.description}</li>)}</ul>
                    </div>
                    <div className="facility-category-card">
                        <h3>Kitchen & Dining</h3>
                        <ul>{kitchenAndDining.map(k => <li key={k.name}><strong>{k.name}:</strong> {k.description}</li>)}</ul>
                    </div>
                </div>

                <div className="chargeable-activities-section">
                    <h2>Additional Experiences (Chargeable)</h2>
                    {/* --- VVV THIS IS THE ONLY CHANGE VVV --- */}
                    {/* The inline style is removed and replaced with a new className */}
                    <div className="chargeable-grid">
                        {chargeableActivities.map((activity, index) => (
                            <div key={index} className="facility-category-card">
                                <h3>{activity.name}</h3>
                                <p style={{marginBottom: 0}}>{activity.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="conscious-living-section">
                    <h2>Our Conscious Living Ethos</h2>
                    <p>We believe in giving back to nature. We use natural *shikakai* to clean utensils and request guests to be mindful of waste. We can provide natural soaps and neem twigs for brushing upon request, encouraging a stay that is both luxurious and low-impact.</p>
                </div>
            </div>
        </div>
    );
};

export default FacilitiesPage;