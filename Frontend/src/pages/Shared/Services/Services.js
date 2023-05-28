import React from 'react';

import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css';

const serviceData = [
    {
        name: 'Flights Booking', 
        img: 'https://www.freeiconspng.com/thumbs/travel-icon-png/plane-travel-flight-tourism-travel-icon-png-10.png',
        desc:'Find the best flight deals and book your ticket today with Travel Me. Flights to more than.'
    },
    {
        name: 'Event Management',
        img: 'https://cdn2.iconfinder.com/data/icons/party-92/48/30_dance_happy_people_fun_party_lifestyle_music-512.png',
        desc:'Event management is the application of project management to the creation and development.'
    },
    {
        name: 'Rent A Car',
        img: 'https://cdn-icons-png.flaticon.com/512/1934/1934273.png',
        desc:'Rent a car is a mobility service that allows customers to rent cars for short periods.'
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5" id="serviceContaint">
            <div className="text-center">
                <h5 className="brand-color">OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="w-75 row">
                    {
                        serviceData.map(service =><ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;