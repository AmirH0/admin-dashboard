import React, { useContext } from "react";
import { RiAdminLine } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";

export default function Navbar() {
  const { inf, auth } = useContext(AuthContext);

  return (
    <div className="fixed w-full bg-white">
      <div className=" flex justify-between items-center py-4 px-6">
        <div className="flex gap-2 items-center">
          <RiAdminLine className="iconsize" />
          Admin Panel
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <IoSearch className="iconsize" />
            <div className="relative">
              <span
                className="absolute w-3 h-3 bg-red-600 right-0 
            rounded-md text-xs flex justify-center items-center"
              >
                1
              </span>
              <IoNotifications className="iconsize" />
            </div>
          </div>

          <div className="flex items-center gap-1">
            <NavLink to="/profile" className="flex items-center justify-center gap-2">
              {auth ? (
                <>
                <div className='w-6 h-6 bg-slate-800 rounded-lg'>
                  <img src={inf.image} alt="" className='w-full' />
                </div>
                  <p>{inf.username}</p>
                </>
              ) : (
                <>
                  <FaCircleUser className="iconsize" />
                  <p>Log in</p>
                </>
              )}
            </NavLink>
          </div>
          <NavLink to="/setting">
            <IoSettingsSharp className="iconsize" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
