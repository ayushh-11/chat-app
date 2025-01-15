import React from 'react';
import { FaSearch } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";

function Sidebar() {
  return (
    <div className="className='border-r border-slate-500 p-4 flex flex-col">
      <form className="flex items-center">
        <input type="text" className="input input-bordered rounded-full flex-1" placeholder="Search" />
        <button className="btn btn-circle bg-sky-500 text-white ml-2">
          <FaSearch />
        </button>
      </form>
      <div className="divider my-4"></div>
      <div>
        <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1">
          <div className="avatar online w-12">
            <div className="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <p className="font-semibold">Antonella</p>
          </div>
        </div>
        <div className="divider my-4"></div>
      </div>
      <button className="btn btn-circle border-none hover:bg-blue-600 mt-auto">
        <IoExitOutline />
      </button>
    </div>
  );
}

export default Sidebar;
