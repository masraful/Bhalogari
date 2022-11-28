import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutFrom from './CheckoutFrom';


const stripePromise = loadStripe("pk_test_51M6dPbA3ZG4diIzkLKkV2L3erAGxkaNDeNeYiwUHDdyj33kSeyPWbpHyDPlPQT8R32Vced6S2YN6LKPn0Wl3yI2M007JnF3tPC")
// console.log(stripePromise)

const Payment = () => {
    const bookings = useLoaderData()
    const { price, } = bookings
    console.log(bookings)
    return (
        <div>
            <h3 className='text-3xl'> payment </h3>
            <p className='text-xl'> please pay <strong>${price}</strong> for your appointment on at </p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutFrom booking={bookings} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;