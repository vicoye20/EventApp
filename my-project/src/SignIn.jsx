import React, { useState } from 'react'
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {

  const [login, setLogin] = useState(
    {
      email: '',
      password: ''
    }
  )

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({...login, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
    axios.post("http://localhost:3000/login", login)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    });
    setLogin(
      {
        email: '',
        password: ''
      })
  }

  return (
    <div className='p-4 bg-lime-200 h-screen w-[100%] tablet:bg-slate-100'>
        <div className="mb-10 tablet:m-auto tablet:w-[50%] tablet:mb-10">
        <h1 className="text-blue-700 font-semibold text-2xl">Welcome</h1>
        <p className="text-md font-semibold">Hello there, sign in to continue!</p>
      </div>

      <div className='w-[100%] tablet:m-auto tablet:w-[50%]'>
        <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">

            <div className="relative flex items-center">
                <MdOutlineMail className="absolute left-4" color="blue"/>
                <input
                type="text"
                placeholder="Email"
                className="border-2 border-slate-300 rounded-lg pl-10 p-2 w-full placeholder:text-lg placeholder:text-black focus:outline-none"
                name="email"
                value={login.email}
                onChange={handleChange}
                required
            />
            </div>

            <div className="relative flex items-center">
                <RiLockPasswordLine className="absolute left-4" color="blue"/>
                <input
                type="password"
                placeholder="Password"
                className="border-2 border-slate-300 rounded-lg pl-10 p-2 w-full placeholder:text-lg placeholder:text-black focus:outline-none"
                name="password"
                value={login.password}
                onChange={handleChange}
                required
            />
            </div>
          </div>

            <button className='text-sm text-blue-600 -mt-10 ml-72 font-semibold tablet:hidden'>Forgetten Password?</button>

            <div className="hidden tablet:block -mt-8">
          <button className="w-full h-10 bg-green-700 rounded-md text-white tablet:w-full tablet:font-bold">
            Forget Password
          </button>
        </div>

          <div className="flex flex-col gap-3">
            <button className="bg-blue-800 rounded-lg w-full p-2 text-white font-bold hover:bg-green-900">
              Log In
            </button>

            <div className="relative flex items-center">
            <FcGoogle className="absolute left-24 tablet:left-10 laptop:left-24 desktop:left-32"/>
                <button className="bg-white rounded-lg w-full p-2 text-green-900 font-bold hover:bg-slate-200">
                  Continue with Google
              </button>
            </div>
            
          </div>

        </form>
      </div>

            <p className="text-md text-black font-semibold mt-44 text-center">Don't have an account...? 
              <Link to="/signUp">
                <button className='ml-1'>
                  <span className="text-blue-700 font-semibold hover:text-green-950"> Sign Up</span>
                  </button>
              </Link>
            </p>
            
    </div>
  )
}

export default SignIn