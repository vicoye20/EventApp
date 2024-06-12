import axios from "axios";
import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";


const Entertainment = () => {
  const [dj, setDj] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [dancer, setDancer] = useState([]);
  const [music, setMusic] = useState([]);
  const [sound, setSound] = useState([]);
  const [mc, setMc] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

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

    const musics = async () => {
      try {
        const res = await axios.get("http://localhost:3000/musics");
        setMusic(res.data);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    musics();

    const sounds = async () => {
      try {
        const res = await axios.get("http://localhost:3000/sounds");
        setSound(res.data);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    sounds();

    const mcs = async () => {
      try {
        const res = await axios.get("http://localhost:3000/mcs");
        setMc(res.data);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    mcs();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterdj = dj.filter((dj) =>
    dj.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filtercomedy = comedy.filter((comedy) =>
    comedy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filterdancer = dancer.filter((dancer) =>
    dancer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filtermusic = music.filter((music) =>
    music.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filtersound = sound.filter((sound) =>
    sound.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filtermc = mc.filter((mc) =>
    mc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-7 w-screen min-h-screen tablet:bg-slate-300">
      <div className="fixed top-0 left-0 w-screen bg-white p-6 tablet:bg-slate-300">
        <div className="flex flex-row items-center text-blue-800">
          <Link to="/service">
            <button>
              <FaArrowLeftLong className="text-red-600 tablet:hidden" />
            </button>
          </Link>
          <h1 className="text-center text-[20px] ml-32 font-semibold tablet:hidden">
            Entertainment
          </h1>
        </div>

        <Link to="/service">
          <button className="hidden tablet:block">
            <FaArrowLeftLong className="w-10 h-6 text-red-600" />
          </button>
        </Link>
        <h1 className="hidden tablet:block font-semibold text-center text-[25px] text-blue-800 -mt-8">
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

      <div className="grid grid-cols-2 justify-items-center mt-36 gap-2 w-full mx-auto tablet:grid-cols-3 tablet:justify-items-center tablet:gap-4 tablet:mt-44">
        {filterdj.map((dj) => (
          <div key={dj._id}>
            <Link to={`/entertainment/djs/${dj._id}`}>
              <img
                src={dj.picture}
                alt=""
                className="h-40 w-44 rounded-md tablet:w-80 tablet:h-52"
              />
            </Link>

            <Link to={`/entertainment/djs/${dj._id}`}>
              <button className="font-semibold text-[15px] text-slate-800 tablet:text-[18px]">
                {dj.name}
              </button>
            </Link>
          </div>
        ))}

        {filtercomedy.map((comedy) => (
          <div key={comedy._id}>
            <Link to={`/entertainment/comedian/${comedy._id}`}>
              <img
                src={comedy.picture}
                alt=""
                className="h-40 w-44 rounded-md tablet:w-80 tablet:h-52"
              />
            </Link>

            <Link to={`/entertainment/comedian/${comedy._id}`}>
              <button className="font-semibold text-[15px] text-slate-800 tablet:text-[18px]">
                {comedy.name}
              </button>
            </Link>
          </div>
        ))}

        {filterdancer.map((dancer) => (
          <div key={dancer._id}>
            <Link to={`/entertainment/dancers/${dancer._id}`}>
              <img
                src={dancer.picture}
                alt=""
                className="h-40 w-44 rounded-md tablet:w-80 tablet:h-52"
              />
            </Link>

            <Link to={`/entertainment/dancers/${dancer._id}`}>
              <button
                className="font-semibold text-[15px] 
            text-slate-800 tablet:text-[18px]"
              >
                {dancer.name}
              </button>
            </Link>
          </div>
        ))}

        {filtermusic.map((music) => (
          <div key={music._id}>
            <Link to={`/entertainment/musics/${music._id}`}>
              <img
                src={music.picture}
                alt=""
                className="h-40 w-44 rounded-md tablet:w-80 tablet:h-52"
              />
            </Link>

            <Link to={`/entertainment/musics/${music._id}`}>
              <button className="font-semibold text-[15px] text-slate-800 tablet:text-[18px]">
                {music.name}
              </button>
            </Link>
          </div>
        ))}

        {filtersound.map((sound) => (
          <div key={sound._id}>
            <Link to={`/entertainment/sounds/${sound._id}`}>
              <img
                src={sound.picture}
                alt=""
                className="h-40 w-44 rounded-md tablet:w-80 tablet:h-52"
              />
            </Link>

            <Link to={`/entertainment/sounds/${sound._id}`}>
              <button className="font-semibold text-[15px] text-slate-800 tablet:text-[18px]">
                {sound.name}
              </button>
            </Link>
          </div>
        ))}

        {filtermc.map((mc) => (
          <div key={mc._id}>
            <Link to={`/entertainment/mcs/${mc._id}`}>
              <img
                src={mc.picture}
                alt=""
                className="h-40 w-44 rounded-md tablet:w-80 tablet:h-52"
              />
            </Link>

            <Link to={`/entertainment/mcs/${mc._id}`}>
              <button className="font-semibold text-[15px] text-slate-800 tablet:text-[18px]">
                {mc.name}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Entertainment;
