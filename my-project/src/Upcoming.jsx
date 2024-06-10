import { React, useState, useEffect } from "react";
import axios from "axios";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { IoMdHome } from "react-icons/io";
import { RiRadioFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Upcoming = () => {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fecthEvent = async () => {
      try {
        const res = await axios.get("http://localhost:3000/eventsTwo");
        setEvent(res.data);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fecthEvent();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEvents = event.filter((event) =>
    event.eventName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-7 w-screen h-full mb-12 tablet:mb-0 tablet:bg-slate-300 tablet:h-screen">
      <header className="hidden tablet:block bg-slate-900 w-screen h-16 fixed top-0 left-0 z-10">
        <div className="flex flex-row items-center justify-between">
          <Link to="/">
            <button className="text-white text-2xl font-semibold p-4 ml-5">
              EVENT APP
            </button>
          </Link>

          <nav className="w-[50%] flex flex-row justify-evenly items-center">
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
          </nav>
        </div>
      </header>

      <div className="fixed top-0 left-0 w-screen bg-white p-6 tablet:bg-slate-300">
        <div className="flex flex-row items-center text-slate-700">
          <Link to="/service">
            <button className="tablet:hidden">
              <FaArrowLeftLong />
            </button>
          </Link>
          <h1 className="text-center text-[20px] ml-40 font-semibold tablet:hidden">
            Venues
          </h1>
        </div>

        <Link to="/">
          <button className="hidden tablet:block">
            <FaArrowLeftLong />
          </button>
        </Link>

        <h1 className="hidden tablet:block text-center text-[25px] font-semibold mt-10">
          Venues
        </h1>

        <div className="relative flex items-center mt-2 w-full tablet:justify-center">
          <GoSearch className="absolute left-4 text-slate-900 tablet:hidden" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
            className="border-2 rounded-md bg-slate-200 pl-10 p-2 w-full placeholder:text-[18px] placeholder:text-slate-600 focus:outline-none tablet:w-[50%] tablet:bg-white"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-28 tablet:hidden">
        {filteredEvents.map((event) => (
          <div key={event._id}>
            <div>
              <Link to={`/venues/${event._id}`}>
                <img
                  className="h-40 w-full rounded-xl"
                  src={event.picture}
                  alt=""
                />
              </Link>
            </div>

            <div className="flex flex-row justify-between">
              <Link to={`/venues/${event._id}`}>
                <p className="text-slate-800 font-semibold text-[16px] ml-1">
                  {event.eventName}
                </p>
              </Link>

              <Link to={`/venues/${event._id}`}>
                <p className="text-slate-800 font-semibold text-[16px]">
                  {event.amount}
                </p>
              </Link>
            </div>

            <Link to={`/venues/${event._id}`}>
              <p className="flex flex-row items-center text-slate-800 text-[14px]">
                <FaLocationDot className="text-red-700" />
                {event.location}
              </p>
            </Link>
          </div>
        ))}
      </div>

      <div className="hidden tablet:flex gap-8 mt-44">
        {filteredEvents.map((event) => (
          <div key={event._id}>
            <div>
              <Link to={`/venues/${event._id}`}>
                <img
                  className="h-52 w-80 rounded-xl"
                  src={event.picture}
                  alt=""
                />
              </Link>
            </div>

            <div className="flex flex-row justify-between">
              <Link to={`/venues/${event._id}`}>
                <p className="text-slate-800 font-semibold text-[16px] ml-1">
                  {event.eventName}
                </p>
              </Link>

              <Link to={`/venues/${event._id}`}>
                <p className="tablet:hidden text-slate-800 font-semibold text-[16px]">
                  {event.amount}
                </p>
              </Link>
            </div>

            <Link to={`/venues/${event._id}`}>
              <p className="flex flex-row items-center text-slate-800 text-[14px]">
                <FaLocationDot className="text-red-700" />
                {event.location}
              </p>
            </Link>
          </div>
        ))}
      </div>

      <footer className="bg-slate-900 w-screen h-16 p-8 mt-16 fixed left-0 bottom-0 z-0 flex flex-row justify-between items-center tablet:hidden">
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

        <button className="text-center text-white text-[12px]">
          <PiUsersThreeFill className="h-6 w-6 m-auto" />
          Services
        </button>

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

export default Upcoming;
