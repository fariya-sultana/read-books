import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Components/Banner';
import Categories from '../Components/Categories';
import BookPreview from '../Components/BookPreview';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ReadBooks | Home</title>
            </Helmet>
            <Banner></Banner>
            <Categories></Categories>
            <BookPreview></BookPreview>
        </div>
    );
};

export default Home;