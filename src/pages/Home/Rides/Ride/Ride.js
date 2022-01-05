import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Ride.css";

const Ride = ({ ride }) => {
    const { _id, img, name, price, description } = ride;
    return (
        <Col>
            <Card className='bg-dark text-white'>
                <div className="card-img">
                    <Card.Img variant="top" src={img} />
                </div>
                <Card.Body style={{ height: "160px", overflow: "hidden" }}>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text >
                        {description.slice(0,80)}...
                    </Card.Text>
                    <Card.Text>
                        <div className='d-flex justify-content-between '>
                            <h4 className='text-primary'>${price}</h4>
                            <NavLink className="bg-secondary rounded-2" to={`/ridebooking/${_id}`}>
                                <button className="read-more-btn text-info bg-secondary rounded-2 p-2">Book <FontAwesomeIcon icon={faArrowRight} /></button>
                            </NavLink>
                        </div>
                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>



    );
};

export default Ride;