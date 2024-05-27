import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { RiRadioFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { PiGreaterThan } from "react-icons/pi";
import { RiLockPasswordFill } from "react-icons/ri";

const Profile = () => {
  return (
    <div className="p-7 w-screen h-full">
      <h1 className="text-[20px] text-slate-700 font-bold">Profile</h1>

      <div
        className="h-32 w-32 bg-slate-300 m-auto rounded-full mt-8"
        type="file"
      ></div>

      <h1 className="text-[20px] text-slate-700 text-center mt-2">
        Ayantoye David
      </h1>

      <div className="w-screen absolute left-0 h-80 bg-slate-200 mt-4 rounded-tl-[20px] rounded-tr-[20px]">
        <h1 className="p-7 text-slate-900 text-[18px] font-bold">
          Account Overview
        </h1>

        <div className="flex flex-row justify-between items-center w-full p-6 -mt-8">
          <div className="flex items-center">
            <button className="h-8 w-8 bg-blue-300 rounded-md">
              <FaRegUser className="m-auto text-blue-600" />
            </button>{" "}
            <p className=" text-slate-800 ml-3">My Profile</p>
          </div>
          <button>
            <PiGreaterThan />
          </button>
        </div>

        <div className="flex flex-row justify-between items-center w-full p-6 -mt-8">
          <div className="flex items-center">
            <button className="h-8 w-8 bg-red-200 rounded-md">
              <FaLocationDot className="m-auto text-red-600" />
            </button>
            <p className=" text-slate-800 ml-3">Location</p>
          </div>

          <button>
            <PiGreaterThan />
          </button>
        </div>

        <div className="flex flex-row justify-between items-center w-full p-6 -mt-8">
          <div className="flex items-center">
            <button className="h-8 w-8 bg-red-200 rounded-md">
              <RiLockPasswordFill className="m-auto text-red-600" />
            </button>
            <p className="ml-3 text-slate-800">Change Password</p>
          </div>

          <Link to="/changePassword">
            <button className="">
              <PiGreaterThan />
            </button>
          </Link>
        </div>
      </div>

      <footer className="bg-slate-900 w-screen h-16 p-8  fixed left-0 bottom-0 z-0 flex flex-row justify-between items-center">
        <Link to="/">
          <button className="text-center text-white text-[12px]">
            <IoMdHome className="h-6 w-6 m-auto" />
            Home
          </button>
        </Link>

        <Link to="/events">
          <button className="text-center text-white text-[12px]">
            <RiRadioFill className="h-6 w-6 m-auto" />
            Events
          </button>
        </Link>

        <Link to="/service">
          <button className="text-center text-white text-[12px]">
            <PiUsersThreeFill className="h-6 w-6 m-auto" />
            Services
          </button>
        </Link>

        <Link to="/profile">
          <button className="text-center text-white text-[12px]">
            <FaRegUser className="h-6 w-6 m-auto" />
            Profile
          </button>
        </Link>
      </footer>
    </div>
  );
};

export default Profile;
