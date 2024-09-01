"use client";
import React, { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import Header from "@/app/components/Header";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation"; // Import useRouter

const AddPage = () => {
  const router = useRouter(); // Initialize useRouter
  const [busId, setBusId] = useState("");
  const [description, setDescription] = useState("");
  const [maintenanceStatus, setMaintenanceStatus] = useState("On Maintenance");

  const handleSave = () => {
    // Implement saving logic here (e.g., API call)
    console.log("Bus ID:", busId);
    console.log("Description:", description);
    console.log("Maintenance Status:", maintenanceStatus);
    
    // Navigate back to the dashboard after saving
    router.push("/dashboard");
  };

  return (
    <section className="flex flex-row h-screen bg-white">
      <Sidebar />
      <div className="w-full flex flex-col bg-slate-200">
        <Header title="Add New Bus Record" />
        <div className="content flex flex-col flex-1 p-10">
          <div className="form flex flex-col space-y-4">
            <Input
              placeholder="Bus ID"
              value={busId}
              onChange={(e) => setBusId(e.target.value)}
            />
            <Input
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <select
              className="border border-gray-500 p-2 rounded-md"
              value={maintenanceStatus}
              onChange={(e) => setMaintenanceStatus(e.target.value)}
            >
              <option value="On Maintenance">On Maintenance</option>
              <option value="Off Maintenance">Off Maintenance</option>
            </select>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddPage;
