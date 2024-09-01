"use client";
import React, { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import Header from "@/app/components/Header";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation"; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 

const AddPage = () => {
  const router = useRouter(); 
  const [maintenanceNumber, setMaintenanceNumber] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("Bus 01");
  const [maintenanceCost, setMaintenanceCost] = useState("");
  const [maintenanceDate, setMaintenanceDate] = useState(new Date()); 
  const [maintenanceAddress, setMaintenanceAddress] = useState("");
  const [description, setDescription] = useState("");
  const [attendingMechanic, setAttendingMechanic] = useState("");

  const handleSave = () => {
    
    console.log("Maintenance #:", maintenanceNumber);
    console.log("Vehicle #:", vehicleNumber);
    console.log("Maintenance Cost:", maintenanceCost);
    console.log("Maintenance Date:", maintenanceDate);
    console.log("Maintenance Address:", maintenanceAddress);
    console.log("Description:", description);
    console.log("Attending Mechanic:", attendingMechanic); 
    router.push("/dashboard");
  };

  return (
    <section className="flex flex-row h-screen bg-white">
      <Sidebar />
      <div className="w-full flex flex-col bg-slate-200">
        <Header title="Add New Record" />
        <div className="content flex flex-col flex-1 p-10 items-center">
          <div
            className="form grid grid-cols-2 gap-6 bg-white p-12 rounded-md shadow-md w-[1000px] mr-14"
          >
            <div className="col-span-1">
              <label htmlFor="maintenanceNumber" className="block text-sm font-medium text-gray-700">Maintenance #</label>
              <Input
                id="maintenanceNumber"
                placeholder="Maintenance #"
                value={maintenanceNumber}
                onChange={(e) => setMaintenanceNumber(e.target.value)}
                className="mt-1 p-3"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="attendingMechanic" className="block text-sm font-medium text-gray-700">Attending Mechanic</label>
              <Input
                id="attendingMechanic"
                placeholder="Attending Mechanic"
                value={attendingMechanic}
                onChange={(e) => setAttendingMechanic(e.target.value)}
                className="mt-1 p-3"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                placeholder="Description"
                className="border border-gray-500 p-3 rounded-md w-full h-32 mt-1"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="vehicleNumber" className="block text-sm font-medium text-gray-700">Vehicle #</label>
              <select
                id="vehicleNumber"
                className="border border-gray-500 p-3 rounded-md w-full mt-1"
                value={vehicleNumber}
                onChange={(e) => setVehicleNumber(e.target.value)}
              >
                <option value="Bus 01">Bus 01</option>
                <option value="Bus 02">Bus 02</option>
                <option value="Bus 03">Bus 03</option>
                <option value="Bus 04">Bus 04</option>
                <option value="Bus 05">Bus 05</option>
                <option value="Bus 06">Bus 06</option>
                <option value="Bus 07">Bus 07</option>
                <option value="Bus 08">Bus 08</option>
                <option value="Bus 09">Bus 09</option>
                <option value="Bus 10">Bus 10</option>
              </select>
            </div>
            <div className="col-span-1">
              <label htmlFor="maintenanceCost" className="block text-sm font-medium text-gray-700">Maintenance Cost</label>
              <Input
                id="maintenanceCost"
                placeholder="PHP"
                value={maintenanceCost}
                onChange={(e) => setMaintenanceCost(e.target.value)}
                className="mt-1 p-3"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="maintenanceDate" className="block text-sm font-medium text-gray-700">Maintenance Date</label>
              <DatePicker
                id="maintenanceDate"
                selected={maintenanceDate}
                onChange={(date) => setMaintenanceDate(date)}
                className="border border-gray-500 p-3 rounded-md w-full mt-1"
                dateFormat="MM/dd/yyyy"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="maintenanceAddress" className="block text-sm font-medium text-gray-700">Maintenance Address</label>
              <Input
                id="maintenanceAddress"
                placeholder="Maintenance Address"
                value={maintenanceAddress}
                onChange={(e) => setMaintenanceAddress(e.target.value)}
                className="mt-1 p-3"
              />
            </div>
            <div className="col-span-2 flex justify-end space-x-4 mt-4">
              <button
                className="px-6 py-3 border border-blue-500 text-blue-500 rounded-md bg-transparent"
                onClick={handleSave}
              >
                Add
              </button>
              <button
                className="px-6 py-3 border border-red-500 text-red-500 rounded-md bg-transparent"
                onClick={() => router.push("/bus-maintenance")}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddPage;
