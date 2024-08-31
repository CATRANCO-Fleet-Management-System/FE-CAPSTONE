"use client";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import React, { useState, useRef, useEffect } from "react";
import { FaBus, FaCog, FaUsers, FaAngleDoubleRight } from "react-icons/fa";

const DashboardHeader = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

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
      <Sidebar />
      <div className="w-full bg-slate-200">
        <Header title="Dashboard" />
        <section className="right w-full  overflow-y-hidden">
          <div className="content flex flex-col h-full">
            <div className="statuses flex flex-row space-x-10 m-12">
              <div className="status-container w-1/4 bg-white h-40 rounded-lg border-2 border-violet-400  ">
                <div className="inside-box flex flex-row  justify-center items-center space-x-5 mt-8">
                  <div className="text text-violet-700 space-y-2">
                    <h1 className="bus-op text-5xl font-bold">11</h1>
                    <p className="text-lg">Buses in Operation</p>
                  </div>
                  <div>
                    <FaBus
                      size={80}
                      className="ml-2 cursor-pointer text-violet-400"
                    />
                  </div>
                </div>
              </div>
              <div className="status-container w-1/4 bg-white h-40 rounded-lg border-2 border-violet-400">
                <div className="inside-box flex flex-row  justify-center items-center space-x-5 mt-8">
                  <div className="text text-violet-700 space-y-2">
                    <h1 className="bus-op text-5xl font-bold">3</h1>
                    <p className="text-lg">Buses in Maintenance</p>
                  </div>
                  <div>
                    <FaCog
                      size={80}
                      className="ml-2 cursor-pointer fill-none stroke-violet-400 stroke-20"
                    />
                  </div>
                </div>
              </div>
              <div className="status-container w-1/4 bg-white h-40 rounded-lg border-2 border-violet-400 ">
                <div className="inside-box flex flex-row  justify-center items-center space-x-5 mt-8">
                  <div className="text text-violet-700 space-y-2">
                    <h1 className="bus-op text-5xl font-bold">26</h1>
                    <p className="text-lg">Current Employees</p>
                  </div>
                  <div>
                    <FaUsers
                      size={80}
                      className="ml-2 cursor-pointer text-violet-400"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bus-location ml-12">
              <h1 className=" text-violet-700 text-xl">Live Bus Locations</h1>
              <div className="output flex flex-row space-x-2 mt-8">
                <div className="locations w-2/4 bg-white h-120 rounded-lg border-2 border-violet-400">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7892.321899533787!2d124.64926600265497!3d8.483726629425787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff2d03e021631%3A0xbb1fd9c6cf6f9de!2sCogon%20Public%20Market!5e0!3m2!1sen!2sph!4v1723521548337!5m2!1sen!2sph"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="arrow">
                  <FaAngleDoubleRight
                    size={20}
                    className="ml-2 cursor-pointer text-violet-800"
                  />
                </div>
                <div className="bus-information w-1/4 bg-white h-120 rounded-lg border-2 border-violet-400 ">
                  <div className="infos flex flex-col ml-5">
                    <div className="header-info flex flex-row mt-10  space-x-5">
                      <FaBus
                        size={80}
                        className="ml-2 cursor-pointer text-violet-600"
                      />
                      <h1 className="text-red-600 text-3xl font-bold">
                        BUS 03
                      </h1>
                    </div>
                    <div className="info-text mt-10">
                      <ul className="list-disc list-inside space-y-4 text-xl">
                        <li>
                          <strong>Driver:</strong> James Harden
                        </li>
                        <li>
                          <strong>Conductor:</strong> Stephen Curry
                        </li>
                        <li>
                          <strong>Plate number:</strong> KVJ-232-2313
                        </li>
                        <li>
                          <strong>Trips:</strong> 5
                        </li>
                        <li>
                          <strong>Status:</strong> In Operation
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default DashboardHeader;
