import React, { useState } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import './Transport.css';
import { Button, Card } from 'react-bootstrap';

function TransportHome() {
    const [transports, setTransports] = useState([
        {
            "id": 1,
            "name": "Electical Car",
            "image": "https://www.holdur.is/static/strevda/1679499849-4852.webp"
        },
        {
            "id": 2,
            "name": "Motor Bike",
            "image": "https://bd.gaadicdn.com/upload/collection/coverImages/5ff6acfca3cb4.jpg"
        },
        {
            "id": 3,
            "name": "Mini Van",
            "image": "https://cdn.vanclan.co/wp-content/uploads/2019/05/bestvan.jpeg"
        },
        {
            "id": 4,
            "name": "4x4 Jeep",
            "image": "https://i.pinimg.com/736x/e6/1c/c7/e61cc7299dd5c668763c61ec3685ab61.jpg"
        }
    ])
    return (
        <div>
            {/* <Navbar />
            <Header /> */}

            <>
            <Card className="hometracard" style={{marginBottom:'30px', color: 'white', paddingBottom: '30px', paddingTop: '30px', width: '100%', border: "none" }}>
                    <Card.Body style={{ marginInlineStart: '9%', marginInlineEnd: '9%' }}>
                        <Card.Title style={{ fontSize: '28px', fontFamily: 'inherit', fontWeight: '800' }}>TRAVELWISE EVENTS IN WORLD</Card.Title>
                        <Card.Text>
                            Music, Dance And Live Events In Colombo
                        </Card.Text>
                        <Card.Text style={{ fontSize: '13px' }}>
                            Make your life happening by enrolling to entertainment events in Colombo. Find a partner through a
                            salsa night or take your partner to live in concerts by upcoming bands in your town. Get high while
                            playing Beer Pong in a pub crawl or attending stand-up comedy events in Colombo. Shake your legs in the
                            happy streets, zumba or dance workshops or go for a film screening in the nearby cafes or theaters.
                        </Card.Text>
                        <Card.Text style={{ fontSize: '13px' }}>
                            Explore Entertainment Events in Colombo.
                        </Card.Text>
                        <Button variant="warning"><i className="far fa-check-square me-2"></i> Subscribe to Event Updates</Button>
                    </Card.Body>
                </Card>
                <div class="row text-center text-lg-start" style={{ marginInlineStart: '10%', marginInlineEnd: '10%' }}>
                    {transports.map((transport, idx) => (
                        <div class="col-lg-3 col-md-4 col-6 transcard">
                            <a href="#" class="d-block mb-4 ">
                                <img
                                    class="img-fluid"
                                    src={transport.image}
                                    alt=""
                                />
                                <div class="carousel-caption" >{transport.name}</div>
                            </a>
                        </div>
                    ))}

                </div>

                <div className="card mt-5" style={{ height: '280px', marginInlineStart: '10%', marginInlineEnd: '12%', border: 'none' }}>
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: '#a80319', fontWeight: '700', fontSize: '16px' }}>Corporate Services</h5>
                                <h5 className="card-title" style={{ color: 'black', fontWeight: '800', fontSize: '22px', fontFamily: 'inherit' }}>Join thousands of satisfied corporate clients around Iceland</h5>
                                <p className="card-text">Europcar Iceland offer corporate services at many locations nationwide. It is this national Iceland coverage that allows us to offer superior levels of service to our customers.</p>
                                <button className="btn btn-warning btn-lg" style={{ fontSize: '16px', fontWeight: '700', width: "170px" }}>Learn More</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img style={{ height: '280px' }} className="card-img" src="https://www.holdur.is/static/strevda/1679501369-4860.webp" alt="Card image cap" />
                        </div>
                    </div>
                </div>

                <div className="card mt-5" style={{ height: '280px', marginInlineStart: '10%', marginInlineEnd: '12%', border: 'none' }}>
                    <div className="row no-gutters">
                    <div className="col-md-6">
                            <img style={{ height: '280px',objectFit: "cover" }} className="card-img" src="https://www.booking-in-italy.com/wp-content/uploads/2019/12/Jeep-Wrangler.jpg" alt="Card image cap" />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: '#a80319', fontWeight: '700', fontSize: '16px' }}>Corporate Services</h5>
                                <h5 className="card-title" style={{ color: 'black', fontWeight: '800', fontSize: '22px', fontFamily: 'inherit' }}>Join thousands of satisfied corporate clients around Iceland</h5>
                                <p className="card-text">Europcar Iceland offer corporate services at many locations nationwide. It is this national Iceland coverage that allows us to offer superior levels of service to our customers.</p>
                                <button className="btn btn-warning btn-lg" style={{ fontSize: '16px', fontWeight: '700', width: "170px" }}>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-5" style={{ height: '280px', marginInlineStart: '10%', marginInlineEnd: '12%', border: 'none' }}>
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: '#a80319', fontWeight: '700', fontSize: '16px' }}>Corporate Services</h5>
                                <h5 className="card-title" style={{ color: 'black', fontWeight: '800', fontSize: '22px', fontFamily: 'inherit' }}>Join thousands of satisfied corporate clients around Iceland</h5>
                                <p className="card-text">Europcar Iceland offer corporate services at many locations nationwide. It is this national Iceland coverage that allows us to offer superior levels of service to our customers.</p>
                                <button className="btn btn-warning btn-lg" style={{ fontSize: '16px', fontWeight: '700', width: "170px" }}>Learn More</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img style={{ height: '280px',objectFit: "cover" }} className="card-img" src="https://motofomo.com/wp-content/uploads/2022/10/Suzuki-DL1050-V-Strom-1050-DE-large-RHS-static-1024x705.jpg" alt="Card image cap" />
                        </div>
                    </div>
                </div>

                <div className="card mt-5" style={{ height: '280px', marginInlineStart: '10%', marginInlineEnd: '12%', border: 'none' }}>
                    <div className="row no-gutters">
                    <div className="col-md-6">
                            <img style={{ height: '280px',objectFit: "cover" }} className="card-img" src="https://static2.tripoto.com/media/filter/tst/img/1233769/TripDocument/1543425981_17854732_10209940081157038_4242792204856277788_o_1.jpg" alt="Card image cap" />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: '#a80319', fontWeight: '700', fontSize: '16px' }}>Corporate Services</h5>
                                <h5 className="card-title" style={{ color: 'black', fontWeight: '800', fontSize: '22px', fontFamily: 'inherit' }}>Join thousands of satisfied corporate clients around Iceland</h5>
                                <p className="card-text">Europcar Iceland offer corporate services at many locations nationwide. It is this national Iceland coverage that allows us to offer superior levels of service to our customers.</p>
                                <button className="btn btn-warning btn-lg" style={{ fontSize: '16px', fontWeight: '700', width: "170px" }}>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>

            <Footer />
        </div>
    )
}

export default TransportHome