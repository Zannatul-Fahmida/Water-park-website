import React from 'react';
import { NavLink } from 'react-router-dom';




const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink  to="/home" className="nav-link fs-6 fw-bold">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link fs-6 fw-bold">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/rides" className="nav-link fs-6 fw-bold">Rides</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/membership" className="nav-link fs-6 fw-bold">Membership</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/store" className="nav-link fs-6 fw-bold">Store</NavLink>
        </li>
      
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link fs-6 fw-bold">Contact</NavLink>
        </li>
      </ul>
      <div>

    <div className="d-flex ">
        <button className='btn  px-3 fs-6'>Sign in</button>
        <button className='btn  px-3 fs-6'>Sign up</button>

    </div>
        
      </div>
    </div>
  </div>
</nav>
    );
};

export default Navigation;