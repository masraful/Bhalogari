import React from 'react';
import Menu from '../Menu/Menu';


import Banner from './Banner/Banner';
import Comments from './Comment/Comments';
import CostomarReview from './Costomarreview/CostomarReview';

const Home = () => {
    return (
        <div>
            <Banner />
            <Menu></Menu>
            <Comments></Comments>
            <CostomarReview></CostomarReview>

        </div>
    );
};

export default Home;