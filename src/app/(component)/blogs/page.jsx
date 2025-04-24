"use client"

import { GET_USER_DATA } from '../../query/query.js'
import { useQuery } from '@apollo/client'
import React from 'react'

const Blogs = () => {
    const {loading,error,data}= useQuery(GET_USER_DATA,{
        refetchQueries:[
            GET_USER_DATA,
            'getalluser'
        ]
    })
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>
       console.log(data);
  return (
    <div className='h-screen flex text-white flex-col p-20 justify-center items-center'>
        <h1 className='text-4xl font-bold mb-4'>Blogs</h1>
        <div className='flex flex-col gap-2 overflow-y-auto justify-between items-center w-full max-w-2xl'>
         {
            data?.users?.map((user) => (
                <div key={user.id + 10} className='bg-gray-800 p-6 rounded shadow-md w-full max-w-sm'>
                    <h2 className='text-2xl font-semibold'>{user.name}</h2>
                    <p>{user.email}</p>
                    <ul>
                        {user?.quotes?.map((quote) => (
                            <li key={quote.id +100} className='mt-2'>
                                <h3 className='text-xl font-bold'>"{quote.quote}"</h3>
                                <p>- {quote.author}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))
         }
        </div>
    </div>
  )
}

export default Blogs