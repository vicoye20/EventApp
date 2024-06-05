import axios from "axios";
import { React, useState, useEffect } from "react";
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
        <div className="flex flex-row items-center text-slate-700">
          <Link to="/service">
            <button>
              <FaArrowLeftLong className="tablet:hidden" />
            </button>
          </Link>
          <h1 className="text-center text-[20px] ml-32 font-semibold tablet:hidden">
            Entertainment
          </h1>
        </div>

        <Link to="/service">
          <button className="hidden tablet:block">
            <FaArrowLeftLong className="w-10 h-6" />
          </button>
        </Link>
        <h1 className="hidden tablet:block text-center text-[25px] -mt-8">
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

      <div className="grid grid-cols-2 justify-items-center gap-2 mt-36 w-full mx-auto tablet:grid-cols-3 tablet:mt-44 tablet:justify-items-center tablet:gap-4">
        {filterdj.map((dj) => (
          <div key={dj._id}>
            <img src={dj.picture} alt="" className="h-40 w-44 rounded-xl tablet:w-80 tablet:h-52" />
            <button className="font-semibold text-[15px] text-slate-800 tablet:text-[18px]">
              {dj.name}
            </button>
          </div>
        ))}

        {filtercomedy.map((comedy) => (
          <div key={comedy._id}>
            <img src={comedy.picture} alt="" className="h-40 w-44 rounded-xl tablet:w-80 tablet:h-52"/>
            <button className="font-semibold text-[15px] text-slate-800 tablet:text-[18px]">
              {comedy.name}
            </button>
          </div>
        ))}

        {filterdancer.map((dancer) => (
          <div key={dancer._id}>
            <img src={dancer.picture} alt="" className="h-40 w-44 rounded-xl tablet:w-80 tablet:h-52" />
            <button
              className="font-semibold text-[15px] 
            text-slate-800 tablet:text-[18px]"
            >
              {dancer.name}
            </button>
          </div>
        ))}

        {filtermusic.map((music) => (
          <div key={music._id}>
            <img src={music.picture} alt="" className="h-40 w-44 rounded-xl tablet:w-80 tablet:h-52" />
            <button className="font-semibold text-[15px] text-slate-800 tablet:text-[18px]">
              {music.name}
            </button>
          </div>
        ))}

        {filtersound.map((sound) => (
          <div key={sound._id}>
            <img src={sound.picture} alt="" className="h-40 w-44 rounded-xl tablet:w-80 tablet:h-52" />
            <button className="font-semibold text-[15px] text-slate-800 tablet:text-[18px]">
              {sound.name}
            </button>
          </div>
        ))}

        {filtermc.map((mc) => (
          <div key={mc._id}>
            <img src={mc.picture} alt="" className="h-40 w-44 rounded-xl tablet:w-80 tablet:h-52" />
            <button className="font-semibold text-[15px] text-slate-800 tablet:text-[18px]">
              {mc.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Entertainment;
