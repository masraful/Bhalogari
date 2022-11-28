import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../../Loading/Loading';

const MyBookings = () => {
    const { user, loading } = useContext(AuthContext)

    // console.log(user)
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (loading) {
                    return <Loading></Loading>
                }
                else {
                    setBookings(data)
                }
            })

    }, [user?.email])
    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast.success("DELETE")
                // refetch()
            })
    }
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Location</th>
                        <th>Price</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        bookings.map((booking, i) => <tr className="active">
                            <th>{i + 1}</th>
                            <th>
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src={booking?.image} alt='' />
                                    </div>
                                </div>
                            </th>
                            <td>{booking?.name}</td>
                            <td>{booking?.email}</td>
                            <td>{booking?.location}</td>
                            <td>{booking?.price}</td>
                            <td>

                                {
                                    booking.price && !booking.paid &&
                                    <Link to={`/dashboard/payment/${booking._id}`}>
                                        <button className='btn btn-primary btn-sm'>pay</button>
                                    </Link>
                                }
                                {
                                    booking.price && booking.paid && <span className='text-primary'>Paid</span>
                                }
                                <Link onClick={() => handleDelete(booking._id)} className='btn btn-primary btn-sm mx-3'>Delete</Link>
                            </td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyBookings;