import React from 'react';
import Client from '../Client/Client';
import ImgGallery from '../Gallery/ImgGallery';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Client />
            <Reviews />
            <ImgGallery />
        </div>
    );
};

export default Home;