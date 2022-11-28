import React from 'react';
import './Banner.css'
import banner1 from '../../../assets/Banner/pexels-antoni-shkraba-7144172 (1).jpg'
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";



const Banner = () => {

    return (
        <div className=''>
            <div className=''>
                <img className='carousel-img' src={banner1} alt="" />
            </div>


        </div>
    );
};

export default Banner;