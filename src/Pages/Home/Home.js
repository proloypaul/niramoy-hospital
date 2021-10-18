import React from 'react';
import Banner from '../Banner/Banner';
import News from '../News/News';
import Services from '../Services/Services';
import Specialist from '../Specialist/Specialist';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <News></News>
            <Specialist></Specialist>
        </div>
    );
};

// https://www.alfredhealth.org
// https://bddoctorlist.com/specialist/

export default Home;