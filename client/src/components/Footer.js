// client/src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    // --- THE FIX ---
    // The background now uses the --color-accent variable from your index.css
    footer: { 
        background: 'var(--color-accent, #c5a06d)', 
        color: '#2e392a', // A dark text color for contrast against the gold background
        padding: '50px 0', 
        textAlign: 'center' 
    },
    heading: { 
        fontFamily: 'var(--font-heading)', 
        fontSize: '2.5rem', 
        marginBottom: '20px', 
        color: 'white' // Keep heading white for strong contrast
    },
    text: { 
        maxWidth: '600px', 
        margin: '0 auto 30px auto',
        lineHeight: '1.7',
        color: 'rgba(255, 255, 255, 0.9)' // A slightly softer white for the paragraph
    },
    button: {
        backgroundColor: 'white',
        color: 'var(--color-accent-dark)',
        fontWeight: 'bold',
        // other .btn styles will be applied via className
    }
};

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div className="container" style={{paddingTop: 0, paddingBottom: 0}}>
                <h2 style={styles.heading}>Plan Your Retreat to JSK Farmstay</h2>
                <p style={styles.text}>
                    Send us an enquiry to reserve the entire homestay for an exclusive, unforgettable experience.
                </p>
                <Link to="/contact-us" className="btn" style={styles.button}>
                    Send an Enquiry
                </Link>
            </div>
        </footer>
    );
};

export default Footer;