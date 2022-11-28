import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider';

const Comments = () => {
    const { user } = useContext(AuthContext)
    console.log(user)

    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch(`https://resale-masraful.vercel.app/comments`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])


    const saveUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const email = form.email.value;
        const massage = form.massage.value;
        form.reset()
        const comments = {
            userName, email, massage
        }

        fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(comments)
        })
            .then(res => res.json())
            .then(data => {
                console.log("save user", data);

            })
    }



    return (
        <div className='w-3/4 mx-auto mb-5'>
            <div>
                <div className="text-4xl mb-4 divider">Comment</div>
                {
                    comments.map(comment => <>

                        <div className="">

                            <h1 className='font-bold'>{comment.userName}</h1>
                            <br />
                            <div className="chat-bubble mb-4">{comment.massage}</div>
                            <hr />
                        </div>
                    </>

                    )
                }
            </div>


            <div className=''>
                <div className="text-4xl mb-4 divider">Post a Comment</div>

                <form onSubmit={saveUser}>
                    <div className="form-control mb-6">
                        <textarea type="text" name='massage' className="textarea textarea-bordered" placeholder="Massage"></textarea>


                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5 '>
                        <div className="form-control">

                            <input type="text" name='userName' defaultValue={user?.displayName} disabled placeholder="Type here" className="input input-bordered w-full " />

                        </div>


                        <div className="form-control  ">
                            <input type="text" name='email' defaultValue={user?.email} disabled placeholder="Type here" className="input input-bordered w-full " />

                        </div>

                    </div>

                    <input className='btn btn-accent w-full mt-4' value='SEND MASSAGE' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Comments;