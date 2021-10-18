import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch("fackData.json")
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <h1>Doctor Service</h1>
            <div>
                {doctors.map(doctor => <Service key={doctor.id} doctor={doctor}></Service>)}
            </div>
        </div>
    );
};

export default Services;