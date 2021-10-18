import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Context/useAuth';
// import useFirebase from '../../Hooks/useFirebase';
import './Header.css';

const Header = () => {
    const {user, signOutProcess} = useAuth();
    return (
        <div>
            
            <nav className="header-container">
                <div className="header-logo">
                    <h1>NiramoyHospital</h1>
                    <div className="register-option">
                        <span>{user.displayName}</span>
                        {user.email ? <button onClick={signOutProcess}><Link to="/register">Sign Out</Link> </button> : <button><Link to="/register">Sign Up</Link> </button>}
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