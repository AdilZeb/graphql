"use client"
import React from 'react'

const Login = () => {
    const [formData, setFormData] = React.useState({
      
    });
    const handleChange= (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    
   
    }
    const handleSubmit = (e) => {
      e.preventDefault();
    console.log('Form submitted:', formData);}
    
  return (
    <div className='flex text-white flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h1 className='text-4xl font-bold mb-4'>Login</h1>
      <form onSubmit={handleSubmit} className='bg-white p-6 rounded shadow-md'>
        <div className='mb-4'>
          <label className='block text-gray-700' htmlFor='email'>Email</label>
          <input className='border border-gray-300 p-2 w-full' type='email' id='email' required name='email' onChange={handleChange} />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700' htmlFor='password'>Password</label>
          <input className='border border-gray-300 p-2 w-full' type='password' id='password' required name='password' onChange={handleChange}/>
        </div>
        <button className='bg-blue-500 text-white p-2 rounded' type='submit'>Login</button>
      </form>
      <p className='mt-4'>
        Don't have an account? <a href='/register' className='text-blue-500'>Register</a>
      </p>


    </div>
  )
}

export default Login