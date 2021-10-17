import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>Header section</h1>
            <nav className="header-container">
                <div className="header-logo">
                    <h1>NiramoyHospital</h1>
                    <div>
                        <button>SignIn</button>
                    </div>
                </div>
                <div className="header-option">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/services">Services</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;