import { faCheck, faTicketAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './EventPackage.css';

const EventPackage = () => {
    const pricingTable = [
        {
            "packageName": "Entry Ticket",
            "price": "30",
            "time": "4",
            "Rides": false,
            "person": "per person",
            "decoration": "Gaming Zone",
            "catering": "Jumping House"
        },
        {
            "packageName": "Water Park + Park Ride",
            "price": "500",
            "time": "6",
            "person": "20",
            "decoration": "Gaming Zone",
            "catering": "Jumping House",
            "Boating": "Boating"
        },
        {
            "packageName": "Full Package",
            "price": "250",
            "time": "10",
            "person": "50",
            "decoration": "Decoration",
            "catering": "Catering"
        },
        {
            "packageName": "Picnic Spot Booking",
            "price": "1500",
            "time": "2",
            "person": "100",
            "decoration": "Decoration",
            "catering": "Catering"
        }
    ]
    const [pricing, setPricing] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPricing(data))
    }, [])

    const handleOrder = (id) => {
        navigate(`/booking/${id}`)
    }
    return (
        <div className="event-package">
            <Container>
                <div className="header-text">
                    <h6>Choose your package</h6>
                    <h2>Our Events Packages</h2>
                </div>
                <Row>
                    {
                        pricing.map(price => <Col lg={3} md={4} sm={6} xs={12} className="package">
                            <div className="pricing-card">
                                <div className="title">
                                    <FontAwesomeIcon className="fa-icon" icon={faTicketAlt}></FontAwesomeIcon>
                                    <h2>{price.packageName}</h2>
                                </div>
                                <div className="price">
                                    <h4>$ <span>{price.price}</span> <span style={{fontSize: "14px"}}>/per person</span></h4>
                                </div>
                                <div className="option">
                                    <ul>
                                        <li><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>{price.decoration}</li>
                                        <li><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>{price.catering}</li>
                                        <li><FontAwesomeIcon className="fa-icon" icon={price.Rides === false ? faTimes : faCheck}></FontAwesomeIcon>Riding</li>
                                        <li><FontAwesomeIcon icon={price.Boating === "Boating" ? faCheck: faTimes}></FontAwesomeIcon>Boating</li>
                                    </ul>
                                </div>
                                <div className="order-btn" onClick={() => handleOrder(price._id)}>Order Now</div>
                            </div>
                        </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default EventPackage;