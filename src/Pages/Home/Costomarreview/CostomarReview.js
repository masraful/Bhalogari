import React from 'react';

const CostomarReview = () => {
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 bg-gray-400'>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"><span className='text-orange-500'>46+</span>
                        <div className="">Premier Brands</div></h2>


                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"><span className='text-orange-500'>100K+</span>
                        <div className="">Perfect Cars</div></h2>


                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"><span className='text-orange-500'>140K+</span>
                        <div className="">
                            Happy Users </div></h2>


                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"><span className='text-orange-500'>8K+</span>
                        <div className="">Total Registrations
                        </div></h2>


                </div>
            </div>
        </div>
    );
};

export default CostomarReview;