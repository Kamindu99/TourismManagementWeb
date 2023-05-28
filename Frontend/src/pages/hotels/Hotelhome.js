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
                  src="https://www.hilton.com/im/en/NoHotel/15196711/shutterstock-269455079.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=-1&rw=641&rh=427/400x260"
                  alt=""
                />
                <div class="carousel-caption" >MULTIPLY YOUR POINTS</div>
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-6 abv">
              <a href="#" class="d-block mb-4 h-100">
                <img
                  class="img-fluid img-thumbnail"
                  src="https://www.hilton.com/im/en/CZMPCHH/16229447/czmpc-hilton-playa-del-carmen-pool-cabanas-08-hdr.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=0&rw=641&rh=427/400x260"
                  alt=""
                />
                <div class="carousel-caption">GET AWAY & SAVE MORE</div>
              </a>
            </div>

            <div class="col-lg-4 col-md-4 col-6 abv">
              <a href="#" class="d-block mb-4 h-100">
                <img
                  class="img-fluid img-thumbnail"
                  src="https://www.hilton.com/im/en/SJDLCHH/3254503/family-pool.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=-1&rw=641&rh=427/400x260"
                  alt=""
                />
                <div class="carousel-caption">A NIGHT ON US</div>
              </a>
            </div>

            <div class="col-lg-4 col-md-4 col-6 abv">
              <a href="#" class="d-block mb-4 h-100">
                <img
                  class="img-fluid img-thumbnail"
                  src="https://www.hilton.com/im/en/SJDLCHH/3254503/family-pool.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=-1&rw=641&rh=427/400x260"
                  alt=""
                />
                <div class="carousel-caption">3 NIGHTS UNDER $250</div>
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-6 abv">
              <a href="#" class="d-block mb-4 h-100">
                <img
                  class="img-fluid img-thumbnail"
                  src="https://www.hilton.com/im/en/NoHotel/16156655/shutterstock-673616299.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=-1&rw=641&rh=427/400x260"
                  alt=""
                />
                <div class="carousel-caption">EARN UP TO 3X POINTS ON EVERY STAY</div>
              </a>
            </div>

            <div class="col-lg-4 col-md-4 col-6 abv">
              <a href="#" class="d-block mb-4 h-100">
                <img
                  class="img-fluid img-thumbnail"
                  src="https://www.hilton.com/im/en/MultiHotel/16296588/conrad-tulum-12131191.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=-1&rw=641&rh=427/400x260"
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