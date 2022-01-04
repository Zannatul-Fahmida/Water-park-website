import { faArrowRight, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../images/istockphoto-481689044-612x612.jpg';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="my-5">
            <h6 className="text-info blog-title">Our blog</h6>
            <h2>LATEST BLOG & ARTICLES</h2>
            <p className="text-secondary">Our Latest Article For Our clients</p>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    <Card>
                        <Row>
                            <Col md={6} className="px-0">
                                <Card.Img variant="top" className="h-100" src={img1} />
                            </Col>
                            <Col md={6}>
                                <Card.Body className="text-start">
                                    <Card.Title>Why Children Dont Like Getting Out Of The Water</Card.Title>
                                    <h6 className="text-secondary"><FontAwesomeIcon icon={faClock} /> August 10, 2021</h6>
                                    <Card.Text className="text-secondary">
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content.
                                    </Card.Text>
                                    <button className="read-more-btn text-info">READ MORE <FontAwesomeIcon icon={faArrowRight} /></button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Row>
            </Container>
        </div >
    );
};

export default Blogs;