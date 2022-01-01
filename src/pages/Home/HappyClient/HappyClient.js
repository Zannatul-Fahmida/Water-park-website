import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faUserNurse, faUsers, faWater } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './HappyClient.css';

const HappyClient = () => {
    return (
        <Container className="bg-info client-container text-white">
            <Row className="py-5">
                <Col xs={6} md={3}>
                <h1><FontAwesomeIcon icon={faUsers} /></h1>
                <h1><span className="number">8,450</span> +</h1>
                <p className="fw-bold">Happy Visitors</p>
                </Col>
                <Col xs={6} md={3}>
                <h1><FontAwesomeIcon icon={faWater} /></h1>
                <h1><span className="number">30</span> +</h1>
                <p className="fw-bold">World Class Rides</p>
                </Col>
                <Col xs={6} md={3}>
                <h1><FontAwesomeIcon icon={faThumbsUp} /></h1>
                <h1><span className="number">15</span> +</h1>
                <p className="fw-bold">Years Of Experience</p>
                </Col>
                <Col xs={6} md={3}>
                <h1><FontAwesomeIcon icon={faUserNurse} /></h1>
                <h1><span className="number">40</span> +</h1>
                <p className="fw-bold">Certified Lifeguard</p>
                </Col>
            </Row>
        </Container>
    );
};

export default HappyClient;