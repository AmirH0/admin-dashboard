import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";


export default function Sidebar() {
  return (
    <div className="p-5 fixed ">
      <div className="flex flex-col">
        <div className="flex flex-col items-start">
          <p className="text-md ">Main</p>
          <div className="px-2 py-3 flex flex-col">
            <NavLink to="/" className="flex items-center gap-1 font-bold">
              <IoIosHome />
              home
            </NavLink>
            <NavLink to="/profile" className="flex items-center gap-1 font-bold">
              <CgProfile />
              profile
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-md ">List</p>
          <div className="px-2 py-3 flex flex-col">
            <NavLink to="/users" className="flex items-center gap-1 font-bold">
              <FaUsers /> users
            </NavLink>
            <NavLink to="/products" className="flex items-center gap-1 font-bold">
              <ImCart /> products
            </NavLink>
           
          </div>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-md ">Analyirics</p>
          <div className="px-2 py-3 flex flex-col">
            <NavLink to="/charts" className="flex items-center gap-1 font-bold">
              <IoStatsChartSharp /> charts
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-md ">Maintenance</p>
          <div className="px-2 py-3 flex flex-col">
            <NavLink to="/setting" className="flex items-center gap-1 font-bold">
              <IoSettingsSharp /> setting
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
