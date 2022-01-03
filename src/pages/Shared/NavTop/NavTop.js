import React from 'react';
import './NavTop.css'
import logo from '../../../images/logo00.jpg'

const NavTop = () => {
    return (
        <div className='text-center text-md-start'>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-4">
                        <a className="navbar-brand d-inline-block" href="/">
                        <div className="logo">
                                <div className='d-flex align-items-center'>
                                <img className='img-fluid rounded-circle' src={logo} alt="" />
                                <h3 className='ms-2 site-name'> Water Kingdom</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                        <div className="col-lg-4">
                        <div className="social-menu d-flex list-unstyled justify-content-center ">                  
                        <li><i className="fab fa-facebook-square"></i></li>
                        <li><i className="fab fa-twitter-square"></i></li>
                        <li><i className="fab fa-instagram-square"></i></li>
                        <li><i className="fab fa-linkedin"></i></li>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='top-contact text-end fw-bolder'>
                            <span>waterpark@gmail.com <i className="fas fa-envelope"></i></span>
                            <span>01756100000 <i className="fas fa-phone-volume"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavTop;