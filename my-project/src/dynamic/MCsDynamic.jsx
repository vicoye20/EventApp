import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";


const MCsDynamic = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchEvent = async () => {
        try {
          const res = await axios.get(`http://localhost:3000/mcs/${id}`);
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
      <div className="p-7 w-screen h-full mb-11 tablet:bg-slate-300 tablet:h-screen tablet:mb-0">
      <div className="flex flex-row items-center text-slate-700 tablet:text-black">
        <Link to="/entertainment">
          <button className="items-center mt-2">
            <FaArrowLeftLong className="text-red-600 w-6 h-6"/>
          </button>
        </Link>
        <h1 className="text-center text-[20px] ml-3 font-semibold underline decoration-2 text-blue-800">
          {event.name}
        </h1>
      </div>

      <div key={event._id} className="tablet:hidden">
        <img
          className="w-[75%] h-48 mt-6 rounded-[10px]"
          src={event.picture}
          alt=""
        />

        <h1 className="text-[20px] text-blue-800 mt-3 font-semibold underline decoration-2">
          Descriptions
        </h1>
        <p className="text-slate-800 text-[16px]">{event.description}</p>

        <button className="m-auto w-full h-12 bg-blue-700 rounded-2xl text-white font-semibold mt-7">
          {event.amount}
        </button>
      </div>

      <div
        key={event._id}
        className="hidden tablet:flex flex-row justify-evenly mt-8"
      >
        <div className="w-[30%] h-60">
          <img
            className="w-full h-60 mt-6 rounded-[8px]"
            src={event.picture}
            alt=""
          />
           <button className="m-auto w-full h-12 bg-blue-700 rounded-2xl text-white font-semibold mt-11">
            {event.amount}
          </button>
        </div>

        <div className="w-[40%]">
          <h1 className="text-[26px] text-blue-800 mt-3 font-semibold underline">
            Descriptions
          </h1>
          <p className="text-slate-800 text-[20px]">{event.description}</p>

         
        </div>
      </div>
    </div>
    );
  };

export default MCsDynamic