// client/src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // <-- Import the new CSS file

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the mobile menu

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) setScrolled(isScrolled);
        };
        document.addEventListener('scroll', handleScroll, { passive: true });
        return () => document.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    // Function to close the mobile menu whenever a link is clicked
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    // Dynamic styles for the header and links, same as your approved version
    const headerStyle = {
        backgroundColor: scrolled ? 'var(--color-navbar-solid)' : 'transparent',
        borderBottom: scrolled ? '1px solid #444' : '1px solid transparent',
    };
    const linkStyle = { color: scrolled ? '#e8e6e1' : 'white' };
    const brandStyle = { color: scrolled ? '#e8e6e1' : 'white' };
    const hamburgerStyle = { background: scrolled ? '#e8e6e1' : 'white' };

    return (
        <>
            <header className="main-header" style={headerStyle}>
                <Link to="/" className="brand-link" style={brandStyle}>JSK Farmstay</Link>
                
                {/* Desktop Navigation */}
                <nav className="desktop-nav-links">
                    <Link to="/" className="nav-link" style={linkStyle}>HOME</Link>
                    <Link to="/the-villa" className="nav-link" style={linkStyle}>THE VILLA</Link>
                    <Link to="/experiences" className="nav-link" style={linkStyle}>EXPERIENCES</Link>
                    <Link to="/facilities" className="nav-link" style={linkStyle}>FACILITIES</Link>
                    <Link to="/contact-us" className="nav-link" style={linkStyle}>CONTACT US</Link>
                </nav>

                {/* Hamburger Icon for Mobile */}
                <button className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <div style={hamburgerStyle} />
                    <div style={hamburgerStyle} />
                    <div style={hamburgerStyle} />
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/" className="nav-link" onClick={handleLinkClick}>HOME</Link>
                <Link to="/the-villa" className="nav-link" onClick={handleLinkClick}>THE VILLA</Link>
                <Link to="/experiences" className="nav-link" onClick={handleLinkClick}>EXPERIENCES</Link>
                <Link to="/facilities" className="nav-link" onClick={handleLinkClick}>FACILITIES</Link>
                <Link to="/contact-us" className="nav-link" onClick={handleLinkClick}>CONTACT US</Link>
            </div>
        </>
    );
};

export default Navbar;