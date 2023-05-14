import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

function ExampleView() {

    const { id } = useParams();

    const [foodItems, setFoodItems] = useState([]);
    const [food, setFood] = useState();

    useEffect((e) => {
        //Runs on every render

        axios.get(`/sportevent/${id}`).then(res => [

            setFoodItems(res.data.eventsubItems),
            setFood(res.data)
        ])
            .catch((error) => console.log(error));
    }, []);

    let navigate = useNavigate();


    return (
        <div >
            <Navbar />
            <Header />
            <div class=" mt-5 mb-5" >
                <div class="d-flex justify-content-center" >
                    <div class="col-md-10" >
                        <Row xs={1} md={1} className="g-4" id="by" class="rounded">
                            {foodItems.map((eq, idx) => (
                                <div class="row p-2  border rounded " style={{ backgroundColor: "#EEEEEE", marginTop: "30px" }}>
                                    <div class="col-md-3 mt-1">

                                        <img class="img-fluid img-responsive rounded product-image"
                                            style={{ height: '130px', marginTop: "14px" }} src={`${food.eventImage}`} />


                                    </div>

                                    <div class="col-md-6 mt-1">
                                        <h5>{idx + 1}. &nbsp;{eq.eventName}</h5>
                                        <div class="d-flex flex-row">
                                            <span>{eq.eventDate} at {eq.eventTime}</span>
                                        </div>
                                        <div class="mt-1 mb-1 spec-1"><span>100% Perfect</span><span class="dot"></span><span>Light weight</span><span class="dot"></span><span>Best finish<br /></span></div>
                                        <div class="mt-1 mb-1 spec-1"><span>Unique design</span><span class="dot"></span><span>For Agry</span><span class="dot"></span><span>Suberb<br /></span></div>
                                        <p class="text-justify text-truncate para mb-0">There are many variations of passages of Lorem Ipsum available, <br /><br /></p>

                                    </div>
                                    <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                        <div class="d-flex flex-row align-items-center">
                                            <h4 class="mr-1">{eq.eventLocation}</h4>
                                        </div>
                                        <h6 class="text-success">Free Booking</h6>
                                        <div class="d-flex flex-column mt-5">

                                            <button onClick={() => navigate(`/event-booking/${food._id}/${eq._id}`)} class="btn btn-primary btn-sm " type="button" >

                                                Book Now



                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Row>


                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ExampleView