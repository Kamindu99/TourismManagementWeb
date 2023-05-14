import React, { useState, useEffect } from "react"
import axios from "axios";
import { Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import './sportevents.css'
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Alert from "../../utils/Alert";

export default function ExampleBook() {

    const { id, eventid } = useParams();
    const [foodItems, setFoodItems] = useState([])
    const [ticketList, setTickets] = useState([]);
    const [accomendationlist, setAccomendationList] = useState([]);
    const [transportlist, setTransportList] = useState([]);
    const [total, setTotal] = useState()

    useEffect((e) => {
        //Runs on every render

        axios.get(`/sportevent/${id}/${eventid}`).then(res => [
            setFoodItems(res.data),
            setTickets(res.data.tickets),
            setAccomendationList(res.data.accomendation),
            setTransportList(res.data.transport)
        ])
            .catch((error) => console.log(error));
    }, []);

    let navigate = useNavigate();


    const [bookpackage, setbookPackage] = useState({ id: 0, name: "Select Package" })
    const [basicpackage, setbasicPackage] = useState({ id: 0, name: "Select Basic Package" })
    const [ticket, setTicket] = useState({ ticketprice: "0", ticketName: "Select Ticket Category" })
    const [accomndation, setAccomndation] = useState({ aprice: "0", accomndationName: "Select Accommodation" })
    const [transport, setTransport] = useState({ tprice: "0", transportName: "Select Transport Service" })

    //select package category
    const [packages, setPackages] = useState([
        {
            id: 1,
            name: "Basic Package"
        },
        {
            id: 2,
            name: "Custom Package"
        }
    ]);

    const onclick4 = (item) => {
        setbookPackage(item)
        if (item.id == 1) {
            setTotal(0)
        }
        else {
            setTicket({
                ticketprice: "0",
                ticketName: "Select Ticket Category"
            })
            setAccomndation({
                aprice: "0",
                accomndationName: "Select Accommodation"
            })
            setTransport({
                tprice: "0",
                transportName: "Select Transport Service"
            })
        }
    }
    //end of select package category


    //select basic package
    const [mybasicPackages, setMyBasicPackages] = useState([])
    useEffect(() => {

        if (ticketList.length > 1 && accomendationlist.length > 1 && transportlist.length > 1) {
            if (ticketList.length > 2 && accomendationlist.length > 2 && transportlist.length > 2) {
                setMyBasicPackages([
                    {
                        id: 1,
                        ticketprice: ticketList[0]?.ticketprice,
                        ticketName: ticketList[0]?.ticketName,
                        aprice: accomendationlist[0]?.accomendationprice,
                        accomndationName: accomendationlist[0]?.accomendationName,
                        tprice: transportlist[0]?.transportprice,
                        transportName: transportlist[0]?.transportName
                    },
                    {
                        id: 2,
                        ticketprice: ticketList[1]?.ticketprice,
                        ticketName: ticketList[1]?.ticketName,
                        aprice: accomendationlist[1]?.accomendationprice,
                        accomndationName: accomendationlist[1]?.accomendationName,
                        tprice: transportlist[1]?.transportprice,
                        transportName: transportlist[1]?.transportName,
                    },

                    {
                        id: 3,
                        ticketprice: ticketList[2]?.ticketprice,
                        ticketName: ticketList[2]?.ticketName,
                        aprice: accomendationlist[2]?.accomendationprice,
                        accomndationName: accomendationlist[2]?.accomendationName,
                        tprice: transportlist[2]?.transportprice,
                        transportName: transportlist[2]?.transportName,
                    }
                ]);
            }
            else {
                setMyBasicPackages([
                    {
                        id: 1,
                        ticketprice: ticketList[0]?.ticketprice,
                        ticketName: ticketList[0]?.ticketName,
                        aprice: accomendationlist[0]?.accomendationprice,
                        accomndationName: accomendationlist[0]?.accomendationName,
                        tprice: transportlist[0]?.transportprice,
                        transportName: transportlist[0]?.transportName
                    },
                    {
                        id: 2,
                        ticketprice: ticketList[1]?.ticketprice,
                        ticketName: ticketList[1]?.ticketName,
                        aprice: accomendationlist[1]?.accomendationprice,
                        accomndationName: accomendationlist[1]?.accomendationName,
                        tprice: transportlist[1]?.transportprice,
                        transportName: transportlist[1]?.transportName,
                    },
                ]);
            }
        }
        else {
            setMyBasicPackages([
                {
                    id: 1,
                    ticketprice: ticketList[0]?.ticketprice,
                    ticketName: ticketList[0]?.ticketName,
                    aprice: accomendationlist[0]?.accomendationprice,
                    accomndationName: accomendationlist[0]?.accomendationName,
                    tprice: transportlist[0]?.transportprice,
                    transportName: transportlist[0]?.transportName
                }
            ]);
        }

    }, [ticketList, accomendationlist, transportlist])



    const onclick5 = (item) => {
        setTicket({
            ticketprice: item.ticketprice,
            ticketName: item.ticketName
        })
        setAccomndation({
            aprice: item.aprice,
            accomndationName: item.accomndationName
        })
        setTransport({
            tprice: item.tprice,
            transportName: item.transportName
        })
    }


    //end of select basic packages


    //select ticket category

    const onclick = (item) => {
        setTicket({
            ticketprice: item.ticketprice,
            ticketName: item.ticketName
        })
    }
    //end of select ticket category


    //select accommodation

    const onclick2 = (item) => {
        setAccomndation({
            aprice: item.accomendationprice,
            accomndationName: item.accomendationName
        })
    }
    //end of select accommodation


    //select Transport Services

    const onclick3 = (item) => {
        setTransport({
            tprice: item.transportprice,
            transportName: item.transportName
        })
    }
    //end of select accommodation


    //set Total Price calculation
    useEffect(() => {
        setTotal(
            parseInt(transport.tprice) + parseInt(ticket.ticketprice) + parseInt(accomndation.aprice)
        )

    }, [transport, ticket, accomndation])

    //end total pprice calculation
    const [check, setcheck] = useState('');


    const onSubmit = async (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        const foodOrder = {
            eventrname: foodItems.eventName,
            eventDate: foodItems.eventDate,
            eventTime: foodItems.eventTime,
            eventLocation: foodItems.eventLocation,
            ticketPrice: ticket.ticketName,
            accomendation: accomndation.accomndationName,
            transport: transport.transportName,
            total: total
        };
        await axios.post("/sportbooking/add", foodOrder)
            .then((res) => {
                setAlertProps({
                    title:"Success",
                    description:"You have successfully Booked the Event",
                    handleClose:{handleClose},
                    show:{show},
                    alertAction:() => {
                        return (
                            <>
                                <Button variant="primary" onClick={() => { window.location.href = "/eventhome" }}>
                                    Continue
                                </Button>
                            </>)
                    }
                })
            });
    };

    //alert
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [alertProps, setAlertProps] = useState({});
    //end of alert

    return (
        <div>
            <Navbar />
            <Header />
            <div className="info">
                <div id="booking" class="section">
                    <div class="section-center">
                        <div class="container">
                            <div class="row" id="bokrow">
                                <div class="col-md-6 col-md-push-5">
                                    <div class="booking-cta">
                                        <h1>Make Your</h1>
                                        <h1>Reservation</h1>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere, soluta magnam consectetur molestias itaque
                                            ad sint fugit architecto incidunt iste culpa perspiciatis possimus voluptates aliquid consequuntur cumque quasi.
                                            Perspiciatis.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-6 col-md-pull-7">
                                    <div class="booking-form mt-2 mb-2">
                                        <form onSubmit={onSubmit} >
                                            <div class="row" id="bokrow">
                                                <div class="col-sm-3">
                                                    <div class="form-group">
                                                        <span class="form-label">Event Name</span>
                                                        <input type="text"
                                                            className="form-control"
                                                            name="roomType"
                                                            placeholder=""
                                                            value={foodItems.eventName}
                                                            disabled
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-sm-3">
                                                    <div class="form-group">
                                                        <span class="form-label">Place</span>
                                                        <input type="text"
                                                            className="form-control"
                                                            name="capacity"
                                                            placeholder=""
                                                            value={foodItems.eventLocation}
                                                            disabled
                                                        //  onChange={this.handleInputChange}
                                                        />
                                                        <span class="select-arrow"></span>
                                                    </div>
                                                </div>
                                                <div class="col-sm-3">
                                                    <div class="form-group">
                                                        <span class="form-label">Date</span>
                                                        <input type="text"
                                                            className="form-control"
                                                            name="capacity"
                                                            placeholder=""
                                                            value={foodItems.eventDate}
                                                            disabled
                                                        //  onChange={this.handleInputChange}
                                                        />
                                                        <span class="select-arrow"></span>
                                                    </div>
                                                </div>
                                                <div class="col-sm-3">
                                                    <div class="form-group">
                                                        <span class="form-label">Time</span>
                                                        <input type="text"
                                                            className="form-control"
                                                            name="capacity"
                                                            placeholder=""
                                                            value={foodItems.eventTime}
                                                            disabled
                                                        //  onChange={this.handleInputChange}
                                                        />
                                                        <span class="select-arrow"></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <span class="form-label"> Package Category</span>
                                                <br />

                                                <div class="dropdown " style={{ width: '100%' }} >
                                                    <button style={{ textAlign: "left", fontSize: "19px" }} class="form-control input dropdown-toggle dropdown-toggle2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        {bookpackage.name}
                                                    </button>

                                                    <ul class="dropdown-menu" style={{ width: "100%", cursor: "pointer" }}>
                                                        {packages.map((eq, idx) => (
                                                            <li><a class="dropdown-item" onClick={() => { onclick4(eq) }} >{eq.name}</a></li>
                                                        ))}
                                                    </ul>

                                                </div>
                                            </div>


                                            <div class="form-group" hidden={bookpackage.id != 1}>
                                                <span class="form-label"> Basic Packages</span>
                                                <br />
                                                <Row xs={1} md={1} className="g-4" id="by" class="rounded">
                                                    {mybasicPackages.map((eq, idx) => (
                                                        <div style={{ width: "200px" }}>
                                                            <div class="card" style={check === `${eq.id}` ? { border: '5px solid #000' } : null} onClick={() => setcheck(`${eq.id}`, onclick5(eq))}>
                                                                <h6 class="card-title p-2">Package {eq.id}</h6>
                                                                <div class="card-subtitle  text-muted p-3" >
                                                                    <h6 style={{ fontSize: '12px' }}> 1. {eq.ticketName}</h6>
                                                                    <h6 style={{ fontSize: '12px' }}> 2. Accomndation in {eq.accomndationName}</h6>
                                                                    <h6 style={{ fontSize: '12px' }}> 3. Transport by {eq.transportName}</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </Row>
                                            </div>


                                            <div class="form-group" hidden={bookpackage.id != 2}>
                                                <span class="form-label">Ticket Category</span>
                                                <br />

                                                <div class="dropdown " style={{ width: '100%' }} >
                                                    <button disabled={bookpackage.id == 1} style={{ textAlign: "left", fontSize: "19px" }} class="form-control input dropdown-toggle dropdown-toggle2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        {ticket.ticketName} - Rs.{ticket.ticketprice}
                                                    </button>

                                                    <ul class="dropdown-menu" style={{ width: "100%", cursor: "pointer" }}>
                                                        {ticketList.map((eq, idx) => (
                                                            <li><a class="dropdown-item" onClick={() => { onclick(eq) }} >{eq.ticketName} - Rs.{eq.ticketprice}</a></li>
                                                        ))}
                                                    </ul>

                                                </div>
                                            </div>


                                            <div class="form-group" hidden={bookpackage.id != 2}>
                                                <span class="form-label">Accommodation</span>
                                                <br />

                                                <div class="dropdown " style={{ width: '100%' }} >
                                                    <button disabled={bookpackage.id == 1} style={{ textAlign: "left", fontSize: "19px" }} class="form-control input dropdown-toggle dropdown-toggle2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        {accomndation.accomndationName} - Rs.{accomndation.aprice}
                                                    </button>

                                                    <ul class="dropdown-menu" style={{ width: "100%", cursor: "pointer" }}>
                                                        {accomendationlist.map((eq, idx) => (
                                                            <li><a class="dropdown-item" onClick={() => { onclick2(eq) }} >{eq.accomendationName} - Rs.{eq.accomendationprice}</a></li>
                                                        ))}
                                                    </ul>

                                                </div>
                                            </div>


                                            <div class="form-group" hidden={bookpackage.id != 2}>
                                                <span class="form-label">Transport Services</span>
                                                <br />

                                                <div class="dropdown " style={{ width: '100%' }} >
                                                    <button disabled={bookpackage.id == 1} style={{ textAlign: "left", fontSize: "19px" }} class="form-control input dropdown-toggle dropdown-toggle2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        {transport.transportName} - Rs.{transport.tprice}
                                                    </button>

                                                    <ul class="dropdown-menu" style={{ width: "100%", cursor: "pointer" }}>
                                                        {transportlist.map((eq, idx) => (
                                                            <li><a class="dropdown-item" onClick={() => { onclick3(eq) }} >{eq.transportName} - Rs.{eq.transportprice}</a></li>
                                                        ))}
                                                    </ul>

                                                </div>
                                            </div>
                                            <hr />

                                            <div class="form-group">
                                                <span class="form-label">Total Price</span>
                                                <input type="email"
                                                    className="form-control"
                                                    name="total"
                                                    placeholder=""
                                                    value={`Rs.${total}`}
                                                    // onChange={this.handleInputChange}
                                                    required
                                                    disabled />
                                            </div>
                                            <div>
                                                <div class="">
                                                    <button class="btn btn-secondary" type="submit" style={{ backgroundColor: "#192c3e", width: "100%" }}>
                                                        Confirm Booking
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Alert {...alertProps} />
            <Footer />
        </div >
    )
}