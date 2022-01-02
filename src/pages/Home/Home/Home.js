import React from 'react';
import Blog from '../Blogs/Blogs';
import Footer from '../Footer/Footer';
import HappyClient from '../HappyClient/HappyClient';
import Holiday from '../Holiday/Holiday';

const Home = () => {
    return (
        <div>
            <Holiday />
            <HappyClient />
            <Blog />
            <Footer />
        </div>
    );
};

export default Home;