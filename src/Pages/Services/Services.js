import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch("fackData.json")
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className="container my-5">
            <h1 className="title">Doctor Service</h1>
            <div className="services col-sm-12">
                {doctors.map(doctor => <Service key={doctor.id} doctor={doctor}></Service>)}
            </div>
        </div>
    );
};

export default Services;