import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            
            <nav className="header-container">
                <div className="header-logo">
                    <h1>NiramoyHospital</h1>
                    <div>
                        <button><Link to="/register">Sign Up</Link> </button>
                    </div>
                </div>
                <div className="header-option">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/news">Niramoy News</NavLink>
                    <NavLink to="/specialist">Specialist</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;