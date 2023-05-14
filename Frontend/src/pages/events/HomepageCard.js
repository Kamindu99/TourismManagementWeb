import React, { useState } from "react";
import { Carousel, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import './sportevents.css';

export default function HomepageCard() {

    const [item, setItem] = useState([
        {
            itemname: 'SPORT EVENTS',
            itemDesc: 'With this, you can get Transport, accommodation and event tickets as a package to participate in famous sports events around the world.',
            itemImage: 'https://www.telegraph.co.uk/content/dam/football/2020/10/09/TELEMMGLPICT000241146508_trans_NvBQzQNjv4BqrpfQw2hJyG_yckwxPAr0ggGNY_A2dHyghdflyNWj5P8.jpeg?imwidth=680',
            itemlink: '/Sportpackag'
        },
        {
            itemname: 'CULTURAL EVENTS',
            itemDesc: 'With this, you can get Transport, accommodation and event tickets as a package to participate in famous sports events around the world.',
            itemImage: 'https://ceylontoday.lk/wp-content/uploads/2022/08/2-37.jpg',
            itemlink: '/cultpackag'
        },
        {
            itemname: 'ENTERTAINMENT EVENTS',
            itemDesc: 'With this, you can get Transport, accommodation and event tickets as a package to participate in famous sports events around the world.',
            itemImage: 'https://www.hire4event.com/artistimage/artistphoto/15798814310Book%20singer%20Armaan%20Malik.jpg',
            itemlink: '/enterpackag'
        },
        {
            itemname: 'EDICATIONAL EVENTS',
            itemDesc: 'With this, you can get Transport, accommodation and event tickets as a package to participate in famous sports events around the world.',
            itemImage: 'https://pmd.gov.lk/wp-content/uploads/2023/02/Art-Exhibition-06-1.jpg',
            itemlink: '/educational'
        }

    ]);

    const [trendingEvents, setTrendingEvents] = useState([
        {
            itemname: 'Holi Festival',
            itemDesc: 'Join thousands of satisfied With this, you can get Transport, ous sports events around the world.',
            itemImage: 'https://www.suvidhaaapki.com/wp-content/uploads/2023/02/holi-diwali-holi-festival-happy-holi-Made-with-PosterMyWall.jpg'
        },
        {
            itemname: 'Aluth Kalawak',
            itemDesc: 'Satisfied With this, you can ous sports events around the worl get Transport ous sports events around the world.',
            itemImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVEF_mOXAogt7t_GvUHu6wfnHyqeUTELLzrl8RIcdD2zIRLUmKDtrJcoNLUMP6jIz6vRs&usqp=CAU'
        },
        {
            itemname: 'ICC T20 World Cup 2024',
            itemDesc: 'Join thousands of, ous sports events around the world.',
            itemImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSynV0VQsGo2IaW44wbsauPjU3vyYoAHKfqW0s6ywvARmgyk8ffZqwcwYmBqA6oFB3HI1A&usqp=CAU'
        },
        {
            itemname: 'Book Fair',
            itemDesc: 'Join thousands of satisfied With this, you can get Transport, ous sports events around the world.',
            itemImage: 'https://www.elanka.com.au/wp-content/uploads/2018/09/2018_Colombo_International_Book_Fair.jpg'
        },
        {
            itemname: 'Wesak Kalapaya',
            itemDesc: 'Satisfied With this, you can ous sports events around the  ous sports events around the world.',
            itemImage: 'https://i.ytimg.com/vi/EFT2kRlB8Zc/maxresdefault.jpg'
        },
        {
            itemname: 'Street Food Festival',
            itemDesc: 'Join thousands of satisfied With this, you can get Transport, ous sports events around the world.',
            itemImage: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/street-food-festival-poster-design-template-b995dedb7970283613bae8c46550bb1c_screen.jpg?ts=1650656827'
        },
        {
            itemname: 'Bak Maha Ulela',
            itemDesc: 'Join thousands of, events around the world ous sports events around the world.',
            itemImage: 'https://www.apisrilankan.com/uploads/media/cache/thumbnail_relative_350/files/2023/04/aluthauruduuthsawaya2023-642ae8f9ec0cd8.04666751.jpeg'
        },
        {
            itemname: 'Hiru Mega Blast',
            itemDesc: 'Join thousands of satisfied With this, you can get Transport, ous sports events around the world.',
            itemImage: 'https://i.ytimg.com/vi/dJI9wm5iuMI/maxresdefault.jpg'
        }
    ])

    // Divide the trending events into groups of four
    const groupedEvents = trendingEvents.reduce((acc, event, index) => {
        if (index % 4 === 0) {
            acc.push([]);
        }
        acc[acc.length - 1].push(event);
        return acc;
    }, []);

    return (
        <div>
            <Navbar />
            <Header />
            <div >

                <Card className="hometracard" style={{ color: 'white', marginTop: '-23%', paddingBottom: '30px', paddingTop: '30px', width: '100%', border: "none" }}>
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

                <div class="container" style={{ marginTop: "50px" }}>
                    <Row xs={1} md={1} className="g-3" id="by" class="rounded">
                        {item.map((item, idx) => (
                            <div class="col-sm-12 col-md-6 col-lg-3 mb-4">
                                <div class="card cardtravelCardpackage text-white card-has-bg click-col" style={{ backgroundImage: `url(${item.itemImage})`, backgroundSize: 'cover' }}>
                                    <div class="card-img-overlay d-flex flex-column">
                                        <div class="card-body">
                                            <h4 class="card-title mt-0 "><a class="text-white" style={{ textDecoration: 'none' }}>{item.itemname}</a></h4>
                                            <small><i class="fas fa-book me-2"></i>Book Now</small>
                                        </div>
                                        <div class="card-footer">
                                            <div class="media">
                                                <div class="media-body">
                                                    <div className="d-flex justify-content-end" style={{ marginTop: '-10%' }}>
                                                        <button className="btn btn-danger sm" onClick={() => { window.location.replace(item.itemlink) }} >
                                                            View Events
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Row>
                </div>
                <h1 class="text-center mt-2" style={{ color: "#000099", fontFamily: "Times New Roman, Times, serif" }}>
                    Trending Events
                </h1>
                {/* <div className="row" style={{ marginInlineStart: '5%', marginInlineEnd: '5%' }}>
                    {trendingEvents.map((trendingEvent, idx) => (
                        <div className="col-md-3">
                            <div className="card mt-3 trendingev">
                                <div className="row no-gutters">
                                    <div className="col-md-6">
                                        <img style={{ height: '200px', objectFit: 'cover', borderRadius: '0' }} className="card-img" src={trendingEvent.itemImage}
                                            alt="Card image cap" />
                                    </div>
                                    <div className="col-md-6" >
                                        <div className="card-body" style={{ position: 'relative', height: '200px', marginLeft: '-14%' }}>
                                            <h5 className="card-title" style={{ color: '#a80319', fontWeight: '700', fontSize: '18px' }}>{trendingEvent.itemname}</h5>
                                            <h5 className="card-title" style={{ color: 'black', fontWeight: '300', fontSize: '12px', fontFamily: 'inherit' }}>
                                                {trendingEvent.itemDesc}
                                            </h5>
                                            <button className="btn btn-warning btn-sm" style={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)', fontSize: '10px', fontWeight: '600', width: "100px" }}>Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}
                <div style={{ marginInlineStart: '5%', marginInlineEnd: '5%' }}>
                    <Carousel className="avac" interval={null} indicators={false} accessKey="">
                        {groupedEvents.map((events, idx) => (
                            <Carousel.Item key={idx}>
                                <div className="row">
                                    {events.map((trendingEvent, index) => (
                                        <div className="col-md-3" key={index}>
                                            <div className="card mt-3 trendingev">
                                                <div className="row no-gutters">
                                                    <div className="col-md-6">
                                                        <img
                                                            style={{ height: '200px', objectFit: 'cover', borderRadius: '0' }}
                                                            className="card-img"
                                                            src={trendingEvent.itemImage}
                                                            alt="Card image cap"
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="card-body" style={{ position: 'relative', height: '200px', marginLeft: '-14%' }}>
                                                            <h5 className="card-title" style={{ color: '#a80319', fontWeight: '700', fontSize: '18px' }}>
                                                                {trendingEvent.itemname}
                                                            </h5>
                                                            <h5
                                                                className="card-title"
                                                                style={{ color: 'black', fontWeight: '300', fontSize: '12px', fontFamily: 'inherit' }}
                                                            >
                                                                {trendingEvent.itemDesc}
                                                            </h5>
                                                            <button
                                                                className="btn btn-warning btn-sm"
                                                                style={{
                                                                    position: 'absolute',
                                                                    bottom: 10,
                                                                    left: '50%',
                                                                    transform: 'translateX(-50%)',
                                                                    fontSize: '10px',
                                                                    fontWeight: '600',
                                                                    width: '100px',
                                                                }}
                                                            >
                                                                Book Now
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>

            </div>
            <Footer />
        </div>
    );
}


