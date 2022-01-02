import React from 'react';
import ImgGallery from '../Gallery/ImgGallery';
import Reviews from '../Reviews/Reviews';
import Banner from '../../Banner/Banner';
import Blog from '../Blogs/Blogs';
import Footer from '../Footer/Footer';
import HappyClient from '../HappyClient/HappyClient';
import Holiday from '../Holiday/Holiday';
import Subscriber from '../Subscriber/Subscriber';

const Home = () => {
    return (
        <div>
            <Reviews />
            <ImgGallery />
            <Banner/>
            <Holiday />
            <HappyClient />
            <Blog />
            <Subscriber/>
            <Footer />
        </div>
    );
};

export default Home;