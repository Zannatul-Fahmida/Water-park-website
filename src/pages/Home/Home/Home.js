import React from 'react';
import Banner from '../../Banner/Banner';
import Blog from '../Blogs/Blogs';
import HappyClient from '../HappyClient/HappyClient';
import Holiday from '../Holiday/Holiday';
import Subscriber from '../Subscriber/Subscriber';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Holiday />
            <HappyClient />
            <Blog />
            <Subscriber/>
        </div>
    );
};

export default Home;