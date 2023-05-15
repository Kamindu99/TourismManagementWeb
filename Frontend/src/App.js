import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VehicleList from "./pages/VehicleList/VehicleList";
import VehicleHome from "./pages/VehicleHome/VehicleHome";
import Vehicle from "./pages/vehicle/Vehicle";
import AddVehicle from "./pages/addVehicle/AddVehicle";
import ChangeVehicle from "./pages/changeVehicle/ChangeVehicle";

//events
import AllBookingsSportPackages from './pages/events/SportBookings';
import Sportevents from './pages/events/SportEvents';
import Cultevents from './pages/events/CultureEvents';
import ENTERTAINMENTEVENTS from './pages/events/EntertaitmentEvent';
import SportEventViews from './pages/events/SportEventViews';
import SportEventBookings from './pages/events/EventBooking';
import EventHome from './pages/events/HomepageCard';
import AddEvent from './pages/events/EventAdd';
import EditEvents from './pages/events/EditEvent';
import AllEvent from './pages/events/AllEventsAdmin';

//restaurant
import Home from "./components/Home_Restaurant/Home_Restaurant";
import AddRestaurant from "./components/AddRestaurant/AddRestaurant";
import EditRestaurant from "./components/EditRestaurant/EditRestaurant";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails";
import NavBar from "./components/Nav_Restaurant/Nav_Restaurant";

//hotels
import Hotelhome from "./pages/hotels/Hotelhome";
import HotelBook from "./pages/hotels/HotelBook";
import ViewHotel from "./pages/hotels/ViewHotel";
import HotelAdd from "./pages/hotels/HotelAdd";
import FlightsHome from "./pages/flights/FlightsHome";
import TransportHome from "./pages/Transport/TransportHome";
import EducatinalEvents from "./pages/events/EducationalEvents";
import ResturentsHome from "./pages/Resturents/ResturentsHome";
import Header from "./components/HomeHeader/Header";
import Qr from './pages/events/QR';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Qr/>
      <Routes>
        //travel
        <Route path="/" element={<VehicleHome />} />
        <Route path="/vehicleList" element={<VehicleList />} />
        <Route path="/vehicle/:id" element={<Vehicle />} />
        <Route path="/addVehicle" element={<AddVehicle />} />
        <Route path="/changeVehicle" element={<ChangeVehicle />} />

        //reastaurant
        <Route path="/add" element={<AddRestaurant />} />
        <Route path="/edit/:id" element={<EditRestaurant />} />
        <Route path="/post/:id" element={<RestaurantDetails />} />

        //events
        <Route exact path="/eventhome" element={<EventHome />} />
        <Route exact path="/allbookings" element={<AllBookingsSportPackages />} />
        <Route exact path="/Sportpackag" element={<Sportevents />} />
        <Route exact path="/cultpackag" element={<Cultevents />} />
        <Route exact path="/enterpackag" element={<ENTERTAINMENTEVENTS />} />
        <Route exact path="/educational" element={<EducatinalEvents />} />
        <Route exact path="/sporteventsview/:id" element={<SportEventViews />} />
        <Route exact path="/event-booking/:id/:eventid" element={<SportEventBookings />} />
        <Route exact path="/eventadd" element={<AddEvent />} />
        <Route exact path="/eventedit/:id" element={<EditEvents />} />
        <Route exact path="/admin-event" element={<AllEvent />} />
        

        //hotels
        <Route path="/hotel-home" element={<Hotelhome />} />
        <Route path="/hotelbook" element={<HotelBook />} />
        <Route path="/hotel-view/:id" element={<ViewHotel />} />
        <Route path="/add-hotel" element={<HotelAdd />} />

        //flights
        <Route path="/flights" element={<FlightsHome />} />

        //transport
        <Route path="/transport" element={<TransportHome />} />

        //restaurant
        <Route path="/resturents" element={<ResturentsHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
