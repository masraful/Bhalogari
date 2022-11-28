import React from 'react';
import './MenuItems.css';

const MenuItems = ({ service, setBuyNow }) => {
    // console.log(service)
    const { img, location, name, originalprice, price, use, title } = service;
    return (

        <div className="card card-compact shadow-xl">
            <div className='img-container'>
                <figure><img src={img} alt="Shoes" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='flex flex-row gap-4'>
                    <p className='font-bold bg-primary rounded px-4'>Price: {originalprice}</p>
                    <p className='font-bold bg-pink-700 rounded'>ReSale Price: {price}
                        <div className="badge badge-secondary">NEW</div></p>
                </div>
                <p><span className='font-bold'>Location</span> {location}</p>
                <p><span className='font-bold'>Description:</span> {title}</p>
                <div className="card-actions justify-between mt-4">
                    <div className="avatar">
                        <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                        <div className='mx-4'>
                            <h1 className='font-bold'>Masraful Zishan</h1>
                            <p>Seller</p>
                        </div>
                    </div>

                    <label htmlFor="my-modal" className="btn" onClick={() => setBuyNow(service)}>Booking</label>

                </div>
            </div>
        </div>
        // </div>
    );
};

export default MenuItems;