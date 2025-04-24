"use client"

import { useMutation } from '@apollo/client';
import React from 'react'
import { SIGNUP_USER } from '../../query/mutation.js'
import { redirect } from 'next/navigation';
const Signup = () => {
    const [formData, setFormData] = React.useState({});
    const [signupUser,{loading,error, data}]= useMutation(SIGNUP_USER,{

    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signupUser({
            variables: {
                userNew: {
                    name: formData.name,
                    email: formData.email,
                    age: Number(formData.age)
                }
            }
        });
    }
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>
    if(data) {
        console.log(data);
        redirect('/blogs');
    }
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-24">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
            <div className="mb-4">
                <label className="block text-gray-700" htmlFor="name">Name</label>
                <input className="border border-gray-300 p-2 w-full" type="text" id="name" name='name' required onChange={handleChange} />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">Email</label>
                <input className="border border-gray-300 p-2 w-full" type="email" id="email" name='email' required onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700" htmlFor="password">age</label>
                <input className="border border-gray-300 p-2 w-full" type="text" id="password" name='age' required onChange={handleChange} />
            </div>
            <button className="bg-blue-500 text-white p-2 rounded" type="submit">Sign Up</button>
        </form>
    </div>
  )
}

export default Signup