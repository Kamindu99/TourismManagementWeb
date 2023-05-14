import React, { Component } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import './sportevents.css'
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foods: [],
        };
    }

    componentDidMount() {
        this.retrieveaFoods();
    }
    retrieveaFoods() {
        axios.get("/sportevent/?eventType=ENTERTAINMENT EVENTS").then((res) => {

            this.setState({
                foods: res.data,
            });


        });
    }

    filterData(foods, searchkey) {
        const result = foods.filter(
            (post) =>
                post.eventName.toLowerCase().includes(searchkey) ||
                post.eventName.toUpperCase().includes(searchkey)
        );
        this.setState({ foods: result });
    }

    handleSearchArea = (e) => {
        const searchkey = e.currentTarget.value;

        axios.get("/sportevent/?eventType=ENTERTAINMENT EVENTS").then((res) => {

            this.filterData(res.data, searchkey);

        });
    };

    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <div >


                    <div class=" " style={{ marginTop: "50px" }}>
                        <Row xs={1} md={4} className="g-12" id="by" class="rounded" style={{ marginInlineStart: "40px", marginInlineEnd: "50px" }}>
                            {this.state.foods.map((food, idx) => (
                                <div >
                                    <div class="col-md-! mb-4">
                                        <div class="card-sl cardf-sl cardsh" style={{ marginLeft: "40px" }}>
                                            <div class="card-image cardf-image">
                                                <img
                                                    style={{ height: "250px", width: "100%" }} src={`${food.eventImage}`} />
                                            </div>


                                            <div class="card-heading cardf-heading" style={{ minHeight: '80px' }}>
                                                {idx + 1}. &nbsp;{food.eventName}
                                            </div>
                                            <div class="card-text cardf-text">
                                                Use your Food Factory account to order delivery from The Food Factory.
                                                quadrennial tournament of men's national teams that determines the sport's world champion.
                                                quadrennial tournament of men's national teams that determines the sport's world champion.
                                            </div>
                                            <div class="card-text cardf-text" >

                                                {/* <div class=" lower">
                                                    <div class="text-end" style={{ marginRight: "20px" }} ><h4>Rs. {food.price}</h4></div>
                                                </div> */}


                                            </div>
                                            <a href={`/sporteventsview/${food._id}`} class="card-button cardf-button planta"> View More</a>


                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Row>
                    </div>


                    <br /><br />
                </div>
                <Footer />
            </div>
        );
    }
}


