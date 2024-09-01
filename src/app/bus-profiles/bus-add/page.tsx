"use client";
import Sidebar from "@/app/components/Sidebar";
import Header from "@/app/components/Header";
import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BusAdd = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();
  const [TPLValidity, setTPLValidity] = useState(new Date());
  const [CIValidity, setCIValidity] = useState(new Date());
  const [DatePurchased, setDatePurchased] = useState(new Date());

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

  // Generate bus numbers
  const busOptions = Array.from(
    { length: 11 },
    (_, i) => `BUS ${String(i + 1).padStart(3, "0")}`
  );

  // Function to handle the cancel button click
  const handleCancelClick = () => {
    router.push("/personnel");
  };

  return (
    <section className="h-screen flex flex-row bg-white">
      <Sidebar />

      <section className="w-full bg-slate-200">
        <Header title="Add Bus Record" />

        <section className="right w-full overflow-y-hidden">
          <div className="forms-container ml-14">
            <div className="output flex flex-row space-x-2 mt-20">
              <div className="forms flex w-11/12 bg-white h-140 rounded-lg border-1 border-gray-300">
                <div className="1st-row flex-col m-5 ml-14 w-96 space-y-4 mt-10">
                  <h1>Bus Number</h1>
                  <Input
                    className="h-10 text-lg"
                    type="text"
                    placeholder="Bus Number"
                  />
                  <h1>Official Receipt of Registration</h1>
                  <Input
                    className="h-10 text-lg"
                    type="text"
                    placeholder="OR #"
                  />
                  <h1>Certificate of Registration</h1>
                  <Input
                    className="h-10 text-lg"
                    type="text"
                    placeholder="CR #"
                  />
                  <h1>Plate Number</h1>
                  <Input className="h-10 text-lg" type="text" placeholder="#" />
                  <h1>Engine Number</h1>
                  <Input className="h-10 text-lg" type="text" placeholder="#" />
                  <h1>Chasis Number</h1>
                  <Input className="h-10 text-lg" type="text" placeholder="#" />
                </div>
                <div className="2nd-row flex-col m-5 w-96 space-y-4 mt-10">
                  <h1>3rd Party Liability Insurance</h1>
                  <Input className="h-10 text-lg" type="text" placeholder="#" />
                  <h1>3rd Party Liability Insurance Policy No.</h1>
                  <Input className="h-10 text-lg" type="text" placeholder="" />
                  <h1>3rd Party Liability Insurance Validity</h1>
                  <DatePicker
                    id="TPLValidity"
                    selected={TPLValidity}
                    onChange={(date) => setTPLValidity(date)} // Handle date change
                    className="border border-gray-500 p-3 rounded-md w-full mt-1"
                    dateFormat="MM/dd/yyyy"
                  />
                  <h1>Comprehensive Insurance</h1>
                  <Input className="h-10 text-lg" type="text" placeholder="" />
                  <h1>Comprehensive Insurance Validity.</h1>
                  <DatePicker
                    id="CIValidity"
                    selected={CIValidity}
                    onChange={(date) => setCIValidity(date)} // Handle date change
                    className="border border-gray-500 p-3 rounded-md w-full mt-1"
                    dateFormat="MM/dd/yyyy"
                  />
                </div>
                <div className="3rd-row ml-14 mt-10">
                  <h1>Date Purchased</h1>
                  <DatePicker
                    id="DatePurchased"
                    selected={DatePurchased}
                    onChange={(date) => setDatePurchased(date)} // Handle date change
                    className="border border-gray-500 p-3 rounded-md w-full mt-1"
                    dateFormat="MM/dd/yyyy"
                  />
                  <h1 className="mb-4 mt-4">Supplier</h1>
                  <Input
                    className="h-10 text-lg"
                    type="text"
                    placeholder="Partner Name"
                  />
                </div>
                <div className="relative">
                  <div className="buttons absolute bottom-0 right-0 flex flex-col space-y-5 w-24 mb-8 mr-8">
                    <button className="flex items-center justify-center px-4 py-2 border-2 border-blue-500 rounded-md text-blue-500 transition-colors duration-300 ease-in-out hover:bg-blue-50">
                      Add
                    </button>
                    <button
                      onClick={handleCancelClick}
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

export default BusAdd;
