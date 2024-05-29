import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { RiRadioFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import img1 from "../src/image/Rectangle 9(1).svg";
import img2 from "../src/image/Rectangle 9(2).svg";
import img3 from "../src/image/Rectangle 9(3).svg";
import img4 from "../src/image/Rectangle 9(4).svg";
import img5 from "../src/image/Rectangle 9(5).svg";
import img6 from "../src/image/Rectangle 9(7).svg";

const Service = () => {
  return (
    <div className="p-7 w-screen h-full mb-9">
      <div className="fixed top-0 left-0 w-screen bg-slate-300 p-6">
        <div className="flex flex-row">
          <FaLocationDot className="text-red-600 mt-1 w-5 h-5" />
          <h1 className="text-slate-800 text-[18px] ml-1 font-semibold">
            No 6, Trench Avenue, Pluto.
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 p-10 mt-4">
        <div className="grid items-center">
          <img src={img6} alt="" />
          <Link to="/entertainment">
            <button
              className="text-[15px]
                text-slate-900 font-semibold"
            >
              Entertainment
            </button>
          </Link>
        </div>

        <div className="grid items-center">
          <img src={img1} alt="" />
          <Link to="/coming">
            <button
              className="text-[15px]
                text-slate-900 font-semibold"
            >
              Event Venue
            </button>
          </Link>
        </div>

        <div className="grid items-center">
          <img src={img2} alt="" />
          <Link to='/security'>
          <button
            className="text-[15px]
                text-slate-900 font-semibold"
          >
            Security Personal
          </button>
          </Link>
        </div>

        <div className="grid items-center">
          <img src={img3} alt="" />
          <Link to='/'>
          <button
            className="text-[15px]
                text-slate-900 font-semibold"
          >
            Catering Service
          </button>
          </Link>
        </div>

        <div className="grid items-center">
          <img src={img4} alt="" />
         <Link to='/'>
         <button
            className="text-[15px]
                text-slate-900 font-semibold"
          >
            Photography
          </button>
         </Link>
        </div>

        <div className="grid items-center">
          <img src={img5} alt="" />
          <Link to ='/'>
          <button
            className="text-[15px]
                text-slate-900 font-semibold"
          >
            Videography
          </button>
          </Link>
        </div>
      </div>

      <footer className="bg-slate-900 w-screen h-16 p-8 fixed left-0 bottom-0 flex flex-row justify-between items-center">
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

export default Service;
