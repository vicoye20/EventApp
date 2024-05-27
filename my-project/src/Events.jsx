import axios from "axios";
import { React, useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { IoMdHome } from "react-icons/io";
import { RiRadioFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Events = () => {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const routeEvent = async () => {
      try {
        const res = await axios.get("http://localhost:3000/eventsThree");
        setEvent(res.data);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    routeEvent();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  }

  const filteredEvents = event.filter((event) =>
    event.eventName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-7 w-screen h-full mb-11">
      <div className="fixed top-0 left-0 w-screen bg-white p-6">
        <div className="flex flex-row">
          <FaLocationDot className="text-red-600 mt-1 w-5 h-5" />{" "}
          <h1 className="text-black text-[18px] ml-1">
            No 6, Trench Avenue, Pluto.
          </h1>
        </div>

        <div className="relative flex items-center mt-3">
          <GoSearch className="absolute left-4 text-slate-900" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
            className="border-2 rounded-md bg-slate-200 pl-10 p-2 w-full placeholder:text-[18px] placeholder:text-slate-600 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-[7rem]">
        {filteredEvents.map((event) => (
          <div>
            <img src={event.picture} className="w-full h-32 rounded-xl" />

            <div className="flex flex-row justify-between items-center w-full">
              <h1 className="text-black text-[14px]">{event.eventName}</h1>
              <p className="text-slate-600 text-[14px]">{event.amount}</p>
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <p className="flex flex-row items-center text-[13px] text-slate-900">
                <FaLocationDot className="items-center text-red-700" />
                {event.location}
              </p>
              <p className="text-[13px] text-slate-900">{event.date}</p>
            </div>

            <p className="text-[13px] text-slate-900">{event.time}</p>
          </div>
        ))}
      </div>

      <footer className="bg-slate-900 w-screen h-16 p-8 mt-16 fixed left-0 bottom-0 z-0 flex flex-row justify-between items-center">
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

export default Events;
