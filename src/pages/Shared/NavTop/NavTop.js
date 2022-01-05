import React from 'react';
import './NavTop.css'
import logo from '../../../images/logo99.png'

const NavTop = () => {
    return (
        <div className='text-center '>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-4 ">
                    <a className="navbar-brand" href="/">
                            <div className="logo">
                                <img className='img-fluid' src={logo} alt="" />
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
                    <div className="col-lg-4 mt-2">
                        <div className='top-contact fw-bolder'>
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