import React from 'react';
import Client from '../Client/Client';
import ImgGallery from '../Gallery/ImgGallery';
import Reviews from '../Reviews/Reviews';
import Blog from '../Blogs/Blogs';
import Footer from '../Footer/Footer';
import HappyClient from '../HappyClient/HappyClient';
import Holiday from '../Holiday/Holiday';

const Home = () => {
    return (
        <div>
            <Client />
            <Reviews />
            <ImgGallery />
            <Holiday />
            <HappyClient />
            <Blog />
            <Footer />
        </div>
    );
};

export default Home;