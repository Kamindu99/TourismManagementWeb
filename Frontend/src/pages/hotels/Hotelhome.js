import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './hotel.css'
import { Button, Card } from 'react-bootstrap'

function Hotelhome() {
  return (
    <div>
    {/* <Navbar />
    <Header/> */}
    <div >
    <br/>
            <div className="appointment mb-4">
            <div className="container">
            <div className="row " >
                <div className="col-md-4 d-none d-md-block">
                    <img src='https://www.freeiconspng.com/thumbs/hotel-png/hotel-png-4.png' style={{marginTop:'13%',width:'80%',height:'400px',marginLeft:'7%'}} alt="" />
                </div>
                <div className="col-md-8 text-white py-5">
                    <h1 className=""> Hotel Booking from Travelme Today </h1>
                    <p> Hotel Booking is a leading online travel company that provides information about latest offers on flights, hotels, car rentals and holiday packages. 
                        We are a one-stop destination for all your travel needs. We offer the best deals on
                         flight bookings, hotel bookings, bus tickets, irctc train tickets, holiday packages, 
                         activities and inter-city and point-to-point cabs. Find cheap domestic flights to destinations in India or book cheap international flights within minutes.
                         </p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
            </div>
        </div>
    <div>
      <div className=""  >
        <div class="container">
          <h1 class="text-center text-lg-start  mb-4" style={{ color: "#000099", fontFamily: "Times New Roman, Times, serif" }}>
            Experience Somthing New Book Our Latest Offers
          </h1>

          <p>Close to home or across the world. Hilton is there for you with memoriable offers and experiences. Check out what's new.</p>
          <br /><br />
          <div class="row text-center text-lg-start">
            <div class="col-lg-4 col-md-4 col-6 abv">
              <a href="#" class="d-block mb-4 h-100 ">
                <img
                  class="img-fluid img-thumbnail"
                  src="https://media.istockphoto.com/id/1287089651/photo/family-hotel.jpg?s=170667a&w=0&k=20&c=qwMDuRbmaxeBMvM5Jd0SaNqt5m2GOJVWoWmDc6PYIfA="
                  alt=""
                />
                <div class="carousel-caption" >MULTIPLY YOUR POINTS</div>
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-6 abv">
              <a href="#" class="d-block mb-4 h-100">
                <img
                  class="img-fluid img-thumbnail"
                  src="https://media.istockphoto.com/id/1125715165/photo/kids-in-swimming-pool-children-swim-family-fun.jpg?s=612x612&w=0&k=20&c=GC08k84bDRsIYpOTl46Ub1O3XSz1kh4ka8rkEBnQXUo="
                  alt=""
                />
                <div class="carousel-caption">GET AWAY & SAVE MORE</div>
              </a>
            </div>

            <div class="col-lg-4 col-md-4 col-6 abv">
              <a href="#" class="d-block mb-4 h-100">
                <img
                  class="img-fluid img-thumbnail"
                  src="https://media-cdn.tripadvisor.com/media/photo-s/0f/ba/b1/07/lots-of-bright-lights.jpg"
                  alt=""
                />
                <div class="carousel-caption">A NIGHT ON US</div>
              </a>
            </div>

            <div class="col-lg-4 col-md-4 col-6 abv">
              <a href="#" class="d-block mb-4 h-100">
                <img
                  class="img-fluid img-thumbnail"
                  src="https://media.istockphoto.com/id/527523352/fr/photo/petit-d%C3%A9jeuner-en-famille.jpg?s=612x612&w=0&k=20&c=44YTeuGJPZLzOMwCQ35kGYfU94ERcIu0vm-CIJad90I="
                  alt=""
                />
                <div class="carousel-caption">3 NIGHTS UNDER $250</div>
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-6 abv">
              <a href="#" class="d-block mb-4 h-100">
                <img
                  class="img-fluid img-thumbnail"
                  src="https://media.istockphoto.com/id/480473698/photo/family-and-friends-sitting-at-a-dining-table.jpg?s=612x612&w=0&k=20&c=bJAwhllFniQrF-zm4fppy1BaEHbZdiMVYX1458pNaZo="
                  alt=""
                />
                <div class="carousel-caption">EARN UP TO 3X POINTS ON EVERY STAY</div>
              </a>
            </div>

            <div class="col-lg-4 col-md-4 col-6 abv">
              <a href="#" class="d-block mb-4 h-100">
                <img
                  class="img-fluid img-thumbnail"
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/f1/41/a6/welcome-to-caesars-palace.jpg?w=700&h=-1&s=1"
                  alt=""
                />
                <div class="carousel-caption">EARN UP TO 130K POINTS</div>
              </a>
            </div>

          </div>
        </div>
      </div>

    </div>
       
    </div>
    <Footer/>
</div>
  )
}

export default Hotelhome