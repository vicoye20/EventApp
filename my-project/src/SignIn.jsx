import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className='p-4'>
        <div className="mb-10">
        <h1 className="text-blue-700 font-semibold text-2xl">Welcome</h1>
        <p className="text-md">Hello there, sign in to continue!</p>
      </div>

      <div>
        <form className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">

            <div className="relative flex items-center">
                <MdOutlineMail className="absolute left-4" color="blue"/>
                <input
                type="text"
                placeholder="Email"
                className="border-2 border-slate-400 rounded-md pl-10 p-2 w-full placeholder:text-lg placeholder:text-black focus:outline-none"
            />
            </div>

            <div className="relative flex items-center">
                <RiLockPasswordLine className="absolute left-4" color="blue"/>
                <input
                type="text"
                placeholder="Password"
                className="border-2 border-slate-400 rounded-md pl-10 p-2 w-full placeholder:text-lg placeholder:text-black focus:outline-none"
            />
            </div>
          </div>

            <p className='text-sm text-blue-600 -mt-10 ml-72'>Forgetten Password?</p>

          <div className="flex flex-col gap-3">
            <button className="bg-blue-800 rounded-lg w-full p-2 text-white font-bold">
              Create Account
            </button>

            <div className="relative flex items-center">
              <FcGoogle className="absolute left-24"/>
                <button className="bg-slate-200 rounded-lg w-full p-2 text-slate-600 font-bold">
                  Continue with Google
              </button>
            </div>
            
          </div>

        </form>
      </div>

            <p className="text-sm text-black font-bold mt-44 text-center">Don't have an account...? 
              <Link to="/signUp">
                <span className="text-blue-700 font-bold"> Sign Up</span>
              </Link>
            </p>
            
    </div>
  )
}

export default SignIn