import React from 'react';

const BannerItems = ({ slide }) => {
    const { image, id } = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-center transform -translate-y-1/2 left-7 top-1/2">
                <div>
                    <h1 className='text-6xl font-bold text-white'>
                        WELCOME TO Bhalo Gari
                    </h1>
                    <hr className='bg-yellow-600 w-60 mt-4' />
                    <p className='text-2xl text-white'>FIND YOUR CAR</p>
                </div>
            </div>

            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">

            </div>
        </div>
    );
};

export default BannerItems;