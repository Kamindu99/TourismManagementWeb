import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button, Form } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './Flights.css'
function FlightsHome() {
    const [flights, setFlights] = useState([
        {
            "id": 1,
            "name": "Bangkok",
            "description": "One way Trip | 2023-04-14",
            "image": "https://c.fareportal.com/gcms/portals/2/images/destinations/BKK-r2x.jpg",
            "price": 200
        },
        {
            "id": 2,
            "name": "India",
            "description": "One way Trip | 2023-04-14",
            "image": "https://c.fareportal.com/gcms/portals/2/images/destinations/MNL-r2x.jpg",
            "price": 100
        },
        {
            "id": 3,
            "name": "America",
            "description": "One way Trip | 2023-04-14",
            "image": "https://c.fareportal.com/gcms/portals/2/images/destinations/AKL-r2x.jpg",
            "price": 400
        },
        {
            "id": 4,
            "name": "South Africa",
            "description": "One way Trip | 2023-04-14",
            "image": "https://c.fareportal.com/gcms/portals/2/images/destinations/GEO-r2x.jpg",
            "price": 600
        }
    ])
    return (
        <div>
            <Navbar />
            <Header />


            <>
                <Row xs={1} md={2} className="g-4" style={{ marginInlineStart: '5%', marginInlineEnd: '5%', marginBottom: '50px' }}>
                    <Col>
                        <Carousel className='flightscasual' indicators={true}>
                            <Carousel.Item >
                                <img
                                    className="d-block w-100" style={{ height: '150px' }}
                                    src="https://www-cdn.bigcommerce.com/assets/4908CD_PaymentGateways-August2022-Header.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <div className="d-flex justify-content-end" style={{ marginRight: '2%' }}>
                                        <Button variant="btn btn-warning sm" >
                                            Get App
                                        </Button>
                                    </div>
                                </Carousel.Caption>

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100" style={{ height: '150px' }}
                                    src="https://d6xcmfyh68wv8.cloudfront.net/blog-content/uploads/2020/09/life-cycle-of-card-payments-1.png"
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <div className="d-flex justify-content-end" style={{ marginRight: '2%' }}>
                                        <Button variant="btn btn-dark sm" >
                                            Buy Now
                                        </Button>
                                    </div>
                                </Carousel.Caption>

                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col>
                        <Card style={{ height: '150px' }}>
                            <Card.Body>
                                <Card.Title>
                                    Sign Up and Save Up to <span style={{ color: 'red' }}>$15 off</span> our fees
                                </Card.Title>
                                <>on selected regions with a promo code!</>

                                <Form className='mt-3'>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <div className="d-flex">
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter Your Email Address.."
                                                autoComplete="off"
                                                style={{ width: '70%', marginRight: '3%' }}
                                            />
                                            <Button variant="btn btn-primary active sm" >
                                                Get Promo Code !
                                            </Button>
                                        </div>
                                    </Form.Group>

                                </Form>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </>

            <div style={{ marginInlineStart: '8%' }}>
                <h4 className='mb-4'> Sample Deals from Colombo*</h4>
                <div className='mb-4'>
                    <Button variant="secondary" className='me-3 active' style={{width:'150px'}}>All</Button>
                    <Button variant="light" className='me-3 active'style={{width:'150px'}}>One Way</Button>
                    <Button variant="light"  className='me-3 active'style={{width:'150px'}}>Round Trip</Button>
                </div>

            </div>

            <div style={{ marginInlineStart: '8%', marginInlineEnd: '8%' }} >
                <Row xs={1} md={2} className="g-4">
                    {flights.map((flight, idx) => (
                        <Col>
                            <Card >
                                <Card.Img variant="top" src={flight.image} style={{ width: "100%", height: "290px" }} />
                                <Card.Body >
                                    <Card.Title style={{ fontWeight: '600' }}>{flight.name}</Card.Title>
                                    <Card.Text style={{ fontSize: '12px', marginTop: '-1%', marginBottom: '-1%' }}>
                                        {flight.description}
                                    </Card.Text>
                                    <Card.Text style={{ fontWeight: '700', marginTop: '-1%', fontSize: '24px' }}>${flight.price}</Card.Text>
                                    <div className="d-flex justify-content-end" style={{ marginTop: '-10%' }}>
                                        <Button variant="outline-primary sm" >
                                            Book Now
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </div>
            <Footer />
        </div>
    )
}

export default FlightsHome