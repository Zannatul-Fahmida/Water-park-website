import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faTint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, authError, signInWithGoogle } = useFirebase();
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate);
    }
    return (
        <Container className="mt-5">
            <Form onSubmit={handleLoginSubmit}>
                <div className="d-flex flex-column align-items-center">
                    <div className="text-center col-8 col-md-4">
                        <h1 className="fw-bold mb-4"><FontAwesomeIcon className="text-info" icon={faTint} /> Water<span className="text-info">Park</span></h1>
                    </div>
                    <Form.Floating onChange={handleOnChange} className="mb-3 col-12 col-md-4">
                        <Form.Control
                            id="floatingInputCustom1"
                            type="email"
                            name="email"
                            placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInputCustom1">Email address</label>
                    </Form.Floating>
                    <Form.Floating onChange={handleOnChange} className="mb-3 col-12 col-md-4">
                        <Form.Control
                            id="floatingPasswordCustom1"
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                        <label htmlFor="floatingPasswordCustom1">Password</label>
                    </Form.Floating>
                    <Button className="col-12 col-md-4 py-3 text-white fw-bold" variant="info" type="submit">Log in</Button>
                    <div className="text-center col-12 col-md-4 mt-4">
                        {authError && <Alert variant="danger">{authError}</Alert>}
                        <p>Don't have an account?? <Link to="/signup" className="text-decoration-none fw-bold text-primary">Sign Up</Link></p>
                        <Button variant="primary" onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} /> Sign in with google</Button>
                    </div>
                </div>
            </Form>
        </Container>
    );
};

export default Login;