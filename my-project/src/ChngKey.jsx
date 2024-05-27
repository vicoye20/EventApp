import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom';


const ChngKey = () => {
  return (
    <div className='p-7 w-screen h-full'>
         <div className='flex flex-row'>
            <Link to='/profile'>
              <button><FaArrowLeftLong className='text-slate-600 mt-1 w-5 h-5' /></button> 
            </Link>
            <h1 className='text-slate-600 text-[18px] ml-3'>Change Password</h1>
        </div>

        <h1 className='text-slate-500 text-[17px] mt-6'>Your password needs to be a minimum of six characters long and should contain a mix of letters and numbers for security.</h1>

        <form className='mt-8'>
          <div className="flex flex-col gap-3">

          <div className="relative flex items-center  ">
              <RiLockPasswordLine className="absolute left-4" color="blue"/>
              <input
                type="text"
                placeholder="Current password"
                className="border-2 border-slate-300 rounded-md pl-10 p-2 w-full placeholder:text-md placeholder:text-slate-500 focus:outline-none"
              />
            </div>

            <div className="relative flex items-center  ">
              <RiLockPasswordLine className="absolute left-4" color="blue"/>
            <input
              type="text"
              placeholder="New Password"
              className="border-2 border-slate-300 rounded-md pl-10 p-2 w-full placeholder:text-md placeholder:text-slate-500 focus:outline-none"
            />
            </div>

            <div className="relative flex items-center  ">
              <RiLockPasswordLine className="absolute left-4" color="blue"/>
            <input
              type="text"
              placeholder="Confirm Password"
              className="border-2 border-slate-300 rounded-md pl-10 p-2 w-full placeholder:text-md placeholder:text-slate-500 focus:outline-none"
            />
            </div>
      </div>
        </form>

        <button className='text-blue-700 absolute right-8 mt-2'>Forget Password?</button>

        <div className='mt-40'>
        <button className='w-full h-10 bg-blue-700 rounded-md text-white'>Change Password</button>
        </div>
    </div>
  )
}

export default ChngKey