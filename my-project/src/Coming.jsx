import { React, useState, useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";
import { Link } from "react-router-dom";

const Coming = () => {
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
    <div className="p-7 w-screen h-full">
      <div className="fixed top-0 left-0 w-screen bg-white p-6">
        <div className="flex flex-row items-center text-slate-700">
          <Link to="/">
            <button>
              <FaArrowLeftLong />
            </button>
          </Link>
          <h1 className="text-center text-[20px] ml-28 font-semibold">
            Upcoming Event
          </h1>
        </div>

        <div className="relative flex items-center mt-4 w-full">
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

      <div className="flex flex-col gap-4 mt-28">
        {filteredEvents.map((event) => (
          <div>
            <img src={event.picture} className="w-full h-32 rounded-xl" />

            <div className="flex flex-row justify-between items-center w-full">
              <h1 className="text-black text-[16px]">{event.eventName}</h1>
              <p className="text-slate-800 text-[16px]">{event.amount}</p>
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
    </div>
  );
};

export default Coming;
