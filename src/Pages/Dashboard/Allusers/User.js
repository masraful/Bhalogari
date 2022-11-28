import React from "react";
import { FcApproval } from "react-icons/fc";

const User = ({ user, handleDelete, handelUserVerify }) => {
    // console.log(user)
    const { name, role, select, email, _id, verify } = user;
    // console.log(name)
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="" alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{role}</div>
                    </div>
                </div>
            </td>
            <td>{email}</td>
            <td>
                {role === "Admin" ? (
                    <button
                        className="bg-blue-700  text-white py-1 px-2 rounded-lg"
                        disabled
                    >
                        Admin
                    </button>
                ) : select === "Seller" ? (
                    <button
                        onClick={() => handelUserVerify(_id)}
                        className="bg-blue-700  text-white py-1 px-2 rounded-lg"
                    >
                        {verify === "true" ? "verified" : "Verify"}

                    </button>
                ) : (
                    <p> ---- </p>
                )}


            </td>
            <th>
                {role === "Admin" ? (
                    <button
                        className="bg-red-700  text-white py-1 px-2 rounded-lg"
                        disabled
                    >
                        Admin
                    </button>
                ) : (
                    <button
                        onClick={() => handleDelete(_id)}
                        className="bg-red-700  text-white py-1 px-2 rounded-lg"
                    >
                        Delete
                    </button>
                )}
            </th>
        </tr>
    );
};

export default User;