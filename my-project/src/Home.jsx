import axios from "axios";
import { React, useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { IoMdHome } from "react-icons/io";
import { RiRadioFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaRegPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const items = [
  {
    id: "details",
    eventName: "",
    location: "",
    picture: "",
    time: "",
    amount: "",
    date: "",
    descriptionForRegular: "",
    descriptionForVip: "",
    descriptionForTableForFive: "",
  },
];

const Home = () => {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allEvents, setAllEvents] = useState([]);
  const [disEvent, setDisEvent] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  useEffect(() => {
    axios
      .get("http://localhost:3000/event/664c87a37a020531f202121c")
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
    <div className="p-7 w-screen h-full mb-11">
      <div className="fixed top-0 left-0 w-screen bg-white p-6">
        <div className="flex flex-row">
          <FaLocationDot className="text-red-600 mt-1 w-5 h-5" />
          <h1 className="text-black text-[18px] ml-1">
            No 6, Trench Avenue, Pluto.
          </h1>
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

      <h1 className="text-[20px] mt-24 font-semibold text-slate-800">
        Happening Now!!!
      </h1>

      <div>
        {event.map((event) => (
          <div key={event._id}>
            <div className="mt-3">
              <img
                className="w-full h-32 rounded-[20px]"
                src={event.picture}
                alt=""
              />
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              {items.map((item) => (
                <div key={item.id}>
                  <Link to={`/details/${item.id}`}>
                    <p className="text-[15px] text-slate-900 font-bold">
                      {event.eventName}
                    </p>
                  </Link>
                </div>
              ))}

              {items.map((item) => (
                <div key={item.id}>
                  <Link to={`/details/${item.id}`}>
                    <p className="text-[15px] text-slate-900 font-bold">
                      {event.amount}
                    </p>
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              {items.map((item) => (
                <div key={item.id}>
                  <Link to={`/details/${item.id}`}>
                    <p className="text-[15px] text-slate-900 flex items-center">
                      <FaLocationDot className="items-center text-red-700" />
                      {event.location}
                    </p>
                  </Link>
                </div>
              ))}
              {items.map((item) => (
                <div key={item.id}>
                  <Link to={`/details/${item.id}`}>
                    <p className="text-[15px] text-slate-900">{event.time}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-row justify-between w-full items-center mt-6">
        <h1 className="text-[20px] font-semibold text-slate-800">
          Upcoming Events
        </h1>
        <Link to="/coming">
          <button className="flex flex-row items-center gap-1 text-slate-800">
            See all <FaRegPlusSquare />
          </button>
        </Link>
      </div>


 <Swiper
              slidesPerView={2.5}
              spaceBetween={5}
            >
      <div className="flex gap-3 -mt-2">
        {filteredEvents.map((allEvents) => (
          <SwiperSlide>
          <div key={allEvents._id}>
            <div className="flex flex-row w-full h-28 mt-4">
              <img
                className="flex flex-row h-28 w-32 rounded-lg"
                src={allEvents.picture}
                alt=""
              />
            </div>

            {items.map((item) => (
              <div key={item.id}>
                <Link to={`/details/${item.id}`}>
                  <p className="text-[12px] text-slate-900 font-semibold">
                    {allEvents.eventName}
                  </p>
                </Link>
              </div>
            ))}

            <p className="flex flex-row items-center text-[10px] text-slate-900">
              <FaLocationDot className="items-center text-red-700" />
              {allEvents.location}
            </p>
          </div>
          </SwiperSlide>
        ))}
      </div>
      </Swiper>

      <div className="flex flex-row justify-between w-full items-center mt-6">
        <h1 className="text-[20px] font-semibold text-slate-800">
          Discover Venues
        </h1>
        <Link to="/upcoming">
          <button className="flex flex-row items-center gap-1 text-slate-800">
            See all <FaRegPlusSquare />
          </button>
        </Link>
      </div>

      <Swiper
              slidesPerView={2.5}
              spaceBetween={5}
            >
      <div className="flex gap-3 -mt-2">
        {disEvent.map((disEvent) => (
          <SwiperSlide>
          <div key={disEvent._id}>
            <div className="flex flex-row w-full h-28 mt-4">
              <img
                className="flex flex-row h-28 w-32 rounded-lg"
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
          </div>
          </SwiperSlide>
        ))}
      </div>
      </Swiper>

      <footer className="bg-slate-900 w-screen h-16 p-8 fixed left-0 bottom-0 flex flex-row justify-between items-center z-10">
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

export default Home;
