import React from "react";
import { IoMdHome } from "react-icons/io";
import { RiRadioFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { PiGreaterThan } from "react-icons/pi";
import { RiLockPasswordFill } from "react-icons/ri";

const Profile = () => {
  return (
    <div className="p-7 w-screen min-h-screen tablet:bg-slate-300">
       <header className="hidden tablet:block bg-slate-900 w-screen h-16 fixed top-0 left-0 z-10 text-white">
        <div className="flex flex-row items-center justify-between">
          <NavLink to="/" activeClassName="actives">
            <button className="text-2xl font-semibold p-4 ml-5">
              EVENT APP
            </button>
          </NavLink>

          <nav className="w-[40%] flex flex-row justify-around items-center">
            <NavLink to="/events" activeClassName="actives">
              <button className="text-center text-[12px]">
                <RiRadioFill className="h-6 w-6 m-auto" />
                Events
              </button>
            </NavLink>

            <NavLink to="/service" activeClassName="actives">
              <button className="text-center text-[12px]">
                <PiUsersThreeFill className="h-6 w-6 m-auto" />
                Services
              </button>
            </NavLink>

            <NavLink to="/profile" activeClassName="actives">
              <button className="text-center text-[12px]">
                <FaRegUser className="h-6 w-6 m-auto" />
                Profile
              </button>
            </NavLink>

            <button className="text-white font-semibold">Sign Out</button>
          </nav>
        </div>
      </header>

      <h1 className="text-[20px] text-blue-700 font-semibold tablet:text-center tablet:mt-10 tablet:text-[38px] tablet:text-black">
        Profile
      </h1>

      <div className="h-32 w-32 m-auto border-2 border-blue-700 rounded-full mt-8 tablet:mt-2"></div>

      <h1 className="text-[20px] text-blue-700 font-semibold text-center mt-2 tablet:text-black">
        Ayantoye David
      </h1>

      <div className="w-screen absolute left-0 h-80 bg-slate-200 mt-4 rounded-tl-[20px] rounded-tr-[20px] tablet:bg-slate-300 tablet:rounded-none">
        <h1 className="p-7 text-slate-900 text-[18px] font-semibold tablet:text-center tablet:text-[30px]">
          Account Overview
        </h1>

        <div className="flex flex-row justify-between items-center w-full p-6 -mt-8 tablet:w-[50%] tablet:m-auto">
          <div className="flex items-center">
            <button className="h-8 w-8 bg-blue-300 rounded-md">
              <FaRegUser className="m-auto text-blue-600" />
            </button>
            <p className="font-semibold text-blue-800 ml-3 tablet:text-[22px] tablet:font-semibold">
              My Profile
            </p>
          </div>
          <Link to="/editprofile">
            <button>
              <PiGreaterThan className="tablet:h-8 w-8" />
            </button>
          </Link>
        </div>

        <div className="flex flex-row justify-between items-center w-full p-6 -mt-8 tablet:w-[50%] tablet:m-auto tablet:-mt-5">
          <div className="flex items-center">
            <button className="h-8 w-8 bg-red-200 rounded-md">
              <RiLockPasswordFill className="m-auto text-red-600" />
            </button>
            <p className="font-semibold ml-3 text-red-600 tablet:text-[22px] tablet:font-semibold">
              Change Password
            </p>
          </div>

          <Link to="/changePassword">
            <button className="">
              <PiGreaterThan className="tablet:h-8 w-8" />
            </button>
          </Link>
        </div>

        <div className="flex justify-center mt-12 tablet:mt-0">
          <button className="w-24 h-10 bg-blue-700 font-semibold rounded-lg text-white">
            Sign Out
          </button>
        </div>
      </div>

      <footer className="bg-slate-900 text-white w-screen h-16 p-8 fixed left-0 bottom-0 flex flex-row justify-between items-center z-10 tablet:hidden">
      <NavLink to="/" activeClassName="active">
          <button className="text-center text-[12px]">
            <IoMdHome className="h-6 w-6 m-auto" />
            Home
          </button>
        </NavLink>

        <NavLink to="/events" activeClassName="active">
          <button className="text-center text-[12px]">
            <RiRadioFill className="h-6 w-6 m-auto" />
            Events
          </button>
        </NavLink>

        <NavLink to="/service" activeClassName="active">
          <button className="text-center text-[12px]">
            <PiUsersThreeFill className="h-6 w-6 m-auto" />
            Services
          </button>
        </NavLink>

        <NavLink to="/profile" activeClassName="active">
          <button className="text-center text-[12px]">
            <FaRegUser className="h-6 w-6 m-auto" />
            Profile
          </button>
        </NavLink>
      </footer>
    </div>
  );
};

export default Profile;
