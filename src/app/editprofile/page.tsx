"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  FaUser,
  FaArrowLeft,
  FaEnvelope,
  FaBell,
  FaCaretDown,
  FaPen,
} from "react-icons/fa";

const Profile: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="h-screen flex flex-row bg-white">
      {/* Sidebar on the left */}
      <section className="left w-1/5 flex flex-col bg-white">
        <div className="header flex flex-row mt-8">
          <FaArrowLeft size={20} className="fixed mt-12 ml-6" />
          <img
            src="/logo.png"
            alt="Image Logo"
            className="object-contain -mt-14 w-80 ml-10"
          />
        </div>
        <div className="Options flex -mt-7 ml-20">
          <ul className="listOptions flex flex-col space-y-8">
            {/* Edit Profile option */}
            <li className="menu-item flex flex-row items-center text-blue-600">
              <FaPen size={25} className="mr-3 text-blue-600" />
              <a href="#" className="block px-4 py-2 text-blue-600">Edit Profile</a>
            </li>
            {/* Messages option */}
            <li className="menu-item flex flex-row items-center group hover:text-blue-600 transition-colors duration-2000">
              <FaEnvelope size={25} className="mr-3 text-gray-500 group-hover:text-blue-600" />
              <a href="#" className="block px-4 py-2 text-gray-500 group-hover:text-blue-600">Messages</a>
            </li>
            {/* Notifications option */}
            <li className="menu-item flex flex-row items-center group hover:text-blue-600 transition-colors duration-2000">
              <FaBell size={25} className="mr-3 text-gray-500 group-hover:text-blue-600" />
              <a href="#" className="block px-4 py-2 text-gray-500 group-hover:text-blue-600">Notifications</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Main content area on the right */}
      <section className="right w-4/5 bg-gray-100">
        <div className="header flex flex-row mt-10 justify-end mr-8">
          <div className="icon-container flex flex-row mr-14">
            <div className="icons flex flex-row border-r-2 border-gray-400 mr-4 text-violet-700">
              <FaEnvelope size={25} className="mr-5 mt-2 text-gray-500" />
              <FaBell size={25} className="mr-5 mt-2 text-gray-500" />
            </div>
            <div className="profile ml-3 flex items-center justify-center relative">
              <FaUser size={42} className="rounded-full border border-gray-400 p-2" />
              <FaCaretDown size={20} className="ml-2 cursor-pointer" onClick={toggleDropdown} />
              {dropdownVisible && (
               <div
               ref={dropdownRef}
               style={{ marginTop: "10rem" }} 
               className="absolute right-0 w-32 text-base bg-white border border-gray-300 rounded shadow-lg"
             >
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Edit Profile</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</a>
                  <a href="#" className="block px-4 py-2 text-red-500 font-semibold hover:bg-gray-100">Logout</a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="content flex flex-col h-full p-10">
          <div className="bg-white rounded-lg shadow-lg w-full p-6">
            <div className="mb-4 flex items-center">
              <FaUser size={30} className="mr-4 text-gray-700" />
              <h2 className="text-2xl font-semibold text-gray-800">Profile</h2>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employee ID #</label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    defaultValue=""
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700">Profile Photo</label>
                  <div
                    className="mt-1 flex items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-full cursor-pointer hover:border-blue-500"
                    onClick={() => alert("Profile Photo Upload Clicked")}
                  >
                    <span className="text-sm font-medium text-gray-500">Add Profile Photo</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Username</label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    defaultValue=""
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Contact #</label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">New Password</label>
                  <input
                    type="password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Role</label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Profile;
