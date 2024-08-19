import React, { useState } from 'react'
import '../pages/home.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    const [isNavOpen, setNavOpen] = useState(false);

    const handleNavToggle = () => {
        setNavOpen(!isNavOpen);
    }

    const handleCloseNav = () => {
        setNavOpen(false);
    }

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                Metaverse Association
            </div>
            <div className={`navbar-links ${isNavOpen ? 'open' : ''}`}>
                <div className="close-btn" onClick={handleCloseNav}>
                    <FontAwesomeIcon icon={faX} />
                </div>
                <Link to="/" onClick={handleCloseNav}>HOME</Link>
                <Link to="/activity" onClick={handleCloseNav}>ACTIVITY</Link>
                <Link to="/login" onClick={handleCloseNav}>LOGIN</Link>
                <Link to="/attendance" onClick={handleCloseNav}>ATTENDANCE</Link>
            </div>
            <div className="bar" onClick={handleNavToggle}>
                <FontAwesomeIcon icon={faBars} /> 
            </div>
        </nav>
    )
}
