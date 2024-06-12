import axios from "axios";
import { React, useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { SiParamountplus } from "react-icons/si";
import { GoSearch } from "react-icons/go";
import { IoMdHome } from "react-icons/io";
import { RiRadioFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaRegPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Home = () => {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allEvents, setAllEvents] = useState([]);
  const [disEvent, setDisEvent] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  useEffect(() => {
    axios
      .get("http://localhost:3000/event/664b5378a6248b2964d4e661")
      .then((res) => {
        setEvent([res.data]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });

    const fetchEvent = async () => {
      try {
        const res = await axios.get("http://localhost:3000/events");
        setAllEvents(res.data);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchEvent();

    const fetchDisEvent = async () => {
      try {
        const res = await axios.get("http://localhost:3000/eventsTwo");
        setDisEvent(res.data);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchDisEvent();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEvents = allEvents.filter((event) =>
    event.eventName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filterEvents = disEvent.filter((event) =>
    event.eventName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading)
    return (
      <p className="text-center text-zinc-700 text-4xl mt-40">Loading...</p>
    );
  if (error)
    return (
      <p className="text-center text-zinc-700 text-4xl mt-40">
        Error : {error.message}
      </p>
    );

  return (
    <div className="p-7 w-screen h-full mb-11 tablet:bg-slate-300 tablet:w-full tablet:mb-0">
      <div className="fixed top-0 left-0 w-screen z-10 bg-white p-6 tablet:hidden">
        <div className="flex justify-between">
          <div className="flex flex-row">
            <FaLocationDot className="text-red-600 mt-1 w-5 h-5" />
            <h1 className="text-black text-[18px] ml-1">
              No 6, Trench Avenue, Pluto.
            </h1>
          </div>
          <button className="w-20 h-8 bg-red-700 font-semibold rounded-lg text-white">
            Sign Out
          </button>
        </div>

        <div className="relative flex items-center mt-3 w-full">
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

      <h1 className="text-[20px] mt-28 font-semibold text-slate-800 tablet:text-center tablet:text-black tablet:text-4xl tablet:mt-16">
        Happening Now!!!
      </h1>

      <div>
        {event.map((event) => (
          <div key={event._id}>
            <div className="mt-3 tablet:w-[50%] m-auto">
              <Link to={`events/${event._id}`}>
                <img
                  className="w-full h-32 rounded-[20px] tablet:h-72 m-auto tablet:rounded-[5px] mt-5 object-cover"
                  src={event.picture}
                  alt=""
                />
              </Link>
            </div>

            <div className="flex flex-row items-center justify-between w-full tablet:justify-center">
              <Link to={`events/${event._id}`}>
                <p className="text-[15px] text-slate-900 font-bold tablet:text-[30px] tablet:font-semibold tablet:underline">
                  {event.eventName}
                </p>
              </Link>
              <Link to={`events/${event._id}`}>
                <p className="text-[15px] text-slate-900 font-bold tablet:hidden">
                  {event.amount}
                </p>
              </Link>
            </div>

            <div className="flex flex-row items-center justify-between w-full tablet:hidden">
              <p className="text-[15px] text-slate-900 flex items-center">
                <FaLocationDot className="items-center text-red-700" />
                {event.location}
              </p>

              <p className="text-[15px] text-slate-900 tablet:text-[18px]">
                {event.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-row justify-between w-full mt-6 tablet:flex-col tablet:mt-10 items-center">
        <h1 className="text-[20px] font-semibold text-slate-800 tablet:text-4xl">
          Upcoming Events
        </h1>
        <Link to="/events">
          <button className="flex items-center gap-1 text-slate-800 tablet:hidden ">
            See all <FaRegPlusSquare />
          </button>
        </Link>
      </div>

      <Swiper slidesPerView={2.5} spaceBetween={10} className="tablet:hidden">
        <div className="flex gap-3 -mt-2">
          {filteredEvents.map((allEvents) => (
            <SwiperSlide>
              <div key={allEvents._id}>
                <Link to={`/events/${allEvents._id}`}>
                  <div className="flex flex-row w-full h-32 mt-3">
                    <img
                      className="flex flex-row h-32 w-40 rounded-lg"
                      src={allEvents.picture}
                      alt=""
                    />
                  </div>
                  <p className="text-[12px] text-slate-900 font-semibold">
                    {allEvents.eventName}
                  </p>
                  <p className="flex flex-row items-center text-[10px] text-slate-900">
                    <FaLocationDot className="items-center text-red-700" />
                    {allEvents.location}
                  </p>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      <div className="hidden tablet:flex gap-8">
        {filteredEvents.map((allEvents) => (
          <div key={allEvents._id}>
            <Link to={`/events/${allEvents._id}`}>
              <img
                className="h-52 w-80 rounded-lg mt-9"
                src={allEvents.picture}
                alt=""
              />
            </Link>

            <div className="flex flex-col w-32">
              <Link to={`/events/${allEvents._id}`}>
                <p className="tablet:text-[18px] text-slate-900 font-semibold">
                  {allEvents.eventName}
                </p>
                <p className="tablet:flex flex-row items-center text-[16px] text-slate-900">
                  <SiParamountplus className="items-center text-red-700" />
                  {allEvents.amount}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden tablet:flex justify-center mt-5">
        <Link to="/events">
          <button className="flex p-5 items-center gap-1 text-slate-800 tablet:mt-2 tablet:text-[20px] bg-white w-32 h-10 rounded-lg transition duration-600 ease-in-out hover:bg-red-600 hover:text-white">
            See all <FaRegPlusSquare />
          </button>
        </Link>
      </div>

      <div className="flex flex-row justify-between w-full mt-6 tablet:flex-col tablet:mt-10 items-center">
        <h1 className="text-[20px] font-semibold text-slate-800 tablet:text-4xl">
          Discover Venues
        </h1>
        <Link to="/venues">
          <button className="flex items-center gap-1 text-slate-800 tablet:hidden">
            See all <FaRegPlusSquare />
          </button>
        </Link>
      </div>

      <Swiper slidesPerView={2.5} spaceBetween={10} className="tablet:hidden">
        <div className="flex gap-3 -mt-2">
          {filterEvents.map((disEvent) => (
            <SwiperSlide>
              <div key={disEvent._id}>
                <Link to={`/venues/${disEvent._id}`}>
                  <div className="flex flex-row w-full h-32 mt-3">
                    <img
                      className="flex flex-row h-32 w-40 rounded-lg"
                      src={disEvent.picture}
                      alt=""
                    />
                  </div>

                  <p className="text-[12px] text-slate-900 font-semibold">
                    {disEvent.eventName}
                  </p>
                  <p className="flex flex-row items-center text-[10px] text-slate-900">
                    <FaLocationDot className="items-center text-red-700" />
                    {disEvent.location}
                  </p>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      <div className="hidden tablet:flex gap-8">
        {filterEvents.map((disEvent) => (
          <div key={disEvent._id}>
            <Link to={`/venues/${disEvent._id}`}>
              <img
                className="h-52 w-80 rounded-lg mx-auto mt-9"
                src={disEvent.picture}
                alt=""
              />
            </Link>

            <div className="flex flex-col w-32">
              <Link to={`/venues/${disEvent._id}`}>
                <p className="tablet:text-[18px] text-slate-900 font-semibold">
                  {disEvent.eventName}
                </p>

                <p className="tablet:flex flex-row items-center text-[15px] text-slate-900">
                  <SiParamountplus className="items-center text-red-700" />
                  {disEvent.amount}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden tablet:flex justify-center mt-5">
        <Link to="/venues">
          <button className="flex p-5 items-center gap-1 text-slate-800 tablet:mt-2 tablet:text-[20px] bg-white w-32 h-10 rounded-lg transition duration-600 ease-in-out hover:bg-red-600 hover:text-white">
            See all <FaRegPlusSquare />
          </button>
        </Link>
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

export default Home;
