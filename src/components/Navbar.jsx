import React, { useState } from 'react';
import './Navbar.css'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar"
        // data-aos="fade-down"
        // data-aos-duration="1000"
        
        >
            <div className="navbar__logo">
                <span>Dheeraj Kumar</span>
            </div>
            <div className={`navbar__links ${isMenuOpen ? 'active' : ''}`}>
                <a href="#home" className="navbar__link">Home</a>
                <a href="#about" className="navbar__link">About</a>
                <a href="#experience" className="navbar__link">Experience</a>
                <a href="#skills" className="navbar__link">Skills</a>
                <a href="#projects" className="navbar__link">Projects</a>
                <a href="#contact" className="navbar__link">Contact Me</a>
            </div>
            <div className="navbar__hamburger" onClick={toggleMenu}>
                <span className="hamburger-icon"></span>
                <span className="hamburger-icon"></span>
                <span className="hamburger-icon"></span>
            </div>
        </nav>
    );
};

export default Navbar;
