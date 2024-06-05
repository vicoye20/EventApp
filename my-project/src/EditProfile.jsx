import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";


const EditProfile = () => {
  return (
    <div className="p-7 w-screen h-full tablet:bg-slate-300 tablet:h-screen">
    <div className="flex flex-row">
      <Link to="/profile">
        <button>
          <FaArrowLeftLong className="text-slate-600 mt-1 w-5 h-5 tablet:text-black tablet:mt-[10px]" />
        </button>
      </Link>
      <h1 className="text-slate-800 text-[18px] ml-3 tablet:text-black tablet:text-[24px]">
        My Profile
      </h1>
    </div>

    </div>
  )
}

export default EditProfile