import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ChngKey = () => {
  return (
    <div className="p-7 w-screen h-full tablet:bg-slate-300 tablet:h-screen">
      <div className="flex flex-row">
        <Link to="/profile">
          <button>
            <FaArrowLeftLong className="text-red-600 mt-1 w-5 h-5 tablet:text-red-600 tablet:mt-[10px]" />
          </button>
        </Link>
        <h1 className="text-blue-800 text-[18px] ml-3 tablet:text-blue-800 font-semibold tablet:text-[24px] tablet:ml-6">
          Change Password
        </h1>
      </div>

      <h1 className="text-slate-800 text-[17px] mt-6 tablet:text-black tablet:text-[20px] tablet:text-center">
        Your password needs to be a minimum of six characters long and should
        contain a mix of letters and numbers for security.
      </h1>

      <form className="mt-8 ">
        <div className="flex flex-col gap-3 max-w-xl mx-auto">
          <div className="relative flex items-center">
            <RiLockPasswordLine className="absolute left-4" color="blue" />
            <input
              type="text"
              placeholder="Current password"
              className="border-2 border-slate-300 rounded-md pl-10 p-2 w-full placeholder:text-md placeholder:text-slate-500 focus:outline-none tablet:w-[100%]"
            />
          </div>

          <div className="relative flex items-center  ">
            <RiLockPasswordLine className="absolute left-4" color="blue" />
            <input
              type="text"
              placeholder="New Password"
              className="border-2 border-slate-300 rounded-md pl-10 p-2 w-full placeholder:text-md placeholder:text-slate-500 focus:outline-none tablet:w-[100%]"
            />
          </div>

          <div className="relative flex items-center  ">
            <RiLockPasswordLine className="absolute left-4" color="blue" />
            <input
              type="text"
              placeholder="Confirm Password"
              className="border-2 border-slate-300 rounded-md pl-10 p-2 w-full placeholder:text-md placeholder:text-slate-500 focus:outline-none tablet:w-[100%]"
            />
          </div>
        </div>

        <button className="text-blue-700 absolute right-8 mt-2 tablet:hidden">
          Forget Password?
        </button>

        <div className="hidden tablet:block mt-6 tablet:max-w-xl tablet:mx-auto">
          <button className="w-full h-10 bg-green-700 rounded-md text-white tablet:w-[100%] tablet:font-semibold">
            Forget Password
          </button>
        </div>

        <div className="mt-40 tablet:max-w-xl tablet:mx-auto">
          <button className="w-full h-10 bg-blue-700 rounded-md text-white tablet:w-[100%] tablet:font-semibold">
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChngKey;
