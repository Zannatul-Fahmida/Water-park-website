import React from 'react';
import Banner from '../../../pages/Banner/Banner';
import Navigation from '../../Shared/Navigation/Navigation';
import NavTop from '../../Shared/NavTop/NavTop';
import Blog from '../Blogs/Blogs';
import Footer from '../Footer/Footer';
import HappyClient from '../HappyClient/HappyClient';
import Holiday from '../Holiday/Holiday';
import Subscriber from '../Subscriber/Subscriber';

const Home = () => {
    return (
        <div>
            <NavTop/>
            <Navigation/>
            <Banner/>
            <Holiday />
            <HappyClient />
            <Blog />
            <Subscriber/>
            <Footer/>
        </div>
    );
};

export default Home;