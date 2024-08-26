"use client";
import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
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
  FaCog,
  FaUsers,
  FaAngleDoubleRight,
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

  const PhotoUpload = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
    return (
      <div className="relative w-64 h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center cursor-pointer overflow-hidden">
        <input
          type="file"
          id="photoUpload"
          accept="image/*"
          onChange={handleImageChange}
          className="absolute inset-0 opacity-0"
        />
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Profile Preview"
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <span className="text-gray-500 text-center">Add Profile Photo</span>
        )}
      </div>
    );
  };
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
            <li className="menu-item flex flex-row items-center group  text-violet-700 ">
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
          <div className="title ml-14 text-violet-700">
            <h1 className="font-semibold text-2xl">Add New Record</h1>
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
          <div className="forms-container ml-14">
            <div className="output flex flex-row space-x-2 mt-20">
              <div className="forms flex w-11/12 bg-white h-160 rounded-lg border-1 border-gray-300">
                <div className="1st-row  flex-col m-5 ml-14 w-96 space-y-4">
                  <h1>Employee ID number</h1>
                  <Input
                    className="h-10 text-lg "
                    type="text"
                    placeholder="ID number"
                  />
                  <h1>Name</h1>
                  <Input
                    className="h-10 text-lg "
                    type="text"
                    placeholder="Name"
                  />
                  <h1>Role</h1>
                  <Input
                    className="h-10 text-lg "
                    type="text"
                    placeholder="ID number"
                  />
                  <h1>Liscense Number:</h1>
                  <Input
                    className="h-10 text-lg "
                    type="text"
                    placeholder="Name"
                  />
                  <h1>Age</h1>
                  <Input
                    className="h-10 text-lg "
                    type="text"
                    placeholder="ID number"
                  />
                  <h1>Gender</h1>
                  <Input
                    className="h-10 text-lg "
                    type="text"
                    placeholder="Name"
                  />
                  <h1>Contact Number</h1>
                  <Input
                    className="h-10 text-lg "
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="2nd-row  flex-col m-5 w-96 space-y-4">
                  <h1>Person to Contact</h1>
                  <Input className="h-10 text-lg " type="text" placeholder="" />
                  <h1>Person to contact phone #</h1>
                  <Input
                    className="h-10 text-lg "
                    type="text"
                    placeholder="Name"
                  />
                  <h1>Designated Bus</h1>
                  <Input className="h-10 text-lg " type="text" placeholder="" />
                  <h1>Address </h1>
                  <textarea
                    className="h-34 text-lg text-left p-2 border-2 align-top w-96 rounded-lg "
                    placeholder="Address"
                  />
                  <h1 className="">Username</h1>
                  <Input
                    className="h-10 text-lg "
                    type="text"
                    placeholder="Username"
                  />
                  <h1 className="">Password</h1>
                  <Input
                    className="h-10 text-lg "
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="3rd-row ml-14">
                  <div className="flex flex-col items-center m-14 ">
                    <PhotoUpload />
                  </div>
                  <h1 className="mb-4">Partnered Person</h1>
                  <Input
                    className="h-10 text-lg "
                    type="text"
                    placeholder="Partner Name"
                  />
                </div>
                <div className="relative ">
                  <div className="buttons absolute bottom-0 right-0 flex flex-col space-y-5 w-24 mb-8 mr-8">
                    <button className="flex items-center justify-center px-4 py-2 border-2 border-blue-500 rounded-md text-blue-500 transition-colors duration-300 ease-in-out hover:bg-blue-50">
                      Add
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 border-2 border-red-500 rounded-md text-red-500 transition-colors duration-300 ease-in-out hover:bg-blue-50">
                      Cancel
                    </button>
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
