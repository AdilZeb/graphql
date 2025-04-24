import React from 'react'

const Profile = () => {
  return (
    <div  className="min-h-screen text-zinc-900 flex flex-col items-center justify-center p-20">
      <h1 className="text-4xl font-bold mb-4">Profile</h1>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold">User Name</h2>
        <blockquote className="mt-2">
          <p className="text-xl  italic">"This is a sample quote."</p>
          <footer className="mt-2 text-gray-600">- Author Name</footer>
        </blockquote>
        <blockquote className="mt-2">
          <p className="text-xl italic">"This is a sample quote."</p>
          <footer className="mt-2 text-gray-600">- Author Name</footer>
        </blockquote>
    </div>
    </div>
  )
}

export default Profile