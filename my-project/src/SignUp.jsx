import {React, useState} from "react";
import axios from "axios";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiSolidRename } from "react-icons/bi";
import { CgCalendarDates } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignUp = () => {

  const [user, setUser] = useState({
      name : "",
      email : "",
      password : "",
      dateOfBirth : "",
      userName : "",
    })

    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser({...user, [name] : value})
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(user);
      axios
      .post("http://localhost:3000/signup", user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      setUser(
        {
          name : "",
          email : "",
          password : "",
          dateOfBirth : "",
          userName : "",
        }
      )
    }

  return (
    <div className="p-4 bg-lime-200 h-full w-screen tablet:bg-slate-100">
      <div className="mb-10 tablet:m-auto tablet:w-[50%] tablet:mb-10">
        <h1 className="text-blue-700 font-semibold text-2xl">Sign Up</h1>
        <p className="text-md">Hello there, sign up to continue!</p>
      </div>

      <div className="w-[100%] tablet:m-auto tablet:w-[50%]">
        <form className="flex flex-col gap-9" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="relative flex items-center">
            <BiSolidRename  className="absolute left-4" color="blue"/>
            <input
                type="text"
                placeholder="input your name"
                className="border-2 border-slate-300 rounded-lg pl-10 p-2 w-full placeholder:text-lg placeholder:text-black focus:outline-none"
                name="name"
                value={user.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative flex items-center">
              <FaRegUser className="absolute left-4" color="blue" />
              <input
                type="text"
                placeholder="Username"
                className="border-2 border-slate-300 rounded-lg pl-10 p-2 w-full placeholder:text-lg placeholder:text-black focus:outline-none"
                name="userName"
                value={user.userName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="relative flex items-center">
              <MdOutlineMail className="absolute left-4" color="blue" />
              <input
                type="email"
                placeholder="Email"
                className="border-2 border-slate-300 rounded-lg pl-10 p-2 w-full placeholder:text-lg placeholder:text-black focus:outline-none"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="relative flex items-center">
              <RiLockPasswordLine className="absolute left-4" color="blue" />
              <input
                type="password"
                placeholder="Password"
                className="border-2 border-slate-300 rounded-lg pl-10 p-2 w-full placeholder:text-lg placeholder:text-black focus:outline-none"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative flex items-center">
            <CgCalendarDates className="absolute left-4" color="blue" />
            <input
                type="text"
                placeholder="Date Of Birth"
                className="border-2 border-slate-300 rounded-lg pl-10 p-2 w-full placeholder:text-lg placeholder:text-black focus:outline-none"
                name="dateOfBirth"
                value={user.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button className="bg-blue-800 rounded-lg w-full p-2 text-white font-bold hover:bg-green-900">
              Create Account
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

      <p className="text-md text-black font-semibold mt-28 mb-10 text-center">
        Already have an account...?
        <Link to="/signIn">
          <button className="ml-1 ">
            <span className="text-blue-700 font-semibold hover:text-green-950"> Sign In</span>
            </button>
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
