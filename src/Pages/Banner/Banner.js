import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="banner-container">
                <div className="banner-searchBtn">
                    <h1>Search To Find Your Disease</h1>
                    <input type="text" placeholder="Search Your disease"/>
                    <button className="searchBtn">Search</button>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;