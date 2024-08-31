"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { FaArrowLeft, FaEnvelope, FaBell, FaPen } from "react-icons/fa";
import Link from "next/link";

export default function Sidebar2() {
  const pathname = usePathname(); // Get the current path

  const menuItems = [
    { href: "/editprofile", icon: <FaPen size={25} />, label: "Edit Profile" },
    { href: "/messages", icon: <FaEnvelope size={25} />, label: "Messages" },
    {
      href: "/notification",
      icon: <FaBell size={25} />,
      label: "Notification",
    },
  ];

  return (
    <section className="left w-full sm:w-1/5 flex flex-col bg-gray-100">
      <div className="header2 relative">
        <div className="back m-4">
          <Link href="/dashboard">
            <FaArrowLeft
              size={20}
              className="absolute top-2 left-22 cursor-pointer"
            />
          </Link>
        </div>
        <div className="img">
          <Link href="/dashboard">
            <img
              src="/logo.png"
              alt="Image Logo"
              className="object-contain -mt-16 cursor-pointer"
            />
          </Link>
        </div>
      </div>
      <div className="Options flex flex-col space-y-4 pl-6">
        <ul className="listOptions flex flex-col space-y-6 text-gray-500">
          {menuItems.map(({ href, icon, label }) => (
            <li
              key={href}
              className={`menu-item flex items-center space-x-3 p-2 rounded-md transition-colors duration-200 ${
                pathname === href ? "text-violet-700" : "hover:text-violet-700"
              }`}
            >
              {icon}
              <Link href={href} className="flex-1">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
