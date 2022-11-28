import React, { useEffect, useState } from 'react';
import ViewProduct from './ViewProduct';

const Myproducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/addproduct`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])
    return (
        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                products.map(product => <ViewProduct key={product._id} product={product}></ViewProduct>)
            }
        </div>
    );
};

export default Myproducts;