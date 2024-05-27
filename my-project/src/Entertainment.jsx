import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";

const Entertainment = () => {
  return (
    <div className='p-7 w-screen h-full mb-12'>

      <div className="flex flex-row items-center text-slate-700">
        <Link to="/service">
          <button>
            <FaArrowLeftLong />
          </button>
        </Link>
        <h1 className="text-center text-[20px] ml-32 font-semibold">
          Entertainment
        </h1>
      </div>

      <div className="relative flex items-center mt-2 w-full">
        <GoSearch className="absolute left-4 text-slate-900" />
        <input
          type="text"
          placeholder="Search"
          className="border-2 rounded-md bg-slate-200 pl-10 p-2 w-full placeholder:text-[18px] placeholder:text-slate-600 focus:outline-none"
        />
      </div>

      <div className="flex flex-row gap-[18px] mt-3">
        <button>All</button>
        <button>DJs</button>
        <button>MCs</button>
        <button>Comedian</button>
        <button>Dancers</button>
        <button>Music</button>
        <button>Sound</button>
      </div>



    </div>
  );
};

export default Entertainment;
