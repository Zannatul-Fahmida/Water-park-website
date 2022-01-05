import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';
import NavTop from '../../Shared/NavTop/NavTop';

const Membership = () => {
    return (
        <>
        <NavTop />
        <Navigation />
        <Container className="my-5">
            <h1>This page is coming soon...</h1>
        </Container>
        </>
    );
};

export default Membership;