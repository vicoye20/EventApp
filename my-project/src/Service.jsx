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
        <div className="grid items-center text-center">
          <img src={img6} alt="" />
          <Link to="/entertainment">
            <button
              className="text-center text-[15px]
                text-slate-900"
            >
              Entertainment
            </button>
          </Link>
        </div>

        <div className="grid items-center text-center">
          <img src={img1} alt="" />
          <Link to="/coming">
            <button
              className="text-center text-[15px]
                text-slate-900"
            >
              Event Venue
            </button>
          </Link>
        </div>

        <div className="grid items-center text-center">
          <img src={img2} alt="" />
          <button
            className="text-center text-[15px]
                text-slate-900"
          >
            Security Personal
          </button>
        </div>

        <div className="grid items-center text-center">
          <img src={img3} alt="" />
          <button
            className="text-center text-[15px]
                text-slate-900"
          >
            Catering Service
          </button>
        </div>

        <div className="grid items-center text-center">
          <img src={img4} alt="" />
          <button
            className="text-center text-[15px]
                text-slate-900"
          >
            Photography
          </button>
        </div>

        <div className="grid items-center text-center">
          <img src={img5} alt="" />
          <button
            className="text-center text-[15px]
                text-slate-900"
          >
            Videography
          </button>
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
