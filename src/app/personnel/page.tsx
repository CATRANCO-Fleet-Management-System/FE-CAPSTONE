"use client";
import React, { useState, useRef, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Confirmpopup from "../components/Confirmpopup";
import { FaUser, FaSearch, FaPlus, FaEllipsisV } from "react-icons/fa";

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
          activeButton === "Passenger Assistant Officer"
            ? "border-blue-500 text-blue-500"
            : "border-transparent text-gray-700"
        }`}
        onClick={() => onClick("Passenger Assistant Officer")}
      >
        Passenger Assistant Officer
      </button>
    </div>
  );
};

// RecordBox Component
const RecordBox = ({ driverId, driverName, onDelete }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
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
            <button
              className="block px-4 py-2 text-black hover:bg-gray-100 w-full text-left"
              onClick={onDelete} // Trigger the delete action
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Records Component with search functionality
const Records = ({ type, searchTerm, onDelete }) => {
  const driverRecords = [
    { id: "001", name: "Driver 1" },
    { id: "002", name: "Driver 2" },
    { id: "003", name: "Driver 3" },
    { id: "004", name: "Driver 4" },
    { id: "005", name: "Driver 5" },
  ];

  const PAORecords = [
    { id: "0005", name: "PAO 1" },
    { id: "0006", name: "PAO 2" },
    { id: "0007", name: "PAO 3" },
    { id: "0008", name: "PAO 4" },
    { id: "0009", name: "PAO 5" },
  ];

  const records = type === "drivers" ? driverRecords : PAORecords;

  // Filter records based on search term
  const filteredRecords = records.filter((record) =>
    record.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="record-box w-5/6 h-96 space-y-2">
      {filteredRecords.map((record) => (
        <RecordBox
          key={record.id}
          driverId={record.id}
          driverName={record.name}
          onDelete={() => onDelete(record.id)} // Pass delete handler
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


const personnel = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [activeButton, setActiveButton] = useState("drivers");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(4); // Set the total number of pages as needed
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [deleteRecordId, setDeleteRecordId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleButtonClick = (buttonId: string) => {
    setActiveButton(buttonId);
  };

  const handleDelete = (recordId: string) => {
    setDeleteRecordId(recordId);
    setIsDeletePopupOpen(true);
  };

  const confirmDelete = () => {
    if (deleteRecordId) {
      console.log(`Confirmed delete for record ID: ${deleteRecordId}`);
      setDeleteRecordId(null);
      setIsDeletePopupOpen(false);
    }
  };

  const cancelDelete = () => {
    setDeleteRecordId(null);
    setIsDeletePopupOpen(false);
  };

  // Generate URL based on activeButton
  const addNewUrl =
    activeButton === "drivers" ? "/personnel/driver" : "/personnel/conductor";

  return (
    <section className="flex flex-row h-screen bg-white">
      <Sidebar />
      <div className="w-full flex flex-col bg-slate-200">
        <Header title="Bus Personnel Management" />
        <div className="content flex flex-col flex-1">
          <ButtonGroup
            activeButton={activeButton}
            onClick={handleButtonClick}
          />
          <div className="options flex items-center space-x-10 p-4 w-9/12 m-5 ml-10">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Find driver"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-500 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Search Button */}
            <button className="flex items-center px-4 py-2 border-2 border-blue-500 rounded-md text-blue-500 transition-colors duration-300 ease-in-out hover:bg-blue-50">
              <FaSearch size={22} className="mr-2" />
              Search
            </button>

            {/* Add Now Button */}
            <a
              href={addNewUrl}
              className="flex items-center px-4 py-2 border-2 border-blue-500 rounded-md text-blue-500 transition-colors duration-300 ease-in-out hover:bg-blue-50"
            >
              <FaPlus size={22} className="mr-2" />
              Add New
            </a>
          </div>
          <div className="records flex flex-col h-full">
            <div className="output flex mt-4 items-center ml-14">
              <Records
                type={activeButton}
                searchTerm={searchTerm}
                onDelete={handleDelete}
              />
            </div>
            {/* Pagination Component */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
      <Confirmpopup
        isOpen={isDeletePopupOpen}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
      />
    </section>
  );
};

export default personnel;
