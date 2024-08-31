"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  FaUser,
  FaBus,
  FaChartBar,
  FaTruck,
  FaGasPump,
  FaCommentDots,
} from "react-icons/fa";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();

  // Define menu items
  const menuItems = [
    { href: "/dashboard", icon: <FaChartBar size={25} />, label: "Dashboard" },
    {
      href: "/personnel",
      icon: <FaUser size={25} />,
      label: "Bus Personnel Management",
    },
    { href: "/bus-profiles", icon: <FaBus size={25} />, label: "Bus Profiles" },
    {
      href: "/dispatch-management",
      icon: <FaTruck size={25} />,
      label: "Dispatch Management",
    },
    {
      href: "/fuel-monitoring",
      icon: <FaGasPump size={25} />,
      label: "Fuel Monitoring",
    },
    { href: "/feedback", icon: <FaCommentDots size={25} />, label: "Feedback" },
  ];

  return (
    <section className="left w-full sm:w-1/5 flex flex-col bg-gray-100">
      <div className="header">
        <Link href="/dashboard">
          <img
            src="/logo.png"
            alt="Image Logo"
            className="object-contain -mt-14 cursor-pointer"
          />
        </Link>
      </div>
      <nav className="flex flex-col space-y-4 p-4">
        <ul className="listOptions flex flex-col space-y-4 text-gray-500">
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
      </nav>
    </section>
  );
}