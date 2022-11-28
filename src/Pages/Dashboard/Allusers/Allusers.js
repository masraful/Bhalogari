
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
// import Loader from "../../../Loader/Loader";
import User from "./User";


const AllUser = () => {
    // const {
    //     data: users,
    //     isLoading,
    //     refetch,
    // } = useQuery({
    //     queryKey: ["users"],
    //     queryFn: async () => {
    //         const res = await fetch("https://resale-masraful.vercel.app/allusers");
    //         const data = await res.json();
    //         return data;
    //     },
    // });
    const [allUsers, setAllUsers] = useState([])
    useEffect(() => {
        fetch("https://resale-masraful.vercel.app/allusers")
            .then(res => res.json())
            .then(data => setAllUsers(data))
    }, [])

    const handleDelete = (id) => {
        console.log(id)
        const proceed = window.confirm(
            "Are you sure, you want to cancel this order"
        );
        if (proceed) {
            fetch(`https://resale-masraful.vercel.app/deleteUsers/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        // toast.error("Success Fully Deleted");
                        toast.success("delete Successfully", {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        // refetch();
                    }
                });
        }
    };

    const handelUserVerify = (id) => {
        console.log(id);

        fetch(`https://resale-masraful.vercel.app/users/verify/${id}`, {
            method: "PUT",
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success("verify Successfully");
                    // refetch();
                }
            });
    };

    // if (isLoading) {
    //     // return <Loader></Loader>;
    // }

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Verify</th>
                        <th>Delete User</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((user) => (
                        <User
                            key={user._id}
                            user={user}
                            handleDelete={handleDelete}
                            handelUserVerify={handelUserVerify}
                        ></User>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllUser;