// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import {
//   FaUser,
//   FaBus,
//   FaChartBar,
//   FaTruck,
//   FaGasPump,
//   FaCommentDots,
//   FaEnvelope,
//   FaBell,
//   FaCaretDown,
//   FaCog,
//   FaUsers,
//   FaAngleDoubleRight,
// } from "react-icons/fa";

// const DashboardHeader = () => {
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   // Close dropdown if clicking outside of it
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownVisible(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <section className="h-screen flex flex-row bg-white ">
//       <section className="left w-1/5 flex flex-col">
//         <div className="header">
//           <img
//             src="/logo.png"
//             alt="Image Logo"
//             className="object-contain ml-3 -mt-14"
//           />
//         </div>
//         <div className="Options flex justify-center -mt-7">
//           <ul className="listOptions flex flex-col mt-5 space-y-8 justify-center text-gray-500">
//             <li className="menu-item flex flex-row items-center group hover:text-violet-700 transition-colors duration-2000 ">
//               <FaChartBar size={25} className="mr-3 " />
//               <a href="#">Dashboard</a>
//             </li>
//             <li className="menu-item flex flex-row items-center group hover:text-violet-700 transition-colors duration-2000 ">
//               <FaUser size={25} className="mr-3 " />
//               <a href="#">Bus Personnel Management</a>
//             </li>
//             <li className="menu-item flex flex-row items-center group hover:text-violet-700 transition-colors duration-2000 ">
//               <FaBus size={25} className="mr-3" />
//               <a href="#">Bus Profiles</a>
//             </li>
//             <li className="menu-item flex flex-row items-center group hover:text-violet-700 transition-colors duration-2000 ">
//               <FaTruck size={25} className="mr-3" />
//               <a href="#">Dispatch Management</a>
//             </li>
//             <li className="menu-item flex flex-row items-center group hover:text-violet-700 transition-colors duration-2000 ">
//               <FaGasPump size={25} className="mr-3" />
//               <a href="#">Fuel Monitoring</a>
//             </li>
//             <li className="menu-item flex flex-row items-center group hover:text-violet-700 transition-colors duration-2000 ">
//               <FaCommentDots size={25} className="mr-3" />
//               <a href="#">Feedback</a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <section className="right w-10/12 bg-slate-200 overflow-y-hidden">
//         <div className="header flex flex-row justify-between mt-10">
//           <div className="title ml-10 text-violet-700">
//             <h1 className="font-semibold text-4xl">Dashboard</h1>
//           </div>
//           <div className="icon-container flex flex-row mr-14">
//             <div className="icons flex flex-row border-r-2 border-gray-400 mr-4 text-violet-700">
//               <FaEnvelope size={25} className="mr-5 mt-2" />
//               <FaBell size={25} className="mr-5 mt-2" />
//             </div>
//             <div className="profile ml-3 flex items-center justify-center relative">
//               <FaUser
//                 size={42}
//                 className="rounded-full border border-gray-400 p-2"
//               />
//               <FaCaretDown
//                 size={20}
//                 className="ml-2 cursor-pointer"
//                 onClick={toggleDropdown}
//               />
//               {dropdownVisible && (
//                 <div
//                   ref={dropdownRef}
//                   className="absolute right-0 mr-2 mt-36 w-32 text-base bg-white border border-gray-300 rounded shadow-lg"
//                 >
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                   >
//                     Edit Profile
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                   >
//                     Settings
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-red-500 font-semibold hover:bg-gray-100"
//                   >
//                     Logout
//                   </a>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="content flex flex-col h-full">
//           <div className="statuses flex flex-row space-x-10 m-12">
//             <div className="status-container w-1/4 bg-white h-40 rounded-lg border-2 border-violet-400  ">
//               <div className="inside-box flex flex-row  justify-center items-center space-x-5 mt-8">
//                 <div className="text text-violet-700 space-y-2">
//                   <h1 className="bus-op text-5xl font-bold">11</h1>
//                   <p className="text-lg">Buses in Operation</p>
//                 </div>
//                 <div>
//                   <FaBus
//                     size={80}
//                     className="ml-2 cursor-pointer text-violet-400"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="status-container w-1/4 bg-white h-40 rounded-lg border-2 border-violet-400">
//               <div className="inside-box flex flex-row  justify-center items-center space-x-5 mt-8">
//                 <div className="text text-violet-700 space-y-2">
//                   <h1 className="bus-op text-5xl font-bold">3</h1>
//                   <p className="text-lg">Buses in Maintenance</p>
//                 </div>
//                 <div>
//                   <FaCog
//                     size={80}
//                     className="ml-2 cursor-pointer fill-none stroke-violet-400 stroke-20"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="status-container w-1/4 bg-white h-40 rounded-lg border-2 border-violet-400 ">
//               <div className="inside-box flex flex-row  justify-center items-center space-x-5 mt-8">
//                 <div className="text text-violet-700 space-y-2">
//                   <h1 className="bus-op text-5xl font-bold">26</h1>
//                   <p className="text-lg">Current Employees</p>
//                 </div>
//                 <div>
//                   <FaUsers
//                     size={80}
//                     className="ml-2 cursor-pointer text-violet-400"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="bus-location ml-12">
//             <h1 className=" text-violet-700 text-xl">Live Bus Locations</h1>
//             <div className="output flex flex-row space-x-2 mt-8">
//               <div className="locations w-2/4 bg-white h-120 rounded-lg border-2 border-violet-400">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7892.321899533787!2d124.64926600265497!3d8.483726629425787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff2d03e021631%3A0xbb1fd9c6cf6f9de!2sCogon%20Public%20Market!5e0!3m2!1sen!2sph!4v1723521548337!5m2!1sen!2sph"
//                   className="w-full h-full border-0"
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </div>

//               <div className="arrow">
//                 <FaAngleDoubleRight
//                   size={20}
//                   className="ml-2 cursor-pointer text-violet-800"
//                 />
//               </div>
//               <div className="bus-information w-1/4 bg-white h-120 rounded-lg border-2 border-violet-400 ">
//                 <div className="infos flex flex-col ml-5">
//                   <div className="header-info flex flex-row mt-10  space-x-5">
//                     <FaBus
//                       size={80}
//                       className="ml-2 cursor-pointer text-violet-600"
//                     />
//                     <h1 className="text-red-600 text-3xl font-bold">BUS 03</h1>
//                   </div>
//                   <div className="info-text mt-10">
//                     <ul className="list-disc list-inside space-y-4 text-xl">
//                       <li>
//                         <strong>Driver:</strong> James Harden
//                       </li>
//                       <li>
//                         <strong>Conductor:</strong> Stephen Curry
//                       </li>
//                       <li>
//                         <strong>Plate number:</strong> KVJ-232-2313
//                       </li>
//                       <li>
//                         <strong>Trips:</strong> 5
//                       </li>
//                       <li>
//                         <strong>Status:</strong> In Operation
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// };

// export default DashboardHeader;