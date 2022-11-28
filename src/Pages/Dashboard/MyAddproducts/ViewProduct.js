import React from 'react';

const ViewProduct = ({ product }) => {
    const { image, condition, description, name, originalPrice, resalePrice, shopLocation, userName, usingTime } = product;
    console.log(product)
    return (
        <div className="card card-compact shadow-xl">
            <div>
                <figure><img className='h-52' src={image} alt="Shoes" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='flex flex-row'>
                    <p className='font-bold'>Price: {originalPrice}</p>
                    <p className='font-bold'>ReSale Price: {resalePrice}
                        <div className="badge badge-secondary">NEW</div></p>
                </div>
                <p><span className='font-bold'>Description:</span> {description}</p>
                <p><span className='font-bold'>Condition:</span> {condition}</p>
                <p><span className='font-bold'>UserName:</span> {userName}</p>
                <p><span className='font-bold'>Using Time:</span> {usingTime}</p>
                <p><span className='font-bold'>location:</span> {shopLocation}</p>


                <div className="card-actions justify-around">
                    <button className='btn btn-primary'>Advices</button>
                    <button className='btn btn-primary'>Add</button>

                    {/* <label htmlFor="my-modal" className="btn" onClick={() => setBuyNow(service)}>Booking</label> */}

                </div>
            </div>
        </div>
    );
};

export default ViewProduct;