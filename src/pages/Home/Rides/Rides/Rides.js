import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import NavTop from '../../../Shared/NavTop/NavTop';
import Ride from '../Ride/Ride';




const Rides = () => {
    const [rides, setRides] = useState([])

    useEffect(()=>{
        fetch('https://waterparkserver.herokuapp.com/rides?fbclid=IwAR2xIDmZ3i123nttAP6V8rJ3CRK2x5K5zu2MVQIuPNz3ube6jElS3lZop8c')
        .then(res=>res.json())
        .then(data=>setRides(data))
    },[])
    console.log(rides)
    return (
        <div >
            <NavTop></NavTop>
            <Navigation></Navigation>
            <Container className='py-5'>
            <h2 className='mb-5'>Our Rides Available Here</h2>
                <Row xs={1} md={3} className="g-4">
                {
                    rides.map(ride=><Ride
                        key={ride._id}
                        ride={ride} 
                        ></Ride>)
                }
                    
                </Row>
            </Container>
                <Footer />
        </div>
    );
};

export default Rides;