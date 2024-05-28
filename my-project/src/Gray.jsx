import axios from "axios";
import { React, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Gray = () => {
  const [form, setForm] = useState({
    eventName: "",
    location: "",
    picture: "",
    time: "",
    amount: "",
    date: "",
    descriptionForRegular: "",
    descriptionForVip: "",
    descriptionForTableForFive: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/event", form)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setForm({
      eventName: "",
      location: "",
      picture: "",
      time: "",
      amount: "",
      date: "",
      descriptionForRegular: "",
      descriptionForVip: "",
      descriptionForTableForFive: "",
    });
  };

  return (
    <div className="p-10 bg-green-950">
      <h1 className="text-center text-2xl text-white font-semibold underline decoration-4">
        Admin.1 Posting To DataBase
      </h1>

      <div className="w-full flex flex-row items-center justify-evenly mt-8">
        <Link to="/gray">
          <button className="h-8 w-20 bg-blue-700 text-white font-semibold rounded-2xl">
            Admin 1
          </button>
        </Link>
        <Link to="/grayTwo">
          <button className="h-8 w-20 bg-blue-700 text-white font-semibold rounded-2xl">
            Admin 2
          </button>
        </Link>
        <Link to="/grayThree">
          <button className="h-8 w-20 bg-blue-700 text-white font-semibold rounded-2xl">
            Admin 3
          </button>
        </Link>
       
      </div>

      <div className="text-center items-center justify-center mt-4">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Event Name"
            name="eventName"
            value={form.eventName}
            onChange={handleChange}
            className="border-2 border-slate-400 rounded-2xl pl-10 p-2 w-full placeholder:text-lg placeholder:text-black focus:outline-none"
          />

          <div className="relative flex items-center">
            <FaLocationDot className="absolute left-4 text-red-600" />
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="border-2 border-slate-400 rounded-2xl pl-10 p-2 w-full placeholder:text-lg placeholder:text-black focus:outline-none"
            />
          </div>

          <input
            type="text"
            placeholder="Picture"
            name="picture"
            value={form.picture}
            onChange={handleChange}
            className="border-2 border-slate-400 rounded-2xl pl-10 p-2 w-full placeholder:text-lg placeholder:text-black focus:outline-none"
          />

          <input
            type="text"
            placeholder="Time 00:00"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="border-2 border-slate-400 rounded-2xl pl-10 p-2 w-full placeholder:text-lg placeholder:text-black focus:outline-none"
          />

          <input
            type="text"
            placeholder="Amount $$$"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            className="border-2 border-slate-400 rounded-2xl pl-10 p-2 w-full placeholder:text-lg placeholder:text-black focus:outline-none"
          />

          <input
            type="text"
            placeholder="Date -- : -- : --"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="border-2 border-slate-400 rounded-2xl pl-10 p-2 w-full placeholder:text-lg placeholder:text-black focus:outline-none"
          />

          <input
            type="text"
            placeholder="Description For Regular"
            name="descriptionForRegular"
            value={form.descriptionForRegular}
            onChange={handleChange}
            className="border-2 border-slate-400 rounded-2xl pl-10 p-2 w-full placeholder:text-lg placeholder:text-black focus:outline-none"
          />

          <input
            type="text"
            placeholder="Description For VIP"
            name="descriptionForVip"
            value={form.descriptionForVip}
            onChange={handleChange}
            className="border-2 border-slate-400 rounded-2xl pl-10 p-2 w-full placeholder:text-lg placeholder:text-black focus:outline-none"
          />

          <input
            type="text"
            placeholder="Description For Table For Five"
            name="descriptionForTableForFive"
            value={form.descriptionForTableForFive}
            onChange={handleChange}
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

export default Gray;
