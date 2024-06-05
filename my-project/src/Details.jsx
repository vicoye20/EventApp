import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Details = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/event/${id}`);
        setEvent(res.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

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
    <div className="p-7 w-screen h-full mb-11 tablet:bg-slate-300 tablet:h-screen">
      <div className="flex flex-row items-center text-slate-700 tablet:text-black">
        <Link to="/">
          <button className="items-center mt-2">
            <FaArrowLeftLong />
          </button>
        </Link>
        <h1 className="text-center text-[20px] ml-3 font-semibold">
          {event.eventName}
        </h1>
      </div>

      <div key={event._id} className="tablet:hidden">
        <img
          className="w-full h-48 mt-6 rounded-[20px]"
          src={event.picture}
          alt=""
        />

        <div className="flex flex-row items-center mt-4">
          <SlCalender className="text-blue-700" />
          <p className="text-slate-700 font-semibold text-[16px] ml-3">
            {event.date}
          </p>
        </div>

        <div className="flex flex-row mt-1 items-center">
          <FaRegClock className="text-blue-700" />
          <p className="text-slate-700 font-semibold text-[16px] ml-3">
            {event.time}
          </p>
        </div>

        <div className="flex flex-row items-center mt-1">
          <FaLocationDot className="text-red-700" />
          <p className="text-slate-700 font-semibold text-[16px] ml-3">
            {event.location}
          </p>
        </div>

        <h1 className="text-[20px] text-slate-800 mt-3 font-semibold">
          Descriptions
        </h1>
        <p className="text-slate-800 text-[16px]">
          {event.descriptionForRegular}
        </p>

        <button className="m-auto w-full h-12 bg-blue-700 rounded-2xl text-white font-semibold mt-7">
          {event.amount}
        </button>
      </div>

      <div
        key={event._id}
        className="hidden tablet:flex flex-row justify-evenly"
      >
        <div className="w-[35%] h-66">
          <img
            className="w-[100%] h-66 mt-6 rounded-[15px]"
            src={event.picture}
            alt=""
          />
        </div>

        <div className="w-[50%] h-66">
          <div className="flex flex-row items-center mt-4">
            <SlCalender className="text-blue-700" />
            <p className="text-slate-700 font-semibold text-[19px] ml-3">
              {event.date}
            </p>
          </div>

          <div className="flex flex-row mt-1 items-center">
            <FaRegClock className="text-blue-700" />
            <p className="text-slate-700 font-semibold text-[19px] ml-3">
              {event.time}
            </p>
          </div>

          <div className="flex flex-row items-center mt-1">
            <FaLocationDot className="text-red-700" />
            <p className="text-slate-700 font-semibold text-[19px] ml-3">
              {event.location}
            </p>
          </div>

          <h1 className="text-[20px] text-slate-800 mt-3 font-semibold">
            Descriptions
          </h1>
          <p className="text-slate-800 text-[19px]">
            {event.descriptionForRegular}
          </p>

          <button className="m-auto w-full h-12 bg-blue-700 rounded-2xl text-white font-semibold mt-10">
            {event.amount}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
