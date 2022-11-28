import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useSeller from '../Hooks/useSeller';
import Navbar from '../Pages/Shared/Navber/Navber';



const BookingsLayout = () => {
    const { user } = useContext(AuthContext)
    const [isSeller] = useSeller(user?.email)
    const [isAdmin] = useAdmin(user?.email)
    // console.log(isSeller)


    // console.log(select)

    return (

        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>



                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Bookings</Link></li>
                        {
                            isSeller && <>

                                <li><Link to='/dashboard/addnewservice'>Post Your AD</Link></li>
                                <li><Link to='/dashboard/myProduct'>Ads</Link></li>

                            </>


                        }
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/alluser'>All Users</Link></li>
                            </>
                        }


                        {/* <li><Link to='/dashboard/addnewservice'>Post Your AD</Link></li>
                        <li><Link to='/dashboard/myProduct'>Ads</Link></li> */}

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BookingsLayout;