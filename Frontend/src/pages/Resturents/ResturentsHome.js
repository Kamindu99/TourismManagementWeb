import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import './Resturent.css';

function ResturentsHome() {

    const [resturents, setResturents] = useState([
        {
            id: 1,
            name: 'Shangri-La Colombo',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHJhsoP06h7_I890Cph6Pj7oLZgE-Lj3G_NOlwp4Dj6hlnD8eQyb0X51GE2gsQ83QueA&usqp=CAU',
            description: 'KFC is an American fast food restaurant chain headquartered in Louisville.',
            location: 'Colombo',
        },
        {
            id: 2,
            name: 'Central Restaurant',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlK5C5j0i-p_4-GZqlxhGGiTJieXCp02tps6eMhMSBz1XfHiaSfjjF5U1BL31kS_sYgps&usqp=CAU',
            description: 'KFC is an American fast food restaurant chain headquartered in Louisville.',
            location: 'Ratnapura',
        },
        {
            id: 3,
            name: 'King of the Mambo',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhiBSFTe3YTRV7m375fncDSIBpAJecq6W6QHEX-8qy77SoURaU_hWRul4X_pFW9VHD0cU&usqp=CAU',
            description: 'KFC is an American fast food restaurant chain headquartered in Louisville.',
            location: 'Panadura',
        },
        {
            id: 4,
            name: 'The Kingsbury',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVpllJjT2dKWYhNU8pc1jHbUmnzneXWtfxRkNDSH7-VTeiMUA92TPCmYwcy0JyYAmMYsY&usqp=CAU',
            description: 'KFC is an American fast food restaurant chain headquartered in Louisville.',
            location: 'Nugegoda',
        },
        {
            id: 5,
            name: 'Golden Dragon',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyCxW6H19nes3aBMVd1AyJYPVc1zVNB___LrZbmpmrNEvmcPoRwhFl4ibWCPZfHGtSpDs&usqp=CAU',
            description: 'KFC is an American fast food restaurant chain headquartered in Louisville.',
            location: 'Wattala',
        },
        {
            id: 6,
            name: 'Kings Steakbar',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/28/97/c6/swimming-pool-and-prisma.jpg?w=700&h=-1&s=1',
            description: 'KFC is an American fast food restaurant chain headquartered in Louisville.',
            location: 'Kadawatha',
        },
        {
            id: 7,
            name: 'Sake Colombo',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2MqeuNsokafPkdBre5zBLrwkFkfiafy035ijMLCRHJhUURxRKtstTNfkLIUeDSipAH0&usqp=CAU',
            description: 'KFC is an American fast food restaurant chain headquartered in Louisville.',
            location: 'Horana',
        },
        {
            id: 8,
            name: 'Ports of Call',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr-Wdqg5IkqhMCpu_p4GWWgLk4qkeEWItOnh501bl6UQk7yAb5-nTWCFTKv4WoxF9qCis&usqp=CAU',
            description: 'KFC is an American fast food restaurant chain headquartered in Louisville.',
            location: 'Piliyandala',
        },
    ])

    return (
        <div>
            {/* <Navbar />
            <Header /> */}
            <>
            
                <Card style={{ border: '0', borderRadius: '0', marginInlineStart: '9%', marginInlineEnd: '9%',marginTop:'3%' }}>
                    <Card.Img variant="top" style={{ height: '200px', objectFit: 'cover' }} src="https://architecture.live/wp-content/uploads/2016/12/7b44e3ca686bae1f4f2cb1f9a5ee246b.jpg" />
                    <Card.Body>
                        <Card.Text >
                            The best resturents in Sri Lanka are here for you to find out and enjoy your meal with your loved ones.
                            Thank you for visiting our website and we hope you will enjoy your meal with your loved ones
                        </Card.Text>
                        <Card.Text style={{ fontSize: '26px', fontWeight: '700' }}>
                            Here you can find the best resturents in Sri Lanka
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />

                <div class="row text-center text-lg-start" style={{ marginInlineStart: '10%', marginInlineEnd: '10%' }}>
                    {resturents.map((resturent, idx) => (
                        <>
                            <div class="col-lg-4 col-md-4 col-6 mb-5">
                                <div className='card cardResturent' style={{ height: '270px', cursor: 'pointer' }}>
                                    <img
                                        style={{ height: '170px', objectFit: 'cover' }}
                                        class="img-fluid"
                                        src={resturent.image}
                                        alt=""
                                    />
                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <p style={{ fontSize: '15px', color: 'red', textAlign: 'center' }} class="mt-2 ms-2" >{resturent.location}</p>
                                            <p class="mt-2 ms-2" style={{ fontSize: '12px', color: 'gray', textAlign: 'center' }} >Free Book</p>
                                        </div>
                                        <div className="col-md-8">
                                            <h5 class="mt-2 " >{resturent.name}</h5>
                                            <p class="mt-2 " style={{ fontSize: '12px' }} >{resturent.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </>
            <Footer />
        </div>
    )
}

export default ResturentsHome