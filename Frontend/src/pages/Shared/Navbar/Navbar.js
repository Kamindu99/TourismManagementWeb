import React, { useContext,useState,useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    //const {user, loading, error, dispatch} = useContext(AuthContext);
    const [isSticky, setSticky] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, [])

    const str = window.location.href;

    const isEvent = str.includes("/eventhome");
    const isResturent = str.includes("/resturents");
    const isFlights = str.includes("/flights");
    const isTransport = str.includes("/transport");
    const isHotel = str.includes("/hotel-home");

    let isHome = window.location.href === "https://travelwithkaminu.netlify.app/" || window.location.href.slice(21, ) === "/" ? true : false;

    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${isSticky ? "stickynav" : "normalnav"}`} expand="lg">

            <div className="container-fluid">
                <div className="navbar-heading">
                    <h3 style={{marginLeft:'30px'}}>
                        <Link className="navbar-h" to="/">Travel Life</Link>
                    </h3>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item">
                            <a className={`nav-link me-3 ${isHome?'active':''}`} aria-current="page" href="/">HOME</a>
                        </li>
                        <li className="nav-item active">
                            <a className={`nav-link me-3 ${isHotel?'active':''}`} href="/hotel-home">HOTELS</a>
                        </li>

                        <li className="nav-item">
                            <a href='/eventhome' className={`nav-link me-3 ${isEvent?'active':''}`}>EVENTS</a>
                            {/* <NavLink activeClassName="ContactPage" className={`nav-link me-3 ${isHome?'active':''}`} to="#ContactPage">CONTACT</NavLink> */}
                        </li>

                        <li className="nav-item">
                            {/* <a className={`nav-link me-3 text-white ${isSticky ? "textDark" : "textWhite"}`} href="#BlogContaint">BLOG</a> */}
                            <a className={`nav-link me-3 ${isResturent?'active':''}`} href="/resturents">RESTURENTS</a>
                        </li>

                        <li className="nav-item">
                            <a className={`nav-link me-3 ${isFlights?'active':''}`} href="/flights" >FLIGHTS</a>
                        </li>

                        <li className="nav-item">
                            <a className={`nav-link me-3 ${isTransport?'active':''}`} href="/transport">RENT VEHICLE</a>
                        </li>

                     
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;