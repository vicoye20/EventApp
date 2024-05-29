import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
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
  },[])

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  }

  const filtercomedian = comedian.filter((comedian) =>
    comedian.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-7 w-screen h-full">
      <div className="fixed top-0 left-0 w-screen bg-white p-6">
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
            onChange={handleSearch}
            value={searchQuery}
            className="border-2 rounded-md bg-slate-200 pl-10 p-2 w-full placeholder:text-[18px] placeholder:text-slate-600 focus:outline-none"
          />
        </div>

        <div className="flex flex-row gap-[18px] mt-3 text-[15.5px] font-semibold text-slate-800">
        <Link to="/entertainment">
            <button>All</button>
          </Link>
          <Link to="/entertainment/djs">
            <button>DJs</button>
          </Link>
          <Link to="/entertainment/mcs">
            <button>MCs</button>
          </Link>
          <Link to="/entertainment/comedian">
            <button>Comedian</button>
          </Link>
          <Link to="/entertainment/dancers">
            <button>Dancers</button>
          </Link>
          <Link to="/entertainment/musics">
            <button>Music</button>
          </Link>
          <Link to="/entertainment/sounds">
            <button>Sound</button>
          </Link>
        </div>
      </div>

      <div className="mt-36">
          {filtercomedian.map((comedian) => (
            <div key={comedian._id}>
              <img src={comedian.picture} alt="" className="h-40 w-[50%] rounded-2xl"/>
              <p className="font-semibold text-[15px] text-slate-800">{comedian.name}</p>
            </div>
          ))}
      </div>

    </div>
  );
};

export default Comedian;
