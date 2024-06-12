import axios from "axios";
import { React, useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { IoMdHome } from "react-icons/io";
import { RiRadioFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

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
  };

  const filteredEvents = event.filter((event) =>
    event.eventName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-7 w-screen min-h-screen mb-11 tablet:mb-0 tablet:bg-slate-300">
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

      <div className="fixed top-0 left-0 w-screen bg-white p-6 tablet:bg-slate-300">
        <div className="flex flex-row tablet:justify-center">
          <FaLocationDot className="text-red-600 mt-1 w-5 h-5 tablet:mt-2" />
          <h1 className="text-black text-[18px] ml-1 tablet:text-[25px]">
            No 6, Trench Avenue, Pluto.
          </h1>
        </div>

        <div className="relative flex items-center mt-3 tablet:justify-center">
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

      <div className="flex flex-col gap-4 mt-[7rem] tablet:grid tablet:grid-cols-3">
        {filteredEvents.map((event) => (
          <div>
            <Link to={`/${event._id}`}>
              <img
                src={event.picture}
                className="w-full h-32 rounded-xl tablet:w-[88%] tablet:h-56 m-auto tablet:mt-2"
              />
            </Link>

            <div className="flex flex-row justify-between items-center w-full tablet:font-semibold tablet:w-[88%] tablet:m-auto">
              <Link to={`/${event._id}`}>
                <h1 className="text-black text-[14px]">{event.eventName}</h1>
              </Link>

              <Link to={`/${event._id}`}>
                <p className="text-slate-800 text-[14px] tablet:hidden">
                  {event.amount}
                </p>
              </Link>
            </div>

            <div className="flex flex-row items-center justify-between w-full tablet:font-semibold tablet:w-[88%] tablet:m-auto">
              <Link to={`/${event._id}`}>
                {" "}
                <p className="flex flex-row items-center text-[13px] text-slate-900">
                  <FaLocationDot className="items-center text-red-700" />
                  {event.location}
                </p>
              </Link>

              <p className="text-[13px] text-slate-900 tablet:hidden">
                {event.date}
              </p>
            </div>

            <p className="text-[13px] text-slate-900 tablet:hidden">
              {event.time}
            </p>
          </div>
        ))}
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

export default Events;
