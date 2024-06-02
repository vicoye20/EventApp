import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
// import { GoSearch } from "react-icons/go";

const Catering = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:3000/caterings")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen bg-white p-6">
      <div className="flex flex-row items-center text-slate-700">
        <Link to="/service">
          <button>
            <FaArrowLeftLong />
          </button>
        </Link>
        <h1 className="text-center text-[20px] ml-[110px] font-semibold">
          Catering Service
        </h1>
      </div>

      {/* <div className="relative flex items-center mt-2 w-full">
          <GoSearch className="absolute left-4 text-slate-900" />
          <input
            type="text"
            placeholder="Search"
            // onChange={handleSearch}
            value={searchQuery}
            className="border-2 rounded-md bg-slate-200 pl-10 p-2 w-full placeholder:text-[18px] placeholder:text-slate-600 focus:outline-none"
          />
        </div> */}

      <div>
        {data.map((data) => (
          <div key={data._id}>
            <img
              src={data.picture}
              alt=""
              className="rounded-2xl w-full h-48 mt-4"
            />
            <button className="text-slate-900 font-semibold text-[18px]">
              {data.name}
            </button>

            <h1 className="text-slate-900 font-semibold text-[24px] mt-5">
              Description
            </h1>
            <p className="text-slate-900 text-[18px]">{data.description}</p>
            <button className="w-full h-10 font-semibold text-slate-100 bg-blue-700 rounded-lg mt-5">
              {data.amount}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catering;
