import axios from "axios";
import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";

const Entertainment = () => {

const [dj, setDj] = useState([]);
const [comedy, setComedy] = useState([]);
const [dancer, setDancer] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {

  const disc = async () => {
    try {
      const res = await axios.get("http://localhost:3000/discs");
      setDj(res.data);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  disc();

  const comedian = async () => {
    try {
      const res = await axios.get("http://localhost:3000/comedians");
      setComedy(res.data);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  comedian();

  const dance = async () => {
    try {
      const res = await axios.get("http://localhost:3000/dancers");
      setDancer(res.data);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  dance();
}, [])

  
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

      <div className="flex flex-row gap-[18px] mt-3 text-[15.5px] font-semibold underline decoration-2 text-slate-800">
        <button>All</button>
        <button>DJs</button>
        <button>MCs</button>
        <button>Comedian</button>
        <button>Dancers</button>
        <button>Music</button>
        <button>Sound</button>
      </div>

      <div className="grid grid-cols-2 text-center gap-10 mt-4">
        {dj.map((dj) => (
            <div key={dj._id}>
              <img src={dj.picture} alt="" className="h-40 w-44 rounded-2xl"/>
              <p className="font-semibold text-[15px] text-slate-800">{dj.name}</p>
            </div>
          ))
        }
        {comedy.map((comedy) => (
          <div key={comedy._id}>
            <img src={comedy.picture} alt="" className="h-40 w-44 rounded-2xl"/>
            <p className="font-semibold text-[15px] text-slate-800">{comedy.name}</p>
          </div>
        ))
        }
        {dancer.map((dancer) => (
          <div key={dancer._id}>
            <img src={dancer.picture} alt="" className="h-40 w-44 rounded-2xl"/>
            <p className="font-semibold text-[15px] text-slate-800">{dancer.name}</p>
          </div>
        ))}
      </div>

      



    </div>
  );
};

export default Entertainment;
