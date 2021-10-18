import React from 'react';
import "./Service.css";

const Service = (props) => {
    // console.log(props.doctor)
    const {doctor, education, img, description, specialist} = props.doctor
    return (
        <div>
            <div className="doctor">
                <div>
                    <img src={img} alt="Empty!"/>
                </div>
                <div className="doctor-title">
                    <h1>{doctor}</h1>
                    <h4>Specialist of {specialist}</h4>
                    <b>{education}</b>
                    <p>{description}</p>
                    <button>Visit</button>
                </div>
            </div>

        </div>
    );
};

export default Service;