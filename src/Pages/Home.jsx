import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Components/Banner';
import Categories from '../Components/Categories';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Read Books | Home</title>
            </Helmet>
            <Banner></Banner>
            <Categories></Categories>
        </div>
    );
};

export default Home;