import React from 'react';
import { useParams } from 'react-router';

const DoctorDetail = () => {
    // const id = useParams()
    // console.log(id)
    const {Idname} = useParams()
    return (
        <div>
            <h1 className="title">Doctor details {Idname}</h1>
        </div>
    );
};

export default DoctorDetail;