"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [isRegisterVisible, setRegisterVisible] = useState(false);

  const toggleRegister = () => {
    setRegisterVisible(!isRegisterVisible);
  };

  return (
    <section className="h-screen flex flex-row bg-white">
      <div className="left w-1/2 h-full flex justify-center items-center">
        <img
          src="/logo.png"
          alt="Image Logo"
          className="w-4/5 object-contain ml-20"
        />
      </div>
      <div className="right w-1/2 h-full flex ml-10 items-center">
        <div className="form-container h-3/4 w-4/5 bg-slate-200 rounded-xl shadow-lg shadow-cyan-500/50 flex flex-col items-center">
          <div className="forms space-y-10 w-4/5 mt-24">
            <Input
              className="h-16 text-lg"
              type="text"
              placeholder="Username"
            />
            <Input
              className="h-16 text-lg"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="btn-container mt-12 w-full flex flex-col items-center space-y-10">
            <Button className="h-16 w-4/5 text-white text-2xl font-bold bg-gradient-to-r from-blue-500 to-red-500">
              Login
            </Button>
            <Button
              onClick={toggleRegister}
              className="h-16 w-4/5 text-blue-500 text-2xl font-bold bg-white border border-blue-500 rounded-lg"
            >
              Create Account
            </Button>
          </div>
        </div>
      </div>

      {isRegisterVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-10 rounded-xl shadow-lg w-1/3">
            <h2 className="text-3xl font-bold mb-8">Register</h2>
            <div className="space-y-6">
              <Input
                className="h-12 text-lg"
                type="text"
                placeholder="Firstname"
              />
              <Input
                className="h-12 text-lg"
                type="text"
                placeholder="Lastname"
              />
              <Input
                className="h-12 text-lg"
                type="email"
                placeholder="Email"
              />
              <Input
                className="h-12 text-lg"
                type="text"
                placeholder="Username"
              />
              <Input
                className="h-12 text-lg"
                type="password"
                placeholder="Password"
              />
              <Input
                className="h-12 text-lg"
                type="password"
                placeholder="Re-type Password"
              />
              <Input
                className="h-12 text-lg"
                type="text"
                placeholder="Key"
              />
            </div>
            <Button className="mt-8 h-12 w-full text-white text-xl font-bold bg-gradient-to-r from-blue-500 to-red-500">
              Create Account
            </Button>
            <Button
              onClick={toggleRegister}
              className="mt-4 h-12 w-full text-blue-500 text-xl font-bold bg-white border border-blue-500 rounded-lg"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
