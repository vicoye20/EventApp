import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import axios from "axios";

const Comedian = () => {
  const [comedian, setComedian] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const comedian = async () => {
      try {
        const res = await axios.get("http://localhost:3000/comedians");
        setComedian(res.data);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    comedian();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filtercomedian = comedian.filter((comedian) =>
    comedian.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-7 w-screen h-full tablet:bg-slate-300 tablet:h-screen">
      <div className="fixed top-0 left-0 w-screen bg-white p-6 tablet:bg-slate-300">
      <div className="flex flex-row items-center text-blue-800">
          <Link to="/service">
            <button>
              <FaArrowLeftLong className="text-red-700 tablet:hidden" />
            </button>
          </Link>
          <h1 className="text-center text-[20px] ml-32 font-semibold tablet:hidden">
            Entertainment
          </h1>
        </div>

        <Link to="/service">
          <button className="hidden tablet:block">
            <FaArrowLeftLong className="w-10 h-6 text-red-700" />
          </button>
        </Link>
        <h1 className="hidden tablet:block font-semibold text-blue-800 text-center text-[25px] -mt-8">
          Entertainment
        </h1>

        <div className="relative flex items-center mt-2 w-full tablet:justify-center">
          <GoSearch className="absolute left-4 text-slate-900 tablet:hidden" />
          <input
            type="text"
            placeholder="Search"
            onChange={handleSearch}
            value={searchQuery}
            className="border-2 rounded-md bg-slate-200 pl-10 p-2 w-full placeholder:text-[18px] placeholder:text-slate-600 focus:outline-none tablet:bg-white tablet:w-[50%]"
          />
        </div>

        <div className="flex flex-row gap-[18px] mt-3 text-[15.5px] font-semibold text-slate-800 tablet:w-full tablet:text-[20px] tablet:justify-center tablet:gap-12">
          <NavLink to="/entertainment" activeClassName="active">
            <button>All</button>
          </NavLink>
          <NavLink to="/entertainment/djs" activeClassName="active">
            <button>DJs</button>
          </NavLink>
          <NavLink to="/entertainment/mcs" activeClassName="active">
            <button>MCs</button>
          </NavLink>
          <NavLink to="/entertainment/comedian" activeClassName="active">
            <button>Comedian</button>
          </NavLink>
          <NavLink to="/entertainment/dancers" activeClassName="active">
            <button>Dancers</button>
          </NavLink>
          <NavLink to="/entertainment/musics" activeClassName="active">
            <button>Music</button>
          </NavLink>
          <NavLink to="/entertainment/sounds" activeClassName="active">
            <button>Sound</button>
          </NavLink>
        </div>
      </div>

      <div className="mt-36 tablet:mt-44">
        {filtercomedian.map((comedian) => (
          <div key={comedian._id} className="w-[50%] tablet:w-[25%]">
            <Link to={`/entertainment/comedian/${comedian._id}`}>
              <img
              src={comedian.picture}
              alt=""
              className="h-40 w-[100%] rounded-2xl tablet:w-[100%] tablet:h-52"
            />
            </Link>
            
            <Link to={`/entertainment/comedian/${comedian._id}`}>
            <button className="font-semibold text-[15px] text-slate-800 tablet:text-[20px]">
              {comedian.name}
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comedian;
