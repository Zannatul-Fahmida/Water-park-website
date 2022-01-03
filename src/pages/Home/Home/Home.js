import React from 'react';
import ImgGallery from '../Gallery/ImgGallery';
import Reviews from '../Reviews/Reviews';
import Blog from '../Blogs/Blogs';
import Footer from '../Footer/Footer';
import HappyClient from '../HappyClient/HappyClient';
import Holiday from '../Holiday/Holiday';
import Subscriber from '../Subscriber/Subscriber';
import EventPackage from '../EventPackages/EventPackage/EventPackage';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <ImgGallery />
            <EventPackage />
            <Reviews />
            <Holiday />
            <HappyClient />
            <Blog />
            <Subscriber />
            <Footer />
        </div>
    );
};

export default Home;