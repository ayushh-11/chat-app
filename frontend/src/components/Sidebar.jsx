import React from 'react';
import { FaSearch } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import UseGetUser from '../hooks/UseGetUser';
import { useMessageContext } from '../context/MessageContext';

function Sidebar() {
  const navigate = useNavigate();
  const { setAuthUser } = useAuthContext();
  const { user } = UseGetUser();
  const { setSelectedChat, selectedChat } = useMessageContext();

  const logout = () => {
    console.log("Logging out...");
    axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:5000/api/auth/logout")
      .then((response) => {
        if (response) {
          localStorage.removeItem("chat-user");
          setAuthUser(null);
          setSelectedChat(null)
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  return (
    <div className="border-r border-slate-500 p-4 flex flex-col h-full">
      {/* Search Form */}
      <form className="flex items-center">
        <input
          type="text"
          className="input input-bordered rounded-full flex-1"
          placeholder="Search"
        />
        <button type="button" className="btn btn-circle bg-sky-500 text-white ml-2">
          <FaSearch />
        </button>
      </form>

      <div className="divider my-4"></div>

      {/* User List */}
      <div className="flex-1 overflow-y-auto">
        {user.map((u) => (
          <div className="flex" key={u._id}>
            <div
              className={`flex w-full gap-2 items-center ${selectedChat?._id == u._id && "bg-sky-500"}  rounded p-2 py-1`}
              onClick={() => setSelectedChat(u)} // Correcting the onClick handler
            >
              <div className="avatar online w-12">
                <div className="w-12 rounded-full">
                  <img src={u.profilePic} alt={u.fullName} />
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <p className="font-semibold">{u.fullName}</p>
              </div>
            </div>
            <div className="divider my-4"></div>
          </div>
        ))}
      </div>

      {/* Logout Button at the Bottom */}
      <div className="mt-auto">
        <button
          className="btn btn-circle border-none hover:bg-blue-600"
          onClick={logout}
        >
          <IoExitOutline />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
