"use client";
import React, { useState, useRef, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Confirmpopup from "../components/Confirmpopup";
import { FaBus, FaSearch, FaPlus, FaEllipsisV } from "react-icons/fa";
import { useRouter } from "next/navigation";

// RecordBox Component
const RecordBox = ({ busId, maintenanceStatus, description, onDelete }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false); // State to manage description visibility
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDescription = () =>
    setIsDescriptionVisible(!isDescriptionVisible); // Toggle description

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
    <div
      className="record-box-container w-auto h-auto bg-white border-gray-200 rounded-lg border-2 flex flex-col items-start p-4 relative cursor-pointer"
      onClick={toggleDescription}
    >
      <div className="flex items-center w-full">
        <div className="logo flex-shrink-0">
          <FaBus
            size={42}
            className="rounded-full border border-gray-400 p-2"
          />
        </div>
        <div className="title flex flex-1 space-x-96 ml-8">
          <h1 className="type-notif black font-normal">{busId}</h1>
          <h1 className="type-notif text-gray-500 font-normal">
            Maintenance #: {busId.split(" ")[1]}
          </h1>
          <h1
            className={`${
              maintenanceStatus === "On Maintenance"
                ? "text-green-500"
                : "text-red-400"
            }`}
          >
            {maintenanceStatus}
          </h1>
        </div>
        <div className="menu flex-shrink-0 relative">
          <FaEllipsisV
            size={35}
            className="p-2 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu();
            }}
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
                onClick={onDelete}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
      {isDescriptionVisible && (
        <div className="description mt-4 text-gray-700">
          <p>
            <strong>Description:</strong> {description}
          </p>
        </div>
      )}
    </div>
  );
};

// Records Component with search functionality
const Records = ({ busRecords, onDelete }) => {
  return (
    <div className="record-box w-5/6 h-96 space-y-2">
      {busRecords.map((record) => (
        <RecordBox
          key={record.id}
          busId={record.id}
          maintenanceStatus={record.status}
          description={record.description} // Pass description to the RecordBox
          onDelete={() => onDelete(record.id)}
        />
      ))}
    </div>
  );
};

// Pagination Component with only 4 visible pages
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [visiblePages, setVisiblePages] = useState([1, 2, 3, 4]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);

      // Update the visible page range dynamically
      if (page > visiblePages[visiblePages.length - 1]) {
        setVisiblePages(visiblePages.map((p) => p + 4));
      } else if (page < visiblePages[0]) {
        setVisiblePages(visiblePages.map((p) => p - 4));
      }
    }
  };

  const createPageButtons = () => {
    const pageButtons = visiblePages
      .filter((p) => p <= totalPages)
      .map((p) => (
        <button
          key={p}
          className={`px-3 py-1 border-2 rounded transition-colors duration-300 ${
            p === currentPage
              ? "bg-blue-500 text-white border-blue-500"
              : "border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => handlePageChange(p)}
        >
          {p}
        </button>
      ));

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

// Main DashboardHeader Component
const DashboardHeader = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(10);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [deleteRecordId, setDeleteRecordId] = useState<string | null>(null);
  const router = useRouter(); // Initialize useRouter

  const busRecordsData = [
    {
      id: "Bus 1",
      status: "On Maintenance",
      description: "Overhaul all parts and systems",
    },
    {
      id: "Bus 2",
      status: "Off Maintenance",
      description: "Routine inspection completed",
    },
    {
      id: "Bus 3",
      status: "On Maintenance",
      description: "Engine and brake system repair",
    },
    {
      id: "Bus 4",
      status: "Off Maintenance",
      description: "Electrical system upgrade",
    },
  ];

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

  // Filtered bus records based on search term
  const filteredBusRecords = busRecordsData.filter((record) =>
    record.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle the "Add New" button click
  const handleAddNewClick = () => {
    router.push("bus-maintenance/maintenance-add"); // Navigate to the add-page.tsx
  };

  return (
    <section className="flex flex-row h-screen bg-white">
      <Sidebar />
      <div className="w-full flex flex-col bg-slate-200">
        <Header title="Bus Maintenance Management" />
        <div className="content flex flex-col flex-1">
          <div className="options flex items-center space-x-10 p-4 w-9/12 m-5 ml-10">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Find bus"
              className="flex-1 px-4 py-2 border border-gray-500 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Handle search input
            />

            {/* Search Button */}
            <button className="flex items-center px-4 py-2 border-2 border-blue-500 rounded-md text-blue-500 transition-colors duration-300 ease-in-out hover:bg-blue-50">
              <FaSearch size={22} className="mr-2" />
              Search
            </button>

            {/* Add New Button */}
            <button
              className="flex items-center px-4 py-2 border-2 border-blue-500 rounded-md text-blue-500 transition-colors duration-300 ease-in-out hover:bg-blue-50"
              onClick={handleAddNewClick} // Navigate to the add page
            >
              <FaPlus size={22} className="mr-2" />
              Add New
            </button>
          </div>
          <div className="records flex flex-col h-full">
            <div className="output flex mt-4 items-center ml-14">
              <Records
                busRecords={filteredBusRecords}
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

export default DashboardHeader;
