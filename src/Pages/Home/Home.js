import React from 'react';
import Menu from '../Menu/Menu';


import Banner from './Banner/Banner';
import CostomarReview from './Costomarreview/CostomarReview';

const Home = () => {
    return (
        <div>
            <Banner />
            <Menu></Menu>
            <CostomarReview></CostomarReview>

        </div>
    );
};

export default Home;