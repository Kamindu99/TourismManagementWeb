import React from 'react';
import './Appointment.css';

const Appointment = () => {
    return (
        <div className="appointment my-5">
            <div className="container">
            <div className="row ">
                <div className="col-md-5 d-none d-md-block">
                    <img src='https://www.froride.com/picFilesSmall/f2g0t__ovrtyctgsp-php9bb2uynbk61.png' alt="" />
                </div>
                <div className="col-md-7 text-white py-5">
                    <h5 className="brand-color text-uppercase">AppointMent</h5>
                    <h1 className="">Make An AppointMent Today </h1>
                    <p> Flight book is a leading online travel company that provides information about latest offers on flights, hotels, car rentals and holiday packages. 
                        We are a one-stop destination for all your travel needs. We offer the best deals on flight bookings, hotel bookings, bus tickets, irctc train tickets, holiday packages, activities and inter-city and point-to-point cabs.
                         </p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Appointment;