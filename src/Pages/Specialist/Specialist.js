import React from 'react';
import sonologist from '../../images/specialist/sonologist.jfif';
import nephrology from '../../images/specialist/nephrology.jfif';
import urology from '../../images/specialist/urology.jfif';
import colorectal from '../../images/specialist/colorectal.jpg';
import paralysis from '../../images/specialist/paralysis.jfif';
import radiation from '../../images/specialist/radiation.jpg';
import radiotherape from '../../images/specialist/radiotherape.jfif';
import ratina from '../../images/specialist/ratina.jfif';
import './Specialist.css';

const Specialist = () => {
    return (
        <div className="container my-5 row">
            <h1 className="title text-center">All Specialist</h1>

            <div className="specialist-container my-5 ">
                <div className="specialist">
                    <div>
                        <img src={sonologist} alt="Empty!"/>
                    </div>
                    <h3>Sonologist</h3>
                </div>
                <div className="specialist">
                    <div>
                        <img src={nephrology } alt="Empty!"/>
                    </div>
                    <h3>Nephrology </h3>
                </div>
                <div className="specialist">
                    <div>
                        <img src={urology} alt="Empty!"/>
                    </div>
                    <h3>Urology</h3>
                </div>
                <div className="specialist">
                    <div>
                        <img src={radiation} alt="Empty!"/>
                    </div>
                    <h3>Radiation</h3>
                </div>
                <div className="specialist">
                    <div>
                        <img src={radiotherape} alt="Empty!"/>
                    </div>
                    <h3>Radiotherape</h3>
                </div>
                <div className="specialist">
                    <div>
                        <img src={colorectal} alt="Empty!"/>
                    </div>
                    <h3>Colorectal</h3>
                </div>
                <div className="specialist">
                    <div>
                        <img src={paralysis} alt="Empty!"/>
                    </div>
                    <h3>Paralysis</h3>
                </div>
                <div className="specialist">
                    <div>
                        <img src={ratina} alt="Empty!"/>
                    </div>
                    <h3>Ratina</h3>
                </div>
            </div>
        </div>
    );
};

export default Specialist;