import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css";

const Service = (props) => {
    // console.log(props.doctor)
    const {id, doctor, education, img, description, specialist} = props.doctor
    return (
        <div className="container">
            <div className="doctor">
                <div className="doctor-images">
                    <img src={img} alt="Empty!" className="img-fluid"/>
                </div>
                <div className="doctor-title">
                    <h1>{doctor}</h1>
                    <h4>Specialist of {specialist}</h4>
                    <b>{education}</b>
                    <p>{description}</p>
                    <button className="visitBtn"><Link to={`/service:${id}`}>Visit</Link></button>
                </div>
            </div>

        </div>
    );
};

export default Service;