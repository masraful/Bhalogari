import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BookingModel from '../BuyNow/BookingModel/BookingModel';
import MenuItems from './MenuItems';

const Menu = ({ selectedDate }) => {
    const services = useLoaderData([])
    // console.log(services)
    // const date = format(selectedDate, 'pp');
    const [categorys, setCategory] = useState([])

    const [BuyNow, setBuyNow] = useState(null)



    useEffect(() => {
        fetch(`http://localhost:5000/category`)
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])


    return (
        <div>


            <ul className='flex flex-row gap-5 justify-center mb-10 '>

                {
                    categorys.map(category => <li><Link to={`/menus/${category.id}`} className='p-4 text-xl bg-rose-800 hover:bg-lightBlue-500 text-white rounded-lg button type1'>{category.Category}</Link></li>)
                }
            </ul>


            <div className='grid w-4/5 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto mb-4 '>
                {
                    services && services.map(service => <MenuItems key={service._id} service={service} setBuyNow={setBuyNow}></MenuItems>)
                }

            </div>
            {BuyNow && <BookingModel BuyNow={BuyNow} setBuyNow={setBuyNow}></BookingModel>}

        </div>


    );
};

export default Menu;