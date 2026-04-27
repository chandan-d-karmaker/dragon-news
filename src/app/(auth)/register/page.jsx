'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';

const RegisterPage = () => {

    

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const userData = Object.fromEntries(formData.entries());
        console.log("User data:", userData);

        const { data, error } = await authClient.signUp.email({
            ...userData,

            callbackURL: "/",
        });

    }


    return (
        <div className='flex justify-center items-center my-20'>
            <form onSubmit={onSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                <label className="label">Name</label>
                <input name='name' type="text" className="input" placeholder="Your Name" />

                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input name='password' type="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Register</button>
            </form>

        </div>
    );
};

export default RegisterPage;