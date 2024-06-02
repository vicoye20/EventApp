import { React, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminVideo = () => {
  const [form, setForm] = useState({
    name: "",
    picture: "",
    description: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/videographer", form)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setForm({
      name: "",
      picture: "",
      description: "",
      amount: "",
    });
  };

  return (
    <div className="p-10 bg-teal-900 h-screen">
      <h1 className="text-center text-2xl text-white font-semibold underline decoration-4">
        Videographer Admin To Database
      </h1>

      <div className="mt-10 flex flex-row justify-evenly items-center gap-1">

        <Link to="/videography">
          <button className="w-20 h-10 bg-white text-center font-semibold rounded-xl text-slate-800">
            Video A.
          </button>
        </Link>

        <Link to="/security">
          <button className="w-24 h-10 bg-white text-center font-semibold rounded-xl text-slate-800">
            Security A.
          </button>
        </Link>

        <Link to="/photography">
          <button className="w-32 h-10 bg-white text-center font-semibold rounded-xl text-slate-800">
            Photography A.
          </button>
        </Link>

        <Link to="/catering">
          <button className="w-28 h-10 bg-white text-center font-semibold rounded-xl text-slate-800">
            Catering A.
          </button>
        </Link>
      </div>

      <div className="text-center items-center justify-center mt-8">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Videographer Name"
            onChange={handleChange}
            name="name"
            value={form.name}
            className="border-2 border-slate-400 rounded-2xl pl-10 p-2 w-full placeholder:text-lg placeholder:text-black focus:outline-none"
          />

          <input
            type="text"
            placeholder="Picture URL"
            onChange={handleChange}
            name="picture"
            value={form.picture}
            className="border-2 border-slate-400 rounded-2xl pl-10 p-2 w-full placeholder:text-lg placeholder:text-black focus:outline-none"
          />

          <input
            type="text"
            placeholder="Description"
            onChange={handleChange}
            name="description"
            value={form.description}
            className="border-2 border-slate-400 rounded-2xl pl-10 p-2 w-full placeholder:text-lg placeholder:text-black focus:outline-none"
          />
          <input
            type="text"
            placeholder="Amount"
            onChange={handleChange}
            name="amount"
            value={form.amount}
            className="border-2 border-slate-400 rounded-2xl pl-10 p-2 w-full placeholder:text-lg placeholder:text-black focus:outline-none"
          />
          <button className="bg-blue-800 text-white font-bold h-10 rounded-2xl">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminVideo;
