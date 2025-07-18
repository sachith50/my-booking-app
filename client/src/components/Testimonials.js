// client/src/components/Testimonials.js
import React from 'react';
import './Testimonials.css'; // The CSS will be updated as well

// We store the testimonial data in a clean array of objects
const testimonialData = [
    {
        quote: "The property is in a beautiful location surrounded by green farms and KRS backwaters in walkable distance. We had a great secluded stay. It's an ideal place for retreat or relaxation.",
        author: "Dilip",
        detail: "5 years on Airbnb"
    },
    {
        quote: "Absolutely loved our stay! Raghu and Sneha are fantastic hosts. The lake just a 2-minute walk away is stunning at sunset. This property is truly 'wow'. We're definitely coming back!",
        author: "Suraj",
        detail: "8 years on Airbnb"
    },
    {
        quote: "Property is perfect for anyone who wants to unwind and relax, spend quality family time or even for meditation. Very beautiful surroundings located right next to KRS Dam catchment area.",
        author: "Prashanth",
        detail: "10 years on Airbnb"
    }
];

const Testimonials = () => {
    return (
        <div className="testimonial-section container">
            <h2 className="testimonial-main-title">What Our Guests Say</h2>
            <div className="testimonial-grid">
                {testimonialData.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <blockquote className="testimonial-quote">
                            “{testimonial.quote}”
                        </blockquote>
                        <p className="testimonial-author">- {testimonial.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;