import { React, useState, useEffect } from "react";
import { Link,NavLink } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import axios from "axios";

const Sounds = () => {
  const [sound, setSound] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get("http://localhost:3000/sounds");
        setSound(res.data);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
      setLoading(false);
    };
    fetchEvent();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filtersound = sound.filter((sound) =>
    sound.name.toLowerCase().includes(searchQuery.toLowerCase())
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

      <div className="flex flex-row mt-3 gap-[6px] text-[15.5px] font-semibold text-white tablet:w-full tablet:text-[20px] tablet:justify-center tablet:gap-12">
              <NavLink to="/entertainment" activeClassName="active">
                <button className="bg-blue-800 w-10 h-7 rounded-xl tablet:w-16 tablet:h-8">All</button>
              </NavLink>
              <NavLink to="/entertainment/djs" activeClassName="active">
                <button className="bg-blue-800 w-10 h-7 rounded-xl tablet:w-16 tablet:h-8">DJs</button>
              </NavLink>
              <NavLink to="/entertainment/mcs" activeClassName="active">
                <button className="bg-blue-800 w-10 h-7 rounded-xl tablet:w-16 tablet:h-8">MCs</button>
              </NavLink>
              <NavLink to="/entertainment/comedian" activeClassName="active">
                <button className="bg-blue-800 w-20 h-7 rounded-xl tablet:w-[110px] tablet:h-8">
                  Comedian
                </button>
              </NavLink>
              <NavLink to="/entertainment/dancers" activeClassName="active">
                <button className="bg-blue-800 w-16 h-7 rounded-xl tablet:h-8 tablet:w-24">
                  Dancers
                </button>
              </NavLink>
              <NavLink to="/entertainment/musics" activeClassName="active">
                <button className="bg-blue-800 w-12 h-7 rounded-xl tablet:h-8 tablet:w-24">
                  Music
                </button>
              </NavLink>
              <NavLink to="/entertainment/sounds" activeClassName="active">
                <button className="bg-blue-800 w-12 h-7 rounded-xl tablet:h-8 tablet:w-24">
                  Sound
                </button>
              </NavLink>
            </div>
    </div>

      <div className="mt-36 tablet:mt-44">
        {filtersound.map((sound) => (
          <div key={sound._id} className="w-[50%] tablet:w-[25%]">
            <Link to={`/entertainment/sounds/${sound._id}`}>
              <img
              src={sound.picture}
              alt=""
              className="h-40 w-[100%] rounded-2xl tablet:w-[100%] tablet:h-52"
            />
            </Link>
            
            <Link to={`/entertainment/sounds/${sound._id}`}>
              <button className="font-semibold text-[15px] text-slate-800 tablet:text-[20px]">
              {sound.name}
            </button>
            </Link>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sounds;
