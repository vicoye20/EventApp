import { React, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Djs = () => {
  const [form, setForm] = useState({
    djsName: "",
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
      .post("http://localhost:3000/disc", form)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setForm({
      djsName: "",
      picture: "",
      description: "",
      amount: "",
    });
  };

  return (
    <div className="p-10 bg-teal-900 h-screen">
      <h1 className="text-center text-2xl text-white font-semibold underline decoration-4">
        DJ's A. To DataBase
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
        <Link to="/music">
          <button className="h-8 w-20 bg-blue-700 text-white font-semibold rounded-2xl">
            Music A.
          </button>
          <Link to="/djs">
          <button className="h-8 w-20 bg-blue-700 text-white font-semibold rounded-2xl">
            DJ's Admin
          </button>
        </Link>
        </Link>
      </div>

      <div className="text-center items-center justify-center mt-8">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="DJ's Name"
            onChange={handleChange}
            name="djsName"
            value={form.djsName}
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

export default Djs;