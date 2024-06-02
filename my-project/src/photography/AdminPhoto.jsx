import {React, useState} from 'react'
import axios from 'axios';

const AdminPhoto = () => {

    const [form, setForm] = useState({
        name : "",
        picture : "",
        description : "",
        amount : "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios
         .post("http://localhost:3000/photographer", form)
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
      }

  return (
    <div className="p-10 bg-teal-900 h-screen">
    <h1 className="text-center text-2xl text-white font-semibold underline decoration-4">
   Photographer Admin To Database
 </h1>

 <div className="text-center items-center justify-center mt-8">
   <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
     <input
       type="text"
       placeholder="Photographer Name"
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
  )
}

export default AdminPhoto