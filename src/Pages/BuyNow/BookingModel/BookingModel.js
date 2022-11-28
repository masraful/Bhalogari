import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModel = ({ BuyNow, setBuyNow }) => {
    const { location, name, price, img } = BuyNow;
    const { user } = useContext(AuthContext)
    console.log(user)

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const email = form.userEmail.value;
        const name = form.name.value;
        const price = form.price.value;
        const location = form.location.value;
        const phoneNumber = form.phoneNumber.value;
        const booking = {
            userName,
            email,
            name,
            price,
            location,
            phoneNumber,
            image: img,
        }
        console.log(booking)
        fetch('https://resale-masraful.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setBuyNow(null)
                    toast.success('Booking Confirmed')
                    // toast.success('Booking confirmed')
                }
                else {
                    toast.error(data.massage)
                }
            })

    }
    // console.log(user)
    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h1 className='text-3xl font-bold text-center'>Add Product</h1>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        {/* <input name='name' type="text" defaultValue={user?.displayName} disabled className="input input-bordered w-full" /> */}
                        <input type="text" name='userName' defaultValue={user?.displayName} disabled placeholder="Type here" className="input input-bordered w-full " />
                        <input type="text" name='userEmail' defaultValue={user?.email} disabled placeholder="Type here" className="input input-bordered w-full " />
                        <input type="text" name='name' defaultValue={name} disabled placeholder="Type here" className="input input-bordered w-full " />
                        <input type="text" name='price' defaultValue={price} disabled placeholder="Type here" className="input input-bordered w-full " />
                        <input type="text" name='location' defaultValue={location} disabled placeholder="Type here" className="input input-bordered w-full " />
                        <input type="text" name='phoneNumber' placeholder="Enter Your Phone Number" className="input input-bordered w-full " required />
                        <input className="btn btn-accent w-full" type="submit" value='submit' />
                    </form>


                </div>
            </div>
        </>
    );
};

export default BookingModel;