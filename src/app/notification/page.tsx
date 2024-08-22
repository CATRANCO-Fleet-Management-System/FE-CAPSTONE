"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  FaUser,
  FaCarCrash,
  FaArrowLeft,
  FaEnvelope,
  FaBell,
  FaCaretDown,
  FaPen,
  FaCog,
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
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="h-screen flex flex-row bg-white ">
      <section className="left w-1/5 flex flex-col">
        <div className="header flex flex-row">
          <FaArrowLeft size={20} className="fixed mt-12 ml-6" />
          <img
            src="/logo.png"
            alt="Image Logo"
            className="object-contain -mt-14 w-80 ml-10"
          />
        </div>
        <div className="Options flex -mt-7 ml-20">
          <ul className="listOptions flex flex-col  space-y-8 text-gray-500">
            <li className="menu-item flex flex-row items-center group hover:text-violet-700 transition-colors duration-2000 ">
              <FaPen size={25} className="mr-3 " />
              <a href="#">Edit Profile</a>
            </li>
            <li className="menu-item flex flex-row items-center group hover:text-violet-700 transition-colors duration-2000 ">
              <FaEnvelope size={25} className="mr-3 " />
              <a href="#">Messages</a>
            </li>
            <li className="menu-item flex flex-row items-center group text-violet-700 ">
              <FaBell size={25} className="mr-3" />
              <a href="#">Notifications</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="right w-10/12 bg-slate-200 overflow-y-hidden">
        <div className="header flex flex-row mt-10 justify-end">
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

        <div className="content flex flex-col h-full ">
          <div className="Notifications mt-10">
            <h1 className=" text-violet-700 text-xl ml-32 font-normal">
              Notifications
            </h1>
            <div className="output flex mt-8 items-center justify-center">
              <div className="locations w-5/6 bg-white h-160 rounded-lg border-2 border-gray-200">
                <div className="notifs w-auto m-4 h-24 border-gray-200 rounded-lg border-2 flex items-center">
                  <div className="logo ml-4">
                    <FaCog
                      size={60}
                      className="ml-2 fill-none stroke-black stroke-20"
                    />
                  </div>
                  <div className="title ml-4">
                    <h1 className="type-notif text-violet-700 font-semibold">
                      Bus 01 Maintenance
                    </h1>
                    <p className="description-notif text-gray-700">
                      Change of oil and brakes
                    </p>
                  </div>
                  <div className="date-notif ml-auto mr-10">
                    <div className="date-description">
                      <h1 className="title font-semibold">Date</h1>
                      <p className="date">01 / 22 / 24</p>
                    </div>
                  </div>
                </div>
                <div className="notifs w-auto m-4 h-24 border-gray-200 rounded-lg border-2 flex items-center">
                  <div className="logo ml-4">
                    <FaCarCrash
                      size={60}
                      className="ml-2 fill-none stroke-black stroke-20"
                    />
                  </div>
                  <div className="title ml-4">
                    <h1 className="type-notif text-violet-700 font-semibold">
                      Bus 06 Maintenance
                    </h1>
                    <p className="description-notif text-gray-700">
                      Accident on road
                    </p>
                  </div>
                  <div className="date-notif ml-auto mr-10">
                    <div className="date-description">
                      <h1 className="title font-semibold">Date</h1>
                      <p className="date">01 / 10 / 24</p>
                    </div>
                  </div>
                </div>
                <div className="notifs w-auto m-4 h-24 border-gray-200 rounded-lg border-2 flex items-center">
                  <div className="logo ml-4">
                    <FaCog
                      size={60}
                      className="ml-2 fill-none stroke-black stroke-20"
                    />
                  </div>
                  <div className="title ml-4">
                    <h1 className="type-notif text-violet-700 font-semibold">
                      Bus 04 Maintenance
                    </h1>
                    <p className="description-notif text-gray-700">
                      Change of brakes
                    </p>
                  </div>
                  <div className="date-notif ml-auto mr-10">
                    <div className="date-description">
                      <h1 className="title font-semibold">Due Date</h1>
                      <p className="date">01 / 05 / 24</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default DashboardHeader;
