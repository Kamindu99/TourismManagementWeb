import React from 'react';
import { Link } from 'react-router-dom';
const HeaderTop = () => {
    return (
        <div style={{ height: "600px", 'width': '100%' }} className="row d-flex align-items-center container">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1 md-mx-5">
                <h1>Join with Travel Me<br />Starts From Here</h1>
                <p className="text-secondary">Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.
                </p>
                <Link to="/appointment" className="btn btn-primary btn-lg shadow rounded"> GET STARTED</Link>

            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <img src='https://st2.depositphotos.com/1252160/10253/i/600/depositphotos_102533324-stock-photo-family-travel-the-world-monument.jpg' className="img-fluid rounded" alt="" />
            </div>
        </div>
    );
};

export default HeaderTop;