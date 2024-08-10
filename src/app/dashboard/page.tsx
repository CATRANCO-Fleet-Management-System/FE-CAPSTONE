"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  FaUser,
  FaBus,
  FaChartBar,
  FaTruck,
  FaGasPump,
  FaCommentDots,
  FaEnvelope,
  FaBell,
  FaCaretDown,
} from "react-icons/fa";

const DashboardHeader = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Close dropdown if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="h-screen flex flex-row bg-white ">
      <section className="left w-1/5 flex flex-col">
        <div className="header">
          <img
            src="/logo.png"
            alt="Image Logo"
            className="object-contain ml-3 -mt-14"
          />
        </div>
        <div className="Options flex justify-center -mt-7">
          <ul className="listOptions flex flex-col mt-5 space-y-8 justify-center text-gray-500">
            <li className="menu-item flex flex-row items-center group hover:text-violet-700 transition-colors duration-2000 ">
              <FaChartBar size={25} className="mr-3 " />
              <a href="#">Dashboard</a>
            </li>
            <li className="menu-item flex flex-row items-center group hover:text-violet-700 transition-colors duration-2000 ">
              <FaUser size={25} className="mr-3 " />
              <a href="#">Bus Personnel Management</a>
            </li>
            <li className="menu-item flex flex-row items-center group hover:text-violet-700 transition-colors duration-2000 ">
              <FaBus size={25} className="mr-3" />
              <a href="#">Bus Profiles</a>
            </li>
            <li className="menu-item flex flex-row items-center group hover:text-violet-700 transition-colors duration-2000 ">
              <FaTruck size={25} className="mr-3" />
              <a href="#">Dispatch Management</a>
            </li>
            <li className="menu-item flex flex-row items-center group hover:text-violet-700 transition-colors duration-2000 ">
              <FaGasPump size={25} className="mr-3" />
              <a href="#">Fuel Monitoring</a>
            </li>
            <li className="menu-item flex flex-row items-center group hover:text-violet-700 transition-colors duration-2000 ">
              <FaCommentDots size={25} className="mr-3" />
              <a href="#">Feedback</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="right w-10/12 bg-slate-200 overflow-y-hidden">
        <div className="header flex flex-row justify-between mt-10">
          <div className="title ml-10 text-violet-700">
            <h1 className="font-semibold text-4xl">Dashboard</h1>
          </div>
          <div className="icon-container flex flex-row mr-14">
            <div className="icons flex flex-row border-r-2 border-gray-400 mr-4 text-violet-700">
              <FaEnvelope size={25} className="mr-5 mt-2" />
              <FaBell size={25} className="mr-5 mt-2" />
            </div>
            <div className="profile ml-3 flex items-center justify-center relative">
              <FaUser
                size={42}
                className="rounded-full border border-gray-400 p-2"
              />
              <FaCaretDown
                size={20}
                className="ml-2 cursor-pointer"
                onClick={toggleDropdown}
              />
              {dropdownVisible && (
                <div
                  ref={dropdownRef}
                  className="absolute right-0 mr-2 mt-36 w-32 text-base bg-white border border-gray-300 rounded shadow-lg"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Edit Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-red-500 font-semibold hover:bg-gray-100"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="content flex flex-col h-full">
          <div className="statuses flex flex-row space-x-10 m-12">
            <div className="status-container w-1/4 bg-white h-40 rounded-lg border-2 border-violet-400  shadow-md shadow-gray-500"></div>
            <div className="status-container w-1/4 bg-white h-40 rounded-lg shadow-md border-2 border-violet-400 shadow-gray-500"></div>
            <div className="status-container w-1/4 bg-white h-40 rounded-lg shadow-md border-2 border-violet-400 shadow-gray-500"></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default DashboardHeader;
