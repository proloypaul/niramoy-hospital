import React from 'react';
import { useParams } from 'react-router';

const DoctorDetail = () => {
    // const id = useParams()
    // console.log(id)
    const {Idname} = useParams()
    return (
        <div className="text-center my-5" >
            <h1 className="title">Doctor Id {Idname}</h1>
        </div>
    );
};

export default DoctorDetail;