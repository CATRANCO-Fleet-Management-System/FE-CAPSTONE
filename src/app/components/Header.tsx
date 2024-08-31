"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaUser, FaEnvelope, FaBell, FaCaretDown } from "react-icons/fa";
import Link from "next/link"; // Import Link from next/link

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Close dropdown if clicking outside of it
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
    <div className="header flex flex-row justify-between mt-10">
      <div className="title ml-10 text-violet-700">
        <h1 className="font-semibold text-4xl">{title}</h1>
      </div>
      <div className="icon-container flex flex-row mr-14">
        <div className="icons flex flex-row border-r-2 border-gray-400 mr-4 text-violet-700">
          <Link href="/messages">
            <FaEnvelope size={25} className="mr-5 mt-2 cursor-pointer" />
          </Link>
          <Link href="/notification">
            <FaBell size={25} className="mr-5 mt-2 cursor-pointer" />
          </Link>
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
              className="absolute right-0 mr-2 mt-44 w-32 text-base bg-white border border-gray-300 rounded shadow-lg"
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
  );
};

export default Header;
