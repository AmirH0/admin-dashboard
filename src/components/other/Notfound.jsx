import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Notfound() {
  return (
    <div className='flex flex-col justify-center items-center pt-20'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-bold text-[5rem]'>404</h1>
        <p>Page Not Found </p>
      </div>
      <NavLink to="/" className="mt-5 bg-green-400 py-2 px-6 rounded-full"> Back To Home</NavLink>
     </div>
  )
}
