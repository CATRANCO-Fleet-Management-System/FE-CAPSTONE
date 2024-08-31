"use client";
import React, { useState, useRef, useEffect } from "react";
import Sidebar2 from "../components/Sidebar2";
import Header from "../components/Header";
import { FaCarCrash, FaCog } from "react-icons/fa";

const DashboardHeader = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="h-screen flex flex-row bg-white">
      <Sidebar2 />

      <section className="right w-full bg-slate-200 overflow-y-hidden">
        <Header title="" />

        <div className="content flex flex-col h-full">
          <div className="Notifications mt-10">
            <h1 className="text-violet-700 text-xl ml-32 font-normal">
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
