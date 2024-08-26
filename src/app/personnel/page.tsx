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
  FaSearch,
  FaPlus,
  FaEllipsisV,
} from "react-icons/fa";

// ButtonGroup Component
const ButtonGroup = ({ activeButton, onClick }) => {
  return (
    <div className="button-type-employee-container flex flex-row space-x-10 m-12">
      <button
        className={`px-4 py-2 border-2 rounded transition-colors duration-300 ease-in-out ${
          activeButton === "drivers"
            ? "border-blue-500 text-blue-500"
            : "border-transparent text-gray-700"
        }`}
        onClick={() => onClick("drivers")}
      >
        Drivers
      </button>
      <button
        className={`px-4 py-2 border-2 rounded transition-colors duration-300 ease-in-out ${
          activeButton === "conductors"
            ? "border-blue-500 text-blue-500"
            : "border-transparent text-gray-700"
        }`}
        onClick={() => onClick("conductors")}
      >
        Conductors
      </button>
    </div>
  );
};

// RecordBox Component
const RecordBox = ({ driverId, driverName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="record-box-container w-auto h-18 bg-white border-gray-200 rounded-lg border-2 flex items-center p-4 relative">
      <div className="logo flex-shrink-0">
        <FaUser size={42} className="rounded-full border border-gray-400 p-2" />
      </div>
      <div className="title flex flex-1 space-x-96 ml-8">
        <h1 className="type-notif black font-normal">{driverName}</h1>
        <h1 className="type-notif text-gray-500 font-normal">
          ID : <span className="id-number">{driverId}</span>
        </h1>
        <h1 className="type-notif text-red-400 font-normal">Assigned</h1>
      </div>
      <div className="menu flex-shrink-0 relative">
        <FaEllipsisV
          size={35}
          className="p-2 cursor-pointer"
          onClick={toggleMenu}
        />
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-48 z-50"
          >
            <button className="block px-4 py-2 text-black hover:bg-gray-100 w-full text-left">
              Edit
            </button>
            <button className="block px-4 py-2 text-black hover:bg-gray-100 w-full text-left">
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Records = ({ type }) => {
  const driverRecords = [
    { id: "001", name: "Driver 1" },
    { id: "002", name: "Driver 2" },
    { id: "003", name: "Driver 3" },
    { id: "004", name: "Driver 4" },
    { id: "005", name: "Driver 5" },
  ];

  const conductorRecords = [
    { id: "0005", name: "Conductor 1" },
    { id: "0006", name: "Conductor 2" },
    { id: "0007", name: "Conductor 3" },
    { id: "0008", name: "Conductor 4" },
    { id: "0009", name: "Conductor 5" },
  ];

  const records = type === "drivers" ? driverRecords : conductorRecords;

  return (
    <div className="record-box w-5/6 h-96 space-y-2">
      {records.map((record) => (
        <RecordBox
          key={record.id}
          driverId={record.id}
          driverName={record.name}
        />
      ))}
    </div>
  );
};
// Pagination Component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const createPageButtons = () => {
    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(
        <button
          key={i}
          className={`px-3 py-1 border-2 rounded transition-colors duration-300 ${
            i === currentPage
              ? "bg-blue-500 text-white border-blue-500"
              : "border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pageButtons;
  };

  return (
    <div className="pagination flex items-center justify-center space-x-2 mt-20">
      <button
        className={`px-3 py-1 border-2 rounded transition-colors duration-300 ${
          currentPage === 1
            ? "border-gray-300 text-gray-400 cursor-not-allowed"
            : "border-gray-300 text-gray-700 hover:bg-gray-100"
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {createPageButtons()}
      <button
        className={`px-3 py-1 border-2 rounded transition-colors duration-300 ${
          currentPage === totalPages
            ? "border-gray-300 text-gray-400 cursor-not-allowed"
            : "border-gray-300 text-gray-700 hover:bg-gray-100"
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

const DashboardHeader = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [activeButton, setActiveButton] = useState("drivers");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(4); // Set the total number of pages as needed
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <section className="h-screen flex flex-row bg-white">
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
            <li className="menu-item flex flex-row items-center group hover:text-violet-700 transition-colors duration-2000">
              <FaChartBar size={25} className="mr-3" />
              <a href="#">Dashboard</a>
            </li>
            <li className="menu-item flex flex-row items-center group text-violet-700">
              <FaUser size={25} className="mr-3" />
              <a href="#">Bus Personnel Management</a>
            </li>
            <li className="menu-item flex flex-row items-center group hover:text-violet-700 transition-colors duration-2000">
              <FaBus size={25} className="mr-3" />
              <a href="#">Bus Profiles</a>
            </li>
            <li className="menu-item flex flex-row items-center group hover:text-violet-700 transition-colors duration-2000">
              <FaTruck size={25} className="mr-3" />
              <a href="#">Dispatch Management</a>
            </li>
            <li className="menu-item flex flex-row items-center group hover:text-violet-700 transition-colors duration-2000">
              <FaGasPump size={25} className="mr-3" />
              <a href="#">Fuel Monitoring</a>
            </li>
            <li className="menu-item flex flex-row items-center group hover:text-violet-700 transition-colors duration-2000">
              <FaCommentDots size={25} className="mr-3" />
              <a href="#">Feedback</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="right w-10/12 bg-slate-200 overflow-y-hidden">
        <div className="header flex flex-row justify-between mt-10">
          <div className="title ml-10 text-violet-700">
            <h1 className="font-semibold text-4xl">Bus Personnel Management</h1>
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
          <ButtonGroup
            activeButton={activeButton}
            onClick={handleButtonClick}
          />
          <div className="options flex items-center space-x-10 p-4 w-9/12 m-5 ml-10">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Find driver"
              className="flex-1 px-4 py-2 border border-gray-500 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Search Button */}
            <button className="flex items-center px-4 py-2 border-2 border-blue-500 rounded-md text-blue-500 transition-colors duration-300 ease-in-out hover:bg-blue-50">
              <FaSearch size={22} className="mr-2" />
              Search
            </button>

            {/* Add Now Button */}
            <button className="flex items-center px-4 py-2 border-2 border-blue-500 rounded-md text-blue-500 transition-colors duration-300 ease-in-out hover:bg-blue-50">
              <FaPlus size={22} className="mr-2" />
              Add New
            </button>
          </div>
          <div className="records">
            <div className="output flex mt-4 items-center ml-14">
              <Records type={activeButton} />
            </div>
          </div>
          {/* Pagination Component */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>
    </section>
  );
};

export default DashboardHeader;
