import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { RiRadioFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import img1 from "../src/image/Rectangle 9(1).svg";
import img2 from "../src/image/Rectangle 9(2).svg";
import img3 from "../src/image/Rectangle 9(3).svg";
import img4 from "../src/image/Rectangle 9(4).svg";
import img5 from "../src/image/Rectangle 9(5).svg";
import img6 from "../src/image/Rectangle 9(7).svg";

const Service = () => {
  return (
    <div className="p-7 w-screen h-full mb-9 tablet:bg-slate-100 tablet:mb-0">
      <div className="fixed top-0 left-0 w-screen bg-slate-300 p-6 tablet:mt-12">
        <div className="flex flex-row tablet:justify-center">
          <FaLocationDot className="text-red-600 mt-1 w-5 h-5 tablet:mt-2" />
          <h1 className="text-slate-800 text-[18px] ml-1 font-semibold tablet:text-[25px]">
            No 6, Trench Avenue, Pluto.
          </h1>
        </div>
      </div>

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

      <div className="grid grid-cols-2 gap-3 p-10 mt-4 tablet:mt-20 tablet:grid-cols-3 tablet:p-16 tablet:justify-items-center">
        <div className="grid items-center">
          <Link to="/entertainment">
            <img src={img6} alt="" />
            <button
              className="text-[15px]
                text-slate-900 font-semibold"
            >
              Entertainment
            </button>
          </Link>
        </div>

        <div className="grid items-center">
          <Link to="/venues">
            <img src={img1} alt="" />
            <button
              className="text-[15px]
                text-slate-900 font-semibold"
            >
              Event Venue
            </button>
          </Link>
        </div>

        <div className="grid items-center">
          <Link to="/securities">
            <img src={img2} alt="" />
            <button
              className="text-[15px]
                text-slate-900 font-semibold"
            >
              Security Personnel
            </button>
          </Link>
        </div>

        <div className="grid items-center">
          <Link to="/caterings">
            <img src={img3} alt="" />
            <button
              className="text-[15px]
                text-slate-900 font-semibold"
            >
              Catering Service
            </button>
          </Link>
        </div>

        <div className="grid items-center">
          <Link to="/photographies">
            <img src={img4} alt="" />
            <button
              className="text-[15px]
                text-slate-900 font-semibold"
            >
              Photography
            </button>
          </Link>
        </div>

        <div className="grid items-center">
          <Link to="/videographies">
            <img src={img5} alt="" />
            <button
              className="text-[15px]
                text-slate-900 font-semibold"
            >
              Videography
            </button>
          </Link>
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

export default Service;
