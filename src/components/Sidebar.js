import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate=useNavigate()
    const handleJewel=(e)=>{
        e.preventDefault()
      navigate("/jewelery")
    }
    const handleElectronics=(e)=>{
        e.preventDefault()
        navigate("/electronics")
    }
    const handleMen=(e)=>{
        e.preventDefault()
        navigate("/mencloth")
    }
    const handleWomen=(e)=>{
        e.preventDefault()
        navigate("/womencloth")
    }
    const handleMinRate=(e)=>{
        e.preventDefault()
        navigate("/minrate")
    }
    const handleMidRate=(e)=>{
        e.preventDefault()
        navigate("/midrate")
    }
    const handleMaxRate=(e)=>{
        e.preventDefault()
        navigate("/maxrate")
    }
    const handleMinPrice=(e)=>{
        e.preventDefault()
        navigate("/minprice")
    }
    const handleMidPrice=(e)=>{
        e.preventDefault()
        navigate("/midprice")
    }
    const handleMaxPrice=(e)=>{
        e.preventDefault()
        navigate("/maxrate")
    }

    


  return (
    <div>
      <div className="p-4   ">
        <h1 className="text-3xl font-bold">Filter</h1>
        <h1 className="pt-3 font-bold pb-3 text-xl">Type</h1>
        <div className="flex gap-2 border-1 border-sky-500 rounded-xl p-2 hover:bg-slate-300 hover:text-slate-900">
          <label className="w-[76px] h-[50px]">Men's Clothing</label>
          <button onClick={handleMen} className="bg-red-500 p-2 rounded-full hover:bg-red-300 h-2 "></button>
        </div>

        <div className="flex gap-2 border-1 border-sky-500 rounded-xl p-2 hover:bg-slate-300">
          <label className="w-[76px] h-[50px]">Jewelery</label>
          <button onClick={handleJewel} className="bg-red-500 p-2 rounded-full hover:bg-red-300 h-2 "></button>
        </div>

        <div className="flex gap-2 border-1 border-sky-500 rounded-xl p-2 hover:bg-slate-300">
          <label className="w-[76px] h-[50px]">Electronics</label>
          <button onClick={handleElectronics} className="bg-red-500 p-2 rounded-full hover:bg-red-300 h-2 "></button>
        </div>

        <div className="flex gap-2 border-1 border-sky-500 rounded-xl p-2 hover:bg-slate-300">
          <label className="w-[76px] h-[50px]">Women's Clothing</label>
          <button onClick={handleWomen} className="bg-red-500 p-2 rounded-full hover:bg-red-300 h-2 "></button>
        </div>

        

        <h1 className="pt-3 font-bold pb-3 text-xl">Price Range</h1>
        <div className="flex gap-2 border-1 border-sky-500 rounded-xl p-2 hover:bg-slate-300">
          <label className="w-[76px] h-[50px]">$ 0-100</label>
          <button onClick={handleMinPrice} className="bg-red-500 p-2 rounded-full hover:bg-red-300 h-2 "></button>
        </div>

        <div className="flex gap-2 border-1 border-sky-500 rounded-xl p-2 hover:bg-slate-300">
          <label className="w-[76px] h-[50px]">$100-$200</label>
          <button onClick={handleMidPrice} className="bg-red-500 p-2 rounded-full hover:bg-red-300 h-2 "></button>
        </div>

        <div className="flex gap-2 border-1 border-sky-500 rounded-xl p-2 hover:bg-slate-300">
          <label className="w-[76px] h-[50px]">More than $200</label>
          <button onClick={handleMaxPrice} className="bg-red-500 p-2 rounded-full hover:bg-red-300 h-2 "></button>
        </div>

        <h1 className="pt-3 font-bold pb-3 text-xl ">Rating</h1>
        <div className="flex gap-2 border-1 border-sky-500 rounded-xl p-1 hover:bg-slate-300">
          <label className="w-[76px] h-[50px]">1-2</label>
          <button onClick={handleMinRate} className="bg-red-500 p-2 rounded-full hover:bg-red-300 h-2 "></button>
        </div>

        <div className="flex gap-2 border-1 border-sky-500 rounded-xl p-1 hover:bg-slate-300">
          <label className="w-[76px] h-[50px]">2-4</label>
          <button onClick={handleMidRate} className="bg-red-500 p-2 rounded-full hover:bg-red-300 h-2 "></button>
        </div>


        <div className="flex gap-2 border-1 border-sky-500 rounded-xl p-1 hover:bg-slate-300 ">
          <label className="w-[76px] h-[50px]">4-5</label>
          <button onClick={handleMaxRate} className="bg-red-500 p-2 rounded-full hover:bg-red-300 h-2 "></button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
