"use client";
import Sidebar from "@/app/components/Sidebar";
import Header from "@/app/components/Header";
import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation"; // Import useRouter

const DashboardHeader = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter(); // Initialize useRouter

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

  // Generate bus numbers
  const busOptions = Array.from(
    { length: 11 },
    (_, i) => `BUS ${String(i + 1).padStart(3, "0")}`
  );

  // Function to handle the cancel button click
  const handleCancelClick = () => {
    router.push("/personnel"); // Navigate to /personnel
  };

  return (
    <section className="h-screen flex flex-row bg-white ">
      <Sidebar />

      <section className="w-full bg-slate-200">
        <Header title="Add Conductor Record" />

        <section className="right w-full overflow-y-hidden">
          <div className="forms-container ml-14">
            <div className="output flex flex-row space-x-2 mt-20">
              <div className="forms flex w-11/12 bg-white h-160 rounded-lg border-1 border-gray-300">
                <div className="1st-row flex-col m-5 ml-14 w-96 space-y-4">
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
                    placeholder="Role"
                    value="Conductor"
                    disabled
                  />
                  <h1>License Number:</h1>
                  <Input
                    className="h-10 text-lg "
                    type="text"
                    value="No License Number"
                    disabled
                  />
                  <h1>Age</h1>
                  <Input
                    className="h-10 text-lg "
                    type="text"
                    placeholder="Age"
                  />
                  <h1>Gender</h1>
                  <select className="h-10 text-lg border-2 rounded-lg p-2">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <h1>Contact Number</h1>
                  <Input
                    className="h-10 text-lg "
                    type="text"
                    placeholder="Contact Number"
                  />
                </div>
                <div className="2nd-row flex-col m-5 w-96 space-y-4">
                  <h1>Person to Contact</h1>
                  <Input className="h-10 text-lg " type="text" placeholder="" />
                  <h1>Person to contact phone #</h1>
                  <Input
                    className="h-10 text-lg "
                    type="text"
                    placeholder="Phone Number"
                  />
                  <h1>Designated Bus</h1>
                  <select className="h-10 text-lg border-2 rounded-lg p-2">
                    {busOptions.map((bus, index) => (
                      <option key={index} value={bus}>
                        {bus}
                      </option>
                    ))}
                  </select>
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
                    placeholder="Password"
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
                    <button
                      onClick={handleCancelClick} // Add onClick handler
                      className="flex items-center justify-center px-4 py-2 border-2 border-red-500 rounded-md text-red-500 transition-colors duration-300 ease-in-out hover:bg-blue-50"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default DashboardHeader;
