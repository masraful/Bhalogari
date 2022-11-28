import React from 'react';
import './Banner.css'
// import img1 from '../../../assets/Banner/pexels-antoni-shkraba-7144172 (1).jpg'
import img2 from '../../../assets/Banner/pexels-mike-b-170811.jpg'
import img3 from '../../../assets/Banner/pexels-mike-b-4.jpg'

import BannerItems from './BannerItems';


const Banner = () => {
    const bannerimg = [

        {
            image: img2,
            id: 2
        },
        {
            image: img3,
            id: 3
        },

    ]

    return (
        <div className="carousel w-full py-10">
            {
                bannerimg.map(slide => <BannerItems
                    key={slide.id}
                    slide={slide}
                ></BannerItems>)
            }
        </div>
    );
};

export default Banner;