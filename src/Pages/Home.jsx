import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Components/Banner';
import Categories from '../Components/Categories';
import BookPreview from '../Components/BookPreview';
import SubscribeBox from '../Components/SubscribeBox';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ReadBooks | Home</title>
            </Helmet>
            <Banner></Banner>
            <Categories></Categories>
            <BookPreview></BookPreview>
            <SubscribeBox></SubscribeBox>
        </div>
    );
};

export default Home;